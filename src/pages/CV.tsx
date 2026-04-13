export function CV() {
  return (
    <div className="cv-page mx-auto max-w-[800px] bg-white px-12 py-10 text-neutral-900 print:px-0 print:py-0">
      {/* Header */}
      <header className="mb-8 border-b border-neutral-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight">paxbyme</h1>
        <p className="mt-1 text-lg text-neutral-600">
          Software Engineer | Systems Architect
        </p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-neutral-500">
          <span>Remote</span>
          <span>contact@paxbyme.dev</span>
          <a
            href="https://github.com/paxbyme"
            className="underline decoration-neutral-300 hover:text-neutral-700 print:no-underline"
          >
            github.com/paxbyme
          </a>
          <a
            href="https://www.linkedin.com/in/paxbyme"
            className="underline decoration-neutral-300 hover:text-neutral-700 print:no-underline"
          >
            linkedin.com/in/paxbyme
          </a>
          <a
            href="https://t.me/lazyswe"
            className="underline decoration-neutral-300 hover:text-neutral-700 print:no-underline"
          >
            t.me/lazyswe
          </a>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-7">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Summary
        </h2>
        <p className="text-sm leading-relaxed text-neutral-700">
          Software engineer with 1+ year of hands-on experience shipping
          production systems across mobile (Flutter) and web (React / Next.js).
          Core strength in backend engineering — designing clean APIs, managing
          data pipelines, and building secure auth flows under real-world load.
          200+ algorithmic problems solved in Python and Java. Focused on clean
          architecture, maintainable code, and shipping things that work.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-7">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Skills
        </h2>
        <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-sm">
          <span className="font-medium text-neutral-600">Mobile</span>
          <span className="text-neutral-700">Flutter, React Native, Dart</span>
          <span className="font-medium text-neutral-600">Web</span>
          <span className="text-neutral-700">
            Next.js, React, TypeScript, Tailwind CSS
          </span>
          <span className="font-medium text-neutral-600">Backend</span>
          <span className="text-neutral-700">
            Node.js, Express, Spring Boot, Prisma, Firebase, PostgreSQL, Redis,
            FastAPI
          </span>
          <span className="font-medium text-neutral-600">Other</span>
          <span className="text-neutral-700">
            Clean Architecture, Docker, CI/CD, JWT / RBAC, Git
          </span>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-7">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Experience
        </h2>

        <div className="mb-4">
          <div className="flex items-baseline justify-between">
            <h3 className="text-sm font-semibold">Flutter Developer</h3>
            <span className="text-xs text-neutral-400">2024 — Present</span>
          </div>
          <p className="text-xs text-neutral-500">
            Independent Product Development · Remote
          </p>
          <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-sm text-neutral-700 marker:text-neutral-300">
            <li>
              Built production-ready Flutter applications with clean
              architecture and scalable feature modules.
            </li>
            <li>
              Implemented role-based systems, offline-ready state, and secure
              authentication for real-world mobile products.
            </li>
            <li>
              Delivered end-to-end product features from UX implementation
              through backend integration and release.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex items-baseline justify-between">
            <h3 className="text-sm font-semibold">
              Web Engineer (React / Next.js)
            </h3>
            <span className="text-xs text-neutral-400">2025 — Present</span>
          </div>
          <p className="text-xs text-neutral-500">
            Independent Projects · Remote
          </p>
          <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-sm text-neutral-700 marker:text-neutral-300">
            <li>
              Built production-focused Next.js and TypeScript applications with
              SEO-ready architecture.
            </li>
            <li>
              Developed full-stack features spanning API integration, auth flows,
              and deployment pipelines.
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-sm font-semibold">
              Algorithmic Problem Solving
            </h3>
            <span className="text-xs text-neutral-400">2023 — Present</span>
          </div>
          <p className="text-xs text-neutral-500">
            Continuous Practice · Python / Java
          </p>
          <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-sm text-neutral-700 marker:text-neutral-300">
            <li>
              Solved 200+ problems focused on data structures, complexity, and
              optimization.
            </li>
          </ul>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="mb-7">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Selected Projects
        </h2>

        <div className="space-y-4">
          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold">
                Ketdik.org — AI Visa Platform
              </h3>
              <span className="text-xs text-neutral-400">Production</span>
            </div>
            <p className="mt-0.5 text-sm text-neutral-700">
              Enterprise-scale AI visa ecosystem with 177 screens, RAG-based AI
              consultation, RBAC with 6 roles, and payments via
              Stripe/Payme/Paycom. Dockerized infrastructure.
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              Next.js · Flutter · Express · Prisma · PostgreSQL · Redis · FastAPI
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold">
                Ijtimoiy Yordamchi — AI Employee Management System
              </h3>
              <span className="text-xs text-neutral-400">Production</span>
            </div>
            <p className="mt-0.5 text-sm text-neutral-700">
              Three-app monorepo: Next.js manager dashboard, Flutter staff app,
              and Spring Boot API. Gemini AI chat with Pinecone RAG, Firebase
              Auth with custom role claims, and Playwright E2E tests.
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              Flutter · Next.js · Spring Boot · Java · Gemini AI · Pinecone ·
              Firebase
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold">
                Te4 — Video Learning Marketplace
              </h3>
              <span className="text-xs text-neutral-400">MVP</span>
            </div>
            <p className="mt-0.5 text-sm text-neutral-700">
              Premium video-course marketplace with teacher/student role-based
              auth, course creation, video uploads, chat, analytics, and 70%+
              test coverage with offline-ready Firestore caching.
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              Flutter · Dart · Firebase · Riverpod · GoRouter
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold">
                Financial Operations App
              </h3>
              <span className="text-xs text-neutral-400">
                Live on Google Play
              </span>
            </div>
            <p className="mt-0.5 text-sm text-neutral-700">
              Finance operations app for the Uzbekistan market with phone + OTP
              authentication, income/expense tracking, worker and warehouse
              management, rate limiting, and backend testing with Jest +
              Supertest.
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              Flutter · Node.js · Express · Firestore
            </p>
          </div>

          <div>
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-semibold">
                Uchqun — Parent & Teacher Communication App
              </h3>
              <span className="text-xs text-neutral-400">Production</span>
            </div>
            <p className="mt-0.5 text-sm text-neutral-700">
              37-screen dual-role app with real-time chat, AI assistant
              integration, offline-first architecture, JWT auth with auto
              refresh, EN/RU/UZ localization, and a 33-component design system.
            </p>
            <p className="mt-1 text-xs text-neutral-400">
              React Native · Expo · Axios · i18next
            </p>
          </div>
        </div>
      </section>

      {/* Print button - hidden in print */}
      <div className="mt-8 flex gap-3 print:hidden">
        <button
          onClick={() => window.print()}
          className="rounded-md bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Save as PDF
        </button>
        <a
          href="/"
          className="rounded-md border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
        >
          Back to Portfolio
        </a>
      </div>
    </div>
  );
}
