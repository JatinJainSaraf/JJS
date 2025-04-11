'use client';

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'SupraScan & Indexer',
    role: 'Senior Software Engineer (2023 – Present)',
    problem: 'Support cross-chain blockchain data with real-time indexing.',
    description:
      'Explorer for Supra with Metamask, StarKey, RPCs & multi-chain analytics. Enabled a successful TGE launch.',
    techStack: ['Node.js', 'TypeScript', 'Kafka', 'Redis', 'PostgreSQL', 'GraphQL'],
    link: 'https://suprascan.io',
  },
  {
    title: 'Salesmate CRM',
    role: 'Backend Developer (2023)',
    problem: 'Automate email campaigns in a microservices CRM.',
    description: 'Contributed to email campaign modules & wrote Cucumber test cases.',
    techStack: ['Node.js', 'PostgreSQL', 'MongoDB', 'Cucumber'],
    link: 'https://www.salesmate.io',
  },
  {
    title: 'TOQ – Kroger Restaurant Supply',
    role: 'Development Lead (2021–2022)',
    problem: 'Enable B2B supply chain management for restaurants.',
    description: 'Built order, report, role, and cron-job modules. Led backend architecture.',
    techStack: ['Node.js', 'PostgreSQL', 'React', 'MongoDB'],
    link: 'https://www.kroger.com/',
  },
  {
    title: 'Rapid Hunt',
    role: 'Full-Stack Developer',
    problem: 'Manage online campus exams and question banks.',
    description: 'Built exam UI, grid tables, and API logic using AG Grid and React.',
    techStack: ['React', 'Node.js', 'AG Grid', 'Material UI'],
  },
  {
    title: 'FAT – Food Automation',
    role: 'Full-Stack Developer',
    problem: 'Automate food services with document onboarding.',
    description: 'Used Onfido SDK and React Remix to streamline onboarding flows.',
    techStack: ['React Remix', 'Node.js', 'Onfido SDK'],
  },
  {
    title: 'Catalyst',
    role: 'Developer',
    problem: 'Create reusable starter kit for supply chain projects.',
    description: 'Developed boilerplate for cart, product, and order modules.',
    techStack: ['Node.js', 'Express', 'React', 'MongoDB'],
  },
  {
    title: 'DFM – Digital Farmer Market',
    role: 'Admin Panel Developer',
    problem: 'Build a marketplace for direct farmer-to-customer sales.',
    description: 'Developed admin dashboard for managing sellers and products.',
    techStack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Kroger Voice',
    role: 'Backend Developer',
    problem: 'Deploy chatbot across 18 banners & devices.',
    description: 'Integrated with Dialogflow & Google Actions. Resolved QA bugs.',
    techStack: ['Node.js', 'Dialogflow', 'Google Actions'],
  },
];

export default function Projects() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-900 rounded-xl shadow-md hover:shadow-xl transition-all p-5 flex flex-col justify-between border border-blue-100 dark:border-zinc-700"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-purple-600 transition"
                    title="View Project"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.role}</p>
              <p className="text-gray-700 dark:text-gray-200 text-sm mb-1">
                <b>Problem:</b> {project.problem}
              </p>
              <p className="text-gray-700 dark:text-gray-200 text-sm mb-3">
                <b>Description:</b> {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-gradient-to-r from-blue-200 to-purple-300 dark:from-blue-900 dark:to-purple-800 text-blue-900 dark:text-white px-3 py-1 rounded-full font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
