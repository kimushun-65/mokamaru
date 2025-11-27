import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_DATA } from '../constants';
import SectionTitle from './SectionTitle';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="Skills & Experience" subtitle="積み上げてきた専門性" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCE_DATA.map((exp, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                {exp.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {exp.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold cursor-default transition-colors duration-300 ${
                      categoryIndex === 0 
                        ? 'bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white'
                        : categoryIndex === 1 
                          ? 'bg-white text-secondary border border-secondary/20 hover:bg-secondary hover:text-white'
                          : 'bg-white text-gray-700 border border-gray-200 hover:bg-dark hover:text-white'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;