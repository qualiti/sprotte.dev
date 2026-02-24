'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 mix-blend-difference"
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center text-brand-light">
        <div className="flex flex-col">
          <span className="font-display text-3xl font-bold leading-none tracking-widest uppercase">
            <span className="text-brand-orange">Sprotte</span>
            <br />
            Dev
          </span>
        </div>
        <nav>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-right font-mono text-xs md:text-sm uppercase tracking-widest">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-brand-orange hover:line-through transition-all duration-300"
                >
                  [{item}]
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
