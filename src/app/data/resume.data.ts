import {
  Education,
  Metric,
  Profile,
  Role,
  SiteSection,
  SkillGroup,
} from '../models/resume.model';

export const PROFILE: Profile = {
  name: 'Zachary Gorr',
  role: 'Software Engineer',
  tagline:
    'Building AI-native, backend, platform, and developer-infrastructure systems.',
  location: 'Orlando, Florida',
  headshot: 'assets/zachary-gorr-headshot.jpeg',
  summary: [
    'Full-stack software engineer with seven years building and operating production systems across backend services, developer infrastructure, data platforms, and user-facing applications — Python/FastAPI and NestJS services, Angular and React frontends, Snowflake data pipelines, and the CI/CD and test infrastructure around them.',
    'Designed and scaled an LLM-driven code review platform across 100+ repositories and six director organizations, architected organization-wide feature-flag infrastructure, and led security and integration architecture for payments systems. Takes ambiguous technical problems from architecture through rollout, observability, and operation.',
  ],
  links: [
    {
      label: 'Email',
      value: 'zacharygorr04@yahoo.com',
      href: 'mailto:zacharygorr04@yahoo.com',
      icon: 'mail',
    },
    {
      label: 'GitHub',
      value: '@zachary-gorr',
      href: 'https://github.com/zachary-gorr',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      value: '@zacharygorr',
      href: 'https://www.linkedin.com/in/zacharygorr/',
      icon: 'linkedin',
    },
  ],
};

export const SECTIONS: SiteSection[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
];

export const METRICS: Metric[] = [
  { value: '11,459', label: 'pull requests', detail: 'reviewed by the AI code review platform' },
  { value: '17.7M', label: 'lines of code', detail: 'analyzed across GitHub Enterprise and GitLab' },
  { value: '100+', label: 'repositories', detail: 'spanning six director organizations' },
  { value: '2,500+', label: 'hours returned', detail: 'estimated engineering time recovered' },
];

export const ROLES: Role[] = [
  {
    id: 'disney-payments-ai',
    company: 'Disney',
    mark: 'disney',
    title: 'Software Engineer — Payments & Strategic Acceleration',
    location: 'Orlando, FL',
    start: '07/2026',
    end: 'Present',
    current: true,
    blurb:
      'AI productivity analytics, payments security architecture, and developer release infrastructure.',
    initiatives: [
      {
        name: 'AI Analytics Platform',
        scope: 'Full-Stack Engineer & Metrics Owner',
        description:
          'Core engineer on a production AI productivity analytics platform spanning Python/FastAPI services, NestJS BFF, Angular 20, and Python ETL pipelines. Designed the end-to-end methodology for measuring AI productivity impact — P90 velocity baselines, organizational-hierarchy cold-start fallbacks, and team-size normalization — and made dashboard outputs auditable through expandable worked-math derivations. Re-architected the data layer around per-endpoint reactive resources across 14 endpoints, replaced manual CSV handoffs with direct Snowflake ingestion, and integrated LaunchDarkly and Vault-backed secrets across environments to support controlled rollout and secure production operation.',
      },
      {
        name: 'Wallet Payments',
        scope: 'Security & Integration Architecture',
        description:
          'Led the pre-ship security review of a Cast-servicing authentication bridge, identifying six blocking defects and coordinating remediation across four repositories: centralized RS256 verification, actor-claim binding, read-only scoping, and exact-origin interceptors. Built a proof of concept embedding the guest wallet into the Cast-facing Guest Service Suite via delegated on-behalf-of tokens (RFC 8693), and authored the architecture and LOE docs leadership used for the build decision.',
      },
      {
        name: 'Developer Experience & Release Infrastructure',
        scope: 'Creator',
        description:
          'Shipped an in-app release-announcement and guided-tour platform (chained UI workflows, in-app authoring, CI anchor-integrity validation) that supported three production releases in its first week. Automated a weekly delivery report synthesizing Git and Jira state across four repos — adopted by the director and replicated by two more teams. Restored dark E2E coverage on a payments surface: stood up a multi-service wallet stack locally, migrated the harness to Nightwatch v3, and closed a credential-leak vector in test tooling.',
      },
    ],
  },
  {
    id: 'disney-swe',
    company: 'Disney',
    mark: 'disney',
    title: 'Software Engineer — Dine & Experience Engineering',
    location: 'Orlando, FL',
    start: '11/2024',
    end: '07/2026',
    blurb:
      'Created the organization’s AI code review platform, its feature-flag infrastructure, and core dining reservation systems.',
    initiatives: [
      {
        name: 'AI Code Review Platform',
        scope: 'Creator & Lead Engineer',
        description:
          'Designed and shipped an LLM-driven code review platform that processed 11,459 pull requests and 17.7M lines of code across 100+ repositories and six director organizations, achieving 37-second average review time, 59% auto-approval, and an estimated 2,500+ engineering hours returned. Owned the system architecture end to end — webhook ingestion, LLM planning, sandboxed execution, agent orchestration, Postgres-backed issue lifecycle management, configurable prompts, and IDE integration through MCP — across GitHub Enterprise and GitLab.',
      },
      {
        name: 'Feature Flag Infrastructure',
        scope: 'Organization SME & Architect',
        description:
          'Architected and established an organization-wide feature-flag platform across four cast- and guest-facing applications: Terraform-managed flag definitions, Harness CI/CD integration, and SDK patterns supporting progressive rollout, kill switches, and user-targeted segmentation. Established the reference implementation other teams use to adopt the platform.',
      },
      {
        name: 'DineX365 Dining Reservations',
        scope: 'Core Engineer',
        description:
          'Core engineer on the Angular 20/Nx platform powering dining reservations for Walt Disney World and Disneyland, serving approximately 1M reservations per month. Owned booking-to-checkout workflows, payment integration, and a facility-scoped authorization framework governing 15+ business actions. Built the administrative CRM and production Playwright E2E infrastructure and led WCAG remediation across the platform.',
      },
    ],
  },
  {
    id: 'the-villages',
    company: 'The Villages',
    mark: 'villages',
    title: 'Software Engineer',
    location: 'Orlando, FL',
    start: '04/2024',
    end: '11/2024',
    blurb: 'Led a cross-platform resident application from architecture to store release.',
    initiatives: [
      {
        name: 'Resident App v4',
        scope: 'Lead Developer',
        description:
          'Led architecture and development of a cross-platform Ionic/Angular/Capacitor application shipped to iOS and Android. Owned technical architecture, translated stakeholder requirements into system designs, and drove the product from design through production release.',
      },
    ],
  },
  {
    id: 'medigi',
    company: 'Medigi',
    mark: 'medigi',
    title: 'Software Engineer',
    location: 'Orlando, FL',
    start: '11/2019',
    end: '03/2024',
    blurb: 'Re-architected a healthcare platform frontend and unified its design system.',
    initiatives: [
      {
        name: 'Platform Redesign',
        scope: 'Lead Developer',
        description:
          'Led a full re-architecture of the healthcare platform frontend and unified the design system across the product suite. Designed and delivered a provider–patient messaging system end to end and mentored junior engineers across four years of product development.',
      },
    ],
  },
];

