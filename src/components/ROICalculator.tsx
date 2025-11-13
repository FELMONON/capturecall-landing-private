import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Input } from './ui/input';

export function ROICalculator() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [missedCalls, setMissedCalls] = useState('15');
  const [patientValue, setPatientValue] = useState('300');
  const [selectedPlan, setSelectedPlan] = useState('697');

  const calculateROI = () => {
    const callsPerWeek = parseInt(missedCalls);
    const callsPerMonth = callsPerWeek * 4;
    const captureRate = 0.8; // 80%
    const capturedCalls = Math.floor(callsPerMonth * captureRate);
    const value = parseInt(patientValue);
    const planCost = parseInt(selectedPlan);

    const monthlyRevenue = capturedCalls * value;
    const annualRevenue = monthlyRevenue * 12;
    const netMonthlyGain = monthlyRevenue - planCost;
    const roi = Math.round((netMonthlyGain / planCost) * 100);

    return {
      missedMonthly: callsPerMonth,
      missedRevenue: callsPerMonth * value,
      annualMissedRevenue: callsPerMonth * value * 12,
      capturedCalls,
      monthlyRevenue,
      annualRevenue,
      planCost,
      netMonthlyGain,
      roi
    };
  };

  const results = calculateROI();

  return (
    <section id="roi-calculator" className="py-16 md:py-24 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            See Your Return on Investment
          </h2>
          <p className="text-xl text-blue-100">
            Calculate how much revenue you're leaving on the table
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl text-gray-900 mb-6">Your Practice Details</h3>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="missedCalls" className="text-gray-900 mb-2 block">
                    How many calls do you miss per week?
                  </Label>
                  <Select value={missedCalls} onValueChange={setMissedCalls}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5 calls/week</SelectItem>
                      <SelectItem value="10">10 calls/week</SelectItem>
                      <SelectItem value="15">15 calls/week</SelectItem>
                      <SelectItem value="20">20 calls/week</SelectItem>
                      <SelectItem value="25">25+ calls/week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="patientValue" className="text-gray-900 mb-2 block">
                    Average value per new patient ($)
                  </Label>
                  <Input
                    id="patientValue"
                    type="number"
                    value={patientValue}
                    onChange={(e) => setPatientValue(e.target.value)}
                    min="0"
                    step="50"
                  />
                </div>

                <div>
                  <Label htmlFor="plan" className="text-gray-900 mb-2 block">
                    Select Plan
                  </Label>
                  <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="397">Starter - $397/month</SelectItem>
                      <SelectItem value="697">Professional - $697/month</SelectItem>
                      <SelectItem value="1197">Enterprise - $1,197/month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl text-gray-900 mb-6">Your Potential ROI</h3>

              <div className="space-y-4">
                <div className="pb-4 border-b">
                  <p className="text-sm text-gray-600">Missed calls per month</p>
                  <p className="text-3xl text-red-600">{results.missedMonthly}</p>
                </div>

                <div className="pb-4 border-b">
                  <p className="text-sm text-gray-600">Monthly missed revenue</p>
                  <p className="text-3xl text-red-600">${results.missedRevenue.toLocaleString()}</p>
                </div>

                <div className="pb-4 border-b">
                  <p className="text-sm text-gray-600">Annual missed revenue</p>
                  <p className="text-2xl text-red-600">${results.annualMissedRevenue.toLocaleString()}</p>
                </div>

                <div className="pb-4 border-b">
                  <p className="text-sm text-gray-600">Calls captured with AI (80%)</p>
                  <p className="text-3xl text-green-600">{results.capturedCalls}</p>
                </div>

                <div className="pb-4 border-b">
                  <p className="text-sm text-gray-600">New monthly revenue</p>
                  <p className="text-3xl text-green-600">${results.monthlyRevenue.toLocaleString()}</p>
                </div>

                <div className="pb-4 border-b">
                  <p className="text-sm text-gray-600">CaptureCall AI cost</p>
                  <p className="text-2xl text-gray-900">${results.planCost}</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-500">
                  <p className="text-sm text-gray-700 mb-2">Your Net Monthly Gain</p>
                  <p className="text-4xl text-green-700 mb-3">${results.netMonthlyGain.toLocaleString()}</p>
                  <p className="text-2xl text-green-600">{results.roi}% ROI</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Example Calculation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white"
          >
            <p className="text-lg">
              <span className="font-semibold">Example:</span> Missing 15 calls/week = ~60 calls/month.
              If you capture 80% (48 calls) at $300 each = $14,400/month.
              Professional Plan cost: $697/month.
              <span className="text-yellow-300 font-semibold"> Your net gain: $13,703/month</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}