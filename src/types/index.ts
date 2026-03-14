export type Locale = "en" | "ru" | "uz";

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

// Localized variants
export interface LocalizedHighlight {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  icon: string;
}

export interface LocalizedSkillCategory {
  title: Record<Locale, string>;
  skills: Skill[];
}

export interface LocalizedProject {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  longDescription: Record<Locale, string>;
  status: Record<Locale, string>;
  productionReady?: boolean;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface LocalizedExperience {
  id: string;
  role: Record<Locale, string>;
  company: Record<Locale, string>;
  location: string;
  startDate: string;
  endDate: string;
  description: Record<Locale, string[]>;
  type: "work" | "education";
}

export interface LocalizedProfile {
  name: string;
  title: Record<Locale, string>;
  location: string;
  email: string;
  bio: Record<Locale, string>;
  heroTagline: string;
  heroDescription: Record<Locale, string>;
  highlights: LocalizedHighlight[];
  socialLinks: SocialLink[];
  skillCategories: LocalizedSkillCategory[];
  projects: LocalizedProject[];
  experience: LocalizedExperience[];
}
