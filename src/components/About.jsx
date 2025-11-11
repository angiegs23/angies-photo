import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2574&auto=format&fit=crop"
              alt="Angie - Photographer"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-copper/20 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              About Captured by Angie
            </h2>
            <div className="w-20 h-1 bg-copper mb-6"></div>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
              Hi, I'm Angie — a passionate photographer dedicated to capturing the authentic moments that make life extraordinary. Whether it's the quiet emotion of a portrait, the energy of a sports event, or the joy of a celebration, I believe every image should tell a story worth remembering.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-8">
              With years of experience and a keen eye for detail, I work closely with each client to create images that are not only beautiful but meaningful. Let's create something timeless together.
            </p>
            <a
              href="#contact"
              className="inline-block border-2 border-copper text-copper hover:bg-copper hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

