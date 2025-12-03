import Link from "next/link";
import { certifications } from "@/data/certifications";
import { Award, Coffee, Globe, Building2, ChevronRight, CheckCircle, HelpCircle } from "lucide-react";

export const metadata = {
  title: "바리스타 자격증 종류 비교 | 바리스타 가이드",
  description: "한국커피협회, 한국바리스타협회, SCA, 국가자격증 등 다양한 바리스타 자격증을 비교해보세요.",
};

const iconMap: { [key: string]: React.ReactNode } = {
  "🇰🇷": <Award className="w-8 h-8 text-amber-700" />,
  "☕": <Coffee className="w-8 h-8 text-orange-700" />,
  "🌍": <Globe className="w-8 h-8 text-emerald-700" />,
  "🏛️": <Building2 className="w-8 h-8 text-blue-700" />,
};

export default function CertificationsPage() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-4">
            <Award className="w-5 h-5" />
            <span className="font-medium">자격증 정보</span>
          </div>
          <h1 className="text-4xl font-bold text-amber-900 mb-4">바리스타 자격증 종류</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            나에게 맞는 바리스타 자격증을 찾아보세요.<br />
            목적에 따라 추천하는 자격증이 다릅니다.
          </p>
        </div>

        {/* Quick Comparison Table */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6 mb-12 overflow-x-auto">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-amber-600" />
            한눈에 비교하기
          </h2>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-amber-200">
                <th className="text-left py-3 px-4 text-amber-900">자격증</th>
                <th className="text-left py-3 px-4 text-amber-900">발급기관</th>
                <th className="text-left py-3 px-4 text-amber-900">응시료</th>
                <th className="text-left py-3 px-4 text-amber-900">특징</th>
              </tr>
            </thead>
            <tbody>
              {certifications.map((cert) => (
                <tr key={cert.id} className="border-b border-amber-50 hover:bg-amber-50/50 transition-colors">
                  <td className="py-4 px-4">
                    <Link href={`/certifications/${cert.id}`} className="flex items-center gap-3 hover:text-amber-700">
                      {iconMap[cert.icon]}
                      <span className="font-medium">{cert.name}</span>
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{cert.organization}</td>
                  <td className="py-4 px-4 text-gray-600 text-sm">{cert.examInfo.fee.split('/')[0]}</td>
                  <td className="py-4 px-4 text-gray-600 text-sm">{cert.features[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert) => (
            <Link
              key={cert.id}
              href={`/certifications/${cert.id}`}
              className="bg-white rounded-2xl shadow-md border border-amber-100 p-6 card-hover block group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors">
                  {iconMap[cert.icon]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900">{cert.name}</h3>
                  <p className="text-gray-500">{cert.organization}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{cert.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.levels.map((level) => (
                  <span
                    key={level}
                    className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {level}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-amber-100">
                <span className="text-amber-700 font-medium text-sm">{cert.recommendation}</span>
                <span className="inline-flex items-center text-amber-600 font-medium group-hover:text-amber-700">
                  자세히 보기 <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-amber-600" />
            자주 묻는 질문
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
              <h3 className="font-bold text-amber-900 mb-2">Q. 어떤 자격증을 먼저 따야 하나요?</h3>
              <p className="text-gray-600">
                카페 취업이 목표라면 <strong>한국커피협회 바리스타 2급</strong>을 추천합니다. 국내 인지도가 가장 높고, 
                많은 카페에서 우대하는 자격증입니다.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
              <h3 className="font-bold text-amber-900 mb-2">Q. 독학으로 취득 가능한가요?</h3>
              <p className="text-gray-600">
                필기시험은 독학이 가능하지만, 실기시험은 장비와 연습이 필요해서 학원이나 
                연습 공간을 이용하는 것을 추천합니다.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
              <h3 className="font-bold text-amber-900 mb-2">Q. 자격증 없이도 바리스타로 일할 수 있나요?</h3>
              <p className="text-gray-600">
                네, 자격증은 필수가 아닙니다. 하지만 취업 시 우대받거나, 체계적인 학습을 위해 
                자격증 취득을 권장합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
