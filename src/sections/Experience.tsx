import { Briefcase, GraduationCap } from "lucide-react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { useTranslation } from "../i18n/useTranslation";

export function Experience() {
  const { t, profile } = useTranslation();

  return (
    <section
      id="experience"
      className="border-b border-accent-500/10 py-24 dark:border-accent-500/8"
    >
      <Container>
        <SectionTitle
          title={t.experienceTitle}
          subtitle={t.experienceSubtitle}
          command={t.experienceCommand}
        />

        <div className="relative mx-auto max-w-2xl">
          {/* Timeline line */}
          <div className="absolute top-0 left-4 h-full w-px bg-gradient-to-b from-accent-500/40 via-accent-500/20 to-transparent sm:left-6" />

          <div className="flex flex-col gap-8">
            {profile.experience.map((item, index) => (
              <Reveal key={item.id} delay={90 + index * 90}>
                <div className="terminal-surface relative rounded-lg p-5 pl-12 sm:pl-16">
                  {/* Icon */}
                  <div className="absolute top-5 left-0 flex h-8 w-8 items-center justify-center rounded-lg border border-accent-500/25 bg-accent-100/50 sm:left-2 sm:h-9 sm:w-9 dark:border-accent-500/20 dark:bg-accent-500/10">
                    {item.type === "work" ? (
                      <Briefcase
                        size={16}
                        className="text-accent-700 dark:text-accent-400"
                      />
                    ) : (
                      <GraduationCap
                        size={16}
                        className="text-accent-700 dark:text-accent-400"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-mono text-base font-bold text-neutral-900 dark:text-neutral-50">
                        {item.role}
                      </h3>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {item.company}
                      </span>
                    </div>

                    <p className="mb-3 font-mono text-xs font-medium text-neutral-500 dark:text-neutral-500">
                      {item.startDate} — {item.endDate} &middot; {item.location}
                    </p>

                    <ul className="space-y-1.5">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                        >
                          <span className="mr-1.5 font-mono text-accent-500">-</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
