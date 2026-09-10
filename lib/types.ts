export interface ExperienceType {
  company: string;
  role: string;
  date: string;
  acc: string[];
}

export type ProjectCategory = 'Full-Stack' | 'Web';

export interface ProjectShot {
  label: string;
  /** File under /public. Leave undefined to show an empty slot. */
  src?: string;
  kind?: 'image' | 'video';
  poster?: string;
  /** Recreate the Onyx hero type on a photo until a real UI screenshot is added. */
  overlay?: boolean;
}

export interface ProjectClip {
  src: string;
  poster?: string;
  label: string;
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
  github: string;
  live?: string;
  logo?: string;
  highlights?: string[];
  shots?: ProjectShot[];
  /** Looping muted clip for a motion-driven feature (envelope open, etc.). */
  clip?: ProjectClip;
}
