import { motion } from 'framer-motion';
import { ChefHat, Globe, Siren } from 'lucide-react';

const FunFacts = () => {
    const facts = [
        {
            title: "Chef Mode",
            text: "Indo-Italian Cuisine Specialist",
            icon: <ChefHat className="w-8 h-8 text-rose-400 group-hover:scale-110 transition-transform" />,
            delay: 0.2
        },
        {
            title: "Trilingual Talent",
            text: "British × Australian × American accent remix",
            icon: <Globe className="w-8 h-8 text-rose-gold group-hover:rotate-12 transition-transform" />,
            delay: 0.4
        },
        {
            title: "Campus Survivor",
            text: "Survived a robbery by a guy named 'Speed'",
            icon: <Siren className="w-8 h-8 text-red-800 group-hover:animate-pulse" />,
            delay: 0.6
        }
    ];

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative overflow-hidden bg-beige-100">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30 pointer-events-none" />

            <motion.div
                className="text-center mb-12 relative z-10"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.span
                    className="inline-block px-4 py-1 rounded-full border border-rose-gold text-xs font-serif uppercase tracking-widest text-rose-gold mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                >
                    Track 02
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-serif text-red-800 italic">The B-Sides</h2>
                <p className="font-sans text-brown-600 mt-2">Behind the Music</p>
            </motion.div>

            <div className="grid gap-6 max-w-lg w-full relative z-10">
                {facts.map((fact, index) => (
                    <motion.div
                        key={index}
                        className="bg-white/80 backdrop-blur-md border border-white p-6 rounded-2xl shadow-sm flex items-center gap-4 group cursor-default"
                        initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: fact.delay + 0.5, type: "spring", stiffness: 100 }}
                        whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1, shadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                    >
                        <motion.div
                            className="bg-pink-50 p-3 rounded-full group-hover:bg-pink-100 transition-colors shadow-inner"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: index * 0.3 }}
                        >
                            {fact.icon}
                        </motion.div>
                        <div>
                            <h3 className="font-serif font-bold text-lg text-rose-gold">{fact.title}</h3>
                            <p className="font-sans text-gray-700 leading-tight">{fact.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default FunFacts;
