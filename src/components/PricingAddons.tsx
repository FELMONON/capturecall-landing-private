import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { BarChart3, Smartphone, Globe, Building2, Target } from 'lucide-react';

const addons = [
  {
    icon: BarChart3,
    name: 'Advanced Analytics Dashboard',
    price: 97,
    description: 'Deep insights into call patterns, conversion rates, peak times'
  },
  {
    icon: Smartphone,
    name: 'Branded Mobile App',
    price: 147,
    description: 'Your practice\'s own app for patients to book/manage appointments'
  },
  {
    icon: Globe,
    name: 'Additional Language Support',
    price: 197,
    description: 'Serve more communities (Spanish, Mandarin, Punjabi, French, etc.)',
    perLanguage: true
  },
  {
    icon: Building2,
    name: 'Additional Location',
    price: 297,
    description: 'Add another practice location to your account'
  },
  {
    icon: Target,
    name: 'Marketing Integration',
    price: 147,
    description: 'Auto-sync with Facebook Ads, Google Ads for campaign tracking'
  }
];

export function PricingAddons() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Optional Add-Ons (Any Plan)
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {addons.map((addon, index) => {
            const Icon = addon.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="w-12 h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                <div className="flex items-baseline">
                  <span className="text-2xl text-[#1E3A8A]">${addon.price}</span>
                  <span className="text-gray-600 text-sm ml-1">/month{addon.perLanguage ? ' per language' : ''}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
