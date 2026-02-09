import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Slide 1: Hi! ---
export const Slide1 = () => {
    return (
        <div className="flex items-center justify-center h-full p-4 text-center">
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="text-6xl md:text-9xl font-serif font-bold text-rose-500"
            >
                Hi!
            </motion.h1>
        </div>
    );
};

// --- Slide 2: The Question ---
export const Slide2 = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer1 = setTimeout(() => setStep(1), 500);
        const timer2 = setTimeout(() => setStep(2), 1000);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20, rotate: 2 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/80 p-6 shadow-xl rotate-2"
            >
                <p className="text-4xl md:text-6xl font-hand text-red-800 font-bold">
                    I was wondering if I could be ur valentine this year?
                </p>
            </motion.div>

            {step >= 1 && (
                <motion.div
                    initial={{ opacity: 0, y: 20, rotate: -3 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-pink-200/90 p-4 shadow-lg -rotate-3"
                >
                    <p className="text-3xl md:text-5xl font-hand text-red-600 font-bold">
                        You may ask why...?
                    </p>
                </motion.div>
            )}

            {step >= 2 && (
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-7xl font-paint text-white drop-shadow-md mt-8"
                >
                    So here are 5 reasons why:
                </motion.p>
            )}
        </div>
    );
};

// --- Slide 3, 5, 6, 7: Standard Reason Slide ---
export const ReasonSlide = ({ number, title, image }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: Math.random() * 4 - 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl w-full bg-white p-4 md:p-8 shadow-2xl rotate-1 relative"
            >
                {/* Tape Effect */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/60 rotate-2 shadow-sm" />

                <h2 className="text-4xl md:text-6xl font-hand font-bold text-red-800 mb-6 leading-none">
                    <span className="text-6xl md:text-8xl font-paint text-pink-500 mr-4 block md:inline">{number}.</span>
                    {title}
                </h2>

                <div className="w-full max-h-[50vh] overflow-hidden border-4 border-gray-100 bg-gray-50 flex items-center justify-center">
                    {image ? (
                        <img src={image} alt={title} className="w-full h-full object-contain" />
                    ) : (
                        <div className="h-64 flex items-center justify-center text-gray-400 font-hand text-2xl">Image: {image || 'Missing'}</div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

// --- Slide 4: Double Image ---
export const Slide4 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: Math.random() * 4 - 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl w-full bg-white p-4 md:p-8 shadow-2xl rotate-1 relative"
            >
                {/* Tape Effect */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/60 rotate-2 shadow-sm" />

                <h2 className="text-4xl md:text-6xl font-hand font-bold text-red-800 mb-6 leading-none">
                    <span className="text-6xl md:text-8xl font-paint text-pink-500 mr-4 block md:inline">2.</span>
                    You won't be bored
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full h-auto max-h-[30vh] md:max-h-[40vh] overflow-hidden border-2 border-gray-100 rounded-lg bg-gray-50 flex items-center justify-center shadow-md">
                        <img src="/slides/slide_4_1.jpg" alt="Reason 2a" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-full h-auto max-h-[30vh] md:max-h-[40vh] overflow-hidden border-2 border-gray-100 rounded-lg bg-gray-50 flex items-center justify-center shadow-md">
                        <img src="/slides/slide_4_2.png" alt="Reason 2b" className="w-full h-full object-contain" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// --- Slide 5: Double Image (Respect) ---
export const Slide5 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: Math.random() * 4 - 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl w-full bg-white p-4 md:p-8 shadow-2xl rotate-1 relative"
            >
                {/* Tape Effect */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/60 rotate-2 shadow-sm" />

                <h2 className="text-4xl md:text-6xl font-hand font-bold text-red-800 mb-6 leading-none">
                    <span className="text-6xl md:text-8xl font-paint text-pink-500 mr-4 block md:inline">3.</span>
                    I will treat you with respect
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full h-auto max-h-[30vh] md:max-h-[40vh] overflow-hidden border-2 border-gray-100 rounded-lg bg-gray-50 flex items-center justify-center shadow-md">
                        <img src="/slides/Slide_5_1.png" alt="Reason 3a" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-full h-auto max-h-[30vh] md:max-h-[40vh] overflow-hidden border-2 border-gray-100 rounded-lg bg-gray-50 flex items-center justify-center shadow-md">
                        <img src="/slides/Slide_5_2.png" alt="Reason 3b" className="w-full h-full object-contain" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// --- Slide 8: The Decision ---
export const Slide8 = () => {
    const [decision, setDecision] = useState(null); // 'yes' or 'no'
    const [noCount, setNoCount] = useState(0);
    const [noStyle, setNoStyle] = useState({});

    const handleNoClick = () => {
        if (noCount < 2) {
            // Move button randomly
            const randomX = (Math.random() - 0.5) * 500; // -250 to 250
            const randomY = (Math.random() - 0.5) * 500;
            setNoStyle({ transform: `translate(${randomX}px, ${randomY}px)` });
            setNoCount(prev => prev + 1);
        } else {
            setDecision('no');
        }
    };

    if (decision === 'yes') {
        return (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="max-w-2xl w-full space-y-6 bg-white p-8 shadow-2xl rotate-1">
                    <h2 className="text-8xl font-paint text-green-600">YAY! 💖</h2>
                    <p className="text-4xl font-hand text-black">Add me on Snap:</p>
                    <p className="text-5xl font-mono font-bold text-white bg-black p-4 inline-block -rotate-2">sgp0004</p>
                    <p className="text-4xl font-hand text-black">no snap? dw, here is my email:</p>
                    <p className="text-5xl font-mono font-bold text-white bg-black p-4 inline-block -rotate-2">socialssgp@gmail.com</p>
                </motion.div>
            </div>
        );
    }

    if (decision === 'no') {
        return (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-black/90">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl w-full">
                    <h2 className="text-6xl font-paint text-white mb-6">...oh.</h2>
                    <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-gray-700">
                        <img src="/slides/slide_8_2.jpg" alt="No..." className="w-full max-h-[60vh] object-contain" />
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl w-full bg-white p-4 md:p-8 shadow-2xl rotate-1 relative"
            >
                {/* Tape Effect */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/60 rotate-2 shadow-sm" />

                <h2 className="text-5xl md:text-8xl font-hand font-bold text-red-800 mb-6 leading-none">
                    So... what do you say? 🥺
                </h2>

                <div className="w-full max-h-[40vh] overflow-hidden border-4 border-gray-100 bg-gray-50 flex items-center justify-center mb-8 rounded-lg">
                    <img src="/slides/slide_8_1.jpg" alt="Ask" className="w-full h-full object-contain" />
                </div>

                <div className="flex gap-8 md:gap-16 justify-center items-center">
                    <motion.button
                        animate={{ scale: 1 + (noCount * 0.4) }}
                        whileHover={{ scale: 1.1 + (noCount * 0.4) }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setDecision('yes')}
                        className="px-8 py-4 md:px-12 md:py-6 bg-green-500 text-white rounded-full text-3xl md:text-5xl font-paint shadow-xl hover:bg-green-600 transition-colors border-4 border-white"
                    >
                        YES
                    </motion.button>

                    <motion.button
                        style={noStyle}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleNoClick}
                        className="px-8 py-4 md:px-12 md:py-6 bg-red-500 text-white rounded-full text-3xl md:text-5xl font-paint shadow-xl hover:bg-red-600 transition-colors border-4 border-white transition-transform duration-200"
                    >
                        NO
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};
