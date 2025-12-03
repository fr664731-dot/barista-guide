"use client";

import { useState } from "react";
import { Bean, Flame, Coffee, Droplets, Settings, Package } from "lucide-react";

export default function CoffeeKnowledgePage() {
  const [activeTab, setActiveTab] = useState("processing");

  const tabs = [
    { id: "processing", label: "가공 방법", icon: <Bean className="w-4 h-4" /> },
    { id: "roasting", label: "로스팅", icon: <Flame className="w-4 h-4" /> },
    { id: "extraction", label: "추출 변수", icon: <Settings className="w-4 h-4" /> },
    { id: "espresso", label: "에스프레소", icon: <Coffee className="w-4 h-4" /> },
    { id: "milk", label: "우유 스티밍", icon: <Droplets className="w-4 h-4" /> },
    { id: "menu", label: "커피 메뉴", icon: <Coffee className="w-4 h-4" /> },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80" alt="커피 원두" className="w-full h-48 md:h-64 object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">커피 지식</h1>
            <p className="text-lg opacity-90">바리스타 시험에 나오는 핵심 이론</p>
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
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8">
          {activeTab === "processing" && <ProcessingContent />}
          {activeTab === "roasting" && <RoastingContent />}
          {activeTab === "extraction" && <ExtractionContent />}
          {activeTab === "espresso" && <EspressoContent />}
          {activeTab === "milk" && <MilkContent />}
          {activeTab === "menu" && <MenuContent />}
        </div>

        {/* 시험 필수 숫자 */}
        <div className="bg-amber-900 text-white rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center">시험에 나오는 숫자들</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">9 bar</div>
              <div className="text-sm text-amber-200">에스프레소 추출 압력</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">90-95°C</div>
              <div className="text-sm text-amber-200">추출 온도</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">25-30초</div>
              <div className="text-sm text-amber-200">추출 시간</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">60-65°C</div>
              <div className="text-sm text-amber-200">스팀밀크 온도</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessingContent() {
  const methods = [
    { name: "내추럴 (Natural)", process: "체리를 껍질째 건조 후 탈곡", taste: "농후한 단맛, 와인/과일 향, 무거운 바디", tip: "가장 오래된 방식, 발효취 특징", color: "bg-red-100 border-red-300" },
    { name: "워시드 (Washed)", process: "과육 제거 후 점액질을 물로 씻어 건조", taste: "깨끗한 산미, 가벼운 바디, 투명한 향미", tip: "가장 보편적인 고급 가공법", color: "bg-blue-100 border-blue-300" },
    { name: "허니 (Honey)", process: "과육 제거 후 점액질 일부 남긴 채 건조", taste: "산미와 단맛의 균형, 부드러운 바디", tip: "옐로우/레드/블랙으로 구분", color: "bg-yellow-100 border-yellow-300" },
    { name: "세미 워시드", process: "펄핑 후 점액질 일부 남기고 헹궈 건조", taste: "흙, 약재 향, 묵직함", tip: "인도네시아 수마트라 지역", color: "bg-green-100 border-green-300" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">커피 가공 방법</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {methods.map((m) => (
          <div key={m.name} className={`${m.color} border-2 rounded-xl p-5`}>
            <h3 className="font-bold text-gray-900 mb-2 text-lg">{m.name}</h3>
            <p className="text-gray-700 mb-2"><strong>과정:</strong> {m.process}</p>
            <p className="text-gray-700 mb-2"><strong>맛:</strong> {m.taste}</p>
            <p className="text-amber-700 bg-white/50 px-3 py-1 rounded-lg inline-block">💡 {m.tip}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-amber-50 rounded-xl">
        <p className="text-amber-800">⭐ <strong>시험 포인트:</strong> 각 방식의 맛 특징(산미 vs 단맛/바디감)과 과정의 차이(물 사용 유무, 점액질 제거 여부)를 구분하세요!</p>
      </div>
    </div>
  );
}

function RoastingContent() {
  const levels = [
    { level: "라이트", color: "#D4A574", taste: "신맛 강함, 풋내", use: "커핑 평가" },
    { level: "시나몬", color: "#C4956A", taste: "신맛 두드러짐", use: "산뜻한 아메리카노" },
    { level: "미디엄", color: "#A67B5B", taste: "신맛과 단맛 균형", use: "핸드드립" },
    { level: "하이", color: "#8B6914", taste: "쓴맛 시작", use: "대중적 드립커피" },
    { level: "시티", color: "#6F4E37", taste: "쓴맛 주도, 캐러멜", use: "에스프레소 시작" },
    { level: "풀 시티", color: "#5D4037", taste: "강한 쓴맛, 스모키", use: "라떼/카푸치노" },
    { level: "프렌치", color: "#4E342E", taste: "탄 맛, 오일 배출", use: "아이스커피" },
    { level: "이탈리안", color: "#3E2723", taste: "매우 강한 쓴맛", use: "이탈리아식" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">로스팅 8단계</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {levels.map((l) => (
          <div key={l.level} className="text-center p-4 bg-amber-50 rounded-xl">
            <div className="w-20 h-20 rounded-full mx-auto mb-3 shadow-lg" style={{ backgroundColor: l.color }}></div>
            <h3 className="font-bold text-amber-900 text-lg">{l.level}</h3>
            <p className="text-sm text-gray-600 mt-1">{l.taste}</p>
            <p className="text-sm text-amber-700 mt-1 font-medium">{l.use}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-amber-50 rounded-xl">
        <p className="text-amber-800">⭐ <strong>시험 포인트:</strong> 미디엄(균형), 시티(에스프레소 시작), 풀 시티(라떼/카푸치노)의 용도를 기억하세요!</p>
      </div>
    </div>
  );
}

function ExtractionContent() {
  const vars = [
    { name: "분쇄도", effect: "굵으면 신맛(언더), 고우면 쓴맛(오버)", tip: "25~30초에 맞게 조절", important: true },
    { name: "물 온도", effect: "낮으면 언더, 높으면 오버 추출", tip: "90~95°C 유지", important: true },
    { name: "추출 시간", effect: "짧으면 신맛, 길면 쓴맛", tip: "25~30초 목표", important: false },
    { name: "도징량", effect: "적으면 압력↓, 많으면 채널링", tip: "바스켓 용량에 맞게", important: false },
    { name: "탬핑", effect: "불균일하면 채널링 발생", tip: "수평 유지, 일정한 힘", important: true },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">추출 변수 5가지</h2>
      <div className="space-y-4">
        {vars.map((v) => (
          <div key={v.name} className={`p-5 rounded-xl ${v.important ? 'bg-red-50 border-2 border-red-200' : 'bg-amber-50'}`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-amber-900 text-lg">{v.name}</h3>
              {v.important && <span className="text-xs bg-red-200 text-red-800 px-3 py-1 rounded-full font-bold">중요!</span>}
            </div>
            <p className="text-gray-700 mb-2"><strong>영향:</strong> {v.effect}</p>
            <p className="text-amber-700">💡 {v.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EspressoContent() {
  const terms = [
    { term: "에스프레소 (Espresso)", def: "고압(9bar)으로 25-30초에 추출한 진한 커피. 이탈리아어로 '빠른'이라는 뜻.", tip: "추출 시간, 압력, 온도 관련 문제 자주 출제" },
    { term: "크레마 (Crema)", def: "에스프레소 위에 형성되는 황금빛 거품층. 신선한 원두와 올바른 추출의 지표.", tip: "크레마 색상, 두께로 추출 상태 판단" },
    { term: "탬핑 (Tamping)", def: "포터필터에 담긴 원두를 탬퍼로 눌러 다지는 과정. 약 15-20kg의 압력으로 수평하게.", tip: "실기시험 핵심! 일정한 압력과 수평 유지" },
    { term: "도징 (Dosing)", def: "포터필터에 적정량의 원두를 담는 것. 싱글샷 7-9g, 더블샷 14-18g.", tip: "적정 도징량 암기 필요" },
    { term: "채널링 (Channeling)", def: "물이 커피 베드에 불균일하게 침투하여 특정 부분으로만 흐르는 현상.", tip: "탬핑 불량이 주요 원인" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">에스프레소 이론 <span className="text-sm font-normal text-red-600 bg-red-100 px-2 py-1 rounded-full ml-2">실기 필수!</span></h2>
      <div className="space-y-4">
        {terms.map((t) => (
          <div key={t.term} className="bg-amber-50 rounded-xl p-5">
            <h3 className="font-bold text-amber-900 text-lg mb-2">{t.term}</h3>
            <p className="text-gray-700 mb-3">{t.def}</p>
            <p className="text-amber-700 bg-white/50 px-3 py-2 rounded-lg inline-block text-sm">📝 {t.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MilkContent() {
  const steps = [
    { step: 1, title: "차가운 우유 준비", desc: "냉장 보관된 차가운 우유를 사용. 피처의 1/3~1/2 정도 채우기." },
    { step: 2, title: "에어 주입 (스트레칭)", desc: "스팀 완드를 우유 표면 바로 아래에 위치시켜 '치치치' 소리와 함께 공기 주입." },
    { step: 3, title: "회전 (롤링)", desc: "스팀 완드를 깊이 넣어 우유를 회전시키며 거품을 고르게 섞기." },
    { step: 4, title: "온도 확인", desc: "60-65°C가 적정 온도. 피처 바닥이 손으로 3초 이상 못 잡을 정도면 완료." },
    { step: 5, title: "마무리", desc: "피처를 탁탁 쳐서 큰 거품을 제거하고, 돌려서 광택 있는 우유 만들기." },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">우유 스티밍 5단계</h2>
      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.step} className="flex gap-4 items-start bg-amber-50 rounded-xl p-4">
            <div className="bg-amber-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
              {s.step}
            </div>
            <div>
              <h3 className="font-bold text-amber-900 text-lg">{s.title}</h3>
              <p className="text-gray-700">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
        <p className="text-blue-800">💡 <strong>라떼아트 팁:</strong> 좋은 스팀밀크가 라떼아트의 시작! 광택 있는 마이크로폼을 만드는 것이 핵심입니다.</p>
      </div>
    </div>
  );
}

function MenuContent() {
  const menus = [
    { name: "에스프레소", recipe: "에스프레소 30ml", color: "bg-amber-900" },
    { name: "아메리카노", recipe: "에스프레소 + 물", color: "bg-amber-700" },
    { name: "카푸치노", recipe: "에스프레소:우유:거품 = 1:1:1", color: "bg-amber-600" },
    { name: "카페라떼", recipe: "에스프레소:우유 = 1:3~4", color: "bg-amber-500" },
    { name: "카페모카", recipe: "에스프레소 + 초콜릿 + 스팀밀크", color: "bg-amber-800" },
    { name: "마키아토", recipe: "에스프레소 + 소량의 우유거품", color: "bg-amber-950" },
    { name: "플랫화이트", recipe: "에스프레소 + 얇은 스팀밀크", color: "bg-amber-600" },
    { name: "콘파나", recipe: "에스프레소 + 휘핑크림", color: "bg-amber-700" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6">기본 커피 메뉴</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {menus.map((m) => (
          <div key={m.name} className="bg-amber-50 rounded-xl p-5 text-center">
            <div className={`w-16 h-16 ${m.color} rounded-full mx-auto mb-3 shadow-lg`}></div>
            <h3 className="font-bold text-amber-900">{m.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{m.recipe}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
