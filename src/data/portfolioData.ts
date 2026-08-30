import { Project, SkillCategory, ExperienceItem, ServiceItem, MetricItem, EducationItem, HighlightItem } from '../types';

export const PERSONAL_INFO = {
  name: 'M. Khumaedi',
  role: 'Full Stack Developer & UI Engineer',
  avatar: '/Profile.png',
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFOwmpQFvLUF1JoR6lo6gP-x5aPOKknYJXXB1XsPURnmslu33CCcSc8VI8UtpSLyhYdBKfa6n_3iq0F_3MKDYhozHQ4vCCebfQneOiQ7zSIxpgGyht_x7IuYd2FtmDT49yhBtxbyLFcDTOUXxj4PaTy5mNdDaprlnZt4wwTtxtdF7Iwar0EZ8jyQYKS5GfJRnmy40QQuvpnD1ci-Y00MRUwRCl96kFUt9xfO-jAto4vM0mmIAYPMq7hg',
  tagline: 'Building scalable digital products with modern technologies and exceptional user experience.',
  about: 'Passionate Full Stack Developer specializing in modern web applications, scalable architecture, clean code, intuitive UI/UX, and high-performance systems.',
  location: 'Jakarta, Indonesia (WIB / UTC+7)',
  email: 'edikhumaedi233@gmail.com',
  github: 'https://github.com/MKhumaedi',
  linkedin: 'https://www.linkedin.com/in/m-khumaedi-372116142/',
  twitter: '#',
  status: 'Available for Hire',
};

export const METRICS: MetricItem[] = [
  { value: '45+', label: 'Projects Completed', sublabel: 'Web Apps & Data Analysis' },
  { value: '18+', label: 'Happy Clients', sublabel: 'Startups' },
  { value: '5+', label: 'Years Experience', sublabel: 'IT Trainer, Full Stack & Data Analyst' },
  { value: '24+', label: 'Technologies', sublabel: 'Mastered in Production' },
];

export const TECH_STACK_MARQUEE = [
  'REACT.JS',
  'TYPESCRIPT',
  'NEXT.JS',
  'NODE.JS',
  'POSTGRESQL',
  'TAILWIND CSS',
  'DOCKER',
  'AWS',
  'EXPRESS',
  'GOLANG',
  'FIGMA',
  'PHP',
  'BOOTSTRAP',
];

