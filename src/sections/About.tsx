import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Card } from "../components/Card";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { profile } from "../data/profile";

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionTitle title="About Me" subtitle="A little bit about who I am and what I do." />

        <Reveal delay={80}>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {profile.bio}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.highlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={120 + index * 90}>
              <Card hover>
                <div className="mb-4 inline-flex rounded-xl border border-accent-300/45 bg-accent-100/65 p-3 text-accent-700 dark:border-accent-400/30 dark:bg-accent-500/10 dark:text-accent-200">
                  <Icon name={highlight.icon} size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-50">
                  {highlight.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {highlight.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
