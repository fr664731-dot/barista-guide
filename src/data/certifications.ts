export interface Certification {
  id: string;
  name: string;
  organization: string;
  icon: string;
  levels: string[];
  description: string;
  features: string[];
  examInfo: {
    writtenExam: string;
    practicalExam: string;
    fee: string;
    passingScore: string;
  };
  pros: string[];
  cons: string[];
  recommendation: string;
  officialSite: string;
}

export const certifications: Certification[] = [
  {
    id: "kca",
    name: "한국커피협회 바리스타",
    organization: "한국커피협회 (KCA)",
    icon: "🇰🇷",
    levels: ["2급", "1급"],
    description:
      "국내에서 가장 인지도가 높은 바리스타 민간자격증입니다. 많은 카페에서 채용 시 우대하는 자격증으로, 바리스타 입문자에게 추천됩니다.",
    features: [
      "국내 인지도 1위",
      "전국 시험장 운영",
      "오프라인 필기/실기 시험",
      "2급 취득 후 1급 응시 가능",
    ],
    examInfo: {
      writtenExam: "오프라인 OMR / 객관식 50문항",
      practicalExam:
        "오프라인 실기 (기술평가 60점 + 감각평가 40점) / 에스프레소 + 카푸치노 제조",
      fee: "2급: 필기 33,000원 / 실기 66,000원 (VAT 포함, 2025년 3월 인상) | 1급: 필기 44,000원 / 실기 99,000원",
      passingScore: "필기 60점 이상 / 실기 60점 이상 (필기 합격 시 2년간 실기 응시 가능)",
    },
    pros: [
      "국내 인지도가 가장 높음",
      "시험 일정이 자주 있음 (연 6회)",
      "학습 자료가 풍부함",
      "취업 시 우대받는 경우 많음",
    ],
    cons: ["국제적 인정은 제한적", "실기 시험 난이도가 있음", "60초 초과 시 실격"],
    recommendation: "카페 취업을 목표로 하는 입문자에게 추천",
    officialSite: "https://www.kca.or.kr",
  },
  {
    id: "kba",
    name: "한국바리스타협회 바리스타",
    organization: "한국바리스타협회 (KBA) 외 민간기관",
    icon: "☕",
    levels: ["2급", "1급"],
    description:
      "다양한 민간 기관에서 발급하는 바리스타 자격증입니다. 온라인 시험이 가능하여 취득이 용이하지만, 공신력은 KCA에 비해 낮은 편입니다.",
    features: [
      "온라인 필기시험 가능",
      "기관별 응시료 상이",
      "취득 난이도 낮음",
      "기본 지식 습득용으로 적합",
    ],
    examInfo: {
      writtenExam: "온라인 시험 (인터넷 응시)",
      practicalExam: "기관별 상이 (오프라인 실습 또는 온라인 강의 수료 대체)",
      fee: "기관별 상이 (약 필기 30,000원 / 실기 50,000원) - 일부 기관은 교육비에 포함",
      passingScore: "필기/실기 모두 60점 이상",
    },
    pros: [
      "온라인으로 편리하게 취득 가능",
      "비교적 저렴한 비용",
      "합격률이 높음",
      "기초 지식 습득에 도움",
    ],
    cons: [
      "KCA보다 인지도/공신력 낮음",
      "취업 시 우대 효과 제한적",
      "이력서용보다는 자기만족용",
    ],
    recommendation: "기초 지식 습득이나 자기만족용으로 추천",
    officialSite: "https://www.kbarist.or.kr",
  },
  {
    id: "sca",
    name: "SCA 바리스타",
    organization: "Specialty Coffee Association",
    icon: "🌍",
    levels: ["Foundation", "Intermediate", "Professional"],
    description:
      "세계적으로 인정받는 국제 바리스타 자격증입니다. 해외 취업이나 스페셜티 커피 분야에서 일하고 싶다면 필수입니다. 국비지원(국민내일배움카드) 가능한 과정도 있습니다.",
    features: [
      "국제적으로 인정받는 자격증",
      "스페셜티 커피 전문",
      "AST 인증 교육기관에서 취득",
      "국비지원 가능 (내일배움카드)",
    ],
    examInfo: {
      writtenExam: "이론 평가 (레벨별 상이)",
      practicalExam: "실기 평가 (레벨별 상이)",
      fee: "Foundation: 약 50~100만원 (교육비 + 실습비 + SCA 인증 수수료 포함) - 국비지원 시 자기부담금 대폭 감소",
      passingScore: "레벨별 기준 상이",
    },
    pros: [
      "세계적으로 인정받음",
      "해외 취업에 유리",
      "전문적인 커피 지식 습득",
      "국비지원으로 비용 절감 가능",
    ],
    cons: ["비용이 높음 (국비지원 없을 시)", "영어 능력 필요", "국내 교육기관 제한적"],
    recommendation: "해외 취업 또는 스페셜티 커피 분야 희망자에게 추천",
    officialSite: "https://sca.coffee",
  },
  {
    id: "national",
    name: "커피바리스타 국가자격증",
    organization: "한국산업인력공단 (큐넷)",
    icon: "🏛️",
    levels: ["해당 없음"],
    description:
      "현재 커피바리스타 국가기술자격증은 존재하지 않습니다. 커피는 제조 및 서비스업 특성상 민간 자격증이나 국제 표준(SCA)으로 통용되고 있습니다. 향후 국가 자격화가 논의될 수 있습니다.",
    features: [
      "현재 국가자격증 없음",
      "민간자격증 또는 SCA로 대체",
      "제과/제빵 기능사처럼 향후 신설 가능성",
    ],
    examInfo: {
      writtenExam: "해당 없음",
      practicalExam: "해당 없음",
      fee: "해당 없음",
      passingScore: "해당 없음",
    },
    pros: ["향후 신설 시 공신력 높을 것으로 예상"],
    cons: ["현재 존재하지 않음"],
    recommendation: "현재는 KCA 또는 SCA 자격증 취득 권장",
    officialSite: "https://www.q-net.or.kr",
  },
];
