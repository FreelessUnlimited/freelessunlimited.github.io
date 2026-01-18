import { motion } from 'motion/react';
import { Heart, Code, Shield, Users, Globe, Zap } from 'lucide-react';
import { Footer } from '../components/Footer';

export function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Built for Privacy
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Freeless.cloud is a solo project created by one developer who believes 
              your data should remain yours—and yours alone.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              The Story
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                In a world where cloud storage providers collect, analyze, and profit from your data, 
                I decided to build something different. Freeless.cloud emerged from a simple belief: 
                privacy is not a luxury—it's a fundamental right.
              </p>
              <p>
                As a solo developer, I'm not beholden to investors demanding user growth metrics or 
                engagement tracking. There's no board pressuring me to monetize your behavior. 
                It's just me, building a service I'd want to use myself.
              </p>
              <p>
                Every line of code is written with privacy first. Your files are encrypted before 
                they leave your device. I can't see them, law enforcement can't request them without 
                your key, and advertisers will never touch them.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Privacy First',
                  description: 'Zero-knowledge encryption means your data is encrypted before it reaches our servers. We literally cannot access your files.',
                  color: 'from-purple-600 to-pink-600',
                },
                {
                  icon: Heart,
                  title: 'User Respect',
                  description: 'No tracking, no analytics, no data mining. We treat you like a person, not a product.',
                  color: 'from-pink-600 to-red-600',
                },
                {
                  icon: Code,
                  title: 'Open Source',
                  description: 'Our code is open for security audits. Transparency builds trust, and trust is earned through visibility.',
                  color: 'from-cyan-600 to-blue-600',
                },
                {
                  icon: Users,
                  title: 'Community Driven',
                  description: 'As a solo project, I listen to every user. Your feedback directly shapes the product.',
                  color: 'from-green-600 to-emerald-600',
                },
                {
                  icon: Globe,
                  title: 'Accessible',
                  description: 'Starting at 10GB free storage, privacy shouldn\'t be a luxury only the wealthy can afford.',
                  color: 'from-blue-600 to-purple-600',
                },
                {
                  icon: Zap,
                  title: 'Performance',
                  description: 'Security doesn\'t mean slow. We optimize every byte for speed without compromising safety.',
                  color: 'from-yellow-600 to-orange-600',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 p-12 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">The Mission</h2>
            <p className="text-xl text-gray-300 text-center leading-relaxed">
              To prove that privacy-respecting services can exist without venture capital, 
              without data harvesting, and without compromise. One developer at a time, 
              one encrypted file at a time, we're building a more private internet.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
