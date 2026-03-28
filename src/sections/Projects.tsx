import { useEffect, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
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
    }, 220);

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
        className={`absolute inset-0 bg-neutral-900/60 backdrop-blur-md dark:bg-black/70 ${
          isClosing ? "modal-backdrop-exit" : "modal-backdrop-enter"
        }`}
        onClick={() => setIsClosing(true)}
        aria-hidden="true"
      />

      <div
        className={`terminal-surface relative w-full max-w-lg overflow-hidden rounded-lg shadow-2xl ${
          isClosing ? "modal-panel-exit" : "modal-panel-enter"
        }`}
      >
        <div className="terminal-header">
          <span className="ml-14 font-mono text-xs text-neutral-500 dark:text-neutral-400">
            {project.title}
          </span>
          <button
            onClick={() => setIsClosing(true)}
            className="ml-auto rounded-md p-1 text-neutral-500 transition-colors hover:bg-neutral-200/50 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-200"
            aria-label="Close dialog"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
            <h3 className="font-mono text-xl font-bold text-neutral-900 dark:text-neutral-50">
              {project.title}
            </h3>
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

          <p className="mb-4 font-mono text-xs font-semibold tracking-wide text-accent-700 dark:text-accent-400">
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
        <SectionTitle
          title={t.projectsTitle}
          subtitle={t.projectsSubtitle}
          command={t.projectsCommand}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, index) => (
            <Reveal key={project.id} delay={80 + index * 90}>
              <Card hover>
                <button
                  onClick={() => setSelected(project)}
                  className="w-full text-left"
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="project-preview mb-4 h-36 rounded-lg" />

                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-mono text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                      {project.title}
                    </h3>
                    {project.productionReady && (
                      <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-green-600 dark:text-green-400">
                        <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
                        {t.projectProductionReady}
                      </span>
                    )}
                  </div>
                  <p className="mb-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {project.description}
                  </p>
                  <p className="mb-4 font-mono text-xs font-medium text-accent-700 dark:text-accent-400">
                    {project.status}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </button>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-4 flex gap-3 border-t border-accent-500/10 pt-4 dark:border-accent-500/8">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-sm font-semibold text-accent-700 transition-colors hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
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
                        className="inline-flex items-center gap-1 font-mono text-sm font-semibold text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
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
