import { Calendar, FileText, CheckCircle, Clock, AlertCircle, ExternalLink } from "lucide-react";

export const metadata = {
  title: "바리스타 시험 일정 및 접수 방법 | 바리스타 가이드",
  description: "바리스타 자격증 시험 일정, 접수 방법, 준비물, 시험장 정보를 확인하세요.",
};

export default function ExamInfoPage() {
  const examSchedules = [
    {
      name: "한국커피협회 바리스타 2급",
      description: "연 6회 시험 진행 (홀수 달)",
      typical: "1월, 3월, 5월, 7월, 9월, 11월",
      note: "※ 정확한 시험 일정은 한국커피협회 공식 사이트에서 확인하세요",
      link: "https://www.kca.or.kr",
    },
    {
      name: "한국바리스타협회 바리스타",
      description: "연 4~6회 시험 진행",
      typical: "분기별 진행",
      note: "※ 정확한 시험 일정은 한국바리스타협회 공식 사이트에서 확인하세요",
      link: "https://www.kbarist.or.kr",
    },
    {
      name: "커피바리스타 국가자격증 (큐넷)",
      description: "연 4회 시험 진행",
      typical: "분기별 진행",
      note: "※ 정확한 시험 일정은 큐넷에서 확인하세요",
      link: "https://www.q-net.or.kr",
    },
  ];

  const examProcess = [
    { step: 1, title: "원서 접수", description: "온라인으로 원서 접수 및 응시료 결제", icon: <FileText className="w-6 h-6" /> },
    { step: 2, title: "필기시험", description: "커피 이론, 추출 원리, 위생 관련 객관식 시험", icon: <FileText className="w-6 h-6" /> },
    { step: 3, title: "실기시험", description: "에스프레소 추출, 카푸치노 제조 실습 평가", icon: <CheckCircle className="w-6 h-6" /> },
    { step: 4, title: "합격 발표", description: "온라인으로 합격 여부 확인", icon: <CheckCircle className="w-6 h-6" /> },
    { step: 5, title: "자격증 발급", description: "합격 후 자격증 신청 및 수령", icon: <CheckCircle className="w-6 h-6" /> },
  ];

  const preparations = [
    {
      category: "필기시험 준비물",
      icon: <FileText className="w-5 h-5" />,
      items: ["신분증", "수험표", "컴퓨터용 사인펜", "필기구"],
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      category: "실기시험 준비물",
      icon: <CheckCircle className="w-5 h-5" />,
      items: ["신분증", "수험표", "앞치마", "행주 2장", "개인 탬퍼 (선택)"],
      color: "bg-green-50 border-green-200 text-green-700",
    },
    {
      category: "복장 규정",
      icon: <AlertCircle className="w-5 h-5" />,
      items: ["깔끔한 복장", "앞치마 착용", "긴 머리는 묶기", "액세서리 최소화"],
      color: "bg-amber-50 border-amber-200 text-amber-700",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=80"
            alt="카페 인테리어"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">시험 정보</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">시험 정보</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              바리스타 자격증 시험 일정과 접수 방법을 확인하세요
            </p>
          </div>
        </div>

        {/* Exam Process */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-amber-600" />
            시험 진행 과정
          </h2>
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-amber-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {examProcess.map((step, index) => (
                <div key={step.step} className="relative text-center">
                  <div className="relative z-10 mx-auto w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-md">
                    {step.icon}
                  </div>
                  <div className="bg-amber-700 text-white w-6 h-6 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-amber-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exam Schedule */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-amber-600" />
            시험 일정 안내
          </h2>
          {examSchedules.map((exam) => (
            <div key={exam.name} className="mb-6 p-6 bg-amber-50/50 rounded-xl border border-amber-100">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-amber-800">{exam.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{exam.description}</p>
                </div>
                <a 
                  href={exam.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-amber-700 text-white px-4 py-2 rounded-full text-sm flex items-center gap-1 hover:bg-amber-800 transition-colors"
                >
                  일정 확인 <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="flex items-center gap-2 text-amber-700 mb-3">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">시험 시기: {exam.typical}</span>
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" /> {exam.note}
              </p>
            </div>
          ))}
        </div>

        {/* Registration Guide */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-amber-600" />
            접수 방법
          </h2>
          <div className="space-y-6">
            {[
              { step: 1, title: "회원가입", desc: "해당 자격증 발급 기관 홈페이지에서 회원가입을 합니다." },
              { step: 2, title: "시험 선택", desc: "원하는 시험 일정과 시험장을 선택합니다. 인기 시험장은 빨리 마감되니 서둘러 접수하세요." },
              { step: 3, title: "응시료 결제", desc: "신용카드, 계좌이체 등으로 응시료를 결제합니다. 결제 완료 후 접수가 확정됩니다." },
              { step: 4, title: "수험표 출력", desc: "시험 전 수험표를 출력하여 시험 당일 지참합니다." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="bg-amber-700 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-amber-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preparations */}
        <div className="grid md:grid-cols-3 gap-6">
          {preparations.map((prep) => (
            <div key={prep.category} className={`${prep.color} border-2 rounded-2xl p-6`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {prep.icon}
                </div>
                <h3 className="font-bold text-gray-900">{prep.category}</h3>
              </div>
              <ul className="space-y-2">
                {prep.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-current opacity-60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
