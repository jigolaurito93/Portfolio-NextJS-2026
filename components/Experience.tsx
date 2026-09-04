'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/lib/experienceData';
import SectionHeading from './SectionHeading';

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-28 px-6 py-24 md:px-12 lg:px-24 xl:px-40"
    >
      <SectionHeading index="02" title="Experience" />

      <div className="relative ml-2 border-l border-primary/25 pl-8 md:ml-4">
        {experiences.map((experience, i) => {
          const featured = i === 0;

          return (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`relative mb-10 last:mb-0 ${
                featured ? 'glass glow-gold p-6 md:p-8' : 'pb-2'
              }`}
            >
              <span
                className={`absolute -left-[41px] top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 md:-left-[45px] ${
                  featured
                    ? 'border-secondary bg-secondary'
                    : 'border-primary bg-tertiary'
                }`}
              >
                {featured && (
                  <span className="absolute h-3.5 w-3.5 animate-pulse-live rounded-full bg-secondary" />
                )}
              </span>

              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-display text-xl font-semibold text-primary-light md:text-2xl">
                  {experience.role}
                  <span className="text-primary"> — {experience.company}</span>
                </h3>
                <p className="font-mono text-xs text-primary md:text-sm">
                  {experience.date}
                </p>
              </div>

              {featured && (
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-secondary">
                  Live role · analyst + operations support
                </p>
              )}

              <ul className="mt-4 flex list-disc flex-col gap-2 pl-5">
                {experience.acc.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-secondary marker:text-primary md:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
