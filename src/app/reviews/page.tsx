import { MessageSquare, Star, Clock, BookOpen, User, Calendar, Lightbulb } from "lucide-react";

export const metadata = {
  title: "바리스타 자격증 합격 후기 | 바리스타 가이드",
  description: "실제 바리스타 자격증 합격자들의 생생한 후기와 공부 팁을 확인하세요.",
};

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      certification: "한국커피협회 바리스타 2급",
      author: "김**",
      date: "2024.03",
      studyPeriod: "2개월",
      studyMethod: "독학 + 실기 학원",
      rating: 5,
      content: `필기는 기출문제 위주로 2주 정도 공부했어요. 시대고시 교재 한 권으로 충분했습니다. 
      
실기는 혼자 연습하기 어려워서 학원에서 10회 수업 들었는데, 확실히 피드백 받으니까 빨리 늘더라고요. 
      
탬핑 압력이랑 스티밍 온도가 제일 중요한 것 같아요. 시험장에서 긴장하면 평소보다 세게 탬핑하게 되니까 연습할 때 의식적으로 힘 조절하세요!`,
      tips: ["기출문제 3회독 필수", "실기는 최소 10회 이상 연습", "시험장 그라인더 적응 시간 활용하기"],
      avatar: "bg-blue-500",
    },
    {
      id: 2,
      certification: "한국커피협회 바리스타 2급",
      author: "이**",
      date: "2024.01",
      studyPeriod: "1개월",
      studyMethod: "학원",
      rating: 4,
      content: `직장 다니면서 준비해서 학원 다녔어요. 주말반으로 4주 과정 들었는데 필기+실기 한번에 붙었습니다.

학원비가 좀 부담됐지만 (50만원 정도) 시간 없는 직장인한테는 효율적인 것 같아요.

실기 시험 때 손이 떨려서 라떼아트가 좀 아쉬웠는데 그래도 합격했어요. 기본기가 중요한 것 같습니다.`,
      tips: ["직장인은 학원 추천", "주말반 활용하기", "기본기에 집중"],
      avatar: "bg-green-500",
    },
    {
      id: 3,
      certification: "SCA 바리스타 Foundation",
      author: "박**",
      date: "2024.02",
      studyPeriod: "3일 (집중 과정)",
      studyMethod: "공인 교육기관",
      rating: 5,
      content: `SCA는 국내 자격증이랑 좀 달라요. 스페셜티 커피에 대한 이해가 중요하고, 영어로 진행됩니다.

Foundation 레벨은 3일 집중 과정으로 교육받고 바로 시험 봤어요. 비용이 좀 들지만 (40만원 정도) 국제 자격증이라 가치 있다고 생각해요.

해외 취업이나 스페셜티 카페 취업 목표라면 SCA 추천합니다!`,
      tips: ["영어 기본 필요", "스페셜티 커피 공부 미리 하기", "공인 교육기관에서 수강"],
      avatar: "bg-purple-500",
    },
    {
      id: 4,
      certification: "한국바리스타협회 바리스타 2급",
      author: "최**",
      date: "2024.04",
      studyPeriod: "3주",
      studyMethod: "독학",
      rating: 4,
      content: `한국커피협회보다 인지도는 낮지만, 라떼아트 평가가 있어서 선택했어요.

필기는 한국커피협회랑 비슷한 수준이고, 실기에서 라떼아트 하트 그리기가 있어요.

카페 사장님이 라떼아트 할 줄 아는 사람 선호한다고 해서 이 자격증 땄는데, 취업할 때 도움 됐어요!`,
      tips: ["라떼아트 연습 많이 하기", "하트 모양부터 연습", "우유 스티밍이 핵심"],
      avatar: "bg-orange-500",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80"
            alt="카페"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">합격 후기</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">합격 후기</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              실제 합격자들의 생생한 경험담을 확인하세요
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-amber-100">
            <div className="text-3xl font-bold text-amber-700 mb-1">50+</div>
            <div className="text-gray-600 text-sm">합격 후기</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-amber-100">
            <div className="text-3xl font-bold text-amber-700 mb-1">4.5</div>
            <div className="text-gray-600 text-sm">평균 평점</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-amber-100">
            <div className="text-3xl font-bold text-amber-700 mb-1">92%</div>
            <div className="text-gray-600 text-sm">합격률</div>
          </div>
        </div>

        {/* Reviews */}
        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-md border border-amber-100 p-6 md:p-8">
              {/* Header */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">
                  {review.certification}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-amber-100">
                <div className={`w-12 h-12 ${review.avatar} rounded-full flex items-center justify-center text-white font-bold`}>
                  {review.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">{review.author}</div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {review.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> 준비기간: {review.studyPeriod}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" /> {review.studyMethod}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-gray-700 whitespace-pre-line mb-6 leading-relaxed">
                {review.content}
              </div>

              {/* Tips */}
              <div className="bg-amber-50 rounded-xl p-5">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                  합격 팁
                </h4>
                <ul className="space-y-2">
                  {review.tips.map((tip, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">✓</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Review CTA */}
        <div className="mt-12 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-amber-800"></div>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80"
            alt="커피"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 p-8 md:p-12 text-center text-white">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">합격 후기를 공유해주세요!</h2>
            <p className="mb-6 opacity-90 max-w-xl mx-auto">
              여러분의 경험이 다른 수험생들에게 큰 도움이 됩니다.<br />
              합격 후기를 보내주시면 소정의 선물을 드립니다.
            </p>
            <a
              href="mailto:review@barista-guide.com"
              className="inline-flex items-center gap-2 bg-white text-amber-800 px-6 py-3 rounded-full font-bold hover:bg-amber-50 transition-colors"
            >
              후기 제출하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
