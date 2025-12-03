import Link from "next/link";
import { Briefcase, Coffee, Building2, Store, TrendingUp, DollarSign, CheckCircle, AlertCircle, Lightbulb, MapPin, Users } from "lucide-react";

export const metadata = {
  title: "바리스타 취업/창업 가이드 | 바리스타 가이드",
  description: "바리스타 자격증 취득 후 취업, 창업 정보와 현실적인 연봉, 진로 가이드를 확인하세요.",
};

export default function CareerPage() {
  const careerPaths = [
    {
      title: "카페 취업",
      icon: <Coffee className="w-8 h-8" />,
      description: "프랜차이즈 또는 개인 카페에서 바리스타로 근무",
      salary: "월 200~280만원",
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-700 bg-amber-100",
      requirements: ["바리스타 자격증 (우대)", "서비스 마인드", "체력"],
      pros: ["안정적인 수입", "경험 축적", "다양한 메뉴 학습"],
      cons: ["서서 일하는 업무", "주말/공휴일 근무", "초봉이 낮은 편"],
    },
    {
      title: "호텔/리조트 바리스타",
      icon: <Building2 className="w-8 h-8" />,
      description: "호텔, 리조트 내 카페나 라운지에서 근무",
      salary: "월 250~350만원",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-700 bg-blue-100",
      requirements: ["바리스타 자격증", "영어 가능 (우대)", "서비스 경력"],
      pros: ["높은 급여", "복리후생 좋음", "고급 서비스 경험"],
      cons: ["경쟁률 높음", "격식 있는 서비스 요구", "교대 근무"],
    },
    {
      title: "로스터리 카페",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "직접 로스팅하는 스페셜티 카페에서 근무",
      salary: "월 220~300만원",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-700 bg-green-100",
      requirements: ["SCA 자격증 (우대)", "커피에 대한 열정", "로스팅 관심"],
      pros: ["전문성 향상", "로스팅 기술 습득", "커피 마니아 고객"],
      cons: ["채용 기회 적음", "높은 전문성 요구"],
    },
    {
      title: "카페 창업",
      icon: <Store className="w-8 h-8" />,
      description: "나만의 카페를 오픈하여 운영",
      salary: "월 순수익 200~500만원",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-700 bg-purple-100",
      requirements: ["자본금 (5천만~2억)", "경영 능력", "마케팅 능력"],
      pros: ["자유로운 운영", "수익 무제한 가능성", "자아실현"],
      cons: ["높은 리스크", "긴 노동시간", "초기 자본 필요"],
    },
  ];

  const startupCosts = [
    { item: "보증금/권리금", cost: "2,000~5,000만원", note: "지역/상권에 따라 편차 큼" },
    { item: "인테리어", cost: "1,500~4,000만원", note: "10평 기준" },
    { item: "커피 머신", cost: "500~2,000만원", note: "중고 시 절약 가능" },
    { item: "그라인더", cost: "100~500만원", note: "머신과 세트 구매 추천" },
    { item: "기타 장비", cost: "200~500만원", note: "냉장고, 제빙기, 블렌더 등" },
    { item: "초기 재료비", cost: "100~200만원", note: "원두, 우유, 시럽 등" },
    { item: "운영자금", cost: "500~1,000만원", note: "3개월치 운영비 확보 권장" },
  ];

  const tips = [
    {
      title: "경력 쌓기",
      content: "바로 창업보다는 최소 1~2년 카페 근무 경험을 쌓으세요. 운영 노하우와 고객 응대를 배울 수 있습니다.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "상권 분석",
      content: "유동인구, 경쟁 카페, 임대료를 꼼꼼히 분석하세요. 좋은 상권이 성공의 절반입니다.",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: "차별화 전략",
      content: "스페셜티 커피, 디저트 특화, 분위기 등 나만의 강점을 만드세요.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      title: "마케팅",
      content: "인스타그램, 네이버 플레이스 등 온라인 마케팅은 필수입니다.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80"
            alt="카페 인테리어"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Briefcase className="w-5 h-5" />
              <span className="font-medium">진로 가이드</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">취업/창업 가이드</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              바리스타 자격증 취득 후 진로를 알아보세요
            </p>
          </div>
        </div>

        {/* Career Paths */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">진로 선택지</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {careerPaths.map((career) => (
              <div key={career.title} className={`${career.color} border-2 rounded-2xl p-6`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${career.iconColor}`}>
                    {career.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{career.title}</h3>
                    <p className="text-amber-700 font-medium flex items-center gap-1">
                      <DollarSign className="w-4 h-4" /> {career.salary}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{career.description}</p>

                <div className="mb-4">
                  <h4 className="font-bold text-sm text-gray-500 mb-2">필요 조건</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.requirements.map((req) => (
                      <span key={req} className="bg-white/80 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-bold text-green-700 mb-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> 장점
                    </h4>
                    <ul className="text-gray-600 space-y-1">
                      {career.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-1">
                          <span className="text-green-500 mt-1">•</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-600 mb-2 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> 단점
                    </h4>
                    <ul className="text-gray-600 space-y-1">
                      {career.cons.map((con) => (
                        <li key={con} className="flex items-start gap-1">
                          <span className="text-red-400 mt-1">•</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Startup Costs */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-amber-600" />
            카페 창업 비용 (10평 기준)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-amber-200">
                  <th className="text-left py-3 px-4 text-amber-900">항목</th>
                  <th className="text-left py-3 px-4 text-amber-900">예상 비용</th>
                  <th className="text-left py-3 px-4 text-amber-900">비고</th>
                </tr>
              </thead>
              <tbody>
                {startupCosts.map((item) => (
                  <tr key={item.item} className="border-b border-amber-50 hover:bg-amber-50/50 transition-colors">
                    <td className="py-3 px-4 font-medium text-gray-900">{item.item}</td>
                    <td className="py-3 px-4 text-amber-700 font-medium">{item.cost}</td>
                    <td className="py-3 px-4 text-gray-500 text-sm">{item.note}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-amber-100 font-bold">
                  <td className="py-4 px-4 text-amber-900">총 예상 비용</td>
                  <td className="py-4 px-4 text-amber-700" colSpan={2}>약 5,000만원 ~ 1억 3,000만원</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            위 금액은 예시이며, 지역/규모/컨셉에 따라 크게 달라질 수 있습니다.
          </p>
        </div>

        {/* Tips with Image */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-amber-600" />
              창업 전 알아두세요
            </h2>
            <div className="space-y-4">
              {tips.map((tip) => (
                <div key={tip.title} className="bg-white rounded-xl shadow-sm border border-amber-100 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                      {tip.icon}
                    </div>
                    <h3 className="font-bold text-amber-900">{tip.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{tip.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80"
              alt="카페 창업"
              className="w-full h-full object-cover min-h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">나만의 카페를 꿈꾸세요</h3>
              <p className="opacity-90">
                철저한 준비와 차별화된 컨셉이<br />
                성공적인 창업의 시작입니다.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-amber-800"></div>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80"
            alt="커피"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">아직 자격증이 없으신가요?</h2>
            <p className="mb-6 opacity-90">
              바리스타의 첫 걸음, 자격증 취득부터 시작하세요
            </p>
            <Link
              href="/certifications"
              className="inline-flex items-center gap-2 bg-white text-amber-800 px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors"
            >
              자격증 알아보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
