import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Tag } from "../components/Tag";
import { Card } from "../components/Card";
import { Reveal } from "../components/Reveal";
import { useTranslation } from "../i18n/useTranslation";

export function Skills() {
  const { t, profile } = useTranslation();

  return (
    <section id="skills" className="py-28">
      <Container>
        <div className="section-fade mb-28" />

        <SectionTitle title={t.skillsTitle} subtitle={t.skillsSubtitle} />

        <div className="bento-grid">
          {profile.skillCategories.map((category, index) => (
            <Reveal
              key={category.title}
              delay={60 + index * 90}
              className={index === 0 ? "bento-wide" : ""}
            >
              <Card hover className="h-full">
                <p className="mb-5 text-xs font-semibold tracking-[0.2em] text-accent-500 uppercase dark:text-accent-400">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2.5">
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
