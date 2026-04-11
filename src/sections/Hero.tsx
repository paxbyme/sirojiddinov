import { ArrowDown, Mail } from "lucide-react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { Card } from "../components/Card";
import { useTranslation } from "../i18n/useTranslation";
import { useTypingEffect } from "../hooks/useTypingEffect";

export function Hero() {
  const { t, profile } = useTranslation();
  const { displayText } = useTypingEffect(profile.heroDescription, 30, 600);

  return (
    <section className="flex min-h-[100dvh] items-center pt-16" aria-label="Introduction">
      <Container>
        <div className="flex flex-col items-center gap-16 md:flex-row md:justify-between">
          {/* Text */}
          <div className="max-w-xl text-center md:text-left">
            <Reveal delay={40} threshold={0.1}>
              <p className="mb-4 font-mono text-xs font-medium tracking-[0.2em] text-accent-600 uppercase dark:text-accent-400">
                {profile.title}
              </p>
            </Reveal>
            <Reveal delay={120} threshold={0.1}>
              <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-neutral-50">
                {profile.heroTagline}
              </h1>
            </Reveal>
            <Reveal delay={200} threshold={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-neutral-500 sm:text-xl dark:text-neutral-400">
                {displayText}
              </p>
            </Reveal>

            <Reveal delay={280} threshold={0.1}>
              <div className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
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

          {/* Info card */}
          <Reveal delay={180} threshold={0.1} className="flex-shrink-0">
            <Card title="profile.json" className="w-72 sm:w-80">
              <pre className="font-mono text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
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
