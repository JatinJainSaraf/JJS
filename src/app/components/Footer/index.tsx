export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-800 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-6 text-center text-sm">
        © {new Date().getFullYear()} Jatin Jain Saraf · All rights reserved.
      </div>
    </footer>
  );
}
