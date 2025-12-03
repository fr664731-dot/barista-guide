// 커피 용어 (20개)
export const coffeeTerms = [
  { term: "크레마", english: "Crema", def: "에스프레소 상부에 떠 있는 황갈색의 미세한 거품층. 이산화탄소 가스가 지방, 단백질과 결합하여 형성.", tip: "신선도의 지표. 색깔, 두께, 유지력으로 추출 상태 판단." },
  { term: "바디", english: "Body", def: "커피가 입안에서 느껴지는 질감, 무게감, 농도. (Light, Medium, Heavy)", tip: "주로 지방, 단백질, 셀룰로스 성분에 의해 결정됨. 로부스타가 바디감이 무거움." },
  { term: "산패", english: "Rancidity", def: "원두의 지방 성분이 공기 중 산소와 결합하여 불쾌한 냄새와 맛으로 변질되는 현상.", tip: "보관 시 최우선적으로 방지해야 하는 현상. 산소, 습기, 열, 빛 차단." },
  { term: "TDS", english: "Total Dissolved Solids", def: "추출된 커피에 녹아있는 총 용해 고형물의 농도(%). 커피의 농도를 나타냄.", tip: "농도 지표. TDS = (추출된 고형물 무게 / 추출된 액체 무게) × 100" },
  { term: "수율", english: "Extraction Yield", def: "사용된 원두 중 실제로 물에 녹아 추출된 성분의 비율.", tip: "SCA 골든 컵 기준 18%~22%가 이상적." },
  { term: "골든 컵", english: "Golden Cup", def: "SCA(Specialty Coffee Association)에서 규정한 이상적인 추출 기준 (TDS 1.15~1.35%, 수율 18~22%).", tip: "이상적인 맛의 균형을 맞추는 목표 수치." },
  { term: "채널링", english: "Channeling", def: "커피 베드(Bed)에 물이 불균일하게 침투하여 특정 부분으로만 물길이 생기는 현상.", tip: "불균일한 탬핑이나 도징의 결과. 추출 불량의 주원인." },
  { term: "탬핑", english: "Tamping", def: "포터필터 내의 커피 가루를 균일하고 수평하게 눌러 다지는 작업.", tip: "추출 저항을 형성하고 채널링을 방지하는 핵심 과정." },
  { term: "디게싱", english: "Degassing", def: "로스팅 후 원두 내부의 이산화탄소(CO2)가 배출되는 현상.", tip: "추출 직전까지 적정량이 필요. 신선도 유지에 중요." },
  { term: "스크린 사이즈", english: "Screen Size", def: "생두의 크기를 측정하는 단위. 1 스크린은 1/64 인치.", tip: "생두의 균일성을 판단하는 기준." },
  { term: "결점두", english: "Defect", def: "품질이 낮거나 손상된 생두. 블랙빈, 사워빈 등.", tip: "생두의 등급(Grade) 결정 기준." },
  { term: "로부스타", english: "Robusta", def: "아라비카 다음으로 많이 재배되는 품종. 카페인 함량이 높고 바디감이 무거움.", tip: "인스턴트 커피, 블렌딩에 사용. 주로 저지대 재배." },
  { term: "테루아", english: "Terroir", def: "커피가 재배되는 토양, 기후, 고도 등 환경적인 특성이 커피의 맛에 미치는 영향.", tip: "와인의 용어에서 차용. 커피의 지역적 특성 강조." },
  { term: "펄프드 내추럴", english: "Pulped Natural", def: "과육 제거 후 점액질을 남긴 채 건조하는 가공법. (주로 브라질)", tip: "허니 프로세스와 유사. 단맛 강조 목적." },
  { term: "클로로젠산", english: "Chlorogenic Acid", def: "생두에 가장 많이 포함된 산. 로스팅 중 분해되어 쓴맛 성분을 생성함.", tip: "로스팅 중 쓴맛 형성의 주원료." },
  { term: "캐러멜화", english: "Caramelization", def: "로스팅 중 당 성분이 열분해되어 갈색으로 변하고 단맛/쓴맛을 형성하는 반응.", tip: "로스팅 중반 이후 단맛과 갈변에 기여." },
  { term: "하드 워터", english: "Hard Water", def: "칼슘과 마그네슘 등 미네랄 함량이 높은 물. 추출 시 맛 성분을 충분히 녹이지 못함.", tip: "물의 경도가 추출 품질에 큰 영향." },
  { term: "블론딩", english: "Blonding", def: "에스프레소 추출 후반부에 크레마 색상이 옅어지고 연해지는 현상.", tip: "추출 종료 시점을 판단하는 시각적 기준." },
  { term: "아로마", english: "Aroma", def: "커피를 마실 때 코로 느껴지는 향.", tip: "후각적 요소. 향미 평가(Cupping)의 중요한 기준." },
  { term: "싱글 오리진", english: "Single Origin", def: "단일 국가, 단일 농장 등 하나의 원산지에서 생산된 커피.", tip: "원산지의 지역적 특징을 살려 추출." },
];

