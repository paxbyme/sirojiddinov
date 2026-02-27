import { useEffect, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import { Button } from "../components/Button";
import { Reveal } from "../components/Reveal";
import { profile } from "../data/profile";
import type { Project } from "../types";

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
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
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-900/55 backdrop-blur-md ${
          isClosing ? "modal-backdrop-exit" : "modal-backdrop-enter"
        }`}
        onClick={() => setIsClosing(true)}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className={`glass-surface relative w-full max-w-lg rounded-2xl p-6 shadow-2xl sm:p-8 ${
          isClosing ? "modal-panel-exit" : "modal-panel-enter"
        }`}
      >
        <button
          onClick={() => setIsClosing(true)}
          className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-white/55 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-slate-200"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
            {project.title}
          </h3>
          {project.productionReady && (
            <Tag variant="accent">Production Ready</Tag>
          )}
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Tag key={tech} variant="accent">
              {tech}
            </Tag>
          ))}
        </div>

        <p className="mb-4 text-xs font-semibold tracking-wide text-accent-800 dark:text-accent-200">
          {project.status}
        </p>

        <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="primary" size="sm">
              <ExternalLink size={16} />
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="secondary" size="sm">
              <Github size={16} />
              Source Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionTitle
          title="Projects"
          subtitle="A selection of things I've built."
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
                {/* Gradient placeholder for project image */}
                <div className="project-preview mb-4 h-36 rounded-xl" />

                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                    {project.title}
                  </h3>
                  {project.productionReady && (
                    <Tag variant="accent">Production Ready</Tag>
                  )}
                </div>
                <p className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <p className="mb-4 text-xs font-semibold tracking-wide text-accent-800 dark:text-accent-200">
                  {project.status}
                </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </button>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-4 flex gap-3 border-t border-slate-300/35 pt-4 dark:border-slate-700/45">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-accent-700 transition-colors hover:text-fuchsia-600 dark:text-accent-300 dark:hover:text-fuchsia-300"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                        aria-label={`View source code of ${project.title}`}
                      >
                        <Github size={14} />
                        Code
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
