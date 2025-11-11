import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Portrait Photography",
      description: "Capture your personality with timeless portraits. From individual headshots to family sessions, every photo is crafted to reflect who you are in this moment.",
      icon: "👤",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2488&auto=format&fit=crop"
    },
    {
      title: "Sports Photography",
      description: "Freeze the action and preserve the intensity. Whether it's a team event or individual athlete, I capture the energy, determination, and triumph of every game.",
      icon: "⚽",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2570&auto=format&fit=crop"
    },
    {
      title: "Event Photography",
      description: "From weddings to corporate gatherings, your special events deserve to be remembered. I document the details, emotions, and moments that make your day unforgettable.",
      icon: "🎉",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2570&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Services
          </h2>
          <div className="w-20 h-1 bg-copper mx-auto mb-6"></div>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
            Tailored photography services for every occasion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-square">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-all duration-300"></div>
                <div className="absolute top-6 left-6 text-5xl">{service.icon}</div>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-copper font-semibold hover:text-charcoal transition-colors duration-300"
              >
                Book Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

