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
        />

        {/* Bento grid layout */}
        <div className="bento-grid">
          {/* Bio card — spans 2 columns */}
          <Reveal delay={80} className="bento-wide bento-tall">
            <Card className="h-full">
              <div className="flex h-full flex-col justify-center">
                <p className="mb-4 text-xs font-semibold tracking-widest text-accent-500 uppercase">
                  Bio
                </p>
                <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {profile.bio}
                </p>
              </div>
            </Card>
          </Reveal>

          {/* Highlight cards */}
          {profile.highlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={160 + index * 90}>
              <Card hover className="h-full">
                <div className="mb-4 inline-flex rounded-xl bg-accent-50 p-3 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                  <Icon name={highlight.icon} size={22} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-neutral-900 dark:text-neutral-50">
                  {highlight.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
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
