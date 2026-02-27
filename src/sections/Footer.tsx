import { Container } from "../components/Container";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/55 py-8 dark:border-slate-700/45">
      <Container>
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React &
          Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}
