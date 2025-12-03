"use client";

import { Bean, Flame, Coffee, Droplets, Thermometer, Clock, AlertCircle, Package, Settings, XCircle } from "lucide-react";

export default function CoffeeKnowledgePage() {
  const processMethods = [
    { name: "내추럴 (Natural)", process: "체리를 껍질째 건조 후 탈곡", taste: "농후한 단맛, 와인/과일 향, 무거운 바디", tip: "가장 오래된 방식, 발효취 특징", color: "bg-red-100 border-red-300" },
    { name: "워시드 (Washed)", process: "과육 제거 후 점액질을 물로 씻어 건조", taste: "깨끗한 산미, 가벼운 바디, 투명한 향미", tip: "가장 보편적인 고급 가공법", color: "bg-blue-100 border-blue-300" },
    { name: "허니 (Honey)", process: "과육 제거 후 점액질 일부 남긴 채 건조", taste: "산미와 단맛의 균형, 부드러운 바디", tip: "옐로우/레드/블랙으로 구분", color: "bg-yellow-100 border-yellow-300" },
    { name: "세미 워시드", process: "펄핑 후 점액질 일부 남기고 헹궈 건조", taste: "흙, 약재 향, 묵직함", tip: "인도네시아 수마트라 지역", color: "bg-green-100 border-green-300" },
  ];

  const roastingLevels = [
    { level: "라이트", color: "#D4A574", taste: "신맛 강함, 풋내", use: "커핑 평가" },
    { level: "시나몬", color: "#C4956A", taste: "신맛 두드러짐, 단맛 시작", use: "산뜻한 아메리카노" },
    { level: "미디엄", color: "#A67B5B", taste: "신맛과 단맛 균형", use: "핸드드립" },
    { level: "하이", color: "#8B6914", taste: "쓴맛 시작, 풍부한 향", use: "대중적 드립커피" },
    { level: "시티", color: "#6F4E37", taste: "쓴맛 주도, 캐러멜 향", use: "에스프레소 시작" },
    { level: "풀 시티", color: "#5D4037", taste: "강한 쓴맛, 스모키", use: "라떼/카푸치노" },
    { level: "프렌치", color: "#4E342E", taste: "탄 맛, 오일 배출", use: "아이스커피" },
    { level: "이탈리안", color: "#3E2723", taste: "매우 강한 쓴맛", use: "이탈리아식 에스프레소" },
  ];

  const extractionVars = [
    { name: "분쇄도", effect: "굵으면 신맛(언더), 고우면 쓴맛(오버)", tip: "25~30초에 맞게 조절", important: true },
    { name: "물 온도", effect: "낮으면 언더, 높으면 오버 추출", tip: "90~95°C 유지", important: true },
    { name: "추출 시간", effect: "짧으면 신맛, 길면 쓴맛", tip: "25~30초 목표", important: false },
    { name: "도징량", effect: "적으면 압력↓, 많으면 채널링", tip: "바스켓 용량에 맞게", important: false },
    { name: "탬핑", effect: "불균일하면 채널링 발생", tip: "수평 유지, 일정한 힘", important: true },
  ];

  const defects = [
    { name: "블랙 빈", cause: "과발효/곰팡이", effect: "곰팡이 냄새, 썩은 맛", severity: "심각" },
    { name: "사워 빈", cause: "덜 익은 체리/과발효", effect: "불쾌한 신맛", severity: "높음" },
    { name: "트라이앵글/쉘", cause: "기형 생두", effect: "불균일한 로스팅", severity: "중간" },
    { name: "브로큰 빈", cause: "물리적 손상", effect: "과하게 볶아짐", severity: "중간" },
  ];

  const storage = [
    { type: "로스팅 원두", method: "밀폐 용기, 실온 보관", period: "2~14일이 최적", warning: "산소, 습기, 열, 빛 차단" },
    { type: "분쇄 커피", method: "마시기 직전 분쇄 권장", period: "최대한 빨리 소비", warning: "산패 속도 가장 빠름" },
    { type: "생두", method: "통풍 잘되는 실온", period: "수분 10~12% 유지", warning: "습도 높으면 곰팡이" },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80" alt="커피 원두" className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Bean className="w-5 h-5" />
              <span className="font-medium">커피 이론</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">커피 지식</h1>
            <p className="text-lg opacity-90">바리스타 시험에 나오는 핵심 이론</p>
          </div>
        </div>

        {/* 1. 가공 방법 */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <Coffee className="w-6 h-6 text-amber-600" />
            1. 커피 가공 방법
            <span className="text-sm font-normal text-amber-600 bg-amber-100 px-2 py-1 rounded-full ml-2">시험 필수!</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {processMethods.map((method) => (
              <div key={method.name} className={`${method.color} border-2 rounded-xl p-5`}>
                <h3 className="font-bold text-gray-900 mb-2">{method.name}</h3>
                <p className="text-sm text-gray-700 mb-2"><strong>과정:</strong> {method.process}</p>
                <p className="text-sm text-gray-700 mb-2"><strong>맛:</strong> {method.taste}</p>
                <p className="text-sm text-amber-700 bg-white/50 px-2 py-1 rounded inline-block">💡 {method.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 로스팅 단계 */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <Flame className="w-6 h-6 text-amber-600" />
            2. 로스팅 8단계
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roastingLevels.map((level) => (
              <div key={level.level} className="text-center p-4 bg-amber-50 rounded-xl">
                <div className="w-16 h-16 rounded-full mx-auto mb-3" style={{ backgroundColor: level.color }}></div>
                <h3 className="font-bold text-amber-900">{level.level}</h3>
                <p className="text-xs text-gray-600 mt-1">{level.taste}</p>
                <p className="text-xs text-amber-700 mt-1">{level.use}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-amber-50 rounded-xl">
            <p className="text-amber-800 text-sm">⭐ <strong>시험 포인트:</strong> 미디엄(균형), 시티(에스프레소 시작), 풀 시티(라떼/카푸치노)의 용도를 기억하세요!</p>
          </div>
        </div>

        {/* 3. 추출 변수 */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <Settings className="w-6 h-6 text-amber-600" />
            3. 추출 변수 5가지
          </h2>
          <div className="space-y-4">
            {extractionVars.map((v) => (
              <div key={v.name} className={`p-4 rounded-xl ${v.important ? 'bg-red-50 border-2 border-red-200' : 'bg-amber-50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-amber-900">{v.name}</h3>
                  {v.important && <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full">중요!</span>}
                </div>
                <p className="text-sm text-gray-700 mb-1"><strong>영향:</strong> {v.effect}</p>
                <p className="text-sm text-amber-700">💡 {v.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. 결점두 */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-500" />
            4. 커피 결점두
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-50">
                  <th className="text-left p-3 font-bold text-amber-900">결점두</th>
                  <th className="text-left p-3 font-bold text-amber-900">원인</th>
                  <th className="text-left p-3 font-bold text-amber-900">맛 영향</th>
                  <th className="text-center p-3 font-bold text-amber-900">심각도</th>
                </tr>
              </thead>
              <tbody>
                {defects.map((d, i) => (
                  <tr key={d.name} className={i % 2 === 0 ? "bg-white" : "bg-amber-50/30"}>
                    <td className="p-3 font-medium text-amber-800">{d.name}</td>
                    <td className="p-3 text-gray-600">{d.cause}</td>
                    <td className="p-3 text-gray-600">{d.effect}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${d.severity === '심각' ? 'bg-red-200 text-red-800' : d.severity === '높음' ? 'bg-orange-200 text-orange-800' : 'bg-yellow-200 text-yellow-800'}`}>
                        {d.severity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-red-50 rounded-xl">
            <p className="text-red-800 text-sm">⭐ <strong>블랙 빈</strong>이 가장 심각한 결점두! 결점두 개수가 생두 등급(Grade)을 결정합니다.</p>
          </div>
        </div>

        {/* 5. 보관 방법 */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <Package className="w-6 h-6 text-amber-600" />
            5. 커피 보관 방법
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {storage.map((s) => (
              <div key={s.type} className="bg-amber-50 rounded-xl p-5">
                <h3 className="font-bold text-amber-900 mb-3">{s.type}</h3>
                <p className="text-sm text-gray-700 mb-2">📦 {s.method}</p>
                <p className="text-sm text-gray-700 mb-2">⏰ {s.period}</p>
                <p className="text-sm text-red-600">⚠️ {s.warning}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-amber-50 rounded-xl">
            <p className="text-amber-800 text-sm">⭐ <strong>산패의 4대 적:</strong> 산소, 습기, 열, 빛 - 분쇄 커피는 산패가 가장 빠릅니다!</p>
          </div>
        </div>

        {/* 시험 필수 숫자 */}
        <div className="bg-amber-900 text-white rounded-2xl p-8">
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
