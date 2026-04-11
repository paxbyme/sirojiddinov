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
      className="border-b border-neutral-200/60 py-24 dark:border-neutral-800/60"
    >
      <Container>
        <SectionTitle
          title={t.experienceTitle}
          subtitle={t.experienceSubtitle}
        />

        <div className="relative mx-auto max-w-2xl">
          {/* Timeline line */}
          <div className="absolute top-0 left-4 h-full w-px bg-gradient-to-b from-neutral-200 via-neutral-200/50 to-transparent dark:from-neutral-800 dark:via-neutral-800/50 sm:left-6" />

          <div className="flex flex-col gap-6">
            {profile.experience.map((item, index) => (
              <Reveal key={item.id} delay={90 + index * 90}>
                <div className="surface relative rounded-xl p-5 pl-12 sm:pl-16">
                  {/* Icon */}
                  <div className="absolute top-5 left-0 flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white sm:left-2 sm:h-9 sm:w-9 dark:border-neutral-700 dark:bg-neutral-800">
                    {item.type === "work" ? (
                      <Briefcase size={15} className="text-accent-600 dark:text-accent-400" />
                    ) : (
                      <GraduationCap size={15} className="text-accent-600 dark:text-accent-400" />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-50">
                        {item.role}
                      </h3>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {item.company}
                      </span>
                    </div>

                    <p className="mb-3 font-mono text-xs text-neutral-400 dark:text-neutral-500">
                      {item.startDate} — {item.endDate} · {item.location}
                    </p>

                    <ul className="space-y-1.5">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                        >
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-500" />
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
