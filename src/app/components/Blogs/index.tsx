'use client';

import { motion } from 'framer-motion';
const blogs = [
  {
    title: 'Demystifying API Gateway Patterns',
    summary:
      'Understand design choices and real-world use cases for API Gateways in microservice architecture.',
    url: 'https://medium.com/@jatin.jain_69313/demystifying-api-gateway-patterns-design-choices-real-world-use-cases-when-to-use-what-45dd1ce95484',
  },
  {
    title: 'Optimizing Pagination & Filtering for Large Datasets',
    summary:
      'Techniques for handling high-traffic data queries with smooth UX and backend performance.',
    url: 'https://medium.com/@jatin.jain_69313/handling-large-datasets-high-traffic-queries-optimizing-pagination-sorting-filtering-bf9a2d5a9813',
  },
  {
    title: 'The Ultimate Git Command Guide',
    summary: 'Simplify your workflow with essential Git commands every developer should know.',
    url: 'https://medium.com/@jatin.jain_69313/the-ultimate-git-command-guide-streamline-your-development-workflow-f36f9d8a280b',
  },
  {
    title: 'Choosing Between `type` and `interface` in TypeScript',
    summary: 'Deep dive into when to use which and why, with examples.',
    url: 'https://medium.com/@jatin.jain_69313/choosing-between-type-and-interface-in-typescript-a-detailed-guide-4b25330a5e1d',
  },
  {
    title: 'Next.js 14 – What’s New',
    summary: 'Catch up on the latest features and changes in Next.js 14.',
    url: 'https://medium.com/@jatin.jain_69313/next-js-14-ab072833a147',
  },
  {
    title: 'Best Code Practices & Conventions',
    summary:
      'Readable, maintainable code starts with the right conventions. Here’s a detailed guide.',
    url: 'https://medium.com/@jatin.jain_69313/best-code-practices-and-conventions-be529b468088',
  },
  {
    title: 'Node.js Clustering Explained',
    summary: 'Boost performance by leveraging multiple CPU cores with clustering.',
    url: 'https://medium.com/@jatin.jain_69313/clustering-in-nodejs-dcd1dec3f0a2',
  },
  {
    title: 'Working with Sequelize + PostgreSQL',
    summary: 'Practical patterns and setup tips when using Sequelize with PostgreSQL dialect.',
    url: 'https://medium.com/@jatin.jain_69313/sequelize-using-postgres-dialect-d342b6c64092',
  },
];


export default function Blogs() {
  return (
    <>
     
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Blogs & Articles
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white dark:bg-zinc-800 border border-transparent hover:border-blue-500 hover:shadow-xl rounded-xl p-6 transition-all duration-300 cursor-pointer group"
              onClick={() => window.open(blog.url, '_blank')}
            >
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {blog.summary}
              </p>
              <span className="mt-4 inline-block text-sm text-blue-600 dark:text-blue-400 group-hover:underline">
                Read on Medium ↗
              </span>
            </motion.div>
          ))}
        </div>
    </>
  );
}
