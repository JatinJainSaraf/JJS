import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Jatin Jain Saraf | Portfolio',
  description: 'Full-stack Developer | Blockchain | React | Node',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white`}
      >
        <Navbar />
        <main className="min-min-h-screen scroll-mt ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
