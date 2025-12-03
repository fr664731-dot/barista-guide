// 커피 용어
export const coffeeTerms = [
  { term: "에스프레소", english: "Espresso", def: "고압(9bar)으로 25-30초에 추출한 진한 커피" },
  { term: "크레마", english: "Crema", def: "에스프레소 위 황금빛 거품층. 신선도의 지표" },
  { term: "탬핑", english: "Tamping", def: "원두를 탬퍼로 15-20kg 압력으로 다지는 과정" },
  { term: "도징", english: "Dosing", def: "포터필터에 원두를 담는 것. 더블샷 14-18g" },
  { term: "채널링", english: "Channeling", def: "물이 불균일하게 흐르는 추출 불량 현상" },
  { term: "블론딩", english: "Blonding", def: "추출 후반 연한 색으로 변하는 현상" },
  { term: "포터필터", english: "Portafilter", def: "원두를 담아 머신에 장착하는 손잡이 도구" },
  { term: "그라인더", english: "Grinder", def: "원두를 분쇄하는 기계" },
];

// 생두/원두 지식
export const beanKnowledge = [
  {
    title: "아라비카 vs 로부스타",
    content: "아라비카는 향미가 풍부하고 산미가 좋음. 로부스타는 카페인이 2배, 쓴맛이 강함.",
    category: "품종"
  },
  {
    title: "커피 가공 방법",
    content: "내추럴(건식): 단맛, 과일향 / 워시드(습식): 깨끗한 산미 / 허니: 중간 특성",
    category: "가공"
  },
  {
    title: "로스팅 단계",
    content: "라이트→미디엄→시티→풀시티→프렌치. 진할수록 쓴맛↑ 신맛↓",
    category: "로스팅"
  },
  {
    title: "생두 보관",
    content: "수분 함량 10-12% 유지, 통풍 잘되는 실온 보관. 습도 높으면 곰팡이 위험",
    category: "보관"
  },
  {
    title: "결점두",
    content: "블랙빈(가장 심각), 사워빈, 브로큰빈 등. 결점두 수가 등급을 결정",
    category: "품질"
  },
];

// 추출 이론
export const extractionTheory = [
  {
    title: "추출 변수 5가지",
    items: [
      { name: "분쇄도", effect: "굵으면 신맛, 고우면 쓴맛" },
      { name: "물 온도", effect: "90-95°C 적정" },
      { name: "추출 시간", effect: "25-30초 목표" },
      { name: "도징량", effect: "더블샷 14-18g" },
      { name: "탬핑", effect: "수평, 일정한 압력" },
    ]
  },
  {
    title: "우유 스티밍",
    items: [
      { name: "1단계", effect: "차가운 우유 1/3~1/2 채우기" },
      { name: "2단계", effect: "에어 주입 (치치치 소리)" },
      { name: "3단계", effect: "롤링으로 거품 섞기" },
      { name: "4단계", effect: "60-65°C 확인" },
      { name: "5단계", effect: "탁탁 쳐서 마무리" },
    ]
  },
];

// 음료 레시피
export const drinkRecipes = [
  {
    name: "에스프레소",
    ingredients: ["에스프레소 30ml"],
    ratio: "순수 에스프레소",
    tip: "크레마가 황금빛이면 좋은 추출",
    category: "에스프레소 베이스"
  },
  {
    name: "아메리카노",
    ingredients: ["에스프레소 30ml", "뜨거운 물 150-180ml"],
    ratio: "1:5~6",
    tip: "에스프레소 먼저, 물 나중에 (또는 반대로)",
    category: "에스프레소 베이스"
  },
  {
    name: "카푸치노",
    ingredients: ["에스프레소 30ml", "스팀밀크", "우유거품"],
    ratio: "1:1:1",
    tip: "거품이 두껍고 풍성해야 함",
    category: "우유 베이스"
  },
  {
    name: "카페라떼",
    ingredients: ["에스프레소 30ml", "스팀밀크 150-200ml"],
    ratio: "1:4~5",
    tip: "거품은 얇게, 라떼아트 가능",
    category: "우유 베이스"
  },
  {
    name: "카페모카",
    ingredients: ["에스프레소 30ml", "초콜릿 시럽 20ml", "스팀밀크"],
    ratio: "1:1:4",
    tip: "휘핑크림 토핑 가능",
    category: "우유 베이스"
  },
  {
    name: "바닐라라떼",
    ingredients: ["에스프레소 30ml", "바닐라 시럽 15ml", "스팀밀크"],
    ratio: "1:0.5:4",
    tip: "시럽은 취향에 따라 조절",
    category: "시럽 베이스"
  },
  {
    name: "카라멜 마키아토",
    ingredients: ["에스프레소 30ml", "바닐라 시럽", "스팀밀크", "카라멜 드리즐"],
    ratio: "우유 위에 에스프레소",
    tip: "에스프레소를 마지막에 부어 층 만들기",
    category: "시럽 베이스"
  },
  {
    name: "아포가토",
    ingredients: ["에스프레소 30ml", "바닐라 아이스크림 1스쿱"],
    ratio: "1:1",
    tip: "뜨거운 에스프레소를 아이스크림 위에",
    category: "디저트"
  },
];

// 커피 역사/이야기
export const coffeeStories = [
  {
    title: "커피의 발견 - 칼디의 전설",
    content: "에티오피아의 양치기 칼디가 염소들이 빨간 열매를 먹고 흥분하는 것을 보고 커피를 발견했다는 전설이 있습니다.",
    year: "9세기경"
  },
  {
    title: "한국 최초의 커피",
    content: "1896년 아관파천 당시 고종 황제가 러시아 공사관에서 처음 커피를 마셨다고 전해집니다.",
    year: "1896년"
  },
  {
    title: "에스프레소의 탄생",
    content: "1901년 이탈리아의 루이지 베제라가 최초의 에스프레소 머신 특허를 출원했습니다.",
    year: "1901년"
  },
  {
    title: "스타벅스의 시작",
    content: "1971년 시애틀에서 원두 판매점으로 시작, 1987년 하워드 슐츠가 인수 후 카페로 전환했습니다.",
    year: "1971년"
  },
];
