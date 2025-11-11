import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const portfolioImages = [
    {
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2564&auto=format&fit=crop",
      alt: "Portrait Photography",
      category: "Portraits"
    },
    {
      src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2486&auto=format&fit=crop",
      alt: "Sports Photography",
      category: "Sports"
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2570&auto=format&fit=crop",
      alt: "Event Photography",
      category: "Events"
    },
    {
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2487&auto=format&fit=crop",
      alt: "Portrait Session",
      category: "Portraits"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2574&auto=format&fit=crop",
      alt: "Action Sports",
      category: "Sports"
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2569&auto=format&fit=crop",
      alt: "Wedding Event",
      category: "Events"
    }
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 bg-ivory">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-copper mx-auto mb-6"></div>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
            A glimpse into recent work — moments captured, stories told
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/5]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-gold text-sm font-semibold mb-1">{image.category}</p>
                  <p className="text-white text-lg">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