/**
 * Forward-looking, and deliberately short. These are directions of travel, not
 * claimed experience — the Skills section renders them under a "going deeper on"
 * label so they never read as skills already in hand. Edit freely.
 */
export const GROWTH_AREAS: string[] = [
  'Distributed systems at scale',
  'LLM evaluation & observability',
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Languages & Frameworks',
    core: ['TypeScript', 'Angular 20', 'Node.js', 'NestJS', 'Python'],
    supporting: ['JavaScript', 'React', 'FastAPI', 'Nx', 'RxJS', 'NgRx Signal Store'],
  },
  {
    name: 'Backend & Distributed Systems',
    core: ['PostgreSQL/Prisma', 'REST APIs', 'BullMQ job queues'],
    supporting: [
      'MySQL/Aurora', 'Snowflake', 'ETL pipelines', 'Webhook systems',
      'Asynchronous processing',
    ],
  },
  {
    name: 'Infrastructure & Platform',
    core: ['Terraform', 'Docker', 'Harness CI/CD', 'LaunchDarkly'],
    supporting: [
      'LocalStack', 'GitHub Enterprise', 'GitLab', 'Progressive delivery',
      'Feature-flag infrastructure',
    ],
  },
  {
    name: 'Security & Identity',
    core: ['OAuth2/OIDC', 'JWT/JWKS'],
    supporting: [
      'Delegated tokens (RFC 8693)', 'Application security', 'HashiCorp Vault',
      'Authorization architecture',
    ],
  },
  {
    name: 'Testing & Reliability',
    core: ['Playwright', 'Jest'],
    supporting: [
      'Nightwatch/Selenium', 'CDP-based automation', 'E2E infrastructure',
      'CI validation', 'WCAG/axe-core',
    ],
  },
  {
    name: 'AI Engineering',
    core: ['LLM applications', 'Agent orchestration', 'MCP', 'AI code review'],
    supporting: ['Prompt/context engineering', 'AI productivity analytics'],
  },
];

export const EDUCATION: Education = {
  school: 'University of Central Florida',
  credential: 'B.S., Computer Science',
  location: 'Orlando, FL',
};
