import { motion } from 'motion/react';
import { FileText, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Footer } from '../components/Footer';

export function Terms() {
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
            <FileText className="w-20 h-20 mx-auto mb-6 text-cyan-500" />
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Terms of Service
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
          
          {/* Plain English Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-500/30"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-blue-500" />
              Plain English Summary
            </h2>
            <div className="space-y-3 text-lg text-gray-300">
              <p>• Use the service respectfully and legally</p>
              <p>• Don't upload illegal content or abuse the system</p>
              <p>• Your encrypted data is yours; we can't access it</p>
              <p>• Free tier includes 10GB; paid plans available</p>
              <p>• Cancel anytime, no questions asked</p>
              <p>• We're not liable for data loss (but we work hard to prevent it)</p>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-500" />
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  By accessing or using Freeless.cloud, you agree to be bound by these Terms of Service. 
                  If you don't agree, please don't use our service.
                </p>
                <p>
                  We may update these terms occasionally. Continued use after changes constitutes acceptance 
                  of the new terms. We'll notify you of significant changes via email.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">2. Account Registration</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  You must provide a valid email address to create an account. You're responsible for 
                  maintaining the security of your account credentials.
                </p>
                <p>
                  One person or entity may not maintain multiple free accounts. If you need multiple 
                  accounts, contact us to discuss options.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">3. Acceptable Use</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="font-semibold text-white">You may use Freeless.cloud to:</p>
                <ul className="ml-6 space-y-2">
                  <li>• Store your personal and business files</li>
                  <li>• Share files with others</li>
                  <li>• Backup your data</li>
                  <li>• Collaborate on projects</li>
                </ul>
                
                <p className="font-semibold text-white mt-6">You may NOT use Freeless.cloud to:</p>
                <ul className="ml-6 space-y-2">
                  <li>• Store or distribute illegal content</li>
                  <li>• Violate intellectual property rights</li>
                  <li>• Distribute malware or harmful software</li>
                  <li>• Abuse or attack our infrastructure</li>
                  <li>• Violate others' privacy</li>
                  <li>• Resell our service without permission</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">4. Privacy & Data</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Your files are encrypted before leaving your device. We cannot access, view, or share 
                  your files due to our zero-knowledge architecture.
                </p>
                <p>
                  You retain all rights to your data. We claim no ownership over anything you upload. 
                  You can export or delete your data at any time.
                </p>
                <p>
                  See our <span className="text-purple-400 cursor-pointer hover:underline">Privacy Policy</span> for 
                  detailed information about data handling.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">5. Payment & Subscriptions</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  The free tier includes 10GB of storage. Paid plans are billed monthly or annually. 
                  All prices are in USD.
                </p>
                <p>
                  You can cancel your subscription anytime. You'll retain access until the end of your 
                  billing period. No refunds for partial months.
                </p>
                <p>
                  If payment fails, we'll attempt to notify you. After 7 days, your account may be 
                  downgraded to the free tier (you may need to delete files to fit within 10GB).
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-yellow-900/30 to-orange-900/20 border border-yellow-500/30"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
                6. Limitation of Liability
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We work incredibly hard to keep your data safe and available, but we're a solo operation. 
                  The service is provided "as is" without warranties.
                </p>
                <p>
                  We're not liable for data loss, service interruptions, or any damages arising from use 
                  of the service. Always maintain backups of critical data.
                </p>
                <p>
                  That said, we take our responsibility seriously and will do everything possible to 
                  protect and maintain your data.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">7. Termination</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  You can delete your account anytime from your dashboard. We may terminate accounts that 
                  violate these terms.
                </p>
                <p>
                  If we terminate your account for violations, you'll have 30 days to export your data 
                  before permanent deletion.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">8. Changes to Service</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We may modify features, pricing, or terms as the service evolves. Existing paid 
                  subscribers will be grandfathered into their current pricing for at least 12 months.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">9. Contact & Disputes</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Questions about these terms? Email us at <span className="text-purple-400">legal@freeless.cloud</span>
                </p>
                <p>
                  These terms are governed by the laws of [Your Jurisdiction]. Disputes will be resolved 
                  through binding arbitration.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-gray-400 mb-6">
              I'm a real person, not a faceless corporation. Reach out if anything is unclear.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold"
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