export const PROJECTS: Project[] = [
  {
    id: 'JPS',
    title: 'Company Profile Jasa Peredam Suara',
    category: 'LANDING',
    tags: ['BOOTSTRAP', 'Jquery','JavaScript','HTML5', 'MySQL'],
    description: '',
    fullDescription: '',
    image: '/JPS.png',
    featured: true,
    year: '2024',
    metrics: '+140% Speed • 10k+ Active Users',
    liveUrl: 'https://jasaperedamsuara.com/',
    githubUrl: '',
    challenge: '',
    solution: ''
  },
  {
    id: 'cardlyn',
    title: 'Cardlyn SaaS Platform',
    category: 'FULL STACK',
    tags: ['CodeIgniter', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    description: '',
    fullDescription: '',
    image: '/Cardlyn.png',
    featured: true,
    year: '2024',
    metrics: '$2.4M ARR Processed • <500ms Latency',
    liveUrl: 'https://cardlyn.com/',
    githubUrl: '',
    challenge: '',
    solution: ''
  },
  {
    id: 'Catalog',
    title: 'Catalog Platform',
    category: 'LANDING',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    description: '',
    fullDescription: '',
    image: '/Catalog.png',
    featured: true,
    year: '2026',
    metrics: '18.4% Conversion Rate • 99 Lighthouse',
    liveUrl: 'https://catalog.globalniaga.co.id/',
    githubUrl: '',
    challenge: '',
    solution: ''
  },
  {
    id: 'inventory',
    title: 'Inventory Management System',
    category: 'FULL STACK',
    tags: ['Next.js', 'TypeScript', 'PostgreeSQL', 'Tailwind CSS', 'Sanity CMS', 'ReactJS', 'Zustand', 'Framer Motion'],
    description: '',
    fullDescription: '',
    image: '/Inventory.png',
    featured: false,
    year: '2026',
    metrics: '',
    liveUrl: 'https://inventory.globalniaga.co.id/',
    githubUrl: '',
    challenge: '',
    solution: ''
  },
  {
    id: 'stayease',
    title: 'StayEase Hotel Booking Platform',
    category: 'FULL STACK',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Stripe API'],
    description: '',
    fullDescription: '',
    image: '/StayEase.png',
    featured: false,
    year: '2026',
    metrics: '50ms Sync Speed • 50k+ Active Tasks',
    liveUrl: 'https://stayease.online',
    githubUrl: 'https://github.com/MKhumaedi/StayEase-Frontend.git',
    challenge: '',
    solution: ''
  },
  {
    id: 'tiketmu',
    title: 'Tiketmu Booking Platform',
    category: 'FULL STACK',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Redis'],
    description: '',
    fullDescription: '',
    image: '/Tiketmu.png',
    featured: false,
    year: '2026',
    metrics: '+35% Cart Checkout • PWA Ready',
    liveUrl: 'https://tiketmu.vercel.app/',
    githubUrl: 'https://github.com/MKhumaedi/tiketmu.git',
    challenge: '',
    solution: ''
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'FRONTEND',
    title: 'Frontend Engineering',
    skills: [
      { name: 'React.js & React 19', level: 80, badge: 'Master' },
      { name: 'TypeScript & Type Systems', level: 80, badge: 'Expert' },
      { name: 'Next.js (App Router, SSR)', level: 70, badge: 'Expert' },
      { name: 'Tailwind CSS & Design Tokens', level: 80, badge: 'Expert' },
      { name: 'HTML5, CSS3, Modern Layouts', level: 80, badge: 'Expert' },
      { name: 'Framer Motion & Web Animations', level: 98, badge: 'Master' },
      { name: 'State (Zustand, Redux, TanStack Query)', level: 60, badge: 'Expert' }
    ]
  },
  {
    id: 'BACKEND',
    title: 'Backend Architecture',
    skills: [
      { name: 'Node.js & Express.js', level: 75, badge: 'Expert' },
      { name: 'RESTful & GraphQL API Design', level: 75, badge: 'Expert' },
      { name: 'NestJS & Microservices', level: 50, badge: 'Intermediate' },
      { name: 'Golang & High-Throughput APIs', level: 50, badge: 'Intermediate' },
      { name: 'WebSockets & Real-time Systems', level: 88, badge: 'Advanced' }
    ]
  },
  {
    id: 'DATABASE',
    title: 'Database & Cloud Storage',
    skills: [
      { name: 'PostgreSQL & Drizzle ORM / Prisma', level: 85, badge: 'Expert' },
      { name: 'MySQL', level: 86, badge: 'Advanced' },
      { name: 'AWS (S3, CloudFront, EC2, Lambda)', level: 65, badge: 'Intermediate' },
      { name: 'Docker & Containerization', level: 65, badge: 'Intermediate' }
    ]
  },
  {
    id: 'TOOLS',
    title: 'Tools & Workflow',
    skills: [
      { name: 'Git, GitHub Actions & CI/CD Pipelines', level: 80, badge: 'Expert' },
      { name: 'Figma & UI Design Systems', level: 90, badge: 'Expert' },
      { name: 'Vite, Webpack & Build Tooling', level: 92, badge: 'Expert' },
      { name: 'Testing (Jest, Vitest, Cypress)', level: 84, badge: 'Advanced' },
      { name: 'Linux Server Administration & Nginx', level: 66, badge: 'Intermediate' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: 'February 2026 – Present',
    role: 'IT & Infrastructure Staff',
    company: 'PT. Global Niaga Internusa',
    location: 'South Jakarta, Indonesia',
    description: [
      'Provide IT support for hardware, software, and network systems.',
      'Manage and maintain company websites using WordPress.',
      'Configure domains, hosting, cPanel, and business email.',
      'Perform website backup, monitoring, and troubleshooting.',
      'Support internal users with technical issues.',
      'Manage company IT assets.',
      'Develop responsive internal web applications.'
    ],
    skills: ['WordPress', 'cPanel', 'Networking', 'PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS']
  },
  {
    id: 'exp-2',
    period: 'February 2023 – Present',
    role: 'Part-time Web Developer & Data Analyst',
    company: 'PT. Fastwork Technologies Indonesia',
    location: 'Indonesia',
    description: [
      'Develop responsive web applications.',
      'Build systems using PHP and CodeIgniter.',
      'Manage MySQL databases.',
      'Perform business data analysis.',
      'Process and validate large datasets.',
      'Execute Google Ads and SEO optimization.',
      'Collaborate directly with clients.'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'CodeIgniter', 'MySQL', 'Google Ads', 'SEO']
  },
  {
    id: 'exp-3',
    period: 'June 2023 – October 2025',
    role: 'IT Trainer',
    company: 'PT. Internusa Alvindo Ventura',
    location: 'Indonesia',
    description: [
      'Teach Website Development.',
      'Teach HTML, CSS, SCSS, JavaScript, jQuery.',
      'Teach PHP, Bootstrap, MySQL, CodeIgniter.',
      'Teach Cloud Hosting.',
      'Teach SEO and Google Search Console.',
      'Teach Advanced Microsoft Excel & VBA.',
      'Teach Graphic Design.'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Bootstrap', 'MySQL', 'CodeIgniter', 'Excel', 'VBA', 'CorelDraw', 'Photoshop']
  },
  {
    id: 'exp-4',
    period: 'June 2020 – June 2023',
    role: 'Data Management Staff',
    company: 'PT. Rubber Pan Java',
    location: 'Brebes, Indonesia',
    description: [
      'Process operational business data.',
      'Build KPI Dashboard.',
      'Analyze operational performance.',
      'Validate SOP.',
      'Support quality audits.',
      'Create management reports.'
    ],
    skills: ['Excel', 'SAP ERP', 'Dashboard', 'Power Query', 'Power Pivot']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'fullstack-dev',
    title: 'Full Stack Web Development',
    subtitle: 'End-to-End Application Engineering',
    description: 'Building robust, scalable web applications from scratch with modern technologies like React, Next.js, Node.js, and PostgreSQL. Focused on clean code and long-term maintainability.',
    features: ['Single-Page & SSR Applications', 'Custom Admin Dashboards & SaaS', 'Secure REST & GraphQL APIs', 'Database Design & Optimization'],
    icon: 'code'
  },
  {
    id: 'ui-ux-arch',
    title: 'UI/UX & Design Systems',
    subtitle: 'Pixel-Perfect Frontend Engineering',
    description: 'Translating design concepts into responsive, highly interactive, and accessible web interfaces. Crafting flexible component libraries and design tokens with Tailwind CSS.',
    features: ['Design System Architecture', 'Micro-interactions & Animations', 'Mobile-First Responsive Layouts', 'WCAG Accessibility Compliance'],
    icon: 'palette'
  },
  {
    id: 'system-arch',
    title: 'System Architecture & APIs',
    subtitle: 'Scalable Backend Infrastructure',
    description: 'Architecting high-throughput backend services, database schemas, serverless functions, and real-time WebSocket pipelines for enterprise reliability.',
    features: ['Microservices & Serverless', 'PostgreSQL & Redis Caching', 'Real-Time WebSocket Sync', 'AWS & Docker Cloud Deployment'],
    icon: 'dns'
  },
  {
    id: 'performance-seo',
    title: 'Performance & SEO Audits',
    subtitle: 'Speed & Conversion Optimization',
    description: 'Auditing existing web applications to pinpoint bottlenecks, decrease initial bundle sizes, boost Core Web Vitals, and optimize search engine ranking.',
    features: ['Lighthouse 100 Audits', 'Bundle Splitting & Lazy Loading', 'Server-Side Rendering (SSR)', 'SEO Structured Data Schema'],
    icon: 'speed'
  }
];

export const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    id: 'hl-1',
    title: '5+ Years of Professional Experience',
    description: 'Experienced in IT Infrastructure, Technical Support, Web Development, Data Analysis, and Digital Solutions across multiple industries.',
    icon: 'award',
    tags: ['IT Infrastructure', 'Web Dev', 'Data Analysis', 'Tech Support']
  },
  {
    id: 'hl-2',
    title: 'Multiple Web Applications Delivered',
    description: 'Successfully designed and developed responsive websites and internal business systems using modern web technologies.',
    icon: 'globe',
    tags: ['Web Applications', 'WordPress', 'CodeIgniter', 'PHP', 'React']
  },
  {
    id: 'hl-3',
    title: 'IT Trainer & Mentor',
    description: 'Delivered professional training in Web Development, Microsoft Excel, Database, SEO, and Programming for students and professionals.',
    icon: 'users',
    tags: ['Web Dev Training', 'Excel & VBA', 'SEO', 'Database']
  },
  {
    id: 'hl-4',
    title: 'Business Data & Analytics',
    description: 'Managed large-scale business datasets, created dashboards, and supported management decisions through analytical reporting.',
    icon: 'bar-chart',
    tags: ['KPI Dashboards', 'Data Analytics', 'Power Query', 'Excel']
  },
  {
    id: 'hl-5',
    title: 'Modern Technology Stack',
    description: 'Experienced with React, Next.js, TypeScript, Node.js, Express.js, PHP, CodeIgniter, MySQL, PostgreSQL, Prisma ORM, Tailwind CSS, and REST API development.',
    icon: 'cpu',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'PHP']
  },
  {
    id: 'hl-6',
    title: 'Continuous Learning',
    description: 'Completed a Full Stack Web Development Bootcamp while continuously improving modern software engineering skills.',
    icon: 'graduation-cap',
    tags: ['Purwadhika Bootcamp', 'Full Stack', 'Software Engineering']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-d3',
    institution: 'Politeknik Mitra Karya Mandiri',
    degree: 'Associate Degree (D3)',
    major: 'Informatics Management',
    period: '2019 – 2022',
    status: 'Graduated',
    location: 'Brebes, Central Java, Indonesia',
    gpa: '3.54 / 4.00',
    achievement: 'Best Graduate Award',
    description: 'Completed an Associate Degree in Informatics Management with a strong foundation in software engineering, information systems, database management, networking, web development, and project management.\n\nSuccessfully completed multiple academic software projects while developing analytical thinking, problem-solving skills, and modern web development practices.',
    relevantSubjects: [
      'Software Engineering',
      'Database Systems',
      'Information Systems',
      'Web Programming',
      'System Analysis',
      'Networking',
      'Project Management'
    ],
    techTags: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'MySQL',
      'Bootstrap',
      'Git',
      'Microsoft Office'
    ]
  },
  {
    id: 'edu-bootcamp',
    institution: 'Purwadhika Digital Technology School',
    degree: 'Full Stack Web Development',
    major: 'Full Stack Engineering',
    period: 'February 2026 – June 2026',
    status: 'Completed',
    location: 'Jakarta, Indonesia',
    description: 'Completed an intensive Full Stack Web Development Bootcamp focused on modern frontend and backend development, API integration, database design, authentication, deployment, and software engineering best practices.',
    relevantSubjects: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Prisma ORM',
      'PostgreSQL',
      'REST API',
      'Authentication',
      'Deployment'
    ],
    techTags: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'REST API',
      'Docker',
      'Git'
    ]
  }
];
