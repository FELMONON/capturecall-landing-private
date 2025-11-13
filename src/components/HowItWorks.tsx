import { useInView } from '../hooks/useInView';
import { Settings, TestTube, Rocket } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: Settings,
    title: 'Quick Setup',
    description: 'We configure your AI receptionist with your practice details, hours, services, and preferences.'
  },
  {
    number: '2',
    icon: TestTube,
    title: 'Test & Train',
    description: 'We test every scenario to ensure perfection—from simple bookings to emergency triage.'
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Go Live',
    description: 'Start capturing calls immediately. Your AI receptionist is ready to work 24/7.'
  }
];

export function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 md:mb-4">
            Setup in 48 Hours
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            From signup to live system in just 2 days
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl border-2 border-gray-100 hover:border-[#1E3A8A] transition-all"
                >
                  {/* Number Badge */}
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl md:text-2xl font-bold">
                    {step.number}
                  </div>

                  <h3 className="text-lg md:text-xl mb-2 md:mb-3 text-gray-900 text-center font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 text-center">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}