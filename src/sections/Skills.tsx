import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Tag } from "../components/Tag";
import { Card } from "../components/Card";
import { Reveal } from "../components/Reveal";
import { useTranslation } from "../i18n/useTranslation";

export function Skills() {
  const { t, profile } = useTranslation();

  return (
    <section
      id="skills"
      className="border-y border-accent-500/10 py-24 dark:border-accent-500/8"
    >
      <Container>
        <SectionTitle
          title={t.skillsTitle}
          subtitle={t.skillsSubtitle}
          command={t.skillsCommand}
        />

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {profile.skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={70 + index * 80}>
              <Card title={category.title}>
                <h3 className="mb-4 font-mono text-sm font-bold tracking-wide text-accent-700 uppercase dark:text-accent-400">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Tag key={skill.name}>{skill.name}</Tag>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
