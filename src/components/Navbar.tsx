import { motion } from 'motion/react';
import { Cloud, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'dashboard' | 'about' | 'privacy' | 'terms' | 'contact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Dashboard', page: 'dashboard' as Page },
    { label: 'About', page: 'about' as Page },
    { label: 'Contact', page: 'contact' as Page },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => onNavigate('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 group"
            >
              <Cloud className="w-8 h-8 text-purple-500 group-hover:text-cyan-400 transition-colors" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Freeless.cloud
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.page}
                  onClick={() => onNavigate(item.page)}
                  className="relative text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {currentPage === item.page && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold transition-all"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          x: isMenuOpen ? 0 : '100%',
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-[73px] right-0 bottom-0 w-64 bg-gray-900/95 backdrop-blur-xl border-l border-gray-800 z-40 md:hidden"
      >
        <div className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <motion.button
              key={item.page}
              onClick={() => {
                onNavigate(item.page);
                setIsMenuOpen(false);
              }}
              whileHover={{ x: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-left py-3 px-4 rounded-lg transition-all ${
                currentPage === item.page
                  ? 'bg-gradient-to-r from-purple-600/50 to-pink-600/50 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {item.label}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>

      {/* Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}

      {/* Spacer */}
      <div className="h-[73px]" />
    </>
  );
}
