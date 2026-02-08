import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X, ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "Is this for real?", a: "Yes. 100%. Equal parts cringe and romance." },
        { q: "Why did you do this?", a: "Kinda forced to 😅 (but also wanted to)" },
        { q: "Did you lose a bet?", a: "Maybe... let's not talk about it." },
        { q: "Will he pay for the date?", a: "Only if his parlay hits 🎲 (jk, yes)" }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {/* Trigger Tab */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur text-rose-gold p-3 rounded-full shadow-lg hover:scale-110 transition-transform border border-pink-100 group"
            >
                <span className="absolute right-full mr-2 bg-white px-2 py-1 rounded-lg text-xs font-bold text-rose-gold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm">
                    F.A.Q ?
                </span>
                <HelpCircle className="w-6 h-6" />
            </button>

            {/* Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full md:w-96 bg-beige-100/95 backdrop-blur-xl shadow-2xl z-50 p-6 overflow-y-auto border-l border-white/50"
                        >
                            <div className="flex justify-between items-center mb-8 border-b border-rose-gold/20 pb-4">
                                <h2 className="text-2xl font-serif font-bold text-red-800">Frequently Asked</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-rose-100 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-rose-gold" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/60 rounded-xl overflow-hidden shadow-sm border border-white"
                                    >
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex items-center justify-between p-4 text-left hover:bg-white/80 transition-colors"
                                        >
                                            <span className="font-serif font-bold text-rose-gold">{faq.q}</span>
                                            <ChevronDown
                                                className={`w-4 h-4 text-rose-300 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="p-4 pt-0 text-brown-600 font-sans text-sm leading-relaxed">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 text-center opacity-50">
                                <p className="font-serif italic text-rose-gold text-sm">Made with ❤️ (and React)</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default FAQ;