// 생두/원두 지식
export const beanKnowledge = [
  {
    title: "아라비카 (Arabica)",
    content: "전체 생산량의 약 60%. 고지대 재배, 병충해에 약함, 풍부한 향미와 산미가 특징.",
    category: "품종",
    details: [
      { name: "티피카 (Typica)", desc: "최초의 아라비카 품종. 수확량이 적지만 뛰어난 품질." },
      { name: "버본 (Bourbon)", desc: "티피카의 돌연변이. 단맛이 풍부하고 균형 잡힌 산미." },
      { name: "게이샤 (Gesha)", desc: "에티오피아 원산. 화려하고 복잡한 향미로 매우 높은 가격." },
      { name: "카투라 (Caturra)", desc: "버본의 돌연변이. 작지만 생산성이 높음." },
      { name: "카티모르 (Catimor)", desc: "로부스타와 교배하여 병충해 저항력을 높인 품종." },
    ]
  },
  {
    title: "로부스타 (Robusta)",
    content: "저지대 재배, 병충해에 강함, 카페인 함량 2%~4%로 아라비카보다 2배 이상 높음. 맛과 향미가 단순하고 바디감이 강함.",
    category: "품종",
    details: [
      { name: "용도", desc: "인스턴트 커피, 블렌딩용으로 주로 사용" },
    ]
  },
  {
    title: "로스팅 화학 반응",
    content: "로스팅 과정에서 일어나는 주요 화학 반응들",
    category: "로스팅",
    details: [
      { name: "건조 (100~160°C)", desc: "생두 내 수분(약 10~12%)이 수증기로 증발. (열 흡수)" },
      { name: "마일라드 반응 (140~180°C)", desc: "아미노산 + 환원당 → 갈변 및 복잡한 향미 생성. (로스팅 향의 근원)" },
      { name: "캐러멜화 (170~200°C)", desc: "당 성분이 열분해되어 갈색으로 변하며 단맛과 쓴맛을 형성." },
      { name: "클로로젠산 분해", desc: "로스팅 전 과정에서 분해되며 쓴맛 성분 생성. (신맛 → 쓴맛으로 전환)" },
    ]
  },
  {
    title: "결점두 종류",
    content: "품질이 낮거나 손상된 생두로, 결점두의 수량이 생두의 등급을 결정함.",
    category: "품질",
    details: [
      { name: "블랙빈 (Black Bean)", desc: "가장 치명적. 곰팡이와 부패로 인해 심각한 이취 유발." },
      { name: "사워빈 (Sour Bean)", desc: "과발효로 인한 신맛이 나는 결점두." },
      { name: "브로큰빈 (Broken Bean)", desc: "깨진 생두." },
      { name: "쉘 (Shell)", desc: "조개 모양의 기형 생두." },
    ]
  },
  {
    title: "원두 보관법",
    content: "산소, 습도, 열, 빛의 4가지 요소를 차단하는 것이 핵심.",
    category: "보관",
    details: [
      { name: "밀봉 용기", desc: "공기 접촉을 최소화하는 밀봉 용기 사용." },
      { name: "실온 보관", desc: "직사광선을 피해 서늘한 곳에 보관." },
      { name: "분쇄 커피", desc: "산패 속도가 급격히 빨라지므로 가급적 바로 사용." },
    ]
  },
];


