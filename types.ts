import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech?: string[];
  highlight?: boolean;
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  link?: string;
  highlightColor: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}