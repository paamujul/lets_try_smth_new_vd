import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import FunFacts from './components/FunFacts';
import WhyMe from './components/WhyMe';
import Scheduler from './components/Scheduler';
import FAQ from './components/FAQ';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [Intro, Hero, FunFacts, WhyMe, Scheduler];

  // Background gradients for each step
  const backgrounds = [
    'bg-beige-100', // Intro
    'bg-gradient-to-br from-beige-100 to-pink-100', // Hero
    'bg-gradient-to-br from-pink-50 to-rose-100', // FunFacts
    'bg-gradient-to-br from-rose-100 to-pink-200', // WhyMe
    'bg-gradient-to-br from-white to-beige-200', // Scheduler
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Auto-play logic for first 4 sections (Intro + 3 Content)
  useEffect(() => {
    if (currentStep < 4) {
      const timer = setTimeout(() => {
        handleNext();
      }, currentStep === 0 ? 3000 : 7000); // 3s for Intro, 7s for others
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep]);

  const CurrentComponent = steps[currentStep];

  return (
    <div className={`min-h-screen relative overflow-hidden font-sans transition-colors duration-1000 ${backgrounds[currentStep]}`}>

      {/* Navigation Click Areas (Left/Right) - Disabled on Scheduler for interaction */}
      {currentStep < 4 && (
        <div className="absolute inset-0 flex z-0">
          <div className="w-1/3 h-full cursor-w-resize" onClick={handlePrev} />
          <div className="w-2/3 h-full cursor-e-resize" onClick={handleNext} />
        </div>
      )}

      {/* Render Current Section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-full w-full"
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>

      <FAQ />

      {/* Linked Hearts Progress Indicator */}
      <div className="fixed bottom-8 left-0 w-full flex justify-center gap-4 z-40 pointer-events-none">
        {steps.map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1 }}
            animate={{
              scale: index === currentStep ? 1.2 : 1,
              opacity: Math.abs(currentStep - index) > 1 ? 0.5 : 1
            }}
            className="flex items-center"
          >
            <Heart
              className={`w-6 h-6 transition-colors duration-300 ${index <= currentStep ? 'fill-rose-gold text-rose-gold' : 'text-rose-300'
                }`}
            />
            {/* Link Line */}
            {index < steps.length - 1 && (
              <div className={`w-8 h-0.5 mx-1 transition-colors duration-300 ${index < currentStep ? 'bg-rose-gold' : 'bg-rose-200'
                }`} />
            )}
          </motion.div>
        ))}
      </div>

    </div>
  );
}

export default App;
