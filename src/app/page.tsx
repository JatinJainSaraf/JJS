// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blogs from './components/Blogs';
import TechStack from './components/TechStack';
import Image from 'next/image';
import { Contact } from './components/Contact';

export default function Home() {
  return (
    <div className="overflow-y-auto snap-y snap-mandatory scroll-smooth sm:snap-none">
      {/* Hero Section */}
      <section className="snap-start flex flex-col-reverse md:flex-row items-center justify-between min-min-h-screen  max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Left Side - Text */}
        <div className="flex-1 mt-10 lg:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-bold mb-6"
          >
            Hi, I’m{' '}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Jatin Jain Saraf
            </span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.3 },
              },
            }}
            className="space-y-4 text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-3xl"
          >
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              I’m a curious technologist and builder at heart, passionate about transforming ideas
              into clean, scalable, and delightful products. With over 5 years of full-stack
              experience, I’ve worked across domains, teams, and technologies—from writing APIs to
              designing systems used by millions user.
            </motion.p>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              Currently, I’m crafting cutting-edge blockchain tools at <b>Supra</b>, including a
              native explorer and indexer powered by real-time data, high-performance
              infrastructure, and Web3 integrations. Check it out here:{' '}
              <a
                href="https://suprascan.io"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-500 transition-all duration-300 ease-in-out inline-block hover:scale-105"
              >
                SupraScan.io
              </a>
            </motion.p>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              What truly drives me is the joy of problem-solving, collaborating with great minds,
              and building things that matter. I take pride in thoughtful design, clean code, and
              sharing knowledge—whether it’s through mentoring, writing blogs, or exploring new
              tools.
            </motion.p>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              If you’re into meaningful tech, clean architecture, or just want to bounce
              ideas—welcome to my world 👋
            </motion.p>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-shrink-0 mt-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-full overflow-hidden w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto shadow-lg border-4 border-white dark:border-zinc-800"
          >
            <Image
              src="/jjs.jpg"
              alt="Jatin Jain Saraf"
              width={256}
              height={256}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </div>
      </section>
      <section
        id="techstack"
        className=" snap-start bg-gradient-to-br from-gray-100 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 px-6 py-20"
      >
        <TechStack />
      </section>
      <section
        id="projects"
        className="snap-start min-h-screen scroll-mt  px-6 py-16 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 "
      >
        <Projects />
      </section>

      <section
        id="experience"
        className="snap-start min-h-screen scroll-mt  px-6 py-20 bg-white dark:bg-zinc-900 "
      >
        <Experience />
      </section>
      <section
        id="blogs"
        className="snap-start min-h-screen scroll-mt  bg-gradient-to-br from-gray-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800 px-6 py-20 "
      >
        <Blogs />
      </section>
      <section
        id="contact"
        className="snap-start min-h-screen scroll-mt  bg-gradient-to-br from-gray-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800 px-6 py-20 flex flex-col items-center justify-center text-center"
      >
        <Contact />
      </section>
    </div>
  );
}
