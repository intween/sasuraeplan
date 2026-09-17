// 사용가이드(Help) 콘텐츠.
//
// Help 는 매뉴얼이 아니라 "영상으로 빠르게 보고, 아래에서 핵심 순서만 다시 확인하는"
// 짧은 튜토리얼 허브다. 그래서 문서를 잘게 쪼개지 않고 가이드 5개만 둔다.
//
// 페이지(app/help)는 이 파일만 읽는다 — 문구를 JSX 에 흩어 놓지 않기 위해서다.
// 다만 CMS 처럼 만들지는 않는다. 화면이 실제로 쓰는 필드만 둔다.
//
//   video      : { title, videoUrl, thumbnail }
//                videoUrl 이 비어 있으면 "영상 준비 중" placeholder 로 그려진다.
//                나중에 실제 URL(YouTube / Vimeo / mp4)을 여기에만 넣으면 된다.
//   steps      : 핵심 사용 순서. example 은 사용자가 그대로 따라 할 수 있는 예시 문장.
//   sections   : steps 대신 "영역 + 흐름"으로 보여줄 때 사용한다(지원사업 · 전문가 피드백).
//   notices    : 알아두세요 / 중요 안내 박스.
//   nextGuide  : 하단의 다음 가이드 링크.

export const HELP_HOME = {
  title: '사수래AI 사용가이드',
  description: '처음 시작하는 방법부터\nVC 분석과 사수AI 활용까지 빠르게 확인하세요.',
};

