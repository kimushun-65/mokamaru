'use client';

import { motion } from 'framer-motion';
import { Search, MessageSquare, Handshake, Rocket } from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/constants';
import SectionTitle from './SectionTitle';

const iconMap = {
  search: Search,
  message: MessageSquare,
  handshake: Handshake,
  rocket: Rocket,
};

const Process = () => {
  return (
    <section id="process" className="py-24 bg-light overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle title="The Process" subtitle="売り込みから、課題の共創へ" />

        <div className="relative mt-20">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient"
            />
          </div>

          {/* Vertical Line (Mobile) */}
          <div className="md:hidden absolute top-0 left-12 h-full w-1 bg-gray-200">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-full bg-gradient-to-b from-primary to-secondary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex md:flex-col items-start md:items-center group"
                >
                  {/* Icon Node */}
                  <div className="relative z-10 flex-shrink-0 w-24 h-24 md:w-24 md:h-24 mr-6 md:mr-0 md:mb-8 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center ${
                        index % 2 === 0
                          ? 'bg-primary/10 text-primary'
                          : 'bg-secondary/10 text-secondary'
                      }`}
                    >
                      <Icon className="w-8 h-8" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 md:pt-0 md:text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
