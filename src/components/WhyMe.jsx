import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const WhyMe = () => {
    const reasons = [
        {
            id: 1,
            text: "I'm genuinely a good guy",
            subtext: "(mom certified)",
            icon: <Heart className="w-12 h-12 text-white" />,
            gradient: "from-pink-400 to-rose-400"
        },
        {
            id: 2,
            text: "I clearly put in effort",
            subtext: "(see: this entire website)",
            icon: <Sparkles className="w-12 h-12 text-white" />,
            gradient: "from-rose-400 to-rose-gold"
        }
    ];

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-pink-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 pointer-events-none" />

            <motion.div
                className="text-center mb-16 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <p className="font-serif text-rose-gold italic text-xl mb-2">Track 03</p>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-red-800">
                    Why This Hits Different
                </h2>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl relative z-10">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={reason.id}
                        className={`flex-1 rounded-3xl p-8 shadow-2xl bg-gradient-to-br ${reason.gradient} text-white flex flex-col justify-between min-h-[300px] transform transition-transform hover:scale-105`}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.3 + 0.5 }}
                    >
                        <div className="bg-white/20 w-fit p-4 rounded-full backdrop-blur-md mb-6">
                            {reason.icon}
                        </div>
                        <div>
                            <span className="text-6xl font-serif opacity-50 absolute top-4 right-6">0{reason.id}</span>
                            <h3 className="text-3xl md:text-4xl font-bold font-serif mb-2 leading-tight">
                                {reason.text}
                            </h3>
                            <p className="font-sans text-pink-100 italic opacity-90">
                                {reason.subtext}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyMe;
