import { useEffect, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
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
    }, 200);
    return () => {
      window.clearTimeout(timer);
    };
  }, [isClosing, onClose]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsClosing(true);
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
        className={`absolute inset-0 bg-neutral-900/50 backdrop-blur-sm dark:bg-black/60 ${
          isClosing ? "modal-backdrop-exit" : "modal-backdrop-enter"
        }`}
        onClick={() => setIsClosing(true)}
        aria-hidden="true"
      />

      <div
        className={`surface relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl ${
          isClosing ? "modal-panel-exit" : "modal-panel-enter"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4 dark:border-neutral-800">
          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
            {project.title}
          </span>
          <button
            onClick={() => setIsClosing(true)}
            className="rounded-md p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
            aria-label="Close dialog"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
              {project.title}
            </h3>
            {project.productionReady && (
              <Tag variant="accent">{t.projectProductionReady}</Tag>
            )}
          </div>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>

          <p className="mb-4 font-mono text-xs font-medium text-accent-600 dark:text-accent-400">
            {project.status}
          </p>

          <p className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" size="sm">
                <ExternalLink size={14} />
                {t.projectLiveDemo}
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="secondary" size="sm">
                <Github size={14} />
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
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, index) => (
            <Reveal key={project.id} delay={80 + index * 90}>
              <div className="surface group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/8 dark:hover:shadow-black/30">
                <button
                  onClick={() => setSelected(project)}
                  className="w-full p-6 text-left"
                  aria-label={`View details for ${project.title}`}
                >
                  {/* Project number + status */}
                  <div className="mb-5 flex items-start justify-between">
                    <span className="font-mono text-3xl font-bold leading-none text-neutral-100 select-none dark:text-neutral-800">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.productionReady && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-green-600 dark:text-green-400">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
                        {t.projectProductionReady}
                      </span>
                    )}
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-neutral-50">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <p className="mb-4 font-mono text-xs font-medium text-accent-600 dark:text-accent-400">
                    {project.status}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </button>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex gap-4 border-t border-neutral-100 px-6 py-4 dark:border-neutral-800">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={13} />
                        {t.projectLive}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                        aria-label={`View source code of ${project.title}`}
                      >
                        <Github size={13} />
                        {t.projectCode}
                      </a>
                    )}
                  </div>
                )}
              </div>
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
