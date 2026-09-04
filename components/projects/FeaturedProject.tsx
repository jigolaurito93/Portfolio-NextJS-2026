'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectType } from '@/lib/types';
import ShotGallery from './ShotGallery';

const FeaturedProject = ({ project }: { project: ProjectType }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      className="relative"
    >
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
            Featured project
          </p>
          <div className="mt-2 flex items-center gap-3">
            {project.logo && (
              <Image
                src={project.logo}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            )}
            <h3 className="font-display text-3xl font-semibold text-primary md:text-4xl">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-tertiary transition hover:bg-secondary-light"
            >
              <ExternalLink className="h-4 w-4" />
              Live site
            </a>
          )}
        </div>
      </div>

      <ShotGallery project={project} priority />

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <p className="text-sm leading-relaxed text-primary-light/85 md:text-base">
          {project.description}
        </p>

        <div>
          {project.highlights && (
            <ul className="space-y-2">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm text-primary-light/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 font-mono text-[11px] text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
