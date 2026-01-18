import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';

type Page = 'home' | 'dashboard' | 'about' | 'privacy' | 'terms' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'dashboard':
        return <Dashboard />;
      case 'about':
        return <About />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