// 추출 이론
export const extractionTheory = [
  {
    title: "에스프레소 추출 원리",
    description: "약 9bar의 압력과 90~95°C의 고온수를 이용하여 분쇄된 커피에 짧은 시간(약 25~30초) 통과시켜 농축된 추출액을 얻는 방식.",
    items: [
      { name: "압력", effect: "약 9bar의 고압으로 추출" },
      { name: "온도", effect: "90~95°C의 고온수 사용" },
      { name: "시간", effect: "25~30초 추출 시간" },
      { name: "TDS (농도)", effect: "에스프레소 7%~12% 권장" },
      { name: "수율", effect: "18%~22%가 골든 컵 기준" },
    ]
  },
  {
    title: "물의 경도 (Water Hardness)",
    description: "물에 녹아있는 칼슘(Ca)과 마그네슘(Mg)의 함량이 추출에 영향을 미침.",
    items: [
      { name: "하드 워터 (경수)", effect: "미네랄이 추출을 방해하여 언더 추출 유발, 스케일 형성으로 머신 고장 원인" },
      { name: "소프트 워터 (연수)", effect: "추출이 과하게 될 수 있으며 머신 내부 부식 가능" },
      { name: "권장 경도", effect: "SCA 권장 75~150 ppm (TDS 기준)" },
    ]
  },
  {
    title: "그라인더 종류",
    description: "커피 분쇄에 사용되는 그라인더의 종류와 특징",
    items: [
      { name: "평행 버 (Flat Burr)", effect: "균일한 입자, 에스프레소 및 전문 추출에 적합" },
      { name: "원추형 버 (Conical Burr)", effect: "균일한 입자, 열 발생이 적음" },
      { name: "블레이드 (Blade)", effect: "불균일한 입자, 전문 추출에 부적합" },
    ]
  },
  {
    title: "에스프레소 머신 구조",
    description: "에스프레소 머신의 주요 구성 요소",
    items: [
      { name: "보일러 (Boiler)", effect: "추출수와 스팀에 필요한 고온/고압의 물과 증기 생성" },
      { name: "펌프 (Pump)", effect: "추출에 필요한 9bar 내외의 압력 공급" },
      { name: "그룹헤드 (Group Head)", effect: "포터필터가 장착되고 추출수가 나오는 부분" },
    ]
  },
  {
    title: "추출 변수 5가지",
    description: "에스프레소 추출에 영향을 미치는 주요 변수",
    items: [
      { name: "분쇄도", effect: "굵으면 신맛(언더), 고우면 쓴맛(오버)" },
      { name: "물 온도", effect: "90~95°C 적정" },
      { name: "추출 시간", effect: "25~30초 목표" },
      { name: "도징량", effect: "더블샷 14~18g" },
      { name: "탬핑", effect: "수평, 일정한 압력으로 채널링 방지" },
    ]
  },
  {
    title: "우유 스티밍",
    description: "라떼, 카푸치노 등에 사용되는 우유 스티밍 과정",
    items: [
      { name: "1단계", effect: "차가운 우유 1/3~1/2 채우기" },
      { name: "2단계", effect: "에어 주입 (치치치 소리)" },
      { name: "3단계", effect: "롤링으로 거품 섞기" },
      { name: "4단계", effect: "60~65°C 확인" },
      { name: "5단계", effect: "탁탁 쳐서 큰 거품 제거 후 마무리" },
    ]
  },
];

// 음료 레시피 - 에스프레소 베이스
export const espressoRecipes = [
  { name: "에스프레소", ingredients: ["에스프레소 1샷 (30ml)"], ratio: "순수 에스프레소", tip: "크레마가 황금빛이면 좋은 추출", category: "에스프레소 베이스" },
  { name: "리스트레토", ingredients: ["에스프레소 15ml 내외"], ratio: "짧은 추출", tip: "농축된 맛, 단맛이 강조됨", category: "에스프레소 베이스" },
  { name: "룽고", ingredients: ["에스프레소 60ml 내외"], ratio: "긴 추출", tip: "연한 맛, 쓴맛이 증가할 수 있음", category: "에스프레소 베이스" },
  { name: "도피오", ingredients: ["에스프레소 2샷"], ratio: "더블 샷", tip: "진한 에스프레소를 원할 때", category: "에스프레소 베이스" },
  { name: "아메리카노", ingredients: ["에스프레소 1샷", "물 200ml"], ratio: "1:6~7", tip: "에스프레소 먼저, 물 나중에 (또는 반대로)", category: "에스프레소 베이스" },
  { name: "아포가토", ingredients: ["에스프레소 1샷", "바닐라 아이스크림 1스쿱"], ratio: "1:1", tip: "뜨거운 에스프레소를 아이스크림 위에", category: "에스프레소 베이스" },
  { name: "에스프레소 마키아토", ingredients: ["에스프레소 1샷", "우유 거품 소량"], ratio: "에스프레소 + 거품", tip: "마키아토는 '얼룩'이라는 뜻", category: "에스프레소 베이스" },
  { name: "카페 미스토", ingredients: ["커피 1/2", "스팀 우유 1/2"], ratio: "1:1", tip: "드립 커피와 스팀 우유의 조합", category: "에스프레소 베이스" },
  { name: "콘 판나", ingredients: ["에스프레소 1샷", "휘핑크림"], ratio: "에스프레소 + 크림", tip: "이탈리아어로 '크림과 함께'", category: "에스프레소 베이스" },
  { name: "에스프레소 토닉", ingredients: ["에스프레소 1샷", "토닉 워터 150ml"], ratio: "1:5", tip: "얼음 위에 토닉, 그 위에 에스프레소", category: "에스프레소 베이스" },
];

