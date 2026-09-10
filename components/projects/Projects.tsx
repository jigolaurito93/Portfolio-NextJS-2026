'use client';

import { useMemo, useState } from 'react';
import { projects } from '@/lib/projectsData';
import { ProjectCategory } from '@/lib/types';
import { cn } from '@/lib/utils';
import SectionHeading from '../SectionHeading';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';

const filters: Array<'All' | ProjectCategory> = ['All', 'Full-Stack', 'Web'];

const Projects = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  const featured = filtered.filter((project) => project.featured);
  const rest = filtered.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-28 px-6 py-24 md:px-12 lg:px-24 xl:px-40"
    >
      <SectionHeading index="03" title="Projects" />

      <div className="mb-10 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={cn(
              'rounded-full border px-4 py-1.5 font-mono text-xs tracking-wide transition',
              filter === item
                ? 'border-secondary bg-secondary/15 text-secondary'
                : 'border-primary/25 text-primary-light hover:border-primary/60'
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-16">
        {featured.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}

        {rest.length > 0 && (
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
              More work
            </p>
            <div className="mt-2 border-t border-primary/15">
              {rest.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
