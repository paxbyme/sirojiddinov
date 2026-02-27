import { ArrowDown, Mail } from "lucide-react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="flex min-h-[100dvh] items-center pt-16" aria-label="Introduction">
      <Container>
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
          {/* Text */}
          <div className="max-w-xl text-center md:text-left">
            <Reveal delay={40} threshold={0.1}>
              <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-accent-700 uppercase dark:text-accent-300">
                {profile.title}
              </p>
            </Reveal>
            <Reveal delay={120} threshold={0.1}>
              <h1 className="text-4xl leading-tight font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
                {profile.heroTagline}
              </h1>
            </Reveal>
            <Reveal delay={200} threshold={0.1}>
              <p className="mt-4 text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
                {profile.heroDescription}
              </p>
            </Reveal>

            <Reveal delay={280} threshold={0.1}>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
                <Button href="#projects" variant="primary" size="lg">
                  <ArrowDown size={18} />
                  View Projects
                </Button>
                <Button href="#contact" variant="secondary" size="lg">
                  <Mail size={18} />
                  Contact
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Avatar placeholder */}
          <Reveal delay={180} threshold={0.1} className="flex-shrink-0">
            <div className="neon-avatar motion-float h-48 w-48 rounded-full sm:h-56 sm:w-56 lg:h-64 lg:w-64" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
