// Projects.jsx
import { motion } from 'framer-motion';
import { ModelFinder, DriverDrowsiness , Portfolio } from './ProjectCards';

export default function Projects(){
  return (
    <section id="projects" className="py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Personal Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ModelFinder />
          <DriverDrowsiness />
          <Portfolio />
        </motion.div>
      </div>
    </section>
  );
};