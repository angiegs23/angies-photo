import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2574&auto=format&fit=crop"
          alt="Photography background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 max-w-5xl leading-tight"
        >
          Capturing real moments that last a lifetime
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-neutral text-lg md:text-xl mb-10 max-w-2xl"
        >
          Professional photography for portraits, sports, and special events
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-gold hover:bg-copper text-charcoal font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Book a Session
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

