import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Tag } from "../components/Tag";
import { Reveal } from "../components/Reveal";
import { useTranslation } from "../i18n/useTranslation";

export function Skills() {
  const { t, profile } = useTranslation();

  return (
    <section
      id="skills"
      className="border-y border-neutral-200/60 py-24 dark:border-neutral-800/60"
    >
      <Container>
        <SectionTitle
          title={t.skillsTitle}
          subtitle={t.skillsSubtitle}
        />

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {profile.skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={70 + index * 80}>
              <div className="surface rounded-xl p-6">
                <h3 className="mb-4 text-xs font-bold tracking-widest text-neutral-400 uppercase dark:text-neutral-500">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Tag key={skill.name}>{skill.name}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
