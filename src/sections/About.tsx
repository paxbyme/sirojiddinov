import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
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

        <Reveal delay={80}>
          <p className="mb-16 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            {profile.bio}
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.highlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={120 + index * 90}>
              <div className="surface rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-neutral-900/6 dark:hover:shadow-black/20">
                <div className="mb-4 inline-flex rounded-lg bg-accent-50 p-3 text-accent-600 dark:bg-accent-900/20 dark:text-accent-400">
                  <Icon name={highlight.icon} size={22} />
                </div>
                <h3 className="mb-2 text-base font-bold text-neutral-900 dark:text-neutral-50">
                  {highlight.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {highlight.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
