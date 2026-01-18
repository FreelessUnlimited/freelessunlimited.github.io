import { motion } from 'motion/react';
import { Shield, Lock, Eye, Zap, HardDrive, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Military-Grade Encryption',
    description: 'AES-256 encryption ensures your files are protected with the same standards used by governments worldwide.',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Lock,
    title: 'Zero-Knowledge Architecture',
    description: 'We never see your data. Your files are encrypted before they leave your device.',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Eye,
    title: 'Absolute No-Log Policy',
    description: 'We don\'t track, monitor, or log your activity. What you store is yours alone.',
    color: 'from-yellow-500 to-green-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'High-speed servers worldwide ensure quick uploads and downloads, without compromising security.',
    color: 'from-green-500 to-cyan-500',
  },
  {
    icon: HardDrive,
    title: 'Generous Storage',
    description: 'Start with 10GB free storage and upgrade as you grow. No hidden fees or surprises.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Globe,
    title: 'Open Source & Transparent',
    description: 'Our code is open for audit. No backdoors, no secret access. Trust through transparency.',
    color: 'from-blue-500 to-purple-500',
  },
];

export function Features() {
  return (
    <div className="relative py-24 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black transition-all duration-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Choose Freeless?
          </h2>
          <p className="text-xl text-gray-400">Privacy-first cloud storage built by one developer who cares</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="relative group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500">
                {/* Icon with gradient background */}
                <motion.div 
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}