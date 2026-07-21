export type Project = {
  slug: string;
  num: string;
  name: string;
  status: string;
  href: string | null;
  dotFill: boolean;
  dotOp: number;
  desc: string;
  tags: string[];
  note?: string;
  year: string;
  domain: string;
  role?: string;
};

export const projects: Project[] = [
  {
    slug: 'amarah',
    num: '001',
    name: 'Amarah',
    status: 'Live',
    href: 'https://www.useamarah.com',
    dotFill: true,
    dotOp: 1,
    desc: 'Bilingual fintech platform enabling Mobile Money-based investment in US stocks for CEMAC users. 2,400+ on waitlist. Registered company. Built on Next.js.',
    tags: ['Fintech', 'Mobile Money', 'Next.js', 'XAF'],
    year: '2025',
    domain: 'Fintech Infrastructure',
  },
  {
    slug: 'agentpay',
    num: '002',
    name: 'AgentPay',
    status: 'Concept',
    href: null,
    dotFill: true,
    dotOp: 0.6,
    desc: 'Agent-native payment infrastructure. Programmable wallets with spending rules for AI agents transacting autonomously on behalf of humans. Mobile Money as the proving ground.',
    tags: ['AI Infrastructure', 'Payments', 'Agent economy'],
    year: '2026',
    domain: 'AI Agent Systems',
  },
  {
    slug: 'eyedoc',
    num: '003',
    name: 'EyeDoc',
    status: 'Live — v0.1',
    href: 'https://useeyedoc.vercel.app',
    dotFill: true,
    dotOp: 1,
    desc: 'AI clinical copilot for frontline healthcare workers. ECG, ultrasound, lab interpretation and differential diagnosis engine purpose-built for rural clinics.',
    tags: ['Health AI', 'Diagnostics', 'Rural care'],
    year: '2026',
    domain: 'Clinical Intelligence',
  },
  {
    slug: 'the-farm',
    num: '004',
    name: 'The Farm',
    status: 'Phase 3 active',
    href: null,
    dotFill: true,
    dotOp: 0.45,
    desc: '3-phase potato farming operation in Cameroon. 2,500,000+ XAF invested. Full expense tracking, crop schedule, emergency inputs and lessons documented across every phase.',
    tags: ['Agri-tech', 'Field ops', 'Cameroon'],
    year: 'Since 2023',
    domain: 'Agricultural Technology',
  },
  {
    slug: 'paymenthub',
    num: '005',
    name: 'PaymentHub',
    status: 'Research',
    href: null,
    dotFill: false,
    dotOp: 0.55,
    desc: 'SWIFT MT to ISO 20022 MX translation engine. Technical specification covering 32 message types across 3 implementation phases for PKF Research Center.',
    tags: ['SWIFT', 'ISO 20022', 'PKF'],
    year: 'Since 2023',
    domain: 'Financial Messaging',
  },
  {
    slug: 'roof',
    num: '006',
    name: 'Roof',
    status: 'Live',
    href: 'https://www.roofapp.app',
    dotFill: true,
    dotOp: 1,
    desc: 'Real estate platform for property listings, video/image uploads, and monetization. Built with React Native and Node.js. Live on web and Play Store.',
    tags: ['Real Estate', 'React Native', 'Node.js'],
    year: 'Since 2024',
    domain: 'Real Estate',
  },
  {
    slug: 'klystrr',
    num: '007',
    name: 'Klystrr',
    status: 'Live — Beta',
    href: 'https://klystrr.com',
    dotFill: true,
    dotOp: 1,
    desc: 'VPS deployment platform that brings cloud simplicity to self-hosted infrastructure. Deploy Node.js, Next.js, and Python apps to any VPS in minutes — automating SSH, PM2, Nginx, and SSL. 50+ beta users.',
    tags: ['DevOps', 'VPS', 'Next.js', 'Developer tools'],
    year: '2026',
    domain: 'Developer Infrastructure',
    role: 'Frontend Lead',
  },
  {
    slug: 'tsu',
    num: '008',
    name: 'Tsʉ̌',
    status: 'Pre-MVP — YC Applied',
    href: 'https://usetsu.vercel.app',
    dotFill: false,
    dotOp: 0.7,
    desc: 'AI precision agriculture platform for smallholder farmers in Central Africa. Combines soil sensors, field cameras, and AI to deliver a daily morning report telling the farmer exactly what is wrong in their field and what to do about it. Applied to YC Fall 2026.',
    tags: ['AgriTech', 'AI', 'Hardware', 'IoT', 'CEMAC'],
    year: '2026',
    domain: 'Agricultural Technology',
    role: 'Solo founder',
    note: 'Tsʉ̌ — to grow, in Ghomala\'',
  },
];
