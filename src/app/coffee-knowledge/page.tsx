"use client";

import { useState } from "react";
import { BookOpen, Bean, Coffee, Droplets, History, GlassWater } from "lucide-react";
import { coffeeTerms, beanKnowledge, extractionTheory, drinkRecipes, coffeeStories } from "@/data/coffee-knowledge";

export default function CoffeeKnowledgePage() {
  const [activeTab, setActiveTab] = useState("terms");

  const tabs = [
    { id: "terms", label: "커피 용어", icon: <BookOpen className="w-4 h-4" /> },
    { id: "beans", label: "생두/원두", icon: <Bean className="w-4 h-4" /> },
    { id: "extraction", label: "추출 이론", icon: <Coffee className="w-4 h-4" /> },
    { id: "recipes", label: "음료 레시피", icon: <GlassWater className="w-4 h-4" /> },
    { id: "stories", label: "커피 이야기", icon: <History className="w-4 h-4" /> },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80" alt="커피" className="w-full h-48 md:h-64 object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">커피 지식</h1>
            <p className="text-lg opacity-90">바리스타가 알아야 할 모든 것</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 text-amber-700 hover:bg-amber-200"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6 md:p-8">
          {activeTab === "terms" && <TermsContent />}
          {activeTab === "beans" && <BeansContent />}
          {activeTab === "extraction" && <ExtractionContent />}
          {activeTab === "recipes" && <RecipesContent />}
          {activeTab === "stories" && <StoriesContent />}
        </div>
      </div>
    </div>
  );
}

function TermsContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">☕ 커피 용어 사전</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {coffeeTerms.map((t) => (
          <div key={t.term} className="bg-amber-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-amber-900">{t.term}</h3>
              <span className="text-sm text-amber-600">({t.english})</span>
            </div>
            <p className="text-gray-700">{t.def}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BeansContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">🫘 생두/원두 지식</h2>
      <div className="space-y-4">
        {beanKnowledge.map((item) => (
          <div key={item.title} className="bg-amber-50 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded-full">{item.category}</span>
              <h3 className="font-bold text-amber-900 text-lg">{item.title}</h3>
            </div>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExtractionContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">⚙️ 추출 이론</h2>
      <div className="space-y-6">
        {extractionTheory.map((section) => (
          <div key={section.title} className="bg-amber-50 rounded-xl p-5">
            <h3 className="font-bold text-amber-900 text-lg mb-4">{section.title}</h3>
            <div className="space-y-2">
              {section.items.map((item) => (
                <div key={item.name} className="flex items-center gap-3 bg-white rounded-lg p-3">
                  <span className="font-medium text-amber-800 w-24">{item.name}</span>
                  <span className="text-gray-700">{item.effect}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* 시험 숫자 */}
      <div className="bg-amber-900 text-white rounded-xl p-6 mt-6">
        <h3 className="font-bold text-lg mb-4 text-center">📝 시험에 나오는 숫자</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-2xl font-bold">9 bar</div><div className="text-sm text-amber-200">추출 압력</div></div>
          <div><div className="text-2xl font-bold">90-95°C</div><div className="text-sm text-amber-200">추출 온도</div></div>
          <div><div className="text-2xl font-bold">25-30초</div><div className="text-sm text-amber-200">추출 시간</div></div>
          <div><div className="text-2xl font-bold">60-65°C</div><div className="text-sm text-amber-200">스팀밀크</div></div>
        </div>
      </div>
    </div>
  );
}

function RecipesContent() {
  const categories = [...new Set(drinkRecipes.map(r => r.category))];
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">🥤 음료 레시피</h2>
      {categories.map((cat) => (
        <div key={cat} className="mb-8">
          <h3 className="font-bold text-amber-800 text-lg mb-4 border-b border-amber-200 pb-2">{cat}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {drinkRecipes.filter(r => r.category === cat).map((recipe) => (
              <div key={recipe.name} className="bg-amber-50 rounded-xl p-5">
                <h4 className="font-bold text-amber-900 text-lg mb-3">{recipe.name}</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>재료:</strong> {recipe.ingredients.join(", ")}</p>
                  <p><strong>비율:</strong> {recipe.ratio}</p>
                  <p className="text-amber-700 bg-white/50 px-2 py-1 rounded">💡 {recipe.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function StoriesContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">📖 커피 이야기</h2>
      <div className="space-y-4">
        {coffeeStories.map((story) => (
          <div key={story.title} className="bg-amber-50 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs bg-amber-700 text-white px-2 py-1 rounded-full">{story.year}</span>
              <h3 className="font-bold text-amber-900 text-lg">{story.title}</h3>
            </div>
            <p className="text-gray-700">{story.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
