'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md dark:bg-zinc-900/80 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">JJS</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#techstack">TechStack</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#blogs">Blogs</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium">
          <Link href="#techstack" onClick={() => setIsOpen(false)}>
            TechStack
          </Link>
          <Link href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </Link>
          <Link href="#blogs" onClick={() => setIsOpen(false)}>
            Blogs
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
