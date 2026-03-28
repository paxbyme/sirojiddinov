import { Briefcase, GraduationCap } from "lucide-react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { useTranslation } from "../i18n/useTranslation";

export function Experience() {
  const { t, profile } = useTranslation();

  return (
    <section id="experience" className="py-28">
      <Container>
        <div className="section-fade mb-28" />

        <SectionTitle title={t.experienceTitle} subtitle={t.experienceSubtitle} />

        <div className="relative mx-auto max-w-2xl">
          {/* Timeline line — smooth gradient */}
          <div className="absolute top-0 left-5 h-full w-[2px] rounded-full bg-gradient-to-b from-purple-500/50 via-blue-400/30 to-transparent sm:left-7" />

          <div className="flex flex-col gap-10">
            {profile.experience.map((item, index) => (
              <Reveal key={item.id} delay={80 + index * 100}>
                <div className="aurora-card relative p-6 pl-16 sm:pl-20">
                  {/* Icon */}
                  <div className="absolute top-6 left-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 text-accent-600 shadow-sm sm:left-3 dark:from-purple-500/15 dark:to-blue-500/10 dark:text-accent-400">
                    {item.type === "work" ? (
                      <Briefcase size={17} />
                    ) : (
                      <GraduationCap size={17} />
                    )}
                  </div>

                  <div>
                    <div className="mb-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                        {item.role}
                      </h3>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {item.company}
                      </span>
                    </div>

                    <p className="mb-4 text-xs font-medium text-neutral-400 dark:text-neutral-500">
                      {item.startDate} — {item.endDate} &middot; {item.location}
                    </p>

                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
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
