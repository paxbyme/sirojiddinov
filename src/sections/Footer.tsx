import { Container } from "../components/Container";
import { useTranslation } from "../i18n/useTranslation";

export function Footer() {
  const { t, profile } = useTranslation();

  return (
    <footer className="border-t border-accent-500/10 py-8 dark:border-accent-500/8">
      <Container>
        <p className="text-center font-mono text-sm text-neutral-500 dark:text-neutral-500">
          <span className="terminal-prompt">{profile.name.toLowerCase()}@portfolio</span>
          <span className="text-neutral-400 dark:text-neutral-600">:~$</span>{" "}
          <span className="text-neutral-500 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} {profile.name}. {t.footerBuiltWith}
          </span>
        </p>
      </Container>
    </footer>
  );
}
