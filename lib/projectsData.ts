import { ProjectType } from './types';

// Screenshots: drop 16:10 PNGs in public/images/projects/<slug>/ then set shots[].src
export const projects: ProjectType[] = [
  {
    id: 'onyx-carwash',
    title: 'Onyx Premium Carwash',
    description:
      'Full-stack marketing site and owner-facing CMS for a premium car wash. Public pages pull live catalog, hours, gallery, and FAQs from Supabase; the shop edits everything from a gated admin — no code deploys for copy, prices, or photos.',
    image: '/images/projects/onyx/cover.png',
    tags: ['Next.js', 'Supabase', 'Tailwind', 'shadcn/ui', 'Zod', 'Resend'],
    category: 'Full-Stack',
    featured: true,
    github: 'https://github.com/jigolaurito93/carwash-web-app',
    live: 'https://carwash-web-app.vercel.app',
    logo: '/images/projects/onyx/logo.png',
    highlights: [
      'Public site: Home, About, Services, Gallery, Contact',
      'Invite-only admin CMS with role-gated accounts',
      'Live catalog, hours, gallery, and FAQ in Postgres',
      'Zod-validated contact form delivered through Resend',
    ],
    shots: [
      { label: 'Home', src: '/images/projects/onyx/cover.png' },
      { label: 'Services', src: '/images/projects/onyx/services.png' },
      { label: 'Contact', src: '/images/projects/onyx/contact.png' },
    ],
  },
  {
    id: 'break-buddy',
    title: 'Break Buddy',
    description:
      'Accessible break-reminder app from the Co.Lab apprenticeship — timers, reminders, and a CI/CD workflow shipped on Vercel with React and Tailwind.',
    image: '/images/projects/break-buddy/home.png',
    tags: ['React', 'Tailwind', 'Vite', 'Vercel'],
    category: 'Web',
    github: 'https://github.com/Break-Buddy/Break-Buddy-React',
    live: 'https://break-buddy-react.vercel.app',
    shots: [
      { label: 'Home', src: '/images/projects/break-buddy/home.png' },
      { label: 'App', src: '/images/projects/break-buddy/app.png' },
      { label: 'Flow', src: '/images/projects/break-buddy/flow.png' },
    ],
  },
  {
    id: 'matrimoni',
    title: 'Matrimoni',
    description:
      'Wedding planning web app built at Co.Lab — venue search and filters, a budget calculator, and Firebase auth in a React + Tailwind interface.',
    image: '/images/projects/matrimoni/home.png',
    tags: ['React', 'Firebase', 'Tailwind', 'Vite'],
    category: 'Web',
    github: 'https://github.com/Colab-Team-4/matrimoni-react',
    live: 'https://matrimoni.vercel.app',
    shots: [
      { label: 'Home', src: '/images/projects/matrimoni/home.png' },
      { label: 'Venues', src: '/images/projects/matrimoni/venues.png' },
      { label: 'Budget', src: '/images/projects/matrimoni/budget.png' },
    ],
  },
  {
    id: 'the-kennel',
    title: 'The Kennel',
    description:
      'E-commerce platform for Bulldog Community Gaming LLC — catalog, inventory, and event scheduling on Next.js, Supabase, and PostgreSQL.',
    image: '/images/programmer.jpg',
    tags: ['Next.js', 'Supabase', 'PostgreSQL'],
    category: 'Full-Stack',
    github: 'https://github.com/jigolaurito93',
    live: '#projects',
  },
  {
    id: 'shiftdesk',
    title: 'ShiftDesk',
    description:
      'MES operations support console: incident queue, SLA timers, and RCA notes so first-line support can restore production and capture what actually broke.',
    image: '/images/hero-bg.jpg',
    tags: ['Operations Support', 'React', 'MES'],
    category: 'MES',
    github: 'https://github.com/jigolaurito93',
    live: '#projects',
  },
];
