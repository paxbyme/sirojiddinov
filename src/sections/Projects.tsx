import { useEffect, useState } from "react";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { useTranslation } from "../i18n/useTranslation";
import type { Project } from "../types";

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { t } = useTranslation();
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isClosing) return;
    const timer = window.setTimeout(() => onClose(), 300);
    return () => window.clearTimeout(timer);
  }, [isClosing, onClose]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsClosing(true);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${project.title}`}
    >
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-lg dark:bg-black/50 ${
          isClosing ? "modal-backdrop-exit" : "modal-backdrop-enter"
        }`}
        onClick={() => setIsClosing(true)}
        aria-hidden="true"
      />

      <div
        className={`creme-card relative w-full max-w-lg overflow-hidden shadow-2xl ${
          isClosing ? "modal-panel-exit" : "modal-panel-enter"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200/40 px-7 py-5 dark:border-neutral-800/40">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            {project.title}
          </h3>
          <button
            onClick={() => setIsClosing(true)}
            className="rounded-xl p-1.5 text-neutral-400 transition-all duration-300 hover:bg-neutral-100/80 hover:text-neutral-700 dark:hover:bg-neutral-800/80 dark:hover:text-neutral-200"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-7">
          {project.productionReady && (
            <div className="mb-4">
              <Tag variant="accent">{t.projectProductionReady}</Tag>
            </div>
          )}

          <div className="mb-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech} variant="accent">{tech}</Tag>
            ))}
          </div>

          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-accent-500 uppercase">
            {project.status}
          </p>

          <p className="mb-7 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" size="sm">
                <ExternalLink size={16} />
                {t.projectLiveDemo}
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="secondary" size="sm">
                <Github size={16} />
                {t.projectSourceCode}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { t, profile } = useTranslation();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28">
      <Container>
        <div className="section-fade mb-28" />

        <SectionTitle title={t.projectsTitle} subtitle={t.projectsSubtitle} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, index) => (
            <Reveal key={project.id} delay={60 + index * 100}>
              <Card hover>
                <button
                  onClick={() => setSelected(project)}
                  className="group w-full text-left"
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="project-preview mb-5 flex h-40 items-center justify-center">
                    <ArrowUpRight
                      size={28}
                      className="text-accent-300 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-400 dark:text-accent-700 dark:group-hover:text-accent-500"
                    />
                  </div>

                  <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-50">
                      {project.title}
                    </h3>
                    {project.productionReady && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400">
                        <span className="status-dot" style={{ width: 6, height: 6 }} />
                        {t.projectProductionReady}
                      </span>
                    )}
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <p className="mb-4 text-xs font-medium text-accent-600 dark:text-accent-400">
                    {project.status}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </button>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-5 flex gap-4 border-t border-neutral-200/40 pt-5 dark:border-neutral-800/40">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 transition-all duration-400 hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={14} />
                        {t.projectLive}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-all duration-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                        aria-label={`View source code of ${project.title}`}
                      >
                        <Github size={14} />
                        {t.projectCode}
                      </a>
                    )}
                  </div>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
