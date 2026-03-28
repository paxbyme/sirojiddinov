import { ArrowDown, Mail } from "lucide-react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { useTranslation } from "../i18n/useTranslation";
import { useTypingEffect } from "../hooks/useTypingEffect";

export function Hero() {
  const { t, profile } = useTranslation();
  const { displayText, isComplete } = useTypingEffect(profile.heroDescription, 30, 600);

  return (
    <section className="flex min-h-[100dvh] items-center pt-16" aria-label="Introduction">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal delay={40} threshold={0.1}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-4 py-1.5 text-sm text-neutral-600 backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-800/60 dark:text-neutral-400">
              <span className="status-dot" />
              {profile.title}
            </div>
          </Reveal>

          <Reveal delay={120} threshold={0.1}>
            <h1 className="text-5xl leading-[1.1] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-neutral-900 dark:text-neutral-50">
                Hi, I'm{" "}
              </span>
              <span className="gradient-text">{profile.heroTagline}</span>
            </h1>
          </Reveal>

          <Reveal delay={200} threshold={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
              {displayText}
              {!isComplete && (
                <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-accent-500" />
              )}
            </p>
          </Reveal>

          <Reveal delay={280} threshold={0.1}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="#projects" variant="primary" size="lg">
                <ArrowDown size={18} />
                {t.heroViewProjects}
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                <Mail size={18} />
                {t.heroContact}
              </Button>
            </div>
          </Reveal>

          {/* Decorative floating orbs */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div className="motion-float absolute top-1/4 left-[10%] h-72 w-72 rounded-full bg-accent-400/10 blur-3xl" />
            <div className="motion-float absolute right-[10%] bottom-1/4 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl" style={{ animationDelay: "-3s" }} />
          </div>
        </div>
      </Container>
    </section>
  );
}
