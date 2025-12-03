import Link from "next/link";
import { Bean, Flame, Coffee, Droplets, Thermometer, Clock, BookOpen, AlertCircle } from "lucide-react";

export const metadata = {
  title: "커피 기초 지식 | 바리스타가 알아야 할 커피 상식 | 바리스타 가이드",
  description: "바리스타 시험에 나오는 커피 기초 지식, 원두 종류, 추출 원리, 에스프레소 이론을 알아보세요.",
};

export default function CoffeeKnowledgePage() {
  const coffeeBasics = [
    {
      title: "커피의 역사",
      icon: <BookOpen className="w-6 h-6" />,
      content: "커피는 에티오피아에서 발견되어 아라비아 반도를 거쳐 전 세계로 퍼졌습니다. 한국에는 1896년 고종 황제가 처음 마신 것으로 알려져 있습니다.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
    },
    {
      title: "커피 품종",
      icon: <Bean className="w-6 h-6" />,
      content: "크게 아라비카(Arabica)와 로부스타(Robusta)로 나뉩니다. 아라비카는 향미가 풍부하고, 로부스타는 카페인이 높고 쓴맛이 강합니다.",
      image: "https://images.unsplash.com/photo-1595259602106-9b5d5a7c825e?w=400&q=80",
    },
    {
      title: "로스팅",
      icon: <Flame className="w-6 h-6" />,
      content: "생두를 열로 볶는 과정입니다. 라이트 → 미디엄 → 다크 순으로 볶을수록 쓴맛이 강해지고 신맛은 줄어듭니다.",
      image: "https://images.unsplash.com/photo-1600351425870-488198e68c06?w=400&q=80",
    },
  ];

  const espressoTheory = [
    {
      term: "에스프레소 (Espresso)",
      definition: "고압(9bar)으로 짧은 시간(25-30초)에 추출한 진한 커피. 이탈리아어로 '빠른'이라는 뜻.",
      examTip: "추출 시간, 압력, 온도 관련 문제 자주 출제",
      icon: <Coffee className="w-5 h-5" />,
    },
    {
      term: "크레마 (Crema)",
      definition: "에스프레소 위에 형성되는 황금빛 거품층. 신선한 원두와 올바른 추출의 지표.",
      examTip: "크레마 색상, 두께로 추출 상태 판단하는 문제 출제",
      icon: <Droplets className="w-5 h-5" />,
    },
    {
      term: "탬핑 (Tamping)",
      definition: "포터필터에 담긴 원두를 탬퍼로 눌러 다지는 과정. 약 15-20kg의 압력으로 수평하게.",
      examTip: "실기시험 핵심! 일정한 압력과 수평 유지 중요",
      icon: <AlertCircle className="w-5 h-5" />,
    },
    {
      term: "도징 (Dosing)",
      definition: "포터필터에 적정량의 원두를 담는 것. 보통 싱글샷 7-9g, 더블샷 14-18g.",
      examTip: "적정 도징량 암기 필요",
      icon: <Bean className="w-5 h-5" />,
    },
  ];

  const milkSteaming = [
    { step: 1, title: "차가운 우유 준비", description: "냉장 보관된 차가운 우유를 사용합니다. 피처의 1/3~1/2 정도 채웁니다." },
    { step: 2, title: "에어 주입 (스트레칭)", description: "스팀 완드를 우유 표면 바로 아래에 위치시켜 '치치치' 소리와 함께 공기를 주입합니다." },
    { step: 3, title: "회전 (롤링)", description: "스팀 완드를 깊이 넣어 우유를 회전시키며 거품을 고르게 섞어줍니다." },
    { step: 4, title: "온도 확인", description: "60-65°C가 적정 온도입니다. 피처 바닥이 손으로 3초 이상 못 잡을 정도면 완료." },
    { step: 5, title: "마무리", description: "피처를 탁탁 쳐서 큰 거품을 제거하고, 돌려서 광택 있는 우유를 만듭니다." },
  ];

  const coffeeMenu = [
    { name: "에스프레소", recipe: "에스프레소 30ml", color: "bg-amber-900" },
    { name: "아메리카노", recipe: "에스프레소 + 물", color: "bg-amber-700" },
    { name: "카푸치노", recipe: "에스프레소 + 스팀밀크 + 거품 (1:1:1)", color: "bg-amber-600" },
    { name: "카페라떼", recipe: "에스프레소 + 스팀밀크 (1:3~4)", color: "bg-amber-500" },
    { name: "카페모카", recipe: "에스프레소 + 초콜릿 + 스팀밀크", color: "bg-amber-800" },
    { name: "마키아토", recipe: "에스프레소 + 소량의 우유거품", color: "bg-amber-950" },
  ];

  const importantNumbers = [
    { value: "9 bar", label: "에스프레소 추출 압력", icon: <AlertCircle className="w-5 h-5" /> },
    { value: "90-96°C", label: "추출 온도", icon: <Thermometer className="w-5 h-5" /> },
    { value: "25-30초", label: "추출 시간", icon: <Clock className="w-5 h-5" /> },
    { value: "60-65°C", label: "스팀밀크 온도", icon: <Thermometer className="w-5 h-5" /> },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80"
            alt="커피 원두"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Bean className="w-5 h-5" />
              <span className="font-medium">커피 이론</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">커피 지식</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              바리스타가 알아야 할 커피 기초 상식
            </p>
          </div>
        </div>

        {/* Coffee Basics with Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {coffeeBasics.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl shadow-md border border-amber-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-amber-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Espresso Theory */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 flex items-center gap-2">
            <Coffee className="w-6 h-6 text-amber-600" />
            에스프레소 이론 <span className="text-sm font-normal text-amber-600 bg-amber-100 px-2 py-1 rounded-full ml-2">시험 필수!</span>
          </h2>
          <div className="space-y-6">
            {espressoTheory.map((item) => (
              <div key={item.term} className="border-b border-amber-100 pb-6 last:border-0 last:pb-0">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-100 text-amber-700 rounded-lg mt-1">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-amber-900 text-lg mb-2">{item.term}</h3>
                    <p className="text-gray-600 mb-3">{item.definition}</p>
                    <div className="inline-flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-3 py-2 rounded-lg">
                      <AlertCircle className="w-4 h-4" />
                      {item.examTip}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milk Steaming with Latte Art Image */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
              <Droplets className="w-6 h-6 text-amber-600" />
              우유 스티밍 방법
            </h2>
            <div className="space-y-4">
              {milkSteaming.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="bg-amber-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80"
              alt="라떼아트"
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">라떼아트의 기본</h3>
              <p className="opacity-90">
                좋은 스팀밀크가 라떼아트의 시작입니다.<br />
                광택 있는 마이크로폼을 만드는 것이 핵심!
              </p>
            </div>
          </div>
        </div>

        {/* Coffee Menu */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">기본 커피 메뉴</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {coffeeMenu.map((menu) => (
              <div key={menu.name} className="bg-amber-50 rounded-xl p-4 text-center">
                <div className={`w-12 h-12 ${menu.color} rounded-full mx-auto mb-3`}></div>
                <h3 className="font-bold text-amber-900 mb-1">{menu.name}</h3>
                <p className="text-sm text-gray-600">{menu.recipe}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Numbers */}
        <div className="bg-amber-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">시험에 나오는 숫자들</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {importantNumbers.map((item) => (
              <div key={item.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-800 rounded-full mb-3">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{item.value}</div>
                <div className="text-sm text-amber-200">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
