'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md dark:bg-zinc-900/80 z-50">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">JJS</h1>
        <div className="flex gap-6">
          <Link href="#techstack">TechStack</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#blogs">Blogs</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
