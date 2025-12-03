export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const quizQuestions: Question[] = [
  // 커피학 개론 (1-5)
  {
    id: 1,
    category: "커피학 개론",
    question: "다음 중 아라비카(Arabica) 커피 품종의 일반적인 특징으로 가장 옳은 것은?",
    options: [
      "해발 600m 이하의 저지대에서도 잘 자란다.",
      "카페인 함량이 로부스타보다 높고, 병충해에 강하다.",
      "신맛, 단맛, 향미가 풍부하여 주로 스트레이트 커피나 고급 블렌딩에 사용된다.",
      "주로 인스턴트 커피나 블렌딩의 보디감을 보충하는 용도로 사용된다."
    ],
    answer: 2,
    explanation: "아라비카는 고지대에서 재배되며 로부스타보다 낮은 카페인 함량과 뛰어난 향미를 가집니다."
  },
  {
    id: 2,
    category: "커피학 개론",
    question: "커피 생두를 가공하는 방법 중, 수확한 체리의 과육을 제거하지 않고 그대로 건조한 뒤 탈곡하는 방식은?",
    options: [
      "습식법 (Washed Process)",
      "건식법 (Dry/Natural Process)",
      "펄프드 내추럴법 (Pulped Natural Process)",
      "세미 워시드법 (Semi-Washed Process)"
    ],
    answer: 1,
    explanation: "건식법은 체리째 건조하여 과육의 당분이 생두에 스며들게 하는 방식입니다."
  },
  {
    id: 3,
    category: "커피학 개론",
    question: "다음 중 커피나무 재배에 적합한 환경 조건으로 틀린 것은?",
    options: [
      "연평균 기온 15°C ~ 25°C의 온화한 기후",
      "유기질이 풍부한 비옥하고 배수가 잘되는 화산성 토양",
      "연간 강수량 1,500 ~ 2,000mm 수준",
      "일조량이 풍부한 직사광선이 지속되는 환경"
    ],
    answer: 3,
    explanation: "커피나무는 강한 직사광선보다 적절한 그늘(Shade)을 선호합니다."
  },
  {
    id: 4,
    category: "커피학 개론",
    question: "생두를 보관할 때 가장 주의해야 할 요소로, 일반적으로 10% ~ 12% 이내로 유지해야 하는 것은?",
    options: [
      "pH 농도",
      "수분 함량",
      "스크린 사이즈",
      "결점두 비율"
    ],
    answer: 1,
    explanation: "수분 함량이 높으면 곰팡이 및 변질의 위험이 높아져 적정 수준(10~12%) 유지가 중요합니다."
  },
  {
    id: 5,
    category: "커피학 개론",
    question: "다음 중 디카페인 커피를 만드는 방법 중 화학 약품을 사용하지 않고 물을 이용하여 카페인을 제거하는 방식은?",
    options: [
      "솔벤트 프로세스 (Solvent Process)",
      "스위스 워터 프로세스 (Swiss Water Process)",
      "이산화탄소 추출법 (Carbon Dioxide Extraction)",
      "메틸렌 클로라이드법 (Methylene Chloride Method)"
    ],
    answer: 1,
    explanation: "스위스 워터 프로세스는 물과 활성탄 필터만을 이용하는 비화학적 디카페인 공법입니다."
  },
  // 로스팅과 향미 평가 (6-10)
  {
    id: 6,
    category: "로스팅과 향미 평가",
    question: "로스팅 과정에서 생두 내부의 당 성분이 열분해되어 갈색으로 변하면서 단맛과 쓴맛을 형성하는 비효소적 갈변반응은?",
    options: [
      "마이신 반응 (Maicine Reaction)",
      "마일라드 반응 (Maillard Reaction)",
      "캐러멜화 (Caramelization)",
      "클로로젠산 분해 (Chlorogenic Acid Breakdown)"
    ],
    answer: 2,
    explanation: "캐러멜화는 당(Sugar)이 열에 의해 분해되어 갈변하고 단맛과 쓴맛을 내는 반응입니다."
  },
  {
    id: 7,
    category: "로스팅과 향미 평가",
    question: "로스팅 배전도 중, 색상은 가장 밝고 신맛이 강하며 커핑(Cupping)에 주로 사용되는 단계는?",
    options: [
      "시나몬 로스트 (Cinnamon Roast)",
      "라이트 로스트 (Light Roast)",
      "하이 로스트 (High Roast)",
      "이탈리안 로스트 (Italian Roast)"
    ],
    answer: 1,
    explanation: "라이트 로스트는 가장 약한 로스팅 단계로, 커피의 신맛과 향미 성분을 최대한 보존합니다."
  },
  {
    id: 8,
    category: "로스팅과 향미 평가",
    question: "로스팅 과정 중 '딱' 소리가 나며 생두의 부피가 팽창하고 온도가 약 200°C 전후에 이르는 시점은?",
    options: [
      "건조 단계",
      "1차 크랙 (First Crack)",
      "캐러멜화 단계",
      "2차 크랙 (Second Crack)"
    ],
    answer: 1,
    explanation: "1차 크랙은 생두 내부의 수증기압으로 인해 발생하는 소리이며, 로스팅의 주요 시점입니다."
  },
  {
    id: 9,
    category: "로스팅과 향미 평가",
    question: "커피의 주요 쓴맛 성분이며, 로스팅 과정에서 분해되어 쓴맛으로 바뀌는 유기산은?",
    options: [
      "시트르산 (Citric Acid)",
      "아세트산 (Acetic Acid)",
      "클로로젠산 (Chlorogenic Acid)",
      "젖산 (Lactic Acid)"
    ],
    answer: 2,
    explanation: "클로로젠산은 생두에 다량 함유된 산이며, 로스팅 중 분해되어 쓴맛에 기여합니다."
  },
  {
    id: 10,
    category: "로스팅과 향미 평가",
    question: "커피의 향미를 객관적으로 평가하기 위해 정해진 규칙에 따라 뜨거운 물을 부어 향과 맛을 평가하는 방식은?",
    options: [
      "그레이딩 (Grading)",
      "테이스팅 (Tasting)",
      "커핑 (Cupping)",
      "브루잉 (Brewing)"
    ],
    answer: 2,
    explanation: "커핑은 SCA 프로토콜에 따라 커피의 향미를 평가하는 표준 방법입니다."
  },
  // 커피 추출 (11-15)
  {
    id: 11,
    category: "커피 추출",
    question: "에스프레소 추출 시, 커피 가루가 부분적으로 물의 침투를 막아 특정 부분으로만 물이 집중되어 흘러나오는 현상은?",
    options: [
      "언더 익스트랙션 (Under Extraction)",
      "오버 익스트랙션 (Over Extraction)",
      "채널링 (Channeling)",
      "블론딩 (Blonding)"
    ],
    answer: 2,
    explanation: "채널링은 탬핑 불량 등으로 인해 물이 커피 베드에 불균일하게 침투하여 생기는 불량 추출 현상입니다."
  },
  {
    id: 12,
    category: "커피 추출",
    question: "에스프레소 추출의 3대 요소 중, 추출 시간에 가장 큰 영향을 미치는 요소는?",
    options: [
      "도징량 (Dosing Amount)",
      "탬핑 (Tamping)",
      "분쇄도 (Grind Size)",
      "물 온도 (Water Temperature)"
    ],
    answer: 2,
    explanation: "분쇄도는 물의 흐름 속도와 커피 입자 간의 접촉 면적을 결정하여 추출 시간에 가장 직접적인 영향을 줍니다."
  },
  {
    id: 13,
    category: "커피 추출",
    question: "에스프레소 추출 시 나타나는 황갈색의 조밀하고 미세한 거품층으로, 커피의 풍부한 향을 담고 있는 것은?",
    options: [
      "바디 (Body)",
      "크레마 (Crema)",
      "블론딩 (Blonding)",
      "아로마 (Aroma)"
    ],
    answer: 1,
    explanation: "크레마는 에스프레소에만 존재하는 특징적인 거품층으로, 이산화탄소와 오일 성분이 결합하여 형성됩니다."
  },
  {
    id: 14,
    category: "커피 추출",
    question: "SCA에서 권장하는 가장 이상적인 추출 수율(Extraction Yield)의 범위는?",
    options: [
      "10% ~ 14%",
      "18% ~ 22%",
      "25% ~ 30%",
      "40% ~ 50%"
    ],
    answer: 1,
    explanation: "SCA는 TDS 1.15% ~ 1.35%와 추출 수율 18% ~ 22%를 '골든 컵' 표준으로 권장합니다."
  },
  {
    id: 15,
    category: "커피 추출",
    question: "커피 추출액에 녹아있는 총 용해 고형물의 양을 백분율(%)로 나타내는 지표는?",
    options: [
      "pH",
      "TDS",
      "PE (Percolation Efficiency)",
      "Brix"
    ],
    answer: 1,
    explanation: "TDS는 추출된 커피의 농도를 측정하는 지표입니다."
  },
  // 위생 및 서비스 (16-20)
  {
    id: 16,
    category: "위생 및 서비스",
    question: "원재료 생산부터 최종 소비까지 전 과정에서 위해 요소를 분석하고 관리하는 위생 관리 시스템은?",
    options: [
      "ISO 9001",
      "HACCP",
      "Q-Grader System",
      "SCA Protocol"
    ],
    answer: 1,
    explanation: "HACCP은 식품의 안전성을 보장하기 위한 과학적 위생 관리 시스템입니다."
  },
  {
    id: 17,
    category: "위생 및 서비스",
    question: "서비스의 4대 특징 중, 서비스가 생산됨과 동시에 소비되어 저장할 수 없는 특성은?",
    options: [
      "무형성",
      "소멸성 (비저장성)",
      "가변성",
      "비분리성"
    ],
    answer: 1,
    explanation: "소멸성은 서비스의 생산과 동시에 소비가 이루어져 저장할 수 없다는 특성입니다."
  },
  {
    id: 18,
    category: "위생 및 서비스",
    question: "커피 원두를 분쇄한 후 시간이 지남에 따라 향미 성분이 소실되고 산소와 결합하여 맛이 변질되는 현상은?",
    options: [
      "추출",
      "로스팅",
      "디게싱",
      "산패"
    ],
    answer: 3,
    explanation: "산패는 원두의 오일 성분이 산소와 반응하여 품질이 저하되고 불쾌한 맛이 나는 현상입니다."
  },
  {
    id: 19,
    category: "위생 및 서비스",
    question: "식품 취급 시 발생할 수 있는 식중독 예방을 위한 3대 원칙이 아닌 것은?",
    options: [
      "가열 (Heat)",
      "청결 (Cleanliness)",
      "신속 (Speed)",
      "냉각 (Cooling)"
    ],
    answer: 0,
    explanation: "식중독 예방 3대 원칙은 '청결', '신속', '냉각'입니다. 가열은 조리 과정의 한 방법입니다."
  },
  {
    id: 20,
    category: "위생 및 서비스",
    question: "고객 서비스 시, 고객의 불만을 처리하는 가장 효과적인 방법으로 옳은 것은?",
    options: [
      "고객의 불만에 대해 변명이나 핑계를 먼저 제시한다.",
      "즉시 처리할 수 없는 문제는 무조건 미룬다.",
      "고객의 이야기를 경청하고 공감하며 진심으로 사과한다.",
      "불만 고객에게는 추가적인 서비스를 절대 제공하지 않는다."
    ],
    answer: 2,
    explanation: "고객의 감정을 먼저 이해하고 공감하는 것이 불만 처리의 가장 기본이자 효과적인 단계입니다."
  }
];

export const categories = ["전체", "커피학 개론", "로스팅과 향미 평가", "커피 추출", "위생 및 서비스"];
