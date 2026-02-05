import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { AB_TESTS, getVariant } from '@/lib/abtest';

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  practiceName: z.string().min(2, "Practice name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().optional(),
});

export function ContactForm() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const formStartedRef = useRef(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      practiceName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Track form start when user focuses on first field
  const handleFormStart = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      analytics.formStart('demo_request');
    }
  };

  // Track individual field focus
  const handleFieldFocus = (fieldName: string) => {
    handleFormStart();
    analytics.formFieldFocus('demo_request', fieldName);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Track form submission
    analytics.formSubmit('demo_request', true);

    // Track A/B test conversion
    const headlineVariant = getVariant(AB_TESTS.hero_headline);
    analytics.abTestConversion('hero_headline', headlineVariant, 'form_submit');

    console.log(values);
    toast({
      title: "Demo Request Submitted!",
      description: "Our team will contact you within 24 hours to schedule your personalized demo.",
    });
    form.reset();
    formStartedRef.current = false;
  }

  const benefits = [
    { icon: Clock, text: "15-minute personalized demo" },
    { icon: CheckCircle2, text: "See real-time call handling" },
    { icon: Sparkles, text: "Custom setup for your practice" },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-100/50 to-transparent dark:from-blue-900/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-100/50 to-transparent dark:from-green-900/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Card Container */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl shadow-slate-900/10 dark:shadow-black/30 overflow-hidden border border-slate-100 dark:border-slate-800">
              <div className="grid lg:grid-cols-5">
                {/* Left Side - Info Panel */}
                <div className="lg:col-span-2 p-8 lg:p-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white relative overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl" />

                  <div className="relative z-10">
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                      {t('contact.title')}
                    </h2>
                    <p className="text-blue-100 leading-relaxed mb-8">
                      Book a free demo and see how CaptureCall AI can transform your practice's patient communication.
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-4 mb-10">
                      {benefits.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <span className="font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Contact Info */}
                    <div className="pt-8 border-t border-white/20 space-y-4">
                      <p className="text-sm text-blue-200 font-medium uppercase tracking-wider mb-4">
                        Or reach us directly
                      </p>
                      <a href="mailto:hello@capturecall.ai" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                        <Mail className="w-5 h-5" />
                        <span>hello@capturecall.ai</span>
                      </a>
                      <a href="tel:+15551234567" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                        <Phone className="w-5 h-5" />
                        <span>+1 (555) 123-4567</span>
                      </a>
                    </div>

                    {/* Trust badge */}
                    <div className="mt-10 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <p className="text-sm font-medium text-blue-100">
                        Trusted by 50+ dental practices across Calgary and Alberta
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="lg:col-span-3 p-8 lg:p-12">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Request Your Free Demo
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400">
                      Fill out the form below and we'll be in touch within 24 hours.
                    </p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      {/* Name Fields */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                                First Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John"
                                  className="h-12 rounded-xl border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                                  onFocus={() => handleFieldFocus('firstName')}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                                Last Name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Smith"
                                  className="h-12 rounded-xl border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Practice Name */}
                      <FormField
                        control={form.control}
                        name="practiceName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                              {t('contact.practice')}
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Bright Smiles Dental"
                                className="h-12 rounded-xl border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                              {t('contact.email')}
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="doctor@yourpractice.com"
                                className="h-12 rounded-xl border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Phone */}
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                              {t('contact.phone')}
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="(403) 555-1234"
                                className="h-12 rounded-xl border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 dark:text-slate-300 font-medium">
                              {t('contact.message')} <span className="text-slate-400 font-normal">(optional)</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your practice and what challenges you're facing..."
                                className="min-h-[100px] rounded-xl border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 group"
                      >
                        {t('contact.submit')}
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>

                      {/* Privacy note */}
                      <p className="text-xs text-center text-slate-400 dark:text-slate-500">
                        By submitting, you agree to our Privacy Policy. We'll never share your information.
                      </p>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
