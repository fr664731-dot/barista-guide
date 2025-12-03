export interface GlossaryTerm {
  id: number;
  korean: string;
  english: string;
  definition: string;
  examTip: string;
  category: "추출" | "원두" | "장비" | "맛/향" | "가공";
  image?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 1,
    korean: "크레마",
    english: "Crema",
    definition:
      "에스프레소 추출 시 위에 형성되는 황금빛 갈색의 미세한 거품층으로, 커피의 신선도와 추출 품질을 나타내는 지표입니다.",
    examTip: "에스프레소의 핵심 품질 지표, 신선할수록 두껍고 안정적임.",
    category: "추출",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
  },
  {
    id: 2,
    korean: "탬핑",
    english: "Tamping",
    definition:
      "포터필터에 담긴 커피 가루(퍽)를 탬퍼를 이용해 균일하고 단단하게 다지는 작업으로, 물이 고르게 통과하도록 밀도를 형성합니다.",
    examTip: "추출 시 채널링을 방지하는 가장 중요한 과정.",
    category: "추출",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  },
  {
    id: 3,
    korean: "도징",
    english: "Dosing",
    definition:
      "포터필터에 일정량의 분쇄된 커피 가루를 담는 행위 또는 그 분쇄된 커피 가루의 양을 의미합니다.",
    examTip: "추출에 필요한 적정량을 정확하게 맞추는 것이 중요 (싱글/더블).",
    category: "추출",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  },
  {
    id: 4,
    korean: "채널링",
    english: "Channeling",
    definition:
      "탬핑 불량 등으로 인해 포터필터 내의 커피 퍽 사이로 물이 특정 부분으로만 빠르게 흐르는 현상으로, 불균일한 추출을 야기합니다.",
    examTip: "과소 추출(Under-Extraction)의 주된 원인 중 하나.",
    category: "추출",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80",
  },
  {
    id: 5,
    korean: "언더 익스트랙션",
    english: "Under-Extraction",
    definition:
      "과소 추출이라고도 하며, 짧은 추출 시간이나 낮은 온도 등으로 인해 커피의 성분이 충분히 추출되지 못한 상태를 의미합니다.",
    examTip: "맛의 특징: 시큼하고(신맛) 밍밍하며 바디감이 약함.",
    category: "추출",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&q=80",
  },
  {
    id: 6,
    korean: "오버 익스트랙션",
    english: "Over-Extraction",
    definition:
      "과다 추출이라고도 하며, 긴 추출 시간이나 높은 온도 등으로 인해 커피의 불필요한 성분까지 과도하게 추출된 상태를 의미합니다.",
    examTip: "맛의 특징: 쓰고(탄 맛), 떫으며 텁텁함.",
    category: "추출",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&q=80",
  },
  {
    id: 7,
    korean: "바디",
    english: "Body",
    definition:
      "커피를 마셨을 때 입안에서 느껴지는 무게감, 질감 또는 농도를 나타내는 용어입니다. (예: 가볍다, 무겁다)",
    examTip: "추출 정도, 원두 로스팅 정도와 밀접한 관련.",
    category: "맛/향",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=400&q=80",
  },
  {
    id: 8,
    korean: "아로마",
    english: "Aroma",
    definition:
      "커피를 코로 맡았을 때 느껴지는 향을 의미하며, 플레이버(Flavor)와 구분됩니다. (예: 꽃 향, 견과류 향)",
    examTip: "향미 평가의 중요한 요소.",
    category: "맛/향",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80",
  },
  {
    id: 9,
    korean: "플레이버",
    english: "Flavor",
    definition:
      "커피를 마셨을 때 혀와 코에서 종합적으로 인지되는 복합적인 맛과 향을 아우르는 용어입니다.",
    examTip: "맛(Taste)과 향(Aroma)의 결합.",
    category: "맛/향",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80",
  },
  {
    id: 10,
    korean: "산미",
    english: "Acidity",
    definition:
      "커피에서 느껴지는 밝고 상쾌한 신맛을 의미하며, 와인의 신맛과 유사하게 긍정적인 평가 요소로 사용됩니다.",
    examTip: "부정적인 신맛(Sourness)과 구분됨.",
    category: "맛/향",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80",
  },
  {
    id: 11,
    korean: "로스팅",
    english: "Roasting",
    definition:
      "생두를 열을 가해 볶는 배전(焙煎) 과정으로, 생두의 물리적, 화학적 변화를 통해 커피 특유의 향미를 형성합니다.",
    examTip: "로스팅 정도(강약)에 따른 맛의 변화.",
    category: "원두",
    image: "https://images.unsplash.com/photo-1600351425870-488198e68c06?w=400&q=80",
  },
  {
    id: 12,
    korean: "에스프레소",
    english: "Espresso",
    definition:
      "약 9기압의 압력과 90℃ 내외의 고온수를 이용하여 곱게 분쇄된 커피를 단시간에 고농축으로 추출한 커피입니다.",
    examTip: "추출 조건 (압력, 온도, 시간)과 정의.",
    category: "추출",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80",
  },
  {
    id: 13,
    korean: "싱글 에스프레소",
    english: "Shot / Solo",
    definition:
      "에스프레소 추출 시 1샷 바스켓을 사용하거나 더블 바스켓에 적정 도징량의 절반으로 추출한 약 25~35ml의 에스프레소입니다.",
    examTip: "추출량과 도징량.",
    category: "추출",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
  },
  {
    id: 14,
    korean: "더블 에스프레소",
    english: "Double Shot / Doppio",
    definition:
      "에스프레소 추출 시 더블 바스켓을 사용하여 추출한 약 50~70ml의 에스프레소입니다.",
    examTip: "대부분의 에스프레소 베이스 메뉴에 사용되는 기본 양.",
    category: "추출",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
  },
  {
    id: 15,
    korean: "그라인딩",
    english: "Grinding",
    definition:
      "생두를 분쇄하는 작업 또는 그 상태를 의미하며, 추출 도구와 방식에 따라 적절한 분쇄 입자 크기를 설정해야 합니다.",
    examTip: "분쇄도에 따른 추출 속도와 맛의 변화 (굵을수록 빠르고 옅음).",
    category: "추출",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80",
  },
  {
    id: 16,
    korean: "버",
    english: "Burr",
    definition:
      "그라인더에서 원두를 분쇄하는 날을 의미하며, 주로 디스크(Disc)형과 코니컬(Conical)형이 있습니다.",
    examTip: "그라인더 종류와 분쇄 방식.",
    category: "장비",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&q=80",
  },
  {
    id: 17,
    korean: "포터필터",
    english: "Portafilter",
    definition:
      "에스프레소 머신에 장착하는 커피를 담는 손잡이 달린 필터 홀더입니다.",
    examTip: "바스켓, 스파우트 등의 구성 명칭.",
    category: "장비",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  },
  {
    id: 18,
    korean: "탬퍼",
    english: "Tamper",
    definition: "포터필터에 담긴 커피 퍽을 다지는 데 사용하는 도구입니다.",
    examTip: "탬핑의 목적과 사용법.",
    category: "장비",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  },
  {
    id: 19,
    korean: "추출 수율",
    english: "Extraction Yield",
    definition:
      "추출된 커피 성분의 비율을 의미하며, 추출된 고형 성분량(TDS)을 기준으로 커피의 농도를 나타냅니다.",
    examTip: "과소/과다 추출 판단의 객관적 기준.",
    category: "추출",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  },
  {
    id: 20,
    korean: "TDS",
    english: "Total Dissolved Solids",
    definition:
      "추출된 커피에 녹아있는 총 용해 고형 성분의 농도를 백분율(%)로 나타낸 수치입니다.",
    examTip: "커피 농도와 강도를 측정하는 지표.",
    category: "추출",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
  },
  {
    id: 21,
    korean: "워시드 커피",
    english: "Washed Coffee",
    definition:
      "커피 체리 수확 후 물을 이용해 과육을 제거하고 건조하는 가공 방식 (습식법)입니다.",
    examTip: "특징: 깔끔하고 균일한 품질, 산미 강조.",
    category: "가공",
    image: "https://images.unsplash.com/photo-1595259602106-9b5d5a7c825e?w=400&q=80",
  },
  {
    id: 22,
    korean: "내추럴 커피",
    english: "Natural Coffee",
    definition:
      "커피 체리 수확 후 과육을 제거하지 않고 그대로 건조하여 가공하는 방식 (건식법)입니다.",
    examTip: "특징: 복합적이고 강한 단맛, 과일 향 강조.",
    category: "가공",
    image: "https://images.unsplash.com/photo-1595259602106-9b5d5a7c825e?w=400&q=80",
  },
  {
    id: 23,
    korean: "피베리",
    english: "Peaberry",
    definition:
      "커피 체리 안에 보통 두 개가 있어야 할 생두가 하나만 둥글게 형성된 기형 생두를 의미합니다.",
    examTip: "모양의 특징과 맛의 차이 (더 농축된 맛으로 평가됨).",
    category: "원두",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80",
  },
  {
    id: 24,
    korean: "결점두",
    english: "Defect Bean",
    definition:
      "벌레 먹음, 곰팡이, 미성숙 등 커피의 품질을 저해하는 결함이 있는 생두를 통칭합니다.",
    examTip: "생두 등급 분류의 주요 기준.",
    category: "원두",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80",
  },
  {
    id: 25,
    korean: "싱글 오리진",
    english: "Single Origin",
    definition:
      "단일 국가, 농장 또는 지역에서 재배 및 수확된 커피만을 사용한 것을 의미합니다.",
    examTip: "원산지 특유의 맛과 향 강조.",
    category: "원두",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80",
  },
  {
    id: 26,
    korean: "블렌딩",
    english: "Blending",
    definition:
      "두 가지 이상의 서로 다른 종류의 원두를 섞어 새로운 맛과 향을 만들어내는 과정입니다.",
    examTip: "맛의 균형, 안정적인 품질 및 비용 효율화 목적.",
    category: "원두",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&q=80",
  },
  {
    id: 27,
    korean: "스팀 피쳐",
    english: "Steam Pitcher",
    definition:
      "에스프레소 머신의 스팀 노즐을 사용하여 우유를 데우고 거품을 만드는 데 사용하는 용기입니다.",
    examTip: "스티밍 과정의 핵심 도구.",
    category: "장비",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80",
  },
  {
    id: 28,
    korean: "스티밍",
    english: "Steaming",
    definition:
      "스팀 노즐을 사용하여 우유를 가열하고 미세하고 부드러운 거품 (마이크로 폼)을 만드는 작업입니다.",
    examTip: "적정 온도 (60~70°C)와 마이크로 폼의 특징.",
    category: "추출",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80",
  },
  {
    id: 29,
    korean: "샷 잔",
    english: "Shot Glass / Demitasse",
    definition:
      "추출된 에스프레소를 받는 작은 용량의 잔 또는 에스프레소 전용 잔을 의미합니다.",
    examTip: "추출량 측정 및 시각적 확인 용도.",
    category: "장비",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
  },
  {
    id: 30,
    korean: "도징 툴",
    english: "Dosing Tool",
    definition:
      "포터필터에 커피 가루를 담을 때 주변에 흘리는 것을 방지하거나, 가루를 균일하게 분배하기 위해 사용되는 도구를 통칭합니다.",
    examTip: "추출 전 준비 작업의 효율성과 정확성 향상.",
    category: "장비",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
  },
];