// 음료 레시피 - 우유 베이스
export const milkRecipes = [
  { name: "카페 라떼", ingredients: ["에스프레소 1샷", "스팀 우유"], ratio: "1:4~5", tip: "거품은 얇게, 라떼아트 가능", category: "우유 베이스" },
  { name: "카푸치노", ingredients: ["에스프레소 1샷", "스팀 우유", "우유 거품"], ratio: "1:1:1", tip: "거품이 두껍고 풍성해야 함", category: "우유 베이스" },
  { name: "플랫 화이트", ingredients: ["에스프레소 2샷", "스팀 우유"], ratio: "2:3", tip: "라떼보다 진하고 거품이 얇음", category: "우유 베이스" },
  { name: "바닐라 라떼", ingredients: ["에스프레소 1샷", "바닐라 시럽", "스팀 우유"], ratio: "1:0.5:4", tip: "시럽은 취향에 따라 조절", category: "우유 베이스" },
  { name: "카페 모카", ingredients: ["에스프레소 1샷", "초콜릿 소스", "스팀 우유", "휘핑크림"], ratio: "1:1:4", tip: "초콜릿과 커피의 조화", category: "우유 베이스" },
  { name: "카라멜 마키아토", ingredients: ["바닐라 시럽", "스팀 우유", "에스프레소 샷", "카라멜 소스"], ratio: "우유 위에 에스프레소", tip: "에스프레소를 마지막에 부어 층 만들기", category: "우유 베이스" },
  { name: "돌체 라떼", ingredients: ["에스프레소 1샷", "연유", "스팀 우유"], ratio: "1:1:3", tip: "연유의 달콤함이 특징", category: "우유 베이스" },
  { name: "화이트 초콜릿 모카", ingredients: ["에스프레소 1샷", "화이트 초콜릿 소스", "스팀 우유"], ratio: "1:1:4", tip: "일반 모카보다 부드러운 맛", category: "우유 베이스" },
  { name: "아이리시 커피", ingredients: ["커피", "아이리시 위스키", "설탕", "크림"], ratio: "커피 + 위스키 + 크림", tip: "따뜻한 칵테일 커피", category: "우유 베이스" },
  { name: "에스프레소 쉐이커", ingredients: ["에스프레소 샷", "얼음", "시럽"], ratio: "쉐이킹", tip: "차갑게 쉐이킹한 에스프레소", category: "우유 베이스" },
];

// 시그니처 음료
export const signatureRecipes = [
  { name: "아인슈페너", ingredients: ["아메리카노", "설탕/시럽", "두꺼운 크림"], ratio: "커피 + 크림", tip: "오스트리아 비엔나 스타일", category: "시그니처" },
  { name: "크림 라떼 (Dirty Coffee)", ingredients: ["우유", "에스프레소 샷", "시럽"], ratio: "층 분리 강조", tip: "우유 위에 에스프레소가 퍼지는 비주얼", category: "시그니처" },
  { name: "말차 크림 라떼", ingredients: ["말차 파우더", "우유", "에스프레소 샷", "크림"], ratio: "말차 + 커피", tip: "말차와 커피의 독특한 조합", category: "시그니처" },
  { name: "오렌지 필 에스프레소", ingredients: ["에스프레소 샷", "오렌지 껍질"], ratio: "에스프레소 + 오렌지", tip: "시트러스 향이 더해진 에스프레소", category: "시그니처" },
  { name: "솔티드 카라멜 라떼", ingredients: ["에스프레소 샷", "소금", "카라멜 소스", "우유"], ratio: "1:4", tip: "단짠의 조화", category: "시그니처" },
];


