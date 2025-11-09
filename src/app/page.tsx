import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tesol from '@/components/Tesol';
import WorkExperience from '@/components/WorkExperience';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation />
      <Hero />
      <About />
      <Tesol />
      <WorkExperience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
