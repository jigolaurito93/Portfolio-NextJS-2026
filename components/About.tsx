'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const stats = [
  { label: 'Now', value: 'StarPlus Energy', detail: 'MES ops + data' },
  { label: 'Stack', value: 'Full-Stack', detail: 'Next.js · SQL · React' },
  { label: 'Path', value: 'Hospitality → Tech', detail: 'Chef to engineer' },
];

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-6 py-24 md:px-12 lg:px-24 xl:px-40"
    >
      <SectionHeading index="01" title="Who am I?" />

      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-64 md:mx-0 md:w-[380px]"
        >
          <Image
            src="/images/programmer.jpg"
            width={300}
            height={300}
            alt="Jose Laurito working at a computer"
            className="relative z-20 mb-6 w-64 rounded-xl md:hidden"
          />
          <Image
            src="/images/whiteboard.jpg"
            width={600}
            height={600}
            alt="Jose Laurito presenting at a whiteboard"
            className="relative z-20 hidden w-full rounded-xl md:block"
          />
          <span className="absolute left-5 top-5 z-10 h-[calc(100%-1.5rem)] w-full rounded-xl border-2 border-primary md:h-[calc(100%-0.5rem)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex flex-col gap-5 text-primary-light/90"
        >
          <p>
            Hello, I&apos;m Jose — a{' '}
            <span className="font-semibold text-primary">
              Full-Stack Software Engineer
            </span>{' '}
            and{' '}
            <span className="font-semibold text-primary">
              MES Operations Data Analyst
            </span>{' '}
            who sits between the shop floor and the data that keeps it moving.
          </p>
          <p>
            At{' '}
            <span className="font-semibold text-primary">StarPlus Energy</span>,
            I do both analysis and operations support: live MES troubleshooting
            when a line stalls, then turning work-order, scrap, and downtime
            history into KPIs supervisors can use on the shift — not in a
            monthly slide.
          </p>
          <p>
            Previously, as a{' '}
            <span className="font-semibold text-primary">Senior Developer</span>{' '}
            at{' '}
            <span className="font-semibold text-primary">
              The Spartan IT Group
            </span>
            , I led Agile delivery on Next.js, Supabase, and PostgreSQL —
            including The Kennel e-commerce platform and the Spartan corporate
            site, with OAuth and CI/CD in the mix.
          </p>
          <p>
            I earned my full-stack certification in 2023 while still working as
            a chef, then apprenticed at{' '}
            <span className="font-semibold text-primary">Co.Lab</span> on
            Matrimoni and Break Buddy. Hospitality still shows up as calm under
            pressure and a bias for finishing the ticket.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass px-4 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-primary-light/70">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
