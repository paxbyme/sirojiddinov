import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { DesignSwitcher } from "./design/DesignSwitcher";

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <div className="app-backdrop" aria-hidden="true">
        <div className="backdrop-orb orb-1" />
        <div className="backdrop-orb orb-2" />
        <div className="backdrop-orb orb-3" />
        <div className="grain" />
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
      <DesignSwitcher />
    </div>
  );
}
