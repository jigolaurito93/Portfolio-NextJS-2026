'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ImagePlus } from 'lucide-react';
import { ProjectType } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  BrowserFrame,
  ProjectClipPlayer,
  ScreenshotImage,
  SHOT_ASPECT,
  ShotLightbox,
} from './ScreenshotImage';

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    video?: boolean;
    poster?: string;
  } | null>(null);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.04 }}
      className="grid gap-3 border-b border-primary/15 py-6 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-start sm:gap-x-6"
    >
      <span className="font-mono text-xs text-secondary sm:pt-1.5">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="min-w-0">
        <h3 className="font-display text-xl font-semibold text-primary">
          {project.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-primary-light/75">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] uppercase tracking-wider text-primary-light/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 sm:justify-end sm:pt-1">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} GitHub`}
          className="text-primary transition hover:text-primary-light"
        >
          <Github className="h-5 w-5" />
        </a>
        {project.live && project.live !== '#projects' && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} live demo`}
            className="text-primary transition hover:text-primary-light"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        )}
      </div>

      {project.clip && (
        <div className="sm:col-span-2 sm:col-start-2">
          <BrowserFrame href={project.live} compact>
            <button
              type="button"
              onClick={() =>
                setLightbox({
                  src: project.clip!.src,
                  alt: `${project.title} — ${project.clip!.label}`,
                  video: true,
                  poster: project.clip!.poster,
                })
              }
              className={`relative block w-full ${SHOT_ASPECT} bg-black/30`}
              aria-label={`View ${project.clip.label} clip larger`}
            >
              <ProjectClipPlayer
                src={project.clip.src}
                poster={project.clip.poster}
                label={project.clip.label}
              />
              <span className="absolute bottom-2 left-2 rounded bg-black/55 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                {project.clip.label}
              </span>
            </button>
          </BrowserFrame>
        </div>
      )}

      {project.shots && project.shots.length > 0 && (
        <div className="grid grid-cols-3 gap-2 sm:col-span-2 sm:col-start-2">
          {project.shots.map((shot) => (
            <div key={shot.label} className={cn(!shot.src && 'opacity-80')}>
              <BrowserFrame href={project.live} compact>
                <div className={`relative ${SHOT_ASPECT} bg-black/30`}>
                  {shot.src ? (
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox({
                          src: shot.src!,
                          alt: `${project.title} — ${shot.label}`,
                        })
                      }
                      className="absolute inset-0"
                      aria-label={`View ${shot.label} screenshot larger`}
                    >
                      <ScreenshotImage
                        src={shot.src}
                        alt={`${project.title} — ${shot.label}`}
                        sizes="(max-width: 768px) 33vw, 420px"
                      />
                    </button>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-1.5 px-2 text-center">
                      <ImagePlus className="h-4 w-4 text-primary/45" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-primary/50">
                        {shot.label}
                      </span>
                    </div>
                  )}
                </div>
              </BrowserFrame>
            </div>
          ))}
        </div>
      )}

      {lightbox && (
        <ShotLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          href={project.live}
          video={lightbox.video}
          poster={lightbox.poster}
          onClose={() => setLightbox(null)}
        />
      )}
    </motion.article>
  );
};

export default ProjectCard;
