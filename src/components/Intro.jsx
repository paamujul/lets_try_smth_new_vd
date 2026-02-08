import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-beige-100 text-center p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="text-6xl md:text-8xl font-serif text-rose-gold font-bold">
                    Hi.
                </h1>
                <motion.p
                    className="mt-4 text-brown-600 font-sans text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    (just a quick intro)
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Intro;
