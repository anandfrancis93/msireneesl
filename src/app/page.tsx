import Navigation from '@/components/Navigation';
import Home from '@/components/Home';
import AboutMe from '@/components/AboutMe';
import Tesol from '@/components/Tesol';
import WorkExperience from '@/components/WorkExperience';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation />
      <Home />
      <AboutMe />
      <Tesol />
      <WorkExperience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
