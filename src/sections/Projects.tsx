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
    const timer = window.setTimeout(() => {
      onClose();
    }, 250);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isClosing, onClose]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsClosing(true);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${project.title}`}
    >
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-md dark:bg-black/60 ${
          isClosing ? "modal-backdrop-exit" : "modal-backdrop-enter"
        }`}
        onClick={() => setIsClosing(true)}
        aria-hidden="true"
      />

      <div
        className={`glass-surface relative w-full max-w-lg overflow-hidden shadow-2xl ${
          isClosing ? "modal-panel-exit" : "modal-panel-enter"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200/60 px-6 py-4 dark:border-neutral-800/60">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            {project.title}
          </h3>
          <button
            onClick={() => setIsClosing(true)}
            className="rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
            {project.productionReady && (
              <Tag variant="accent">{t.projectProductionReady}</Tag>
            )}
          </div>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Tag key={tech} variant="accent">
                {tech}
              </Tag>
            ))}
          </div>

          <p className="mb-2 text-xs font-semibold tracking-widest text-accent-500 uppercase">
            {project.status}
          </p>

          <p className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
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
    <section id="projects" className="py-24">
      <Container>
        <div className="section-divider mb-24" />

        <SectionTitle
          title={t.projectsTitle}
          subtitle={t.projectsSubtitle}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, index) => (
            <Reveal key={project.id} delay={80 + index * 90}>
              <Card hover>
                <button
                  onClick={() => setSelected(project)}
                  className="w-full text-left"
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="project-preview mb-5 flex h-36 items-center justify-center">
                    <ArrowUpRight
                      size={32}
                      className="text-accent-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-accent-600"
                    />
                  </div>

                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
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

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </button>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-5 flex gap-3 border-t border-neutral-200/60 pt-4 dark:border-neutral-800/60">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 transition-colors hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
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
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
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
