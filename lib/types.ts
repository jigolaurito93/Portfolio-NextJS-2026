export interface ExperienceType {
  company: string;
  role: string;
  date: string;
  acc: string[];
}

export type ProjectCategory = 'MES' | 'Full-Stack' | 'Web';

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
  github: string;
  live: string;
}
