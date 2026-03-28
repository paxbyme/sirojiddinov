import { Container } from "../components/Container";
import { useTranslation } from "../i18n/useTranslation";

export function Footer() {
  const { t, profile } = useTranslation();

  return (
    <footer className="py-8">
      <Container>
        <div className="section-divider mb-8" />
        <p className="text-center text-sm text-neutral-400 dark:text-neutral-500">
          &copy; {new Date().getFullYear()} {profile.name}. {t.footerBuiltWith}
        </p>
      </Container>
    </footer>
  );
}
