import { ProjectType } from './types';

// Placeholder projects — swap titles, copy, images, and URLs when ready.
export const projects: ProjectType[] = [
  {
    id: 'linepulse',
    title: 'LinePulse',
    description:
      'Shop-floor KPI dashboard for MES line performance: OEE-style availability, downtime Pareto, and shift targets that refresh with the production clock — not after month-end.',
    image: '/images/whiteboard.jpg',
    tags: ['MES', 'SQL', 'Next.js', 'Dashboards'],
    category: 'MES',
    featured: true,
    github: 'https://github.com/jigolaurito93',
    live: '#projects',
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
  {
    id: 'matrimoni',
    title: 'Matrimoni',
    description:
      'Wedding planning web app built at Co.Lab — guest flows, shared plans, and Firebase auth in a React + Tailwind interface.',
    image: '/images/programmer.jpg',
    tags: ['React', 'Firebase', 'Tailwind'],
    category: 'Web',
    github: 'https://github.com/jigolaurito93',
    live: '#projects',
  },
  {
    id: 'break-buddy',
    title: 'Break Buddy',
    description:
      'Accessible break-reminder app shipped on Vercel with a CI/CD workflow — React, Tailwind, and Material UI from the Co.Lab apprenticeship.',
    image: '/images/whiteboard.jpg',
    tags: ['React', 'Tailwind', 'Vercel'],
    category: 'Web',
    github: 'https://github.com/jigolaurito93',
    live: '#projects',
  },
];
