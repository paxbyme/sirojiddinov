import type { Profile } from "../types";

export const profile: Profile = {
  name: "Paxbyme",
  title: "Flutter Developer | Mobile Engineer | Full-Stack Enthusiast",
  location: "Remote",
  email: "contact@paxbyme.dev",
  bio: "I am a Flutter developer with over 1 year of hands-on experience building real production mobile applications. Recently expanded into web development with modern React / Next.js stack. Strong foundation in algorithms and problem-solving (200+ solved problems in Python and Java). I prioritize clean architecture, maintainable code, performance, and security-first design.",
  heroTagline: "Paxbyme",
  heroDescription:
    "Flutter developer with 1+ year of experience building production-ready mobile applications. Recently started web development (2 months experience). Solved 200+ algorithmic problems using Python and Java. Focused on clean architecture, scalable systems, and real-world production deployments.",

  highlights: [
    {
      title: "Clean Architecture",
      description:
        "Building maintainable systems with clear boundaries, strong patterns, and reliable testability.",
      icon: "Zap",
    },
    {
      title: "Scalable Systems",
      description:
        "Designing production-ready apps that scale from MVP to multi-role, real-world platforms.",
      icon: "Layers",
    },
    {
      title: "Security-First Delivery",
      description:
        "Prioritizing secure auth flows, robust backend controls, and resilient deployment practices.",
      icon: "Palette",
    },
  ],

  socialLinks: [
    { platform: "Telegram", url: "https://t.me/lazyswe", icon: "Send" },
    { platform: "GitHub", url: "https://github.com/paxbyme", icon: "Github" },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/paxbyme",
      icon: "Linkedin",
    },
  ],

  skillCategories: [
    {
      title: "Mobile",
      skills: [{ name: "Flutter" }, { name: "React Native" }, { name: "Dart" }],
    },
    {
      title: "Web",
      skills: [
        { name: "Next.js" },
        { name: "React" },
        { name: "TypeScript" },
        { name: "TailwindCSS" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "Prisma" },
        { name: "Firebase" },
        { name: "PostgreSQL" },
        { name: "Redis" },
      ],
    },
    {
      title: "Other",
      skills: [
        { name: "Clean Architecture" },
        { name: "CI/CD" },
        { name: "JWT / RBAC" },
        { name: "Docker" },
        { name: "Algorithmic Problem Solving" },
      ],
    },
  ],

  projects: [
    {
      id: "te4-video-learning-marketplace",
      title: "Te4 — Video Learning Marketplace",
      description:
        "Premium video-course marketplace with multi-role workflows and production-grade Flutter architecture.",
      longDescription:
        "Built with Flutter and Firebase for teacher/student role-based authentication, course creation, video uploads, pricing, checkout receipts, chat, and analytics. Uses clean architecture, 70%+ test coverage, and offline-ready Firestore caching.",
      status: "MVP completed. Payment gateway integration pending.",
      stack: [
        "Flutter",
        "Dart",
        "Firebase",
        "Riverpod",
        "GoRouter",
        "Material 3",
      ],
      featured: true,
    },
    {
      id: "bustchi-telegram-growth-platform",
      title: "Bustchi — Telegram Growth Marketing Platform",
      description:
        "Production marketing platform focused on Telegram boost services with conversion-oriented UX flows.",
      longDescription:
        "Built with Next.js 15, React 18, and TypeScript. Includes an interactive pricing calculator with Telegram prefilled message generation, partner filtering across 23 partners, dark/light themes, and config-driven pricing with SEO-focused metadata, sitemap, and robots setup.",
      status: "Production-ready.",
      productionReady: true,
      stack: ["Next.js 15", "React 18", "TypeScript", "TailwindCSS"],
      featured: true,
    },
    {
      id: "uchqun-parent-teacher-app",
      title: "Uchqun — Parent & Teacher Communication App",
      description:
        "Dual-role communication app connecting parents and teachers with real-time collaboration features.",
      longDescription:
        "Implemented 37 screens with React Native + Expo, including real-time parent-teacher chat, AI assistant integration, offline-first architecture, JWT auth with auto refresh, EN/RU/UZ localization, and a reusable design system with 33 components.",
      status: "Production-ready.",
      productionReady: true,
      stack: ["React Native", "Expo", "Axios", "i18next"],
      featured: true,
    },
    {
      id: "financial-operations-app",
      title: "Financial Operations App (Uzbekistan Market)",
      description:
        "Finance operations mobile app with secure backend controls and high-reliability auth workflows.",
      longDescription:
        "Developed for the Uzbekistan market with Flutter, Node.js, Express, and Firestore. Includes phone + OTP authentication via Eskiz, income/expense tracking, worker and warehouse management, rate limiting, OTP expiry enforcement, and Jest + Supertest backend testing.",
      status: "Live on Google Play.",
      productionReady: true,
      stack: ["Flutter", "Node.js", "Express", "Firestore"],
    },
    {
      id: "visago-ai-visa-platform",
      title: "VisaGo — AI Visa Platform",
      description:
        "AI-powered visa ecosystem built for enterprise-scale operations across multi-role workflows.",
      longDescription:
        "Shipped an integrated stack with Next.js, Flutter, Express, Prisma, PostgreSQL, Redis, and FastAPI. Built 177 total screens, implemented RAG-based AI consultation, RBAC with 6 roles, payments via Stripe/Payme/Paycom, and dockerized infrastructure.",
      status: "Production-ready enterprise system.",
      productionReady: true,
      stack: [
        "Next.js",
        "Flutter",
        "Express",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "FastAPI",
      ],
    },
  ],

  experience: [
    {
      id: "exp-1",
      role: "Flutter Developer",
      company: "Independent Product Development",
      location: "Remote",
      startDate: "2024",
      endDate: "Present",
      description: [
        "Built production-ready Flutter applications with clean architecture and scalable feature modules.",
        "Implemented role-based systems, offline-ready state, and secure authentication for real-world mobile products.",
        "Delivered end-to-end product features from UX implementation through backend integration and release.",
      ],
      type: "work",
    },
    {
      id: "exp-2",
      role: "Web Engineer (React / Next.js)",
      company: "Independent Projects",
      location: "Remote",
      startDate: "2025",
      endDate: "Present",
      description: [
        "Recently expanded into web development with production-focused Next.js and TypeScript applications.",
        "Implemented SEO-ready architecture, config-driven systems, and performance-minded frontend patterns.",
        "Developed full-stack features spanning API integration, auth flows, and deployment pipelines.",
      ],
      type: "work",
    },
    {
      id: "exp-3",
      role: "Algorithmic Problem Solving",
      company: "Continuous Practice",
      location: "Python / Java",
      startDate: "2023",
      endDate: "Present",
      description: [
        "Solved 200+ algorithmic problems focused on data structures, complexity, and optimization.",
        "Strengthened implementation speed and problem decomposition across Python and Java.",
      ],
      type: "work",
    },
  ],
};
