import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: "Accenture",
    role: "Application Development Senior Analyst",
    period: "Dec 2021 - Present",
    description: "Leading development of enterprise applications using React, Node.js, and cloud technologies."
  },
  {
    company: "Accenture",
    role: "Application Development Analyst",
    period: "Dec 2019 - Dec 2021",
    description: "Developed and maintained full-stack applications, focusing on performance optimization and user experience."
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-8" ref={ref}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900">{exp.role}</h3>
              <p className="text-indigo-600 font-medium mt-2">{exp.company}</p>
              <p className="text-gray-500 mt-1">{exp.period}</p>
              <p className="mt-4 text-gray-600 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}