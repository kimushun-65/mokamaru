import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<Props> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-500 font-medium"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;