export interface Project {
  id: string;
  title: string;
  category: 'WEB' | 'DASHBOARD' | 'LANDING' | 'FULL STACK';
  tags: string[];
  description: string;
  fullDescription?: string;
  image: string;
  featured: boolean;
  year: string;
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
  challenge?: string;
  solution?: string;
}

export interface SkillItem {
  name: string;
  level: number;
  badge: 'Expert' | 'Advanced' | 'Master' | 'Intermediate';
  icon?: string;
}

export interface SkillCategory {
  id: 'FRONTEND' | 'BACKEND' | 'DATABASE' | 'TOOLS';
  title: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface EducationItem {
  id: string;
  institution: string;
  logo?: string;
  degree: string;
  major: string;
  period: string;
  status: string;
  location: string;
  gpa?: string;
  achievement?: string;
  description: string;
  relevantSubjects: string[];
  techTags: string[];
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags?: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
}
