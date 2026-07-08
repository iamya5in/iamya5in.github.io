import Hero from '@/components/Hero';
import CoreExpertise from '@/components/CoreExpertise';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* Hero + Expertise share the same "home" anchor */}
      <section id="home">
        <Hero />
        <CoreExpertise />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}
