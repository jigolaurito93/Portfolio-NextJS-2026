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

      <div className="relative ml-2 md:ml-4">
        <div
          aria-hidden
          className="absolute bottom-2 left-0 top-2 w-px bg-primary/25"
        />

        {experiences.map((experience, i) => {
          const featured = i === 0;

          return (
            <motion.div
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative mb-10 pl-8 last:mb-0 md:pl-10"
            >
              <span
                className={`absolute left-0 top-2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 ${
                  featured
                    ? 'border-secondary bg-secondary'
                    : 'border-primary bg-tertiary'
                }`}
              >
                {featured && (
                  <span className="absolute inset-0 animate-pulse-live rounded-full bg-secondary" />
                )}
              </span>

              <article
                className={
                  featured ? 'glass glow-gold p-6 md:p-8' : 'pb-2'
                }
              >

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
              </article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
