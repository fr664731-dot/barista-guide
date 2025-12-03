"use client";

import { useState } from "react";
import { glossaryTerms } from "@/data/glossary";
import { BookOpen, Search, Filter, AlertCircle } from "lucide-react";

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  const categories = ["전체", "추출", "원두", "장비", "맛/향", "가공"];

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.korean.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "전체" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryColors: { [key: string]: string } = {
    추출: "bg-blue-100 text-blue-700",
    원두: "bg-amber-100 text-amber-700",
    장비: "bg-gray-100 text-gray-700",
    "맛/향": "bg-pink-100 text-pink-700",
    가공: "bg-green-100 text-green-700",
  };

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80"
            alt="커피"
            className="w-full h-64 md:h-72 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">커피 용어 사전</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">커피 용어 사전</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              바리스타 시험에 자주 나오는 필수 용어 30선
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="용어 검색 (한글/영어)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-gray-400" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-amber-700 text-white"
                      : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          총 <span className="font-bold text-amber-700">{filteredTerms.length}</span>개의 용어
        </p>

        {/* Terms Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredTerms.map((term) => (
            <div
              key={term.id}
              className="bg-white rounded-2xl shadow-md border border-amber-100 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-amber-900">{term.korean}</h3>
                  <p className="text-gray-500">{term.english}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    categoryColors[term.category]
                  }`}
                >
                  {term.category}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{term.definition}</p>

              <div className="bg-amber-50 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-800">시험 출제 포인트</p>
                  <p className="text-sm text-amber-700">{term.examTip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
