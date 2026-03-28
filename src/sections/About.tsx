import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Card } from "../components/Card";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { useTranslation } from "../i18n/useTranslation";

export function About() {
  const { t, profile } = useTranslation();

  return (
    <section id="about" className="py-28">
      <Container>
        <SectionTitle title={t.aboutTitle} subtitle={t.aboutSubtitle} />

        <div className="bento-grid">
          <Reveal delay={60} className="bento-wide bento-tall">
            <Card className="flex h-full flex-col justify-center">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-accent-500 uppercase">Bio</p>
              <p className="text-lg leading-[1.8] text-neutral-600 dark:text-neutral-300">{profile.bio}</p>
            </Card>
          </Reveal>

          {profile.highlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={150 + index * 100}>
              <Card hover className="h-full">
                <div className="icon-box mb-5 inline-flex rounded-2xl p-3.5 text-accent-600 dark:text-accent-400">
                  <Icon name={highlight.icon} size={22} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-neutral-900 dark:text-neutral-50">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{highlight.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
