'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectType } from '@/lib/types';

interface ProjectCardProps {
  project: ProjectType;
  featured?: boolean;
  wide?: boolean;
}

const ProjectLinks = ({ project }: { project: ProjectType }) => (
  <div className="flex items-center gap-3">
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title} GitHub`}
      className="text-primary transition hover:text-primary-light"
    >
      <Github className="h-5 w-5" />
    </a>
    <a
      href={project.live}
      aria-label={`${project.title} live demo`}
      className="text-primary transition hover:text-primary-light"
    >
      <ExternalLink className="h-5 w-5" />
    </a>
  </div>
);

const ProjectCard = ({
  project,
  featured = false,
  wide = false,
}: ProjectCardProps) => {
  if (featured) {
    return (
      <motion.article
        layout
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        className="relative grid items-center gap-0 md:grid-cols-12"
      >
        <div className="relative col-span-12 h-56 overflow-hidden rounded-2xl md:col-span-7 md:h-[340px] lg:h-[400px]">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tertiary/20 via-transparent to-tertiary/80" />
        </div>

        <div className="glass glow-teal relative z-10 col-span-12 -mt-8 p-6 md:col-span-6 md:-ml-16 md:mt-0 lg:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
            Featured project
          </p>
          <h3 className="mt-2 font-display text-3xl font-semibold text-primary">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-primary-light/85 md:text-base">
            {project.description}
          </p>
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
          <div className="mt-5">
            <ProjectLinks project={project} />
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6 }}
      className={`glass group overflow-hidden ${wide ? 'md:col-span-2' : ''}`}
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-tertiary/20 to-transparent" />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-primary">
            {project.title}
          </h3>
          <ProjectLinks project={project} />
        </div>
        <p className="text-sm leading-relaxed text-primary-light/80">
          {project.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/20 px-2.5 py-0.5 font-mono text-[10px] text-primary-light"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
