import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Check, X } from 'lucide-react';

export function ComparisonTable() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const comparisons = [
    {
      feature: 'Availability',
      traditional: 'Business hours only',
      captureCall: '24/7/365',
      highlight: true
    },
    {
      feature: 'Response Time',
      traditional: 'Variable, often delayed',
      captureCall: 'Instant, every time'
    },
    {
      feature: 'Cost per Month',
      traditional: '$3,500 - $4,500',
      captureCall: 'From $397',
      highlight: true
    },
    {
      feature: 'Sick Days',
      traditional: 'Yes (coverage issues)',
      captureCall: 'Never'
    },
    {
      feature: 'Vacation Coverage',
      traditional: 'Requires temporary staff',
      captureCall: 'Always covered'
    },
    {
      feature: 'Training Required',
      traditional: 'Weeks of onboarding',
      captureCall: '48-hour setup'
    },
    {
      feature: 'Call Recording',
      traditional: 'Optional, extra cost',
      captureCall: 'Every call included'
    },
    {
      feature: 'Appointment Booking',
      traditional: 'Manual, prone to errors',
      captureCall: 'Automated, accurate'
    },
    {
      feature: 'Multi-language',
      traditional: 'Limited',
      captureCall: 'Multiple languages',
      highlight: true
    },
    {
      feature: 'Scalability',
      traditional: 'Hire more staff',
      captureCall: 'Instant, unlimited'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 md:mb-4">
            CaptureCall AI vs Traditional Receptionist
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            See why Calgary dental practices are making the switch
          </p>
        </div>

        {/* Comparison Table - Mobile Optimized */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 p-4 md:p-6 bg-gray-50 border-b border-gray-200">
            <div className="text-xs md:text-sm font-semibold text-gray-700">Feature</div>
            <div className="text-xs md:text-sm font-semibold text-gray-700 text-center">Traditional</div>
            <div className="text-xs md:text-sm font-semibold text-[#1E3A8A] text-center">CaptureCall AI</div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 gap-2 md:gap-4 p-4 md:p-6 border-b border-gray-100 ${
                item.highlight ? 'bg-blue-50' : ''
              }`}
            >
              <div className="text-xs md:text-sm font-medium text-gray-900">{item.feature}</div>
              <div className="text-xs md:text-sm text-gray-600 text-center">{item.traditional}</div>
              <div className="text-xs md:text-sm font-semibold text-[#1E3A8A] text-center">{item.captureCall}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Save <span className="font-bold text-[#1E3A8A]">$3,000+/month</span> compared to traditional receptionist
          </p>
        </div>
      </div>
    </section>
  );
}