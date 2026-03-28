import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Card } from "../components/Card";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { useTranslation } from "../i18n/useTranslation";

export function About() {
  const { t, profile } = useTranslation();

  return (
    <section id="about" className="py-24">
      <Container>
        <SectionTitle
          title={t.aboutTitle}
          subtitle={t.aboutSubtitle}
          command={t.aboutCommand}
        />

        <Reveal delay={80}>
          <Card title="about.md" className="mx-auto mb-16 max-w-2xl">
            <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
              {profile.bio}
            </p>
          </Card>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.highlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={120 + index * 90}>
              <Card hover title={highlight.title}>
                <div className="mb-4 inline-flex rounded-lg border border-accent-500/25 bg-accent-100/50 p-3 text-accent-700 dark:border-accent-500/20 dark:bg-accent-500/10 dark:text-accent-400">
                  <Icon name={highlight.icon} size={24} />
                </div>
                <h3 className="mb-2 font-mono text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  {highlight.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
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
