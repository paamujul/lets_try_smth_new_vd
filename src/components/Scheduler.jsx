import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format, eachDayOfInterval } from 'date-fns';
import { Calendar, Clock, Send, CheckCircle, Heart } from 'lucide-react';

const Scheduler = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [formData, setFormData] = useState({
        suggestions: '',
        name: '',
        email: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Generate dates for Feb 8-14, 2026
    const dates = eachDayOfInterval({
        start: new Date(2026, 1, 8),
        end: new Date(2026, 1, 14)
    });

    const timeSlots = [
        '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
    ];

    const handleTimeToggle = (time) => {
        if (selectedTimes.includes(time)) {
            setSelectedTimes(selectedTimes.filter(t => t !== time));
        } else {
            setSelectedTimes([...selectedTimes, time]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending email to:', formData.email, 'and socialssgp@gmail.com');
        // Trigger Heart Burst here (visual only for now)
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-beige-200 relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 pointer-events-none" />

            <motion.div
                className="w-full max-w-2xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white relative z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit}>
                        <div className="text-center mb-10">
                            <span className="text-rose-gold font-serif italic tracking-wider">The Final Track</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-red-800 font-bold mt-2">Let's Hang Out?</h2>
                            <p className="text-brown-600 mt-2 font-sans">Pick a time that works for you ☕</p>
                        </div>

                        {/* Date Selection */}
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-brown-600 mb-3 flex items-center gap-2 uppercase tracking-wide">
                                <Calendar className="w-4 h-4 text-pink-500" /> Select Date (Feb 2026)
                            </label>
                            <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
                                {dates.map((date) => {
                                    const isSelected = selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
                                    return (
                                        <button
                                            key={date.toString()}
                                            type="button"
                                            onClick={() => setSelectedDate(date)}
                                            className={`flex flex-col items-center p-4 rounded-2xl min-w-[90px] transition-all border-2 ${isSelected
                                                ? 'bg-rose-400 border-rose-400 text-white shadow-lg scale-105'
                                                : 'bg-white border-beige-300 text-brown-600 hover:border-rose-300'
                                                }`}
                                        >
                                            <span className="text-xs font-bold uppercase">{format(date, 'EEE')}</span>
                                            <span className="text-2xl font-serif font-bold">{format(date, 'd')}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Time Selection */}
                        <div className={`mb-8 transition-all duration-500 ${selectedDate ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                            <label className="block text-sm font-bold text-brown-600 mb-3 flex items-center gap-2 uppercase tracking-wide">
                                <Clock className="w-4 h-4 text-pink-500" /> Select Time(s)
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                {timeSlots.map((time) => (
                                    <button
                                        key={time}
                                        type="button"
                                        onClick={() => selectedDate && handleTimeToggle(time)}
                                        className={`py-3 px-2 rounded-xl text-sm font-sans font-medium transition-all border ${selectedTimes.includes(time)
                                            ? 'bg-rose-gold border-rose-gold text-white shadow-md'
                                            : 'bg-beige-100 border-transparent text-brown-600 hover:bg-pink-100'
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Form Fields */}
                        <AnimatePresence>
                            {selectedTimes.length > 0 && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    className="space-y-6 overflow-hidden"
                                >
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            required
                                            value={formData.suggestions}
                                            onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })}
                                            className="w-full bg-transparent border-b-2 border-beige-300 py-3 text-brown-600 focus:outline-none focus:border-rose-400 transition-colors peer placeholder-transparent"
                                            placeholder="Suggestions"
                                            id="suggestions"
                                        />
                                        <label
                                            htmlFor="suggestions"
                                            className="absolute left-0 -top-3.5 text-rose-gold text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-rose-gold peer-focus:text-xs"
                                        >
                                            Any ideas? (Coffee, drinks, etc...)
                                        </label>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-transparent border-b-2 border-beige-300 py-3 text-brown-600 focus:outline-none focus:border-rose-400 transition-colors peer placeholder-transparent"
                                                placeholder="Name"
                                                id="name"
                                            />
                                            <label htmlFor="name" className="absolute left-0 -top-3.5 text-rose-gold text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-rose-gold peer-focus:text-xs">
                                                Your Name
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-transparent border-b-2 border-beige-300 py-3 text-brown-600 focus:outline-none focus:border-rose-400 transition-colors peer placeholder-transparent"
                                                placeholder="Email"
                                                id="email"
                                            />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-rose-gold text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-rose-gold peer-focus:text-xs">
                                                Email Address
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={!formData.name || !formData.email}
                                        className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-4 rounded-xl font-bold font-serif text-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send className="w-5 h-5" /> Send Invite ✨
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </form>
                ) : (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-16"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="inline-block mb-6"
                        >
                            <Heart className="w-24 h-24 text-rose-500 fill-rose-500 drop-shadow-lg" />
                        </motion.div>
                        <h2 className="text-4xl font-serif font-bold text-red-800 mb-4">Invite Sent!</h2>
                        <p className="text-brown-600 text-lg">Details sent to {formData.email}</p>
                        <p className="text-rose-gold mt-2 italic text-sm">(looking forward to it!)</p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default Scheduler;
