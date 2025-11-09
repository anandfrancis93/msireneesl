import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Evaluations from '@/components/Evaluations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Evaluations />
      <Contact />
      <Footer />
    </main>
  );
}
