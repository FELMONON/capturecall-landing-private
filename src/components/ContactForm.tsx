import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  practiceName?: string;
  email?: string;
  phone?: string;
  bestTime?: string;
}

export function ContactForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    practiceName: '',
    email: '',
    phone: '',
    bestTime: '',
    message: ''
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your first name';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
      newErrors.firstName = 'First name should only contain letters';
    }
    
    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please enter your last name';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Last name should only contain letters';
    }
    
    // Practice Name validation
    if (!formData.practiceName.trim()) {
      newErrors.practiceName = 'Please enter your practice name';
    } else if (formData.practiceName.trim().length < 3) {
      newErrors.practiceName = 'Practice name must be at least 3 characters';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter a valid email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a valid phone number';
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Best Time validation
    if (!formData.bestTime) {
      newErrors.bestTime = 'Please select a time';
    }
    
    setErrors(newErrors);
    
    // Scroll to first error
    if (Object.keys(newErrors).length > 0) {
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setIsError(false);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Demo Request - ${formData.practiceName}`);
      const body = encodeURIComponent(`
Demo Request Details:
=====================

Name: ${formData.firstName} ${formData.lastName}
Practice: ${formData.practiceName}
Email: ${formData.email}
Phone: ${formData.phone}
Best Time to Call: ${formData.bestTime}

Message:
${formData.message || 'No additional message'}

---
This demo request was submitted from the CaptureCall AI website.
      `);
      
      // Open mailto link
      window.location.href = `mailto:felmon@capturecall.ca?subject=${subject}&body=${body}`;
      
      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        practiceName: '',
        email: '',
        phone: '',
        bestTime: '',
        message: ''
      });
      setErrors({});
      
      // Hide success message after 7 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 7000);
      
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    // Auto-format phone number
    if (field === 'phone') {
      const digits = value.replace(/\D/g, '');
      let formatted = digits;
      if (digits.length >= 6) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
      } else if (digits.length >= 3) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      }
      setFormData(prev => ({ ...prev, [field]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }

    // Clear error for this field when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const characterCount = formData.message.length;
  const maxCharacters = 500;

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3 md:mb-4">
              Book Your Free Demo
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              See CaptureCall AI in action. No credit card required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl text-gray-900 mb-4">Get In Touch</h3>
                <p className="text-sm md:text-base text-gray-600 mb-6">
                  Ready to stop missing calls? Schedule your free 15-minute demo.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-600 mb-1">General Inquiries</p>
                    <a 
                      href="mailto:felmon@capturecall.ca" 
                      className="text-sm md:text-base text-[#1E3A8A] hover:underline"
                    >
                      felmon@capturecall.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-600 mb-1">Support</p>
                    <a
                      href="mailto:support@capturecall.ca"
                      className="text-sm md:text-base text-[#1E3A8A] hover:underline"
                    >
                      support@capturecall.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-600 mb-1">Demo Requests</p>
                    <a
                      href="mailto:demo@capturecall.ca"
                      className="text-sm md:text-base text-[#1E3A8A] hover:underline"
                    >
                      demo@capturecall.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-600 mb-1">Phone</p>
                    <a
                      href="tel:+14038520469"
                      className="text-sm md:text-base text-[#1E3A8A] hover:underline"
                    >
                      (403) 852-0469
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-gray-600 mb-1">Location</p>
                    <p className="text-sm md:text-base text-gray-700">Calgary, Alberta, Canada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {isSuccess && (
                <div className="mb-6 p-6 bg-green-500 text-white rounded-lg text-center">
                  <p className="mb-2">✅ <strong>Thank you!</strong> We've received your demo request.</p>
                  <p className="text-sm">We'll contact you within 24 hours to schedule your demo.</p>
                  <p className="text-sm mt-2 opacity-90">Check your email for confirmation.</p>
                </div>
              )}

              {isError && (
                <div className="mb-6 p-6 bg-red-500 text-white rounded-lg text-center">
                  <p className="mb-2">⚠️ <strong>Something went wrong.</strong></p>
                  <p className="text-sm">
                    Please try again or email us directly at{' '}
                    <a href="mailto:demo@capturecall.ca" className="underline">
                      demo@capturecall.ca
                    </a>
                    {' '}or call{' '}
                    <a href="tel:+14038520469" className="underline">
                      (403) 852-0469
                    </a>
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`mt-1 h-14 ${errors.firstName ? 'border-red-500' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.firstName}
                      autoComplete="given-name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="lastName" className="text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`mt-1 h-14 ${errors.lastName ? 'border-red-500' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.lastName}
                      autoComplete="family-name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="practiceName" className="text-gray-700">
                    Practice Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="practiceName"
                    type="text"
                    value={formData.practiceName}
                    onChange={(e) => handleInputChange('practiceName', e.target.value)}
                    className={`mt-1 h-14 ${errors.practiceName ? 'border-red-500' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.practiceName}
                    autoComplete="organization"
                  />
                  {errors.practiceName && (
                    <p className="text-red-500 text-sm mt-1">{errors.practiceName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`mt-1 h-14 ${errors.email ? 'border-red-500' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`mt-1 h-14 ${errors.phone ? 'border-red-500' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    autoComplete="tel"
                    placeholder="(403) 555-1234"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="bestTime" className="text-gray-700">
                    Best Time to Call <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.bestTime}
                    onValueChange={(value) => handleInputChange('bestTime', value)}
                  >
                    <SelectTrigger 
                      id="bestTime"
                      className={`mt-1 h-14 ${errors.bestTime ? 'border-red-500' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.bestTime}
                    >
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8AM-12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM-5PM)</SelectItem>
                      <SelectItem value="evening">Evening (5PM-7PM)</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.bestTime && (
                    <p className="text-red-500 text-sm mt-1">{errors.bestTime}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700">
                    Message <span className="text-gray-500">(Optional)</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => {
                      if (e.target.value.length <= maxCharacters) {
                        handleInputChange('message', e.target.value);
                      }
                    }}
                    rows={4}
                    className="mt-1"
                    placeholder="Tell us about your practice and what you're looking for..."
                  />
                  <p className="text-sm text-gray-500 mt-1 text-right">
                    {characterCount}/{maxCharacters} characters
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white h-14"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Book My Demo'
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We'll respond within 24 hours • No obligation • Free 15-minute demo
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}