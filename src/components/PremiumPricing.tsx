import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Check, Sparkles, Zap, Crown, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

export function PremiumPricing() {
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
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: 'Starter',
      price: 397,
      icon: Sparkles,
      description: 'Perfect for growing practices',
      badge: 'Best Value',
      gradient: 'from-purple-500 to-pink-500',
      features: [
        '24/7 AI receptionist',
        'Up to 100 calls/month',
        'Basic appointment booking',
        'Email confirmations',
        'Call recordings & transcripts',
        'Monthly reports',
        'Email support'
      ],
      cta: 'Start Free Trial',
      savings: null,
      popular: false
    },
    {
      name: 'Professional',
      price: 697,
      originalPrice: 897,
      icon: Zap,
      description: 'Most Calgary practices choose this',
      badge: 'MOST POPULAR',
      gradient: 'from-cyan-500 to-blue-600',
      features: [
        'Everything in Starter, PLUS:',
        'Up to 300 calls/month',
        'Emergency triage & routing',
        'SMS & email confirmations',
        'Appointment reminders',
        'Multi-dentist scheduling',
        'Real-time analytics dashboard',
        'Priority support (2hr response)',
        'Custom greetings',
        'Voicemail transcription'
      ],
      highlight: [
        'After-hours emergency routing',
        'Holiday scheduling automation',
        'Peak hour overflow management'
      ],
      cta: 'Start Free Trial',
      savings: 200,
      popular: true,
      roi: '$15K-25K monthly revenue increase'
    },
    {
      name: 'Enterprise',
      price: 1197,
      icon: Crown,
      description: 'For high-volume practices',
      badge: 'Premium',
      gradient: 'from-amber-500 to-orange-600',
      features: [
        'Everything in Professional, PLUS:',
        'UNLIMITED calls',
        'Multi-location support (5 locations)',
        'Dedicated account manager',
        'Custom AI training',
        'Advanced analytics & insights',
        'API access',
        'White-label option',
        '24/7 VIP support',
        'Quarterly strategy reviews'
      ],
      cta: 'Contact Sales',
      savings: null,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 md:mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>

        {/* Pricing Cards - Minimalist */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            
            return (
              <div
                key={index}
                className={`relative bg-white border-2 ${
                  isPopular ? 'border-[#1E3A8A] shadow-xl' : 'border-gray-200'
                } rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg transition-shadow`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-[#1E3A8A] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className={`p-6 md:p-8 border-b border-gray-100 ${isPopular ? 'pt-12 md:pt-14' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 md:w-10 md:h-10 ${isPopular ? 'text-[#1E3A8A]' : 'text-gray-700'}`} />
                    {!isPopular && plan.badge && (
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-lg text-gray-600 ml-2">/mo</span>
                  </div>
                  
                  {plan.originalPrice && (
                    <div className="mt-2 text-sm">
                      <span className="text-gray-500 line-through">${plan.originalPrice}/mo</span>
                      <span className="ml-2 text-green-600 font-semibold">
                        Save ${plan.savings}/mo
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="p-6 md:p-8">
                  <ul className="space-y-3 mb-6 md:mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm md:text-base">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className={`text-gray-700 ${feature.includes('PLUS') ? 'font-semibold' : ''}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className={`w-full h-12 md:h-14 text-base md:text-lg font-semibold ${
                      isPopular
                        ? 'bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust */}
        <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-1">14</div>
            <div className="text-xs md:text-sm text-gray-600">Days Free Trial</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-1">60</div>
            <div className="text-xs md:text-sm text-gray-600">Day Guarantee</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-1">48</div>
            <div className="text-xs md:text-sm text-gray-600">Hour Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
}