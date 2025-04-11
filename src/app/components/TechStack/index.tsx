'use client';

import React from 'react';
import { motion } from 'framer-motion';

const techList = [
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Express.js',
  'Fastify',
  'React.js',
  'Next.js 12/13/14',
  'NestJS',
  'HTML5',
  'CSS3',
  'TailwindCSS',
  'Bootstrap',
  'MUI',
  'MongoDB',
  'PostgreSQL',
  'Sequelize',
  'Flyway',
  'Redis',
  'Kafka',
  'GraphQL',
  'Apollo Client/Server',
  'Apollo Studio',
  'Web3 Integration',
  'Clean Code',
  'Docker',
  'Mocha',
  'Chai',
  'Sinon',
  'Cucumber',
  'OOP / OOPS',
  'SDLC',
  'Swagger',
  'Postman',
  'Jest',
  'Git / GitHub / GitLab / Bitbucket',
  'Jira / YouTrack',
  'Vercel',
  'Dialogflow / Google Actions',
];

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="snap-start h-screen px-4 sm:px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800 overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.03,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {techList.map((tech, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-xs sm:text-sm font-medium text-center px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-blue-900 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 dark:text-white break-words"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
