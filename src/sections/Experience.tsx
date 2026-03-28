import { Briefcase, GraduationCap } from "lucide-react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { useTranslation } from "../i18n/useTranslation";

export function Experience() {
  const { t, profile } = useTranslation();

  return (
    <section id="experience" className="py-24">
      <Container>
        <div className="section-divider mb-24" />

        <SectionTitle
          title={t.experienceTitle}
          subtitle={t.experienceSubtitle}
        />

        <div className="relative mx-auto max-w-2xl">
          {/* Timeline line */}
          <div className="absolute top-0 left-5 h-full w-px bg-gradient-to-b from-accent-400/40 via-accent-500/20 to-transparent sm:left-7" />

          <div className="flex flex-col gap-8">
            {profile.experience.map((item, index) => (
              <Reveal key={item.id} delay={90 + index * 90}>
                <div className="glass-surface relative rounded-2xl p-5 pl-14 sm:pl-18">
                  {/* Icon */}
                  <div className="absolute top-5 left-1 flex h-9 w-9 items-center justify-center rounded-xl bg-accent-50 text-accent-600 sm:left-3 dark:bg-accent-500/10 dark:text-accent-400">
                    {item.type === "work" ? (
                      <Briefcase size={16} />
                    ) : (
                      <GraduationCap size={16} />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                        {item.role}
                      </h3>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {item.company}
                      </span>
                    </div>

                    <p className="mb-3 text-xs font-medium text-neutral-400 dark:text-neutral-500">
                      {item.startDate} — {item.endDate} &middot; {item.location}
                    </p>

                    <ul className="space-y-1.5">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-400" />
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
