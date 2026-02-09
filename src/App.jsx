import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Slide1, Slide2, ReasonSlide, Slide4, Slide5, Slide8 } from './components/Slides';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Configuration for the 8 slides
  const slides = [
    <Slide1 />, // 0: Hi!
    <Slide2 />, // 1: Question
    <ReasonSlide number="1" title="I don't have a valentine this year" image="/slides/slide_3.jpg" />, // 2
    <ReasonSlide number="2" title="You won't be bored" image="/slides/slide_4_2.png" />, // 3
    <ReasonSlide number="3" title="I will treat you with respect" image="/slides/Slide_5_2.png" />, // 4
    <ReasonSlide number="4" title="I will listen to you yap" image="/slides/slide_6.jpg" />, // 5
    <ReasonSlide number="5" title="I can shotgun beers with my thumb. No keys," image="/slides/slide_7.jpg" />, // 6
    <ReasonSlide number="Bonus" title="I'll get you flowers" image="/slides/bonus.jpg" />, // 7
    <Slide8 /> // 7: Decision
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Swipe Logic
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden bg-kraft relative font-hand"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/crinkled-paper.png')] mix-blend-multiply" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4">
        {currentSlide > 0 && (
          <button
            onClick={handlePrev}
            className="pointer-events-auto p-2 bg-black/10 hover:bg-black/20 rounded-full text-black/50 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        {currentSlide < slides.length - 1 && (
          <div className="flex-1" /> // Spacer
        )}

        {currentSlide < slides.length - 1 && (
          <button
            onClick={handleNext}
            className="pointer-events-auto p-2 bg-black/10 hover:bg-black/20 rounded-full text-black/50 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        )}
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${idx === currentSlide ? 'bg-rose-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
