import { ArrowDown, Mail } from "lucide-react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { useTranslation } from "../i18n/useTranslation";
import { useTypingEffect } from "../hooks/useTypingEffect";

export function Hero() {
  const { t, profile } = useTranslation();
  const { displayText, isComplete } = useTypingEffect(profile.heroDescription, 25, 800);

  return (
    <section className="flex min-h-[100dvh] items-center pt-16" aria-label="Introduction">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal delay={0} threshold={0.1}>
            <div className="hero-badge mb-8 inline-flex items-center gap-2.5 rounded-full border px-5 py-2 text-sm shadow-sm backdrop-blur-md">
              <span className="status-dot" />
              {profile.title}
            </div>
          </Reveal>

          <Reveal delay={100} threshold={0.1}>
            <h1 className="hero-title text-5xl leading-[1.08] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-neutral-900 dark:text-neutral-50">Hi, I'm </span>
              <span className="gradient-text">{profile.heroTagline}</span>
            </h1>
          </Reveal>

          <Reveal delay={200} threshold={0.1}>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
              {displayText}
              {!isComplete && (
                <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse rounded-full bg-accent-400" />
              )}
            </p>
          </Reveal>

          <Reveal delay={320} threshold={0.1}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
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
        </div>
      </Container>
    </section>
  );
}
