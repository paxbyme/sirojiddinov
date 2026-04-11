import { Container } from "../components/Container";
import { useTranslation } from "../i18n/useTranslation";

export function Footer() {
  const { t, profile } = useTranslation();

  return (
    <footer className="border-t border-neutral-200/60 py-8 dark:border-neutral-800/60">
      <Container>
        <p className="text-center text-sm text-neutral-400 dark:text-neutral-500">
          &copy; {new Date().getFullYear()} {profile.name}
          <span className="mx-2 text-neutral-300 dark:text-neutral-700">·</span>
          {t.footerBuiltWith}
        </p>
      </Container>
    </footer>
  );
}
