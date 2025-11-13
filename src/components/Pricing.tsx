import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Check, X, Sparkles, Zap, Crown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const pricingPlans = [
  {
    name: 'Starter',
    price: 397,
    badge: 'Perfect for Small Practices',
    bestFor: '1-2 dentists, up to 100 calls/month',
    icon: Sparkles,
    features: [
      '24/7 AI receptionist',
      'Up to 100 calls per month',
      'Basic appointment booking',
      'New patient intake',
      'Email confirmations',
      'Call recordings & transcripts',
      'Monthly performance reports',
      'Email support (24-hour response)',
      'Integration with 1 calendar system'
    ],
    notIncluded: [
      'Emergency triage protocols',
      'SMS confirmations',
      'Multi-location support',
      'Priority support'
    ],
    cta: 'Start Free Trial',
    subtext: 'No credit card required',
    popular: false
  },
  {
    name: 'Professional',
    price: 697,
    originalPrice: 897,
    savings: 200,
    badge: 'MOST POPULAR',
    bestFor: '2-4 dentists, up to 300 calls/month',
    icon: Zap,
    features: [
      'Everything in Starter, PLUS:',
      'Up to 300 calls per month',
      'Emergency call triage & prioritization',
      'SMS & email confirmations',
      'Appointment reminders (24hr & 2hr before)',
      'Cancellation & rescheduling handling',
      'Insurance verification questions',
      'Multi-dentist scheduling',
      'Integration with unlimited calendars',
      'Real-time dashboard & analytics',
      'Priority phone support (2-hour response)',
      'Custom greeting & hold messages',
      'Voicemail transcription',
      'Weekly performance reviews'
    ],
    specialFeatures: [
      'After-hours emergency routing',
      'Holiday scheduling automation',
      'Peak hour call overflow management'
    ],
    cta: 'Start Free Trial',
    subtext: 'Most practices see 15-25 new appointments/month',
    roiBadge: 'Avg. ROI: $15K-25K monthly revenue increase',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 1197,
    badge: 'For High-Volume Practices',
    bestFor: '5+ dentists, unlimited calls, multi-location',
    icon: Crown,
    features: [
      'Everything in Professional, PLUS:',
      'UNLIMITED calls per month',
      'Multi-location support (up to 5 locations)',
      'Dedicated account manager',
      'Custom AI training for your practice',
      'Advanced emergency protocols',
      'VIP patient recognition & routing',
      'Bi-lingual support (English + 1 language)',
      'Integration with ALL practice management systems',
      'API access for custom integrations',
      'White-label option (your branding)',
      '24/7 priority support (30-min response)',
      'Monthly strategy calls',
      'Custom reporting & analytics',
      'A/B testing for call scripts',
      'Dedicated backup system'
    ],
    premiumFeatures: [
      'Same-day custom feature development',
      'Direct line to CTO for technical needs',
      'Quarterly business reviews with data insights',
      'First access to new features'
    ],
    cta: 'Schedule Consultation',
    subtext: 'Custom solutions available for larger practices',
    popular: false
  }
];

export function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCTA = (planName: string) => {
    if (planName === 'Enterprise') {
      window.location.href = 'mailto:demo@capturecall.ca?subject=Enterprise Plan Consultation Request';
    } else {
      scrollToContact();
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Founding Member Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 text-center mb-12">
        <p className="text-sm md:text-base px-4">
          🔥 <span className="font-semibold">EARLY ADOPTER PRICING</span> - First 50 Calgary practices lock in these rates forever. 37 spots remaining.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
            Simple Pricing That Pays For Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your practice. All plans include 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            // On mobile, show Professional first
            const mobileOrder = plan.name === 'Professional' ? 'order-first lg:order-none' : '';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative h-full ${mobileOrder}`}
              >
                <div
                  className={`relative h-full rounded-3xl border bg-white shadow-sm transition-all duration-300 ${
                    plan.popular ? 'border-[#1E3A8A] shadow-2xl' : 'border-gray-200 hover:-translate-y-1'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute left-1/2 top-4 -translate-x-1/2 z-10">
                      <div className="bg-[#1E3A8A] text-white px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg whitespace-nowrap">
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  <div className={`p-8 ${plan.popular ? 'pt-12 md:pt-14' : 'pt-8'}`}>
                    {/* Icon & Name */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          plan.popular ? 'bg-[#1E3A8A]' : 'bg-gray-100'
                        }`}>
                          <Icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                        </div>
                        <h3 className="text-2xl text-gray-900">{plan.name}</h3>
                      </div>
                    </div>

                  {!plan.popular && (
                    <Badge variant="outline" className="mb-4">
                      {plan.badge}
                    </Badge>
                  )}

                    {/* Price */}
                    <div className="mb-4">
                      {plan.originalPrice && (
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-gray-400 line-through text-xl">${plan.originalPrice}</span>
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            SAVE ${plan.savings}/month
                          </Badge>
                        </div>
                      )}
                      <div className="flex items-baseline">
                        <span className="text-5xl text-gray-900">${plan.price}</span>
                        <span className="text-gray-600 ml-2">/month</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">billed monthly</p>
                    </div>

                    {/* Best For */}
                    <p className="text-gray-600 mb-6 pb-6 border-b">
                      {plan.bestFor}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Special Features */}
                    {plan.specialFeatures && (
                      <div className="mb-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <p className="text-sm text-orange-900 mb-2">🔥 Special Features:</p>
                        <ul className="space-y-2">
                          {plan.specialFeatures.map((feature, i) => (
                            <li key={i} className="text-sm text-orange-800">• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Premium Features */}
                    {plan.premiumFeatures && (
                      <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-sm text-purple-900 mb-2">🚀 Premium Features:</p>
                        <ul className="space-y-2">
                          {plan.premiumFeatures.map((feature, i) => (
                            <li key={i} className="text-sm text-purple-800">• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Not Included */}
                    {plan.notIncluded && (
                      <ul className="space-y-2 mb-6 pb-6 border-b">
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <X className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-500 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* ROI Badge */}
                    {plan.roiBadge && (
                      <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200 text-center">
                        <p className="text-sm text-green-800">{plan.roiBadge}</p>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Button
                      onClick={() => handleCTA(plan.name)}
                      size="lg"
                      className={`w-full ${
                        plan.popular
                          ? 'bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white'
                          : 'bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-gray-50'
                      }`}
                    >
                      {plan.cta}
                    </Button>

                    <p className="text-center text-sm text-gray-600 mt-3">{plan.subtext}</p>
                    <p className="text-center text-xs text-gray-500 mt-2">Cancel anytime</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 max-w-4xl mx-auto"
        >
          {[
            '💳 Secure Payment Processing',
            '🔒 Bank-Level Encryption',
            '✅ No Long-Term Contracts',
            '🎯 Cancel Anytime',
            '📞 Canadian-Based Support'
          ].map((badge, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow text-center text-sm text-gray-700">
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
