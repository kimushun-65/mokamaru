import { ChartDataPoint, ExperienceItem, MetricItem, ProcessStep } from './types';

export const PERSONAL_INFO = {
  name: '局田 萠香',
  englishName: 'Moka Tsubota',
  role: 'SaaS Business Development',
  catchphrase: '現場の「声」を拾い、\nデータの「力」で未来を拓く。',
  subCatchphrase:
    '泥臭い行動量と、緻密なデータ分析。\n製造業のDXを加速させる、次世代のビジネス開発。',
  email: 'moka.tsubota@starup01.com',
  linkedin: 'https://www.linkedin.com/in/%E8%90%A0%E9%A6%99-%E5%B1%80%E7%94%B0-589a66383/',
  x: 'https://x.com',
};

export const STORY_CONTENT = {
  title: 'Why Manufacturing SaaS?',
  paragraphs: [
    '日本のモノづくりは世界最高水準です。しかし、その現場はアナログな管理や属人化したプロセスによる「見えない損失」に苦しんでいます。',
    '私はインターンシップで、熟練の職人が事務作業に追われ、技術継承の時間が奪われている現状を目の当たりにしました。',
    '「SaaSの力で、この不条理を解消したい」',
    'その想いから、製造業特化型SaaSの新規開拓チームに参加。単なるツールの売り込みではなく、顧客の現場に入り込み、共に課題を定義する「共創型」の営業スタイルを確立してきました。',
  ],
};

export const METRICS_DATA: MetricItem[] = [
  {
    id: '1',
    label: '商談化率 (Conversion Rate)',
    value: '3.0%',
    subValue: 'Avg 3.0%',
    growth: '+290%',
    description:
      '徹底した事前リサーチと仮説構築により、業界平均を大きく上回るアポイント獲得率を達成。',
  },
  {
    id: '2',
    label: '受注貢献額 (Revenue)',
    value: '¥50.0M',
    growth: '6ヶ月間',
    description:
      'インターン期間中、エンタープライズ企業を含む3社のPoC導入から本契約までをリード。',
  },
  {
    id: '3',
    label: '行動量 (Action)',
    value: '3,600+',
    growth: 'Calls',
    description:
      '質を担保するための圧倒的な量。断られることを恐れず、市場の声を拾い続けました。',
  },
];

export const CHART_DATA: ChartDataPoint[] = [
  { month: '4月', meetings: 13, opportunities: 0 },
  { month: '5月', meetings: 17, opportunities: 1 },
  { month: '6月', meetings: 14, opportunities: 1 },
  { month: '7月', meetings: 15, opportunities: 0 },
  { month: '8月', meetings: 20, opportunities: 6 },
  { month: '9月', meetings: 30, opportunities: 10 },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Hypothesis (仮説構築)',
    description:
      '顧客のIR情報や業界ニュースを徹底的に分析。「まだ顧客自身も気づいていない課題」を仮説立てします。',
    icon: 'search',
  },
  {
    id: 2,
    title: 'Approach (アプローチ)',
    description:
      'テンプレート通りの架電はしません。仮説をぶつけ、担当者が「話を聞いてみたい」と思える問いかけを行います。',
    icon: 'message',
  },
  {
    id: 3,
    title: 'Co-creation (課題共創)',
    description:
      '製品を売るのではなく、PoCを通じて顧客と共に「成功の定義」を設計。現場レベルの運用フローまで落とし込みます。',
    icon: 'handshake',
  },
  {
    id: 4,
    title: 'Success (成果創出)',
    description:
      '導入後の定着化支援まで見据え、LTV（顧客生涯価値）を最大化する提案を行います。',
    icon: 'rocket',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    category: 'Sales & BizDev',
    skills: [
      'Inside Sales',
      'Field Sales',
      'Account Management',
      'CRM運用設計',
      'Lead Nurturing',
    ],
  },
  {
    category: 'Tools & Tech',
    skills: ['HubSpot', 'Notion', 'Excel/Spreadsheet (Advanced)'],
  },
  {
    category: 'Soft Skills',
    skills: ['構造的思考力', '傾聴力', 'グリット（やり抜く力）', 'チームマネジメント'],
  },
];
