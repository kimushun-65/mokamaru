import React from 'react';
import { motion } from 'framer-motion';
import { STORY_CONTENT } from '../constants';
import SectionTitle from './SectionTitle';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-light relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="The Story" subtitle="なぜ、製造業×SaaSなのか" align="left" />
          
          <div className="space-y-8">
            {STORY_CONTENT.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`text-lg md:text-2xl leading-relaxed ${
                  index === paragraphsLength(STORY_CONTENT.paragraphs) - 1 
                    ? "font-bold text-gray-900" 
                    : "text-gray-600"
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mt-16 rounded-full opacity-50"
          />
        </div>
      </div>
    </section>
  );
};

// Helper for type safety if needed, though simple logic works
const paragraphsLength = (arr: string[]) => arr.length;

export default Story;