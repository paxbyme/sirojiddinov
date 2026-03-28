import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { ScrollProgress } from "./components/ScrollProgress";
import { CursorGlow } from "./components/CursorGlow";

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <ScrollProgress />
      <CursorGlow />

      <div className="app-backdrop" aria-hidden="true">
        <div className="app-grid" />
        <div className="scanline" />

        <div className="floating-orb orb-1" />
        <div className="floating-orb orb-2" />
        <div className="floating-orb orb-3" />
        <div className="floating-orb orb-4" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>

      <LanguageSwitcher />
    </div>
  );
}
