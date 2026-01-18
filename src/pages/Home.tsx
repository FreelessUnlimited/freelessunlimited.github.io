import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Security } from '../components/Security';
import { Pricing } from '../components/Pricing';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Security />
      <Pricing />
      <Footer />
    </>
  );
}
