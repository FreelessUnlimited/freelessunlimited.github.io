import { motion } from 'motion/react';
import { Shield, Eye, Lock, Server, FileCheck, AlertCircle } from 'lucide-react';
import { Footer } from '../components/Footer';

export function Privacy() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <div className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="w-20 h-20 mx-auto mb-6 text-purple-500" />
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400">
              Last updated: January 18, 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative py-12 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          
          {/* TL;DR Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-500/30"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileCheck className="w-8 h-8 text-green-500" />
              TL;DR
            </h2>
            <div className="space-y-3 text-lg text-gray-300">
              <p>✓ We use zero-knowledge encryption—we can't see your files</p>
              <p>✓ We don't log, track, or analyze your activity</p>
              <p>✓ We don't sell, share, or monetize your data</p>
              <p>✓ We don't use cookies or analytics</p>
              <p>✓ You can delete your account and data anytime</p>
            </div>
          </motion.div>

          {/* Detailed Sections */}
          {[
            {
              icon: Eye,
              title: 'What We Collect',
              color: 'from-purple-600 to-pink-600',
              content: [
                {
                  subtitle: 'Account Information',
                  text: 'When you create an account, we collect your email address and a hashed version of your password. We never store your password in plain text.',
                },
                {
                  subtitle: 'Your Files',
                  text: 'Your files are encrypted on your device before being uploaded. We store the encrypted data but cannot decrypt or access the contents.',
                },
                {
                  subtitle: 'What We DON\'T Collect',
                  text: 'We do not collect IP addresses, browser fingerprints, usage patterns, analytics data, or any tracking information. No cookies, no sessions, no surveillance.',
                },
              ],
            },
            {
              icon: Lock,
              title: 'How We Protect Your Data',
              color: 'from-cyan-600 to-blue-600',
              content: [
                {
                  subtitle: 'End-to-End Encryption',
                  text: 'All files are encrypted using AES-256 encryption on your device before transmission. Only you hold the encryption keys.',
                },
                {
                  subtitle: 'Zero-Knowledge Architecture',
                  text: 'We built our system so that we literally cannot access your data. Even if compelled by law enforcement, we cannot decrypt your files.',
                },
                {
                  subtitle: 'Secure Infrastructure',
                  text: 'All data is transmitted over HTTPS. Our servers are hardened with industry-standard security practices and regular security audits.',
                },
              ],
            },
            {
              icon: Server,
              title: 'How We Use Your Data',
              color: 'from-pink-600 to-purple-600',
              content: [
                {
                  subtitle: 'Service Operation',
                  text: 'We use your email solely to provide service notifications (like password resets) and important security updates.',
                },
                {
                  subtitle: 'No Marketing',
                  text: 'We will never send you marketing emails, promotional content, or newsletters unless you explicitly opt-in.',
                },
                {
                  subtitle: 'No Third Parties',
                  text: 'We don\'t share your data with advertisers, data brokers, or any third parties. Your information stays with us.',
                },
              ],
            },
            {
              icon: AlertCircle,
              title: 'Your Rights',
              color: 'from-green-600 to-emerald-600',
              content: [
                {
                  subtitle: 'Access & Export',
                  text: 'You can download all your files at any time. They\'re yours, not ours.',
                },
                {
                  subtitle: 'Deletion',
                  text: 'You can delete your account and all associated data instantly from your dashboard. When you delete, it\'s truly gone.',
                },
                {
                  subtitle: 'Portability',
                  text: 'No vendor lock-in. Export your data in standard formats and move to another service anytime.',
                },
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                  <section.icon className="w-7 h-7" />
                </div>
                <h2 className="text-3xl font-bold">{section.title}</h2>
              </div>

              <div className="space-y-6 pl-18">
                {section.content.map((item, i) => (
                  <div key={i}>
                    <h3 className="text-xl font-semibold mb-2 text-purple-300">{item.subtitle}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Legal Requests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border border-yellow-500/30"
          >
            <h2 className="text-3xl font-bold mb-4">Law Enforcement & Legal Requests</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We have received <strong className="text-white">ZERO</strong> government requests for user data since our inception. 
              If we ever receive a request, we will:
            </p>
            <ul className="space-y-2 text-gray-300 ml-6">
              <li>• Challenge any overly broad or unlawful requests</li>
              <li>• Notify users when legally permitted</li>
              <li>• Publish transparency reports detailing all requests</li>
              <li>• Provide only the minimum data legally required</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Due to our zero-knowledge architecture, we cannot decrypt user files even if compelled to do so.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy?</h2>
            <p className="text-gray-400 mb-6">
              I'm always happy to discuss our privacy practices. Reach out anytime.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
