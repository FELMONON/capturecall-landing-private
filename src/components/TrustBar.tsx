import { Shield, Lock, Award, CheckCircle2 } from 'lucide-react';

export function TrustBar() {
  return (
    <section className="py-6 md:py-8 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 md:p-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center mb-2 md:mb-3">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-xs md:text-sm mb-1">
                  {badge.title}
                </h3>
                <p className="text-[10px] md:text-xs text-gray-600">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const badges = [
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Bank-level encryption'
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'SOC 2 Type II'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: '2024 Healthcare'
  },
  {
    icon: CheckCircle2,
    title: '4.9/5 Rating',
    description: 'Verified reviews'
  }
];