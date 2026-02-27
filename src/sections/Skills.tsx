import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Tag } from "../components/Tag";
import { Reveal } from "../components/Reveal";
import { profile } from "../data/profile";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-slate-200/55 py-24 dark:border-slate-700/45"
    >
      <Container>
        <SectionTitle
          title="Skills & Tools"
          subtitle="Technologies I work with on a daily basis."
        />

        <div className="mx-auto grid max-w-3xl gap-12 sm:grid-cols-3">
          {profile.skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={70 + index * 80}>
              <div className="glass-surface rounded-2xl p-5">
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-accent-700 uppercase dark:text-accent-300">
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
