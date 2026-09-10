'use client';

import Image from 'next/image';
import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const SHOT_ASPECT = 'aspect-[2560/1518]';

export const hostFromUrl = (url?: string) => {
  if (!url || url.startsWith('#')) return '';
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
};

export const BrowserFrame = ({
  href,
  children,
  compact = false,
}: {
  href?: string;
  children: ReactNode;
  compact?: boolean;
}) => {
  const host = hostFromUrl(href);

  return (
    <div
      className={cn(
        'overflow-hidden border border-primary/25 bg-[#071018]',
        compact
          ? 'rounded-xl'
          : 'rounded-2xl shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8)]'
      )}
    >
      <div
        className={cn(
          'flex items-center border-b border-white/10 bg-black/55',
          compact ? 'gap-1.5 px-2 py-1.5' : 'gap-2 px-3 py-2'
        )}
      >
        <span
          className={cn(
            'rounded-full bg-[#ff5f57]',
            compact ? 'h-1.5 w-1.5' : 'h-2.5 w-2.5'
          )}
        />
        <span
          className={cn(
            'rounded-full bg-[#febc2e]',
            compact ? 'h-1.5 w-1.5' : 'h-2.5 w-2.5'
          )}
        />
        <span
          className={cn(
            'rounded-full bg-[#28c840]',
            compact ? 'h-1.5 w-1.5' : 'h-2.5 w-2.5'
          )}
        />
        {href && host ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'ml-1 flex min-w-0 flex-1 items-center justify-center truncate rounded-md border border-white/10 bg-white/[0.04] font-mono tracking-wide text-primary-light/70 transition hover:text-primary',
              compact ? 'px-1.5 py-0.5 text-[8px]' : 'px-3 py-1 text-[10px]'
            )}
          >
            {host}
          </a>
        ) : (
          <div className="ml-1 h-5 flex-1 rounded-md border border-white/10 bg-white/[0.04]" />
        )}
      </div>
      {children}
    </div>
  );
};

type ScreenshotImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export const ScreenshotImage = ({
  src,
  alt,
  sizes,
  priority = false,
  className,
}: ScreenshotImageProps) => (
  <Image
    src={src}
    alt={alt}
    fill
    sizes={sizes}
    quality={95}
    priority={priority}
    className={cn('object-contain object-top', className)}
  />
);

export const ProjectClipPlayer = ({
  src,
  poster,
  label,
  className,
}: {
  src: string;
  poster?: string;
  label: string;
  className?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = (visible: boolean) => {
      if (!visible || motion.matches) {
        video.pause();
        return;
      }
      void video.play();
    };

    const observer = new IntersectionObserver(
      ([entry]) => sync(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(video);

    const onMotion = () => {
      const rect = video.getBoundingClientRect();
      sync(rect.top < window.innerHeight && rect.bottom > 0);
    };
    motion.addEventListener('change', onMotion);

    return () => {
      observer.disconnect();
      motion.removeEventListener('change', onMotion);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-label={label}
      className={cn(
        'absolute inset-0 h-full w-full object-contain object-top',
        className
      )}
    />
  );
};

export const ShotLightbox = ({
  src,
  alt,
  href,
  onClose,
  video = false,
  poster,
}: {
  src: string;
  alt: string;
  href?: string;
  onClose: () => void;
  video?: boolean;
  poster?: string;
}) => {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal
      aria-label={alt}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 md:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close screenshot"
        className="absolute right-4 top-4 z-10 rounded-full border border-white/20 p-2 text-white transition hover:bg-white/10"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="w-full max-w-6xl"
        onClick={(event) => event.stopPropagation()}
      >
        <BrowserFrame href={href}>
          {video ? (
            <video
              src={src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="block h-auto w-full"
            />
          ) : (
            // Native img so the original PNG is shown at full resolution
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt} className="block h-auto w-full" />
          )}
        </BrowserFrame>
      </div>
    </div>
  );
};
