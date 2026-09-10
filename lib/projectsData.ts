import { ProjectType } from './types';

// Screenshots: drop 16:10 PNGs in public/images/projects/<slug>/ then set shots[].src
export const projects: ProjectType[] = [
  {
    id: 'onyx-carwash',
    title: 'Onyx Premium Carwash',
    description:
      'Full-stack marketing site and owner-facing CMS for a premium car wash. Public pages pull live catalog, hours, gallery, and FAQs from Supabase; the contact page embeds a Google Maps pin for directions. The shop edits everything from a gated admin — no code deploys for copy, prices, or photos.',
    image: '/images/projects/onyx/cover.png',
    tags: [
      'Next.js',
      'Supabase',
      'Tailwind',
      'shadcn/ui',
      'Zod',
      'Resend',
      'Google Maps',
    ],
    category: 'Full-Stack',
    featured: true,
    github: 'https://github.com/jigolaurito93/carwash-web-app',
    live: 'https://carwash-web-app.vercel.app',
    logo: '/images/projects/onyx/logo.png',
    highlights: [
      'Public site: Home, About, Services, Gallery, Contact',
      'Invite-only admin CMS with role-gated accounts',
      'Live catalog, hours, gallery, and FAQ in Postgres',
      'Google Maps JavaScript API for shop location and directions',
      'Zod-validated contact form delivered through Resend',
    ],
    shots: [
      { label: 'Home', src: '/images/projects/onyx/cover.png' },
      { label: 'Services', src: '/images/projects/onyx/services.png' },
      { label: 'Contact', src: '/images/projects/onyx/contact.png' },
      { label: 'Appointments', src: '/images/projects/onyx/appointments.png' },
      { label: 'Dashboard', src: '/images/projects/onyx/dashboard.png' },
      {
        label: 'Edit Appt',
        src: '/images/projects/onyx/edit-appointment.png',
      },
      {
        label: 'Edit Services',
        src: '/images/projects/onyx/edit-services.png',
      },
    ],
  },
  {
    id: 'nuptial-suite',
    title: 'Nuptial Suite',
    description:
      'Single-couple wedding invitation site with a scroll-driven envelope hero. Guests unlock a private SPA covering venue, program, entourage, dress code, gallery, gift guide, and FAQs, then submit an RSVP stored in Supabase.',
    image: '/images/projects/nuptial-suite/cover.png',
    tags: ['Next.js', 'Supabase', 'Tailwind', 'Motion', 'TypeScript'],
    category: 'Full-Stack',
    featured: true,
    github: 'https://github.com/jigolaurito93/nuptial-suite',
    live: 'https://nuptial-suite.vercel.app',
    clip: {
      src: '/images/projects/nuptial-suite/envelope-open.mp4',
      poster: '/images/projects/nuptial-suite/cover.png',
      label: 'Scroll to open',
    },
    highlights: [
      'Scroll-driven envelope that opens into a letter',
      'Password-gated guest invitation on a single page',
      'Venue, program, gallery, gift guide, and FAQs',
      'Public RSVP stored in Supabase',
      'Couple admin scaffold with auth',
    ],
    shots: [
      { label: 'Envelope', src: '/images/projects/nuptial-suite/cover.png' },
      {
        label: 'Invitation',
        src: '/images/projects/nuptial-suite/invitation.png',
      },
      { label: 'Venue', src: '/images/projects/nuptial-suite/venue.png' },
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
];
