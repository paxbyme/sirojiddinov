import { Container } from "../components/Container";
import { useTranslation } from "../i18n/useTranslation";

export function Footer() {
  const { t, profile } = useTranslation();

  return (
    <footer className="pb-10 pt-4">
      <Container>
        <div className="section-fade mb-8" />
        <p className="text-center text-sm text-neutral-400 dark:text-neutral-500">
          &copy; {new Date().getFullYear()} <span className="font-medium text-neutral-900 dark:text-white">{profile.name}</span>. {t.footerBuiltWith}
        </p>
      </Container>
    </footer>
  );
}
