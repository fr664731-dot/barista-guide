import Link from "next/link";
import { 
  Coffee, 
  Award, 
  Globe, 
  Calendar, 
  BookOpen, 
  MessageSquare, 
  Briefcase, 
  Bean,
  ChevronRight,
  Star,
  Users,
  TrendingUp
} from "lucide-react";

export default function Home() {
  const certifications = [
    {
      name: "한국커피협회",
      level: "바리스타 2급/1급",
      icon: <Award className="w-10 h-10 text-amber-700" />,
      description: "국내 가장 인지도 높은 민간자격증",
      link: "/certifications/kca",
      color: "bg-amber-50 border-amber-200",
    },
    {
      name: "한국바리스타협회",
      level: "바리스타 2급/1급",
      icon: <Coffee className="w-10 h-10 text-orange-700" />,
      description: "실무 중심의 바리스타 자격증",
      link: "/certifications/kba",
      color: "bg-orange-50 border-orange-200",
    },
    {
      name: "SCA",
      level: "국제 바리스타 자격증",
      icon: <Globe className="w-10 h-10 text-emerald-700" />,
      description: "세계적으로 인정받는 국제 자격증",
      link: "/certifications/sca",
      color: "bg-emerald-50 border-emerald-200",
    },
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "자격증 비교",
      description: "다양한 바리스타 자격증을 한눈에 비교하세요",
      link: "/certifications",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "시험 일정",
      description: "시험 일정과 접수 방법 안내",
      link: "/exam-info",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "공부 방법",
      description: "독학 vs 학원, 나에게 맞는 방법 찾기",
      link: "/study-guide",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "합격 후기",
      description: "실제 합격자들의 생생한 후기",
      link: "/reviews",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "취업/창업",
      description: "자격증 취득 후 진로 가이드",
      link: "/career",
    },
    {
      icon: <Bean className="w-8 h-8" />,
      title: "커피 지식",
      description: "바리스타가 알아야 할 커피 기초",
      link: "/coffee-knowledge",
    },
  ];

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "10+", label: "자격증 종류" },
    { icon: <MessageSquare className="w-6 h-6" />, value: "50+", label: "합격 후기" },
    { icon: <Users className="w-6 h-6" />, value: "100+", label: "학원 정보" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "매월", label: "정보 업데이트" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-coffee"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Coffee className="w-5 h-5" />
            <span className="text-sm font-medium">바리스타를 꿈꾸는 당신을 위한</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            바리스타 자격증<br />
            <span className="text-amber-200">완벽 가이드</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            자격증 종류부터 시험 준비, 합격 후기까지<br />
            당신의 바리스타 여정을 함께합니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/certifications"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-900 px-8 py-4 rounded-full font-bold hover:bg-amber-50 transition-all hover:scale-105 shadow-lg"
            >
              자격증 비교하기
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/exam-info"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-amber-900 transition-all"
            >
              시험 일정 확인
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 text-amber-700 rounded-full mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-amber-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Certifications */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              인기 바리스타 자격증
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              목적에 맞는 자격증을 선택하세요. 취업, 창업, 해외 진출 등 목표에 따라 추천이 달라집니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Link
                key={cert.name}
                href={cert.link}
                className={`${cert.color} border-2 rounded-2xl p-6 card-hover block`}
              >
                <div className="mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-amber-700 font-medium mb-3">{cert.level}</p>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <span className="inline-flex items-center text-amber-700 font-medium">
                  자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              바리스타 가이드 둘러보기
            </h2>
            <p className="text-gray-600">
              자격증 취득에 필요한 모든 정보를 한 곳에서
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.link}
                className="group bg-amber-50/50 hover:bg-amber-100/50 border border-amber-100 rounded-2xl p-6 transition-all hover:border-amber-200 hover:shadow-md"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 text-amber-700 rounded-xl mb-4 group-hover:bg-amber-200 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl mb-6 leading-relaxed">
            "바리스타 가이드 덕분에 독학으로 2개월 만에 합격했어요!<br />
            필요한 정보가 다 정리되어 있어서 정말 도움이 됐습니다."
          </blockquote>
          <p className="text-amber-200">
            — 김** / 한국커피협회 바리스타 2급 합격
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Coffee className="w-16 h-16 text-amber-700 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            바리스타의 꿈을 시작하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            자격증 취득부터 취업/창업까지, 바리스타 가이드가 함께합니다
          </p>
          <Link
            href="/certifications"
            className="inline-flex items-center gap-2 bg-amber-700 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-800 transition-all hover:scale-105 shadow-lg"
          >
            지금 시작하기
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
