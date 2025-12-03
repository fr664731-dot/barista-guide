import Link from "next/link";
import Image from "next/image";
import { BookOpen, GraduationCap, Clock, DollarSign, CheckCircle, XCircle, Lightbulb, FileText, Coffee } from "lucide-react";

export const metadata = {
  title: "바리스타 공부 방법 | 독학 vs 학원 비교 | 바리스타 가이드",
  description: "바리스타 자격증 독학 방법, 학원 선택 가이드, 추천 교재, 실기 연습 팁을 알아보세요.",
};

export default function StudyGuidePage() {
  const studyMethods = [
    {
      method: "독학",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-blue-50 border-blue-200 text-blue-700",
      pros: [
        "비용 절약 (교재비만 필요)",
        "자유로운 시간 관리",
        "자기 페이스로 학습",
      ],
      cons: [
        "실기 연습 장소 필요",
        "피드백 받기 어려움",
        "혼자 동기부여 필요",
      ],
      cost: "약 5~10만원",
      suitable: "시간적 여유가 있고, 자기주도 학습이 가능한 분",
    },
    {
      method: "학원",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "bg-amber-50 border-amber-200 text-amber-700",
      pros: [
        "체계적인 커리큘럼",
        "전문가 피드백",
        "실기 장비 사용 가능",
        "함께 공부하는 동기부여",
      ],
      cons: [
        "비용이 높음",
        "정해진 시간에 수업",
        "학원 퀄리티 편차",
      ],
      cost: "약 30~80만원",
      suitable: "빠른 취득을 원하거나, 실기가 걱정되는 분",
    },
  ];

  const writtenExamTips = [
    {
      title: "기출문제 반복",
      description: "최근 3년간 기출문제를 3회 이상 풀어보세요. 비슷한 유형이 반복됩니다.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "커피 용어 암기",
      description: "에스프레소, 크레마, 탬핑 등 기본 용어를 확실히 암기하세요.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "추출 원리 이해",
      description: "단순 암기보다 원리를 이해하면 응용 문제도 풀 수 있습니다.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      title: "위생 관련 문제",
      description: "식품위생법, 개인위생 관련 문제가 자주 출제됩니다.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const practicalExamTips = [
    {
      title: "시간 관리",
      description: "제한 시간 내에 완성해야 합니다. 타이머를 켜고 연습하세요.",
      time: "에스프레소 2잔 + 카푸치노 2잔 = 약 10분",
    },
    {
      title: "그라인더 세팅",
      description: "시험장 그라인더에 적응하는 시간이 주어집니다. 이 시간을 잘 활용하세요.",
    },
    {
      title: "탬핑 연습",
      description: "일정한 압력(약 15~20kg)으로 수평 탬핑하는 연습을 반복하세요.",
    },
    {
      title: "스티밍 연습",
      description: "우유 스티밍은 소리와 온도로 판단합니다. 60~65도가 적정 온도입니다.",
    },
    {
      title: "청결 유지",
      description: "작업 중간중간 행주로 닦고, 정리정돈을 유지하세요. 위생 점수가 있습니다.",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80"
            alt="커피 공부"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">학습 가이드</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">공부 방법</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              나에게 맞는 바리스타 자격증 준비 방법을 찾아보세요
            </p>
          </div>
        </div>

        {/* Study Method Comparison */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">독학 vs 학원 비교</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {studyMethods.map((method) => (
              <div key={method.method} className={`${method.color} border-2 rounded-2xl p-6`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{method.method}</h3>
                    <p className="text-gray-600">예상 비용: {method.cost}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" /> 장점
                    </h4>
                    <ul className="space-y-1">
                      {method.pros.map((pro) => (
                        <li key={pro} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5" /> 단점
                    </h4>
                    <ul className="space-y-1">
                      {method.cons.map((con) => (
                        <li key={con} className="text-gray-700 text-sm flex items-start gap-2">
                          <span className="text-red-400 mt-1">•</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm">
                      <span className="font-bold text-gray-700">추천 대상:</span>{" "}
                      <span className="text-gray-600">{method.suitable}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Exam Tips */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 flex items-center gap-2">
            <FileText className="w-6 h-6 text-amber-600" />
            필기시험 공부법
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {writtenExamTips.map((tip) => (
              <div key={tip.title} className="flex gap-4 p-4 bg-amber-50/50 rounded-xl">
                <div className="p-3 bg-amber-100 text-amber-700 rounded-lg h-fit">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="font-bold text-amber-900 mb-1">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Exam Tips with Image */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
              <Coffee className="w-6 h-6 text-amber-600" />
              실기시험 준비 팁
            </h2>
            <div className="space-y-4">
              {practicalExamTips.map((tip, index) => (
                <div key={tip.title} className="flex gap-4">
                  <div className="bg-amber-700 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-amber-900 mb-1">{tip.title}</h3>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                    {tip.time && (
                      <p className="text-amber-600 text-sm mt-1 flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {tip.time}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latte Art Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80"
              alt="라떼아트"
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">라떼아트 연습</h3>
              <p className="text-sm opacity-90">
                실기시험에서 라떼아트는 가산점 요소입니다.<br />
                기본 하트 모양부터 연습해보세요.
              </p>
            </div>
          </div>
        </div>

        {/* Recommended Books */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">추천 교재</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6 flex gap-4">
              <div className="w-20 h-28 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-amber-900 mb-1">바리스타 2급 필기 한권으로 끝내기</h3>
                <p className="text-gray-500 text-sm mb-2">시대고시기획</p>
                <p className="text-amber-700 font-medium mb-3">약 18,000원</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs">기출문제 수록</span>
                  <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs">핵심 이론</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6 flex gap-4">
              <div className="w-20 h-28 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Coffee className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-amber-900 mb-1">커피 바리스타 실기 완벽 가이드</h3>
                <p className="text-gray-500 text-sm mb-2">성안당</p>
                <p className="text-amber-700 font-medium mb-3">약 22,000원</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs">실기 사진</span>
                  <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs">채점 기준</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-amber-800"></div>
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80"
            alt="커피 원두"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">실기 연습 장소가 필요하신가요?</h2>
            <p className="mb-6 opacity-90">
              전국 바리스타 실습 가능 카페, 공유 주방 정보를 확인하세요
            </p>
            <Link
              href="/career"
              className="inline-flex items-center gap-2 bg-white text-amber-800 px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors"
            >
              취업/창업 정보 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
