'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Camera, ImagePlus } from 'lucide-react';
import { ProjectShot, ProjectType } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  BrowserFrame,
  ScreenshotImage,
  SHOT_ASPECT,
  ShotLightbox,
} from './ScreenshotImage';

const ROTATE_MS = 5000;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0,
    scale: 1.04,
    filter: 'blur(10px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -48 : 48,
    opacity: 0,
    scale: 0.97,
    filter: 'blur(8px)',
  }),
};

const ShotGallery = ({
  project,
  compact = false,
  priority = false,
}: {
  project: ProjectType;
  compact?: boolean;
  priority?: boolean;
}) => {
  const shots = project.shots?.length
    ? project.shots
    : [{ label: project.title, src: project.image }];
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const shot = shots[active];

  const goTo = (index: number) => {
    if (index === active) return;
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  useEffect(() => {
    if (paused || lightbox || shots.length < 2) return;

    const id = window.setInterval(() => {
      setDirection(1);
      setActive((current) => (current + 1) % shots.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [paused, lightbox, shots.length, active]);

  return (
    <>
      <div
        className={cn(
          'grid gap-3',
          !compact && 'mx-auto w-full max-w-6xl',
          compact
            ? 'lg:grid-cols-[minmax(0,1fr)_5.5rem]'
            : 'lg:grid-cols-[minmax(0,1fr)_6.5rem]'
        )}
      >
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <BrowserFrame href={project.live}>
            <div className={`relative ${SHOT_ASPECT} overflow-hidden bg-black`}>
              <AnimatePresence
                initial={false}
                custom={direction}
                mode="popLayout"
              >
                <motion.div
                  key={shot.label}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  {shot.src ? (
                    <button
                      type="button"
                      onClick={() => setLightbox(shot.src!)}
                      className="absolute inset-0"
                      aria-label={`View ${shot.label} screenshot larger`}
                    >
                      <ShotFrame
                        shot={shot}
                        title={project.title}
                        priority={priority && active === 0}
                        compact={compact}
                      />
                    </button>
                  ) : (
                    <EmptyShot label={shot.label} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </BrowserFrame>
        </div>

        <div className="grid grid-cols-3 content-start gap-2 sm:grid-cols-4 lg:grid-cols-1">
          {shots.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => goTo(index)}
              aria-pressed={active === index}
              className={cn(
                'group relative overflow-hidden rounded-lg border text-left transition',
                active === index
                  ? 'border-secondary ring-1 ring-secondary/50'
                  : 'border-primary/20 hover:border-primary/50'
              )}
            >
              <div className={`relative ${SHOT_ASPECT} bg-black/40`}>
                {item.src ? (
                  <ScreenshotImage
                    src={item.src}
                    alt=""
                    sizes="(max-width: 1024px) 25vw, 180px"
                    className="opacity-80 transition group-hover:opacity-100"
                  />
                ) : (
                  <div className="flex h-full min-h-[4.5rem] items-center justify-center bg-white/[0.03]">
                    <ImagePlus className="h-4 w-4 text-primary/50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-tertiary/90 via-tertiary/10 to-transparent" />
                <span className="absolute bottom-1 left-1.5 truncate font-mono text-[9px] uppercase tracking-wider text-primary-light">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <ShotLightbox
          src={lightbox}
          alt={`${project.title} screenshot`}
          href={project.live}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
};

const ShotFrame = ({
  shot,
  title,
  priority,
  compact,
}: {
  shot: ProjectShot;
  title: string;
  priority: boolean;
  compact: boolean;
}) => (
  <>
    <ScreenshotImage
      src={shot.src!}
      alt={`${title} — ${shot.label}`}
      sizes={
        compact
          ? '(max-width: 1024px) 100vw, 900px'
          : '(max-width: 1024px) 100vw, 1200px'
      }
      priority={priority}
      className={shot.overlay ? 'object-cover animate-ken-burns' : undefined}
    />
    {shot.overlay && (
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />
    )}
  </>
);

const EmptyShot = ({ label }: { label: string }) => (
  <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-primary/40">
      <Camera className="h-5 w-5 text-primary" />
    </div>
    <p className="font-display text-lg text-primary">{label}</p>
  </div>
);

export default ShotGallery;
