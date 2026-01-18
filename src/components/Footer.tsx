import { motion } from 'motion/react';
import { Cloud, Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-gray-800">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-black transition-all duration-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Cloud className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Freeless.cloud
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Privacy-first cloud storage built by one developer who believes in your right to digital privacy.
              No logs, no tracking, no compromise.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><motion.a whileHover={{ x: 5 }} href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block">Features</motion.a></li>
              <li><motion.a whileHover={{ x: 5 }} href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block">Pricing</motion.a></li>
              <li><motion.a whileHover={{ x: 5 }} href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block">Security</motion.a></li>
              <li><motion.a whileHover={{ x: 5 }} href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block">Documentation</motion.a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><motion.a whileHover={{ x: 5 }} href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block">Privacy Policy</motion.a></li>
              <li><motion.a whileHover={{ x: 5 }} href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block">Terms of Service</motion.a></li>
              <li><motion.a whileHover={{ x: 5 }} href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block">Transparency Report</motion.a></li>
              <li><motion.a whileHover={{ x: 5 }} href="#" className="hover:text-purple-400 transition-colors duration-200 inline-block">Contact</motion.a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-500 text-sm">
            © 2026 Freeless.cloud. Built with privacy in mind.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              All systems operational
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}