import {
  PERSONAL_INFO,
  METRICS,
  TECH_STACK_MARQUEE,
  PROJECTS,
  SKILL_CATEGORIES,
  EXPERIENCES,
  SERVICES,
  HIGHLIGHTS_DATA,
  EDUCATION_DATA,
} from '../data/portfolioData';
import { Project, SkillCategory, ExperienceItem, ServiceItem, EducationItem, HighlightItem, MetricItem } from '../types';

export const portfolioService = {
  getPersonalInfo: () => PERSONAL_INFO,
  getMetrics: (): MetricItem[] => METRICS,
  getTechMarquee: (): string[] => TECH_STACK_MARQUEE,
  getProjects: (category?: string): Project[] => {
    if (!category || category === 'ALL') return PROJECTS;
    return PROJECTS.filter((p) => p.category === category);
  },
  getProjectById: (id: string): Project | undefined => PROJECTS.find((p) => p.id === id),
  getSkillCategories: (): SkillCategory[] => SKILL_CATEGORIES,
  getExperiences: (): ExperienceItem[] => EXPERIENCES,
  getServices: (): ServiceItem[] => SERVICES,
  getHighlights: (): HighlightItem[] => HIGHLIGHTS_DATA,
  getEducation: (): EducationItem[] => EDUCATION_DATA,
};