export const helpGuides = [
  {
    slug: 'getting-started',
    icon: 'rocket',
    navLabel: '처음 시작하기',
    cardTitle: '처음 시작하기',
    cardDescription: '계획서 작성부터 첫 VC 분석까지\n전체 흐름을 빠르게 확인하세요.',
    title: '처음 시작하기',
    description: '사수래AI를 처음 이용하시나요?\n계획서를 만들거나 업로드하고,\n첫 VC 분석까지 진행하는 방법을 확인하세요.',
    video: {
      title: '1분 만에 사수래AI 시작하기',
      videoUrl: '/videos/getting-started-demo.mp4',
      thumbnail: '',
    },
    steps: [
      { title: '계획서를 시작하세요', description: '새로 작성하거나 기존 사업계획서를 업로드할 수 있습니다.' },
      { title: '내용을 확인하고 작성하세요', description: 'AI 작성 코치와 대화하며 필요한 사업 내용을 채워갑니다.' },
      { title: '첫 VC 분석을 진행하세요', description: '계획서의 강점과 부족한 부분을 평가자의 관점에서 확인합니다.' },
    ],
    notices: [
      {
        title: '알아두세요',
        body: ['첫 VC 분석이 완료되면 해당 계획서의 사수AI를 사용할 수 있습니다.'],
      },
    ],
    nextGuide: { slug: 'plan-assistant', label: '사수AI 사용법 보기' },
  },

  {
    slug: 'vc-analysis',
    icon: 'chart',
    navLabel: 'VC 분석',
    cardTitle: 'VC 분석',
    cardDescription: '점수와 보완 포인트를\n어떻게 확인하는지 알아보세요.',
    title: 'VC 분석 보기',
    description: '내 사업계획서가\n평가자의 관점에서 어떻게 보이는지 확인하세요.',
    video: {
      title: 'VC 분석 결과 보는 법',
      videoUrl: '/videos/vc-analysis-demo.mp4',
      thumbnail: '',
    },
    steps: [
      { title: '점수를 확인하세요', description: 'VC Readiness Score 와 현재 사업의 종합 평가를 확인합니다.' },
      { title: '보완 영역을 확인하세요', description: '강점과 우선 보완 영역을 통해 무엇을 더 준비해야 하는지 확인합니다.' },
      { title: '사수AI로 이어가세요', description: '궁금한 이유나 보완 방법을 사수AI에게 바로 물어볼 수 있습니다.' },
    ],
    notices: [
      {
        title: '알아두세요',
        body: [
          '계획서를 수정해도 기존 분석 결과의 점수는 바뀌지 않습니다.',
          '새로운 평가가 필요할 때 재분석을 진행하세요.',
        ],
      },
    ],
    nextGuide: { slug: 'plan-assistant', label: '사수AI 사용법 보기' },
  },

  {
    slug: 'plan-assistant',
    icon: 'sparkles',
    navLabel: '사수AI',
    cardTitle: '사수AI',
    cardDescription: 'VC 분석 결과를 이해하고\n실제 계획서까지 보완하는 방법을 확인하세요.',
    title: '사수AI 사용하기',
    description: 'VC 분석 결과를 이해하고,\n부족한 부분을 실제 계획서까지 보완하세요.',
    video: {
      title: '사수AI로 계획서 보완하기',
      videoUrl: '/videos/plan-assistant-demo.mp4',
      thumbnail: '',
    },
    steps: [
      { title: '분석 결과를 물어보세요', example: '왜 고객 검증 점수가 낮아?' },
      { title: '무엇을 준비해야 하는지 확인하세요', example: '그럼 어떤 자료가 필요해?' },
      { title: '실제 정보나 자료를 추가하세요', description: '인터뷰 결과, 조사 자료, 사업 관련 문서 등을 추가할 수 있습니다.' },
      { title: '수정안을 확인하세요', description: '사수AI가 계획서에 들어갈 내용을 정리합니다.' },
      { title: '계획서에 반영하세요', description: '사용자가 직접 승인해야 실제 계획서가 수정됩니다.' },
    ],
    notices: [
      {
        title: '알아두세요',
        body: [
          '사수AI는 실제 매출, 고객 인터뷰 결과 등 사용자가 제공하지 않은 사실을 임의로 만들어내지 않습니다.',
          '또한 사수AI가 내용을 작성했다고 자동으로 계획서가 수정되지는 않습니다. 사용자가 ‘계획서에 반영’해야 실제 문서가 변경됩니다.',
        ],
      },
    ],
    nextGuide: { slug: 'advanced', label: '지원사업 · 전문가 피드백 보기' },
  },

  {
    slug: 'advanced',
    icon: 'building',
    navLabel: '지원사업 · 전문가',
    cardTitle: '지원사업 · 전문가 피드백',
    cardDescription: '지원사업 준비와 전문가 의견을\n계획서 보완에 활용하는 방법을 확인하세요.',
    title: '지원사업 · 전문가 피드백',
    description: '지원사업 준비와 전문가 의견도\n현재 계획서의 보완 과정에 이어서 활용할 수 있습니다.',
    video: {
      title: '지원사업과 전문가 피드백 활용하기',
      videoUrl: '/videos/expert-review-demo.mp4',
      thumbnail: '',
    },
    sections: [
      {
        title: '지원사업 준비',
        description: '현재 계획서와 지원사업 공고를 비교하고, 부족한 부분을 사수AI와 보완할 수 있습니다.',
        flow: ['지원사업 선택', '내 계획서로 준비하기', '사수AI와 보완', '지원사업용 계획서 반영'],
      },
      {
        title: '전문가 피드백',
        description: '전문가 검토 의견을 확인한 뒤, 해당 내용을 사수AI와 다시 보완할 수 있습니다.',
        flow: ['전문가 피드백 확인', '사수AI와 보완하기', '계획서 수정'],
      },
    ],
    notices: [
      {
        title: '알아두세요',
        body: ['VC 분석 점수는 계획서를 보완하기 위한 참고 지표입니다. 지원사업 합격 가능성과 직접 연결되지 않습니다.'],
      },
    ],
    nextGuide: { slug: 'founder-assessment', label: '창업가 역량 진단 보기' },
  },

  {
    slug: 'founder-assessment',
    icon: 'compass',
    navLabel: '창업가 역량 진단',
    cardTitle: '창업가 역량 진단',
    cardDescription: '9개의 질문으로\n나의 창업 스타일을 확인해보세요.',
    title: '창업가 역량 진단',
    description: '9개의 질문으로\n나의 창업 스타일을 확인해보세요.',
    video: {
      title: '창업가 역량 진단 해보기',
      videoUrl: '/videos/founder-assessment-demo.mp4',
      thumbnail: '',
    },
    steps: [
      { title: '진단을 시작하세요', description: '창업가 역량 진단에서 9개의 질문에 답합니다.' },
      { title: '나의 창업 스타일을 확인하세요', description: '답변을 바탕으로 창업가로서의 성향과 강점을 정리해 보여줍니다.' },
      { title: '보완할 역량을 확인하세요', description: '지금 사업 단계에서 더 채우면 좋은 영역을 함께 확인합니다.' },
    ],
    notices: [
      {
        title: '알아두세요',
        body: ['창업가 역량 진단은 창업 스타일을 이해하기 위한 참고 결과입니다. 사업의 성패나 지원사업 합격 가능성을 판단하는 기준이 아닙니다.'],
      },
    ],
    nextGuide: { slug: 'getting-started', label: '처음 시작하기 다시 보기' },
  },
];

export const HELP_ROOT_PATH = '/help';

export function helpGuidePath(slug) {
  return `${HELP_ROOT_PATH}/${slug}`;
}

/** slug 로 가이드 하나를 찾는다. 없으면 undefined — 페이지에서 notFound() 로 넘긴다. */
export function findHelpGuide(slug) {
  return helpGuides.find((guide) => guide.slug === slug);
}
