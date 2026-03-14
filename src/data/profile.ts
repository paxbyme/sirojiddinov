import type { LocalizedProfile } from "../types";

export const localizedProfile: LocalizedProfile = {
  name: "paxbyme",
  title: {
    en: "Software Engineer | Systems Architect",
    ru: "Инженер-программист | Архитектор систем",
    uz: "Dasturiy muhandis | Tizim arxitektori",
  },
  location: "Remote",
  email: "contact@paxbyme.dev",
  bio: {
    en: "Over 1 year of hands-on experience shipping production systems across mobile (Flutter) and web (React / Next.js). My core strength is backend engineering — designing clean APIs, managing data pipelines, and wiring up secure auth flows that actually hold under real-world load. 200+ algorithmic problems solved in Python and Java keep my problem-solving sharp. I care about clean architecture, maintainable code, and shipping things that work.",
    ru: "Более 1 года практического опыта запуска production-систем в мобильной (Flutter) и веб-разработке (React / Next.js). Моя ключевая сила — backend-инженерия: проектирование чистых API, управление данными и построение безопасных потоков авторизации, которые выдерживают реальную нагрузку. 200+ решённых алгоритмических задач на Python и Java поддерживают остроту мышления. Мне важна чистая архитектура, поддерживаемый код и рабочий результат.",
    uz: "1 yildan ortiq tajriba bilan mobil (Flutter) va veb (React / Next.js) production tizimlarni ishga tushirdim. Asosiy kuchim — backend muhandislik: toza API'lar loyihalash, ma'lumotlar oqimlarini boshqarish va real yuklamaga bardosh beradigan xavfsiz autentifikatsiya jarayonlarini qurish. Python va Java'da 200+ algoritmik masala yechish muammolarni hal qilish qobiliyatimni o'tkir saqlaydi. Menga toza arxitektura, barqaror kod va ishlaydigan natija muhim.",
  },
  heroTagline: "paxbyme",
  heroDescription: {
    en: "I'm a software engineer architecting robust systems and seamless integrations. I build production-grade APIs, scalable services, and the infrastructure that holds everything together.",
    ru: "Я инженер-программист, проектирующий надёжные системы и бесшовные интеграции. Создаю production-grade API, масштабируемые сервисы и инфраструктуру, на которой всё держится.",
    uz: "Men dasturiy muhandisiman — ishonchli tizimlar va uzluksiz integratsiyalar loyihalayman. Production darajasidagi API'lar, kengaytiriladigan xizmatlar va hamma narsani birlashtiruvchi infratuzilma yarataman.",
  },

  highlights: [
    {
      title: {
        en: "Clean Architecture",
        ru: "Чистая архитектура",
        uz: "Toza arxitektura",
      },
      description: {
        en: "Building maintainable systems with clear boundaries, strong patterns, and reliable testability.",
        ru: "Создание поддерживаемых систем с чёткими границами, устойчивыми паттернами и надёжной тестируемостью.",
        uz: "Aniq chegaralar, mustahkam patternlar va ishonchli test qilish imkoniyati bilan barqaror tizimlar yaratish.",
      },
      icon: "Zap",
    },
    {
      title: {
        en: "Scalable Systems",
        ru: "Масштабируемые системы",
        uz: "Kengaytiriladigan tizimlar",
      },
      description: {
        en: "Designing production-ready apps that scale from MVP to multi-role, real-world platforms.",
        ru: "Проектирование приложений, масштабируемых от MVP до многоролевых платформ реального мира.",
        uz: "MVP'dan ko'p rollik real platformalargacha kengaytirilishi mumkin bo'lgan ilovalar loyihalash.",
      },
      icon: "Layers",
    },
    {
      title: {
        en: "Security-First Delivery",
        ru: "Безопасность прежде всего",
        uz: "Xavfsizlik birinchi o'rinda",
      },
      description: {
        en: "Prioritizing secure auth flows, robust backend controls, and resilient deployment practices.",
        ru: "Приоритет безопасных потоков авторизации, надёжного бэкенда и устойчивых практик развёртывания.",
        uz: "Xavfsiz autentifikatsiya, ishonchli backend nazorati va barqaror deploy amaliyotlariga ustuvorlik berish.",
      },
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
      title: { en: "Mobile", ru: "Мобильные", uz: "Mobil" },
      skills: [{ name: "Flutter" }, { name: "React Native" }, { name: "Dart" }],
    },
    {
      title: { en: "Web", ru: "Веб", uz: "Veb" },
      skills: [
        { name: "Next.js" },
        { name: "React" },
        { name: "TypeScript" },
        { name: "TailwindCSS" },
      ],
    },
    {
      title: { en: "Backend", ru: "Бэкенд", uz: "Backend" },
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
      title: { en: "Other", ru: "Другое", uz: "Boshqa" },
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
      title: {
        en: "Te4 — Video Learning Marketplace",
        ru: "Te4 — Маркетплейс видеокурсов",
        uz: "Te4 — Video o'quv marketi",
      },
      description: {
        en: "Premium video-course marketplace with multi-role workflows and production-grade Flutter architecture.",
        ru: "Премиум-маркетплейс видеокурсов с многоролевыми процессами и продакшен-архитектурой на Flutter.",
        uz: "Ko'p rollik jarayonlar va production darajasidagi Flutter arxitekturasi bilan premium video-kurs marketi.",
      },
      longDescription: {
        en: "Built with Flutter and Firebase for teacher/student role-based authentication, course creation, video uploads, pricing, checkout receipts, chat, and analytics. Uses clean architecture, 70%+ test coverage, and offline-ready Firestore caching.",
        ru: "Создан на Flutter и Firebase с ролевой аутентификацией учитель/ученик, созданием курсов, загрузкой видео, ценообразованием, чеками оплаты, чатом и аналитикой. Чистая архитектура, 70%+ покрытие тестами, офлайн-кэширование Firestore.",
        uz: "Flutter va Firebase bilan o'qituvchi/o'quvchi roliga asoslangan autentifikatsiya, kurs yaratish, video yuklash, narxlash, to'lov cheklari, chat va analitika. Toza arxitektura, 70%+ test qamrovi va oflayn Firestore keshlash.",
      },
      status: {
        en: "MVP completed. Payment gateway integration pending.",
        ru: "MVP завершён. Интеграция платёжного шлюза в процессе.",
        uz: "MVP tugallandi. To'lov tizimi integratsiyasi kutilmoqda.",
      },
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
      title: {
        en: "Bustchi — Telegram Growth Marketing Platform",
        ru: "Bustchi — Платформа роста в Telegram",
        uz: "Bustchi — Telegram o'sish platformasi",
      },
      description: {
        en: "Production marketing platform focused on Telegram boost services with conversion-oriented UX flows.",
        ru: "Продакшен маркетинговая платформа для сервисов продвижения в Telegram с UX, ориентированным на конверсию.",
        uz: "Telegram boost xizmatlari uchun konversiyaga yo'naltirilgan UX bilan production marketing platformasi.",
      },
      longDescription: {
        en: "Built with Next.js 15, React 18, and TypeScript. Includes an interactive pricing calculator with Telegram prefilled message generation, partner filtering across 23 partners, dark/light themes, and config-driven pricing with SEO-focused metadata, sitemap, and robots setup.",
        ru: "Создан на Next.js 15, React 18 и TypeScript. Интерактивный калькулятор цен с генерацией предзаполненных сообщений Telegram, фильтрация по 23 партнёрам, тёмная/светлая темы, конфиг-управляемое ценообразование с SEO-метаданными, sitemap и robots.",
        uz: "Next.js 15, React 18 va TypeScript bilan qurilgan. Telegram oldindan to'ldirilgan xabar generatsiyasi bilan interaktiv narx kalkulyatori, 23 hamkor bo'yicha filtrlash, qorong'u/yorug' mavzular va SEO metama'lumotlari bilan konfiguratsiyaga asoslangan narxlash.",
      },
      status: {
        en: "Production-ready.",
        ru: "Готов к продакшену.",
        uz: "Productionga tayyor.",
      },
      productionReady: true,
      stack: ["Next.js 15", "React 18", "TypeScript", "TailwindCSS"],
      featured: true,
    },
    {
      id: "uchqun-parent-teacher-app",
      title: {
        en: "Uchqun — Parent & Teacher Communication App",
        ru: "Uchqun — Приложение для связи родителей и учителей",
        uz: "Uchqun — Ota-ona va o'qituvchi aloqa ilovasi",
      },
      description: {
        en: "Dual-role communication app connecting parents and teachers with real-time collaboration features.",
        ru: "Двухролевое приложение для связи родителей и учителей с функциями совместной работы в реальном времени.",
        uz: "Ota-onalar va o'qituvchilarni real vaqtda hamkorlik funksiyalari bilan bog'laydigan ikki rollik aloqa ilovasi.",
      },
      longDescription: {
        en: "Implemented 37 screens with React Native + Expo, including real-time parent-teacher chat, AI assistant integration, offline-first architecture, JWT auth with auto refresh, EN/RU/UZ localization, and a reusable design system with 33 components.",
        ru: "Реализовано 37 экранов на React Native + Expo, включая чат родитель-учитель в реальном времени, интеграцию AI-ассистента, офлайн-архитектуру, JWT авторизацию с авто-обновлением, локализацию EN/RU/UZ и дизайн-систему из 33 компонентов.",
        uz: "React Native + Expo bilan 37 ta ekran amalga oshirildi, jumladan real vaqt ota-ona-o'qituvchi chat, AI yordamchi integratsiyasi, oflayn arxitektura, avtomatik yangilanish bilan JWT autentifikatsiya, EN/RU/UZ lokalizatsiya va 33 komponentli dizayn tizimi.",
      },
      status: {
        en: "Production-ready.",
        ru: "Готов к продакшену.",
        uz: "Productionga tayyor.",
      },
      productionReady: true,
      stack: ["React Native", "Expo", "Axios", "i18next"],
      featured: true,
    },
    {
      id: "financial-operations-app",
      title: {
        en: "Financial Operations App (Uzbekistan Market)",
        ru: "Приложение финансовых операций (рынок Узбекистана)",
        uz: "Moliyaviy operatsiyalar ilovasi (O'zbekiston bozori)",
      },
      description: {
        en: "Finance operations mobile app with secure backend controls and high-reliability auth workflows.",
        ru: "Мобильное приложение финансовых операций с безопасным бэкендом и надёжными потоками авторизации.",
        uz: "Xavfsiz backend nazorati va yuqori ishonchli autentifikatsiya jarayonlari bilan moliyaviy operatsiyalar mobil ilovasi.",
      },
      longDescription: {
        en: "Developed for the Uzbekistan market with Flutter, Node.js, Express, and Firestore. Includes phone + OTP authentication via Eskiz, income/expense tracking, worker and warehouse management, rate limiting, OTP expiry enforcement, and Jest + Supertest backend testing.",
        ru: "Разработано для рынка Узбекистана на Flutter, Node.js, Express и Firestore. Авторизация по телефону + OTP через Eskiz, учёт доходов/расходов, управление сотрудниками и складом, rate limiting, контроль срока OTP, тестирование бэкенда на Jest + Supertest.",
        uz: "O'zbekiston bozori uchun Flutter, Node.js, Express va Firestore bilan ishlab chiqilgan. Eskiz orqali telefon + OTP autentifikatsiya, daromad/xarajat hisobi, ishchi va ombor boshqaruvi, rate limiting, OTP muddati nazorati va Jest + Supertest backend testlari.",
      },
      status: {
        en: "Live on Google Play.",
        ru: "Доступно в Google Play.",
        uz: "Google Play'da mavjud.",
      },
      productionReady: true,
      stack: ["Flutter", "Node.js", "Express", "Firestore"],
    },
    {
      id: "visago-ai-visa-platform",
      title: {
        en: "Ketdik.org — AI Visa Platform",
        ru: "Ketdik.org — AI визовая платформа",
        uz: "Ketdik.org — AI viza platformasi",
      },
      description: {
        en: "AI-powered visa ecosystem built for enterprise-scale operations across multi-role workflows.",
        ru: "Визовая экосистема на базе AI для корпоративных операций с многоролевыми процессами.",
        uz: "Ko'p rollik jarayonlar bo'ylab korporativ miqyosdagi operatsiyalar uchun qurilgan AI asosidagi viza ekotizimi.",
      },
      longDescription: {
        en: "Shipped an integrated stack with Next.js, Flutter, Express, Prisma, PostgreSQL, Redis, and FastAPI. Built 177 total screens, implemented RAG-based AI consultation, RBAC with 6 roles, payments via Stripe/Payme/Paycom, and dockerized infrastructure.",
        ru: "Поставлен интегрированный стек на Next.js, Flutter, Express, Prisma, PostgreSQL, Redis и FastAPI. 177 экранов, RAG-консультация AI, RBAC с 6 ролями, оплата через Stripe/Payme/Paycom и Docker-инфраструктура.",
        uz: "Next.js, Flutter, Express, Prisma, PostgreSQL, Redis va FastAPI bilan integratsiyalashgan stek. 177 ta ekran, RAG asosidagi AI konsultatsiya, 6 rollik RBAC, Stripe/Payme/Paycom orqali to'lov va Docker infratuzilma.",
      },
      status: {
        en: "Production-ready enterprise system.",
        ru: "Корпоративная система, готовая к продакшену.",
        uz: "Productionga tayyor korporativ tizim.",
      },
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
      role: {
        en: "Flutter Developer",
        ru: "Flutter-разработчик",
        uz: "Flutter dasturchi",
      },
      company: {
        en: "Independent Product Development",
        ru: "Независимая разработка продуктов",
        uz: "Mustaqil mahsulot ishlab chiqarish",
      },
      location: "Remote",
      startDate: "2024",
      endDate: "Present",
      description: {
        en: [
          "Built production-ready Flutter applications with clean architecture and scalable feature modules.",
          "Implemented role-based systems, offline-ready state, and secure authentication for real-world mobile products.",
          "Delivered end-to-end product features from UX implementation through backend integration and release.",
        ],
        ru: [
          "Создавал production-ready Flutter приложения с чистой архитектурой и масштабируемыми модулями.",
          "Реализовал ролевые системы, офлайн-состояние и безопасную аутентификацию для реальных мобильных продуктов.",
          "Поставлял полные продуктовые фичи от UX до интеграции бэкенда и релиза.",
        ],
        uz: [
          "Toza arxitektura va kengaytiriladigan funksional modullar bilan production-tayyor Flutter ilovalar yaratdim.",
          "Real mobil mahsulotlar uchun rolga asoslangan tizimlar, oflayn holat va xavfsiz autentifikatsiya amalga oshirdim.",
          "UX amalga oshirishdan backend integratsiyasi va relizgacha to'liq mahsulot funksiyalarini yetkazib berdim.",
        ],
      },
      type: "work",
    },
    {
      id: "exp-2",
      role: {
        en: "Web Engineer (React / Next.js)",
        ru: "Веб-инженер (React / Next.js)",
        uz: "Veb muhandis (React / Next.js)",
      },
      company: {
        en: "Independent Projects",
        ru: "Независимые проекты",
        uz: "Mustaqil loyihalar",
      },
      location: "Remote",
      startDate: "2025",
      endDate: "Present",
      description: {
        en: [
          "Recently expanded into web development with production-focused Next.js and TypeScript applications.",
          "Implemented SEO-ready architecture, config-driven systems, and performance-minded frontend patterns.",
          "Developed full-stack features spanning API integration, auth flows, and deployment pipelines.",
        ],
        ru: [
          "Недавно расширил навыки в веб-разработке с Next.js и TypeScript приложениями для продакшена.",
          "Реализовал SEO-ready архитектуру, конфиг-управляемые системы и паттерны фронтенда, ориентированные на производительность.",
          "Разработал full-stack фичи: интеграция API, потоки авторизации и пайплайны деплоя.",
        ],
        uz: [
          "Yaqinda production-yo'naltirilgan Next.js va TypeScript ilovalari bilan veb-dasturlashga kirishdim.",
          "SEO-tayyor arxitektura, konfiguratsiyaga asoslangan tizimlar va samaradorlikka yo'naltirilgan frontend patternlarni amalga oshirdim.",
          "API integratsiyasi, autentifikatsiya jarayonlari va deploy pipeline'larni qamrab oluvchi full-stack funksiyalar ishlab chiqdim.",
        ],
      },
      type: "work",
    },
    {
      id: "exp-3",
      role: {
        en: "Algorithmic Problem Solving",
        ru: "Алгоритмическое решение задач",
        uz: "Algoritmik masalalar yechish",
      },
      company: {
        en: "Continuous Practice",
        ru: "Постоянная практика",
        uz: "Doimiy amaliyot",
      },
      location: "Python / Java",
      startDate: "2023",
      endDate: "Present",
      description: {
        en: [
          "Solved 200+ algorithmic problems focused on data structures, complexity, and optimization.",
          "Strengthened implementation speed and problem decomposition across Python and Java.",
        ],
        ru: [
          "Решил 200+ алгоритмических задач по структурам данных, сложности и оптимизации.",
          "Улучшил скорость реализации и декомпозицию задач на Python и Java.",
        ],
        uz: [
          "Ma'lumotlar tuzilmalari, murakkablik va optimizatsiyaga yo'naltirilgan 200+ algoritmik masala yechdim.",
          "Python va Java bo'yicha amalga oshirish tezligi va masalalarni dekompozitsiya qilishni mustahkamladim.",
        ],
      },
      type: "work",
    },
  ],
};
