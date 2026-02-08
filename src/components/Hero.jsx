import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Clapperboard } from 'lucide-react';

const Hero = ({ onComplete }) => {
    const [showContent, setShowContent] = useState(false);

    // Sequence: Bloom -> Show Content
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 2000); // Wait for bloom
        return () => clearTimeout(timer);
    }, []);

    const artists = [
        'The Weeknd',
        'Drake',
        'Don Toliver',
    ];

    const movies = [
        'Mission Impossible',
        'The Hangover',
        '21 Jump Street'
    ];

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-y-auto overflow-x-hidden p-6 text-center">

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-romantic z-0 opacity-50 fixed" />

            <AnimatePresence>
                {!showContent ? (
                    <motion.div
                        className="z-10 flex flex-col items-center justify-center h-screen"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0.5, 1.2, 50],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2.5,
                            times: [0, 0.5, 1],
                            ease: "easeInOut"
                        }}
                    >
                        <Heart className="w-32 h-32 fill-pink-400 text-rose-gold drop-shadow-lg" />
                        <motion.p
                            className="mt-4 font-serif text-2xl text-red-800"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            Just a vibe check...
                        </motion.p>
                    </motion.div>
                ) : (
                    <motion.div
                        className="z-10 w-full max-w-4xl py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Confetti Effect (CSS Animation) */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden fixed">
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute animate-confetti opacity-0 w-3 h-3 bg-pink-300 rounded-full"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 2}s`,
                                        backgroundColor: i % 2 === 0 ? '#FFB6C1' : '#FAF0E6'
                                    }}
                                />
                            ))}
                        </div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-4 font-serif text-red-800 tracking-tight"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Year in Review<br />(Hinge Edition)
                        </motion.h1>

                        <motion.div
                            className="flex flex-wrap justify-center gap-4 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="bg-white/50 backdrop-blur border border-rose-300 px-6 py-2 rounded-full text-brown-600 font-serif">
                                ✨ scorpio
                            </span>
                            <span className="bg-white/50 backdrop-blur border border-rose-300 px-6 py-2 rounded-full text-brown-600 font-serif">
                                💻 cs major
                            </span>
                        </motion.div>

                        {/* Top Artists - Lockets */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-serif text-rose-gold mb-8 italic">The Soundtrack</h2>
                            <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
                                {artists.map((artist, idx) => (
                                    <motion.div
                                        key={artist}
                                        className="flex flex-col items-center"
                                        initial={{ scale: 0, rotate: -10 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.8 + idx * 0.2, type: 'spring' }}
                                    >
                                        <div className="w-24 h-24 md:w-32 md:h-32 locket-frame mb-3 bg-pink-100 flex items-center justify-center border-4 border-rose-gold">
                                            <Music className="w-10 h-10 text-rose-400" />
                                        </div>
                                        <p className="font-sans text-sm font-bold text-brown-600">{artist}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Top Movies - Polaroids */}
                        <div className="pb-20">
                            <h2 className="text-2xl font-serif text-rose-gold mb-8 italic">Cinema Rotation</h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                {movies.map((movie, idx) => (
                                    <motion.div
                                        key={movie}
                                        className="polaroid-frame w-48 bg-white"
                                        initial={{ y: 50, opacity: 0, rotate: (idx % 2 === 0 ? -3 : 3) }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 1.5 + idx * 0.2 }}
                                        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                                    >
                                        <div className="bg-beige-200 h-32 w-full mb-3 flex items-center justify-center overflow-hidden">
                                            <Clapperboard className="w-10 h-10 text-brown-400" />
                                        </div>
                                        <p className="font-handwriting text-center text-gray-700 text-sm leading-tight font-serif">{movie}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Hero;
