import { motion } from 'motion/react';
import { Cloud, Shield, Lock } from 'lucide-react';
import { FloatingCubes } from './FloatingCubes';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 transition-all duration-1000" />
      
      {/* 3D floating elements */}
      <FloatingCubes />
      
      {/* Rainbow gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-blue-500/5 animate-pulse" style={{ animationDuration: '4s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Cloud className="w-16 h-16 text-cyan-400" />
            </motion.div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Freeless.cloud
            </h1>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Your Data.{' '}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Your Privacy.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Zero-knowledge cloud storage with military-grade encryption. 
          No logs. No tracking. No compromise. Starting at 10GB free.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
          >
            Get Started Free
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="px-8 py-4 border-2 border-purple-500/50 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
        >
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Shield className="w-5 h-5 text-green-500" />
            <span>End-to-End Encrypted</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Lock className="w-5 h-5 text-blue-500" />
            <span>Zero-Knowledge Architecture</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Cloud className="w-5 h-5 text-purple-500" />
            <span>No Logs Policy</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}