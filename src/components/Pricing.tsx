import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    storage: '10 GB',
    features: [
      'End-to-end encryption',
      'Zero-knowledge architecture',
      'No-log policy',
      'Basic file sharing',
      'Mobile & desktop apps',
    ],
    gradient: 'from-gray-700 to-gray-800',
    popular: false,
  },
  {
    name: 'Personal',
    price: '5',
    storage: '100 GB',
    features: [
      'Everything in Free',
      'Priority support',
      'Advanced sharing controls',
      'Version history (30 days)',
      'Custom sharing links',
    ],
    gradient: 'from-purple-600 to-pink-600',
    popular: true,
  },
  {
    name: 'Pro',
    price: '12',
    storage: '500 GB',
    features: [
      'Everything in Personal',
      'Extended version history (90 days)',
      'Advanced file recovery',
      'Priority bandwidth',
      'Team collaboration tools',
    ],
    gradient: 'from-cyan-600 to-blue-600',
    popular: false,
  },
  {
    name: 'Ultimate',
    price: '25',
    storage: '2 TB',
    features: [
      'Everything in Pro',
      'Unlimited version history',
      'Premium support',
      'Custom domain',
      'API access',
    ],
    gradient: 'from-pink-600 to-purple-600',
    popular: false,
  },
];

export function Pricing() {
  return (
    <div className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black transition-all duration-1000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400">No hidden fees. No vendor lock-in. Cancel anytime.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div
                className={`relative p-8 rounded-2xl border-2 ${
                  plan.popular ? 'border-purple-500' : 'border-gray-700/50'
                } bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500`}
              >
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent">
                      ${plan.price}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-purple-400 font-semibold mt-2">{plan.storage} Storage</p>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-purple-500/50`
                      : 'border-2 border-gray-600 hover:border-purple-500/50 hover:bg-purple-500/10'
                  }`}
                >
                  Get Started
                </motion.button>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-center mt-12 text-gray-500"
        >
          <p>All plans include our commitment to privacy. Your data is always encrypted and secure.</p>
        </motion.div>
      </div>
    </div>
  );
}