import { motion } from 'motion/react';
import { Mail, MessageSquare, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';
import { Footer } from '../components/Footer';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <div className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Mail className="w-20 h-20 mx-auto mb-6 text-purple-500" />
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm a solo developer, which means you're talking directly to the person who builds 
              and maintains Freeless.cloud. No support tickets lost in a queue.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-12 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-500/30"
                >
                  <p className="text-green-400 font-semibold">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell me what's on your mind..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">Other Ways to Reach Me</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: 'Email',
                      content: 'support@freeless.cloud',
                      subtitle: 'Usually respond within 24 hours',
                      color: 'from-purple-600 to-pink-600',
                    },
                    {
                      icon: MessageSquare,
                      title: 'Live Chat',
                      content: 'Coming Soon',
                      subtitle: 'Building a privacy-respecting chat',
                      color: 'from-cyan-600 to-blue-600',
                    },
                    {
                      icon: Github,
                      title: 'GitHub',
                      content: '@freelesscloud',
                      subtitle: 'Report bugs or contribute',
                      color: 'from-gray-600 to-gray-700',
                    },
                    {
                      icon: Twitter,
                      title: 'Twitter',
                      content: '@freelesscloud',
                      subtitle: 'Updates and announcements',
                      color: 'from-blue-500 to-blue-600',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                          <p className="text-purple-400 mb-1">{item.content}</p>
                          <p className="text-sm text-gray-500">{item.subtitle}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-xl bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-500/30"
              >
                <h3 className="text-xl font-bold mb-3">📬 Response Times</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• <strong className="text-white">Critical bugs:</strong> Within hours</p>
                  <p>• <strong className="text-white">General support:</strong> Within 24 hours</p>
                  <p>• <strong className="text-white">Feature requests:</strong> Within a few days</p>
                </div>
              </motion.div>

              {/* FAQ Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-500/30"
              >
                <h3 className="text-xl font-bold mb-3">💡 Before You Ask</h3>
                <p className="text-gray-300 mb-4">
                  Check out our documentation and FAQ—your question might already be answered!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold"
                >
                  View Documentation
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
