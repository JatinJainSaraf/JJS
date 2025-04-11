'use client';
import React from 'react';

import { motion } from 'framer-motion';
import { contacts } from '../Icons';
export const Contact = () => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      >
        Contact Me
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center gap-2 text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <div className="text-3xl bg-gradient-to-br from-blue-200 via-purple-300 to-pink-300 dark:from-blue-800 dark:to-pink-700 p-4 rounded-full shadow-md">
              {contact.icon}
            </div>
            <span className="text-sm font-medium">{contact.name}</span>
          </motion.a>
        ))}
      </div>
    </>
  );
}
