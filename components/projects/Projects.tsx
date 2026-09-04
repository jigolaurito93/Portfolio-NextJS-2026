'use client';

import { useMemo, useState } from 'react';
import { projects } from '@/lib/projectsData';
import { ProjectCategory } from '@/lib/types';
import { cn } from '@/lib/utils';
import SectionHeading from '../SectionHeading';
import ProjectCard from './ProjectCard';

const filters: Array<'All' | ProjectCategory> = [
  'All',
  'MES',
  'Full-Stack',
  'Web',
];

const Projects = () => {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  const featured = filtered.find((project) => project.featured);
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

      <div className="flex flex-col gap-10">
        {featured && <ProjectCard project={featured} featured />}

        {rest.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                wide={index === 0 && rest.length % 2 === 1}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
