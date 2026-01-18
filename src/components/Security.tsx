import { motion } from 'motion/react';
import { Shield, Server, FileCheck, AlertCircle } from 'lucide-react';

export function Security() {
  return (
    <div className="relative py-24 px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20 animate-pulse transition-all duration-1000" style={{ animationDuration: '8s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Privacy by Design
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Built from the ground up with a single mission: protect your digital life. 
              No corporate oversight, no data mining, no compromises.
            </p>

            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <FileCheck className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Client-Side Encryption</h3>
                  <p className="text-gray-400">Files are encrypted on your device before upload. We never have access to unencrypted data.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Server className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Distributed Infrastructure</h3>
                  <p className="text-gray-400">Your encrypted data is distributed across multiple secure locations for redundancy.</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <AlertCircle className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Independent & Solo</h3>
                  <p className="text-gray-400">No investors, no board members, no pressure to monetize your data. Just one developer committed to privacy.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - 3D Shield visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Rotating shield */}
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative">
                  <Shield className="w-64 h-64 text-purple-500 transition-all duration-300" strokeWidth={1} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-48 h-48 text-cyan-500 transition-all duration-300" strokeWidth={1.5} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-32 h-32 text-pink-500 transition-all duration-300" strokeWidth={2} />
                  </div>
                </div>
              </motion.div>

              {/* Orbiting particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [
                      Math.cos((i * Math.PI * 2) / 12) * 150,
                      Math.cos(((i + 1) * Math.PI * 2) / 12) * 150,
                    ],
                    y: [
                      Math.sin((i * Math.PI * 2) / 12) * 150,
                      Math.sin(((i + 1) * Math.PI * 2) / 12) * 150,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: (i * 3) / 12,
                  }}
                />
              ))}

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-3xl animate-pulse transition-all duration-1000" style={{ animationDuration: '4s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}