import { useEffect, useState, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import SEO from './components/SEO';
import CustomCursor from './components/customCursor';
import Footer from './components/Footer';

// Lazy load heavy 3D/Interactive sections
const HeroSection = lazy(() => import('./components/Hero'));
const FeaturesSection = lazy(() => import('./components/Features'));
const WorkSection = lazy(() => import('./components/Work'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <SEO />
      
      {/* Show Preloader while main bundles are fetching */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}
          
      <div 
        className={`bg-gray-50 antialiased selection:bg-orange-500 selection:text-white transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Suspense ensures the app doesn't crash while loading chunks */}
        <Suspense fallback={null}>
          <HeroSection />
          <div id="features">
            <FeaturesSection />
          </div>
          <div id="work">
            <WorkSection /> 
          </div>
        </Suspense>
        
        <div id="footer">
          <Footer />
        </div>
        
        <CustomCursor />
      </div>
    </>
  );
}

export default App;