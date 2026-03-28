import { ArrowDown, Mail } from "lucide-react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { Card } from "../components/Card";
import { useTranslation } from "../i18n/useTranslation";
import { useTypingEffect } from "../hooks/useTypingEffect";

export function Hero() {
  const { t, profile } = useTranslation();
  const { displayText, isComplete } = useTypingEffect(profile.heroDescription, 30, 600);

  return (
    <section className="flex min-h-[100dvh] items-center pt-16" aria-label="Introduction">
      <Container>
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
          {/* Text */}
          <div className="max-w-xl text-center md:text-left">
            <Reveal delay={40} threshold={0.1}>
              <p className="mb-3 font-mono text-sm font-medium tracking-[0.16em] text-accent-700 uppercase dark:text-accent-400">
                {profile.title}
              </p>
            </Reveal>
            <Reveal delay={120} threshold={0.1}>
              <h1 className="font-mono text-4xl leading-tight font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-neutral-50">
                <span className="terminal-prompt">{">"}</span>{" "}
                {profile.heroTagline}
                <span className="terminal-cursor" />
              </h1>
            </Reveal>
            <Reveal delay={200} threshold={0.1}>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600 sm:text-xl dark:text-neutral-300">
                {displayText}
                {!isComplete && <span className="terminal-cursor" />}
              </p>
            </Reveal>

            <Reveal delay={280} threshold={0.1}>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
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

          {/* Terminal card with JSON */}
          <Reveal delay={180} threshold={0.1} className="flex-shrink-0">
            <Card title="profile.json" className="w-72 sm:w-80">
              <pre className="font-mono text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                <code>{`{
  "name": "${profile.name}",
  "role": "Developer",
  "location": "${profile.location}",
  "focus": [
    "Flutter",
    "React",
    "Full-Stack"
  ],
  "status": "open_to_work"
}`}</code>
              </pre>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