// 커피 역사
export const coffeeHistory = [
  {
    title: "커피의 발견 - 칼디의 전설",
    content: "에티오피아의 양치기 소년 '칼디'가 염소들이 빨간 열매를 먹고 흥분하여 뛰어노는 것을 보고 커피를 발견했다는 전설이 있습니다.",
    year: "9세기경",
    region: "에티오피아"
  },
  {
    title: "아라비아 전파",
    content: "예멘의 '모카' 항을 통해 이슬람 문화권으로 전파. 종교적 의식 및 약용으로 사용되었습니다.",
    year: "15세기",
    region: "예멘/아라비아"
  },
  {
    title: "유럽 전파",
    content: "베네치아 상인들을 통해 유럽(이탈리아)에 처음 유입. '악마의 음료'로 불리기도 했으나 교황 클레멘스 8세가 승인하며 대중화되었습니다.",
    year: "17세기",
    region: "이탈리아/유럽"
  },
  {
    title: "식민지 확장",
    content: "네덜란드, 프랑스 등에 의해 아시아(인도네시아)와 중남미(브라질 등) 식민지로 전파되며 대규모 플랜테이션이 시작되었습니다.",
    year: "18세기",
    region: "아시아/중남미"
  },
  {
    title: "한국 최초의 커피",
    content: "아관파천 당시 고종 황제가 러시아 공사관에서 처음 커피를 마셨다고 전해집니다.",
    year: "1896년",
    region: "한국"
  },
  {
    title: "에스프레소 머신 발명",
    content: "이탈리아의 루이지 베제라가 최초의 에스프레소 머신 특허를 출원했습니다.",
    year: "1901년",
    region: "이탈리아"
  },
];

// 각 나라별 커피 문화
export const coffeeCultures = [
  {
    country: "이탈리아",
    flag: "🇮🇹",
    culture: "에스프레소의 종주국. 샷 하나를 서서(Al banco) 빠르게 마시는 문화. 카푸치노는 오전에만 마시는 것이 일반적.",
    signature: "에스프레소, 카푸치노"
  },
  {
    country: "튀르키예",
    flag: "🇹🇷",
    culture: "터키쉬 커피(제즈베): 미세하게 분쇄한 커피 가루를 물과 함께 끓여 가루와 함께 마시는 방식. 유네스코 무형 문화유산 지정.",
    signature: "터키쉬 커피"
  },
  {
    country: "프랑스",
    flag: "🇫🇷",
    culture: "카페 오 레 (Café au Lait): 진하게 내린 드립 커피에 뜨거운 우유를 섞어 아침 식사와 함께 큰 잔에 마시는 문화.",
    signature: "카페 오 레"
  },
  {
    country: "미국",
    flag: "🇺🇸",
    culture: "아메리카노: 에스프레소에 뜨거운 물을 첨가하여 연하게 마시는 방식(제2차 세계대전 중 유래). 대용량, 테이크 아웃 문화 발달.",
    signature: "아메리카노"
  },
  {
    country: "에티오피아",
    flag: "🇪🇹",
    culture: "커피 세리머니 (Coffee Ceremony): 손님에게 존경을 표하는 전통 의식. 생두를 직접 볶고 빻아 내리는 의례적인 문화.",
    signature: "분나 (Buna)"
  },
  {
    country: "오스트리아",
    flag: "🇦🇹",
    culture: "비엔나 커피 문화: 카페에서 오랜 시간 머무르며 신문을 읽고 대화하는 문화. 아인슈페너가 대표적.",
    signature: "아인슈페너"
  },
  {
    country: "베트남",
    flag: "🇻🇳",
    culture: "연유를 넣은 달콤한 커피가 특징. 핀(Phin) 드리퍼를 사용한 독특한 추출 방식.",
    signature: "카페 쓰어다 (Cà phê sữa đá)"
  },
];

// 전체 음료 레시피 (기존 호환용)
export const drinkRecipes = [...espressoRecipes, ...milkRecipes, ...signatureRecipes];

// 커피 이야기 (기존 호환용)
export const coffeeStories = coffeeHistory;
