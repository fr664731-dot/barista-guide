"use client";

import { useState } from "react";
import { Calculator, Coffee, Droplets, Milk, Beaker, Info, RotateCcw } from "lucide-react";

export default function CalculatorPage() {
  // 에스프레소 계산기
  const [espressoDose, setEspressoDose] = useState(18);
  const [espressoRatio, setEspressoRatio] = useState(2);
  
  // 브루잉 계산기
  const [brewingWater, setBrewingWater] = useState(250);
  const [brewingRatio, setBrewingRatio] = useState(16);
  
  // 추출 수율 계산기
  const [yieldCoffeeWeight, setYieldCoffeeWeight] = useState(36);
  const [yieldTds, setYieldTds] = useState(9);
  const [yieldDose, setYieldDose] = useState(18);

  const espressoTypes = [
    { name: "리스트레토", ratio: "1:1 ~ 1:1.5", desc: "진하고 달콤한 맛" },
    { name: "노멀", ratio: "1:2", desc: "밸런스 좋은 표준" },
    { name: "룽고", ratio: "1:3+", desc: "깔끔하고 연한 맛" },
  ];

  const brewingMethods = [
    { name: "핸드드립", ratio: "1:16~17", range: "1:15 ~ 1:18" },
    { name: "프렌치프레스", ratio: "1:15", range: "1:12 ~ 1:15" },
    { name: "콜드브루 원액", ratio: "1:4~8", range: "1:4 ~ 1:10" },
  ];

  const milkDrinks = [
    { name: "라떼", ratio: "1:4~5", desc: "부드럽고 우유가 많음" },
    { name: "카푸치노", ratio: "1:2~3", desc: "거품이 두꺼움" },
    { name: "플랫화이트", ratio: "1:2.5~3", desc: "얇은 거품, 진한 맛" },
  ];

  const extractionYield = ((yieldCoffeeWeight * yieldTds) / yieldDose).toFixed(1);

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&q=80"
            alt="커피 추출 도구들"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Calculator className="w-5 h-5" aria-hidden="true" />
              <span className="font-medium">레시피 도구</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">커피 레시피 계산기</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              에스프레소, 브루잉, 추출 수율을 간편하게 계산하세요
            </p>
          </div>
        </div>

        {/* 에스프레소 계산기 */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <Coffee className="w-6 h-6 text-amber-600" aria-hidden="true" />
            에스프레소 추출 계산기
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  도징량 (원두 무게)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="14"
                    max="22"
                    step="0.5"
                    value={espressoDose}
                    onChange={(e) => setEspressoDose(Number(e.target.value))}
                    className="flex-1 h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="w-16 text-center font-bold text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
                    {espressoDose}g
                  </span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  추출 비율 (1:{espressoRatio})
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="3.5"
                    step="0.1"
                    value={espressoRatio}
                    onChange={(e) => setEspressoRatio(Number(e.target.value))}
                    className="flex-1 h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="w-16 text-center font-bold text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
                    1:{espressoRatio}
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl p-6 text-center">
                <p className="text-sm opacity-90 mb-1">추출량 (목표)</p>
                <p className="text-4xl font-bold">{(espressoDose * espressoRatio).toFixed(1)}g</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">에스프레소 타입 가이드</h3>
              <div className="space-y-3">
                {espressoTypes.map((type) => (
                  <div key={type.name} className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-amber-800">{type.name}</span>
                      <span className="text-amber-600 font-mono">{type.ratio}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 브루잉 계산기 */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <Droplets className="w-6 h-6 text-amber-600" aria-hidden="true" />
            브루잉 커피 계산기
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  물의 양
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="150"
                    max="1000"
                    step="10"
                    value={brewingWater}
                    onChange={(e) => setBrewingWater(Number(e.target.value))}
                    className="flex-1 h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="w-20 text-center font-bold text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
                    {brewingWater}ml
                  </span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  비율 (1:{brewingRatio})
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="4"
                    max="20"
                    step="1"
                    value={brewingRatio}
                    onChange={(e) => setBrewingRatio(Number(e.target.value))}
                    className="flex-1 h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="w-16 text-center font-bold text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
                    1:{brewingRatio}
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl p-6 text-center">
                <p className="text-sm opacity-90 mb-1">필요한 원두량</p>
                <p className="text-4xl font-bold">{(brewingWater / brewingRatio).toFixed(1)}g</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">추출 방식별 권장 비율</h3>
              <div className="space-y-3">
                {brewingMethods.map((method) => (
                  <div key={method.name} className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-amber-800">{method.name}</span>
                      <span className="text-amber-600 font-mono">{method.ratio}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">권장 범위: {method.range}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <Info className="w-4 h-4 inline mr-1" />
                  SCA 권장: 물 1L당 원두 55g (약 1:18)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 추출 수율 계산기 */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <Beaker className="w-6 h-6 text-amber-600" aria-hidden="true" />
            추출 수율 계산기
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  추출된 커피 무게 (g)
                </label>
                <input
                  type="number"
                  value={yieldCoffeeWeight}
                  onChange={(e) => setYieldCoffeeWeight(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  TDS (%) - 굴절계 측정값
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={yieldTds}
                  onChange={(e) => setYieldTds(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  사용한 원두량 (g)
                </label>
                <input
                  type="number"
                  value={yieldDose}
                  onChange={(e) => setYieldDose(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div className={`rounded-xl p-6 text-center ${
                Number(extractionYield) >= 18 && Number(extractionYield) <= 22 
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white" 
                  : "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
              }`}>
                <p className="text-sm opacity-90 mb-1">추출 수율</p>
                <p className="text-4xl font-bold">{extractionYield}%</p>
                <p className="text-sm mt-2 opacity-90">
                  {Number(extractionYield) < 18 ? "과소추출 (Under)" : 
                   Number(extractionYield) > 22 ? "과다추출 (Over)" : "적정 추출 ✓"}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">추출 수율 공식</h3>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-4">
                <p className="font-mono text-center text-gray-700">
                  수율(%) = (추출량 × TDS) ÷ 원두량
                </p>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-3 mt-6">SCA Gold Cup 표준</h3>
              <div className="space-y-3">
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <div className="flex justify-between">
                    <span className="text-gray-700">TDS (브루잉)</span>
                    <span className="font-bold text-amber-700">1.15% ~ 1.35%</span>
                  </div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                  <div className="flex justify-between">
                    <span className="text-gray-700">TDS (에스프레소)</span>
                    <span className="font-bold text-amber-700">7% ~ 12%</span>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <div className="flex justify-between">
                    <span className="text-gray-700">적정 추출 수율</span>
                    <span className="font-bold text-green-700">18% ~ 22%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 우유 음료 가이드 */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <Milk className="w-6 h-6 text-amber-600" aria-hidden="true" />
            우유 음료 비율 가이드
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {milkDrinks.map((drink) => (
              <div key={drink.name} className="bg-amber-50 rounded-xl p-6 border border-amber-100 text-center">
                <h3 className="text-xl font-bold text-amber-800 mb-2">{drink.name}</h3>
                <p className="text-3xl font-bold text-amber-600 mb-2">{drink.ratio}</p>
                <p className="text-sm text-gray-600">{drink.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-amber-800 text-sm">
              💡 <strong>팁:</strong> 비율은 에스프레소:우유 기준입니다. 예를 들어 라떼 1:4는 에스프레소 40g에 우유 160g을 의미합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
