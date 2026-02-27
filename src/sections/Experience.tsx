import { Briefcase, GraduationCap } from "lucide-react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Reveal } from "../components/Reveal";
import { profile } from "../data/profile";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-slate-200/55 py-24 dark:border-slate-700/45"
    >
      <Container>
        <SectionTitle
          title="Experience & Education"
          subtitle="My professional journey so far."
        />

        <div className="relative mx-auto max-w-2xl">
          {/* Timeline line */}
          <div className="absolute top-0 left-4 h-full w-px bg-gradient-to-b from-accent-300/60 via-accent-500/40 to-transparent sm:left-6" />

          <div className="flex flex-col gap-8">
            {profile.experience.map((item, index) => (
              <Reveal key={item.id} delay={90 + index * 90}>
                <div className="glass-surface relative rounded-2xl p-5 pl-12 sm:pl-16">
                  {/* Icon */}
                  <div className="absolute top-5 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-accent-300/55 bg-accent-100/75 sm:left-2 sm:h-9 sm:w-9 dark:border-accent-400/35 dark:bg-accent-500/10">
                    {item.type === "work" ? (
                      <Briefcase
                        size={16}
                        className="text-accent-700 dark:text-accent-300"
                      />
                    ) : (
                      <GraduationCap
                        size={16}
                        className="text-accent-700 dark:text-accent-300"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                        {item.role}
                      </h3>
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        {item.company}
                      </span>
                    </div>

                    <p className="mb-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {item.startDate} — {item.endDate} &middot; {item.location}
                    </p>

                    <ul className="space-y-1.5">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                        >
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
