export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  status: string;
  productionReady?: boolean;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  type: "work" | "education";
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  bio: string;
  heroTagline: string;
  heroDescription: string;
  highlights: Highlight[];
  socialLinks: SocialLink[];
  skillCategories: SkillCategory[];
  projects: Project[];
  experience: Experience[];
}

export interface Highlight {
  title: string;
  description: string;
  icon: string;
}
