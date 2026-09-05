'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 md:px-12 lg:px-24 xl:px-40"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-tertiary via-tertiary/88 to-tertiary" />
      <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative shrink-0"
        >
          <div className="glow-teal absolute inset-4 rounded-2xl" />
          <Image
            src="/images/profile-image.jpg"
            alt="Jose Laurito"
            width={1000}
            height={1000}
            className="relative z-20 w-[220px] rounded-2xl md:w-[260px] lg:w-72"
            priority
          />
          <span className="absolute left-4 top-4 z-10 h-full w-full rounded-2xl border-2 border-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="flex flex-col gap-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-secondary lg:self-start">
            <span className="h-1.5 w-1.5 animate-pulse-live rounded-full bg-secondary" />
            Status / Live · MES · StarPlus Energy · Indiana
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-sm tracking-widest text-secondary">
              Hi, my name is
            </p>
            <h1 className="font-display text-5xl font-bold leading-[0.95] text-secondary sm:text-6xl md:text-7xl lg:text-8xl">
              JOSE <span className="text-primary">LAURITO</span>
            </h1>
            <p className="max-w-xl text-lg text-primary-light/90 md:text-xl">
              Chicago-based{' '}
              <span className="font-semibold text-primary">
                Full-Stack Software Engineer
              </span>
              {' · '}
              MES Operations Data Analyst &amp; Support at{' '}
              <span className="font-semibold text-primary">
                StarPlus Energy
              </span>
            </p>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="/Jose-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-secondary px-7 py-2.5 text-sm font-semibold text-tertiary transition hover:bg-secondary-light"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-primary/50 px-7 py-2.5 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <SocialLinks />
    </section>
  );
};

export default Hero;
