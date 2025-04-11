'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Supra (Supra Blockchain / SupraOracles)',
    role: 'Dedicated Client — Senior Software Engineer',
    duration: 'Jul 2023 – Present',
    highlights: [
      'Driving the development of SupraScan — a native blockchain explorer and indexer.',
      'Integrated RPCs, Metamask, Supra Name Service, and StarKey wallet support.',
      'Built high-performance indexing pipelines with support for Bitcoin, Ethereum, Aptos & Supra.',
      'Actively contributed to Supra’s TGE launch by ensuring infrastructure stability.',
      'Working closely with protocol, infra, and analytics teams on multi-chain data layers.',
    ],
  },
  {
    company: 'CodeZeros Technologies (WDCS)',
    role: 'Software Engineer 4',
    duration: 'Jul 2023 – Present',
    highlights: [
      'Official payroll under CodeZeros — a WDCS group company.',
      'Provided architectural and debugging support to internal teams across WDCS.',
      'Part of the internal training, onboarding, and hiring panel.',
      'Migrated legacy projects (Node.js 14/16 → 18/20, Next.js 12 → 14) and optimized DevOps workflows.',
    ],
  },
  {
    company: 'Rapidops Solutions Pvt. Ltd.',
    role: 'Full-Stack Developer → Development Lead',
    duration: 'Jan 2020 – Jul 2023',
    highlights: [
      'Built and led modules across CRM, e-commerce, chatbot, and B2B supply chain projects.',
      'Led TOQ for Kroger — building role management, reports, and cron-based imports.',
      'Created Rapid Hunt for online exams using React, Node, and AG Grid.',
      'Developed platforms like FAT and DFM with onboarding integrations and scalable APIs.',
      'Mentored juniors and supported the company’s internal tech training ecosystem.',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="snap-start h-screen px-6 py-20 overflow-y-auto bg-gradient-to-br from-gray-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative border-l-4 border-gradient-to-b from-blue-500 via-purple-500 to-pink-500 pl-6 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute w-4 h-4 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full left-[-10px] top-1.5 shadow-lg"></div>
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              {exp.role}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-medium">
              {exp.company} • {exp.duration}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300 mt-2 text-sm leading-relaxed">
              {exp.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
