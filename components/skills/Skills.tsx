'use client';

import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import Devops from './Devops';
import Framework from './Framework';
import Languages from './Languages';

const groups = [
  {
    title: 'Languages & Data',
    items: [
      'Python',
      'TypeScript',
      'JavaScript',
      'SQL',
      'HTML',
      'CSS',
      'PostgreSQL',
    ],
  },
  {
    title: 'Frameworks',
    items: [
      'React',
      'Next.js',
      'Node.js',
      'Flask',
      'Express',
      'Tailwind',
      'Bootstrap',
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      'GitHub',
      'Vercel',
      'VS Code',
      'Postman',
      'Figma',
      'Linear',
      'Slack',
    ],
  },
  {
    title: 'MES & Operations',
    items: [
      'MES Support',
      'KPI Reporting',
      'Root Cause Analysis',
      'SQL Analysis',
      'SOP / UAT',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-28 py-24">
      <div className="px-6 md:px-12 lg:px-24 xl:px-40">
        <SectionHeading index="04" title="Skills" align="center" />

        <div className="mb-16 grid gap-5 md:grid-cols-2">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass p-5"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-secondary">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-sm text-primary-light"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <Languages />
        <Framework />
        <Devops />
      </div>
    </section>
  );
};

export default Skills;
