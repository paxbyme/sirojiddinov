import { useContext } from "react";
import { I18nContext } from "./context";
import { translations } from "./translations";
import { localizedProfile } from "../data/profile";
import type { Locale, Profile, LocalizedProfile } from "../types";
import type { TranslationStrings } from "./types";

function resolveProfile(lp: LocalizedProfile, locale: Locale): Profile {
  return {
    name: lp.name,
    title: lp.title[locale],
    location: lp.location,
    email: lp.email,
    bio: lp.bio[locale],
    heroTagline: lp.heroTagline,
    heroDescription: lp.heroDescription[locale],
    highlights: lp.highlights.map((h) => ({
      title: h.title[locale],
      description: h.description[locale],
      icon: h.icon,
    })),
    socialLinks: lp.socialLinks,
    skillCategories: lp.skillCategories.map((c) => ({
      title: c.title[locale],
      skills: c.skills,
    })),
    projects: lp.projects.map((p) => ({
      id: p.id,
      title: p.title[locale],
      description: p.description[locale],
      longDescription: p.longDescription[locale],
      status: p.status[locale],
      productionReady: p.productionReady,
      stack: p.stack,
      liveUrl: p.liveUrl,
      githubUrl: p.githubUrl,
      image: p.image,
      featured: p.featured,
    })),
    experience: lp.experience.map((e) => ({
      id: e.id,
      role: e.role[locale],
      company: e.company[locale],
      location: e.location,
      startDate: e.startDate,
      endDate: e.endDate,
      description: e.description[locale],
      type: e.type,
    })),
  };
}

export function useTranslation(): {
  t: TranslationStrings;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  profile: Profile;
} {
  const { locale, setLocale } = useContext(I18nContext);
  const t = translations[locale];
  const profile = resolveProfile(localizedProfile, locale);
  return { t, locale, setLocale, profile };
}
