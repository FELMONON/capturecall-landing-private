import { Mail, Phone } from 'lucide-react';

export function TopContactBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#1E3A8A] text-white py-2 text-sm hidden md:block">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:felmon@capturecall.ca" 
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>felmon@capturecall.ca</span>
            </a>
            <a 
              href="tel:+14038520469" 
              className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(403) 852-0469</span>
            </a>
          </div>
          <div className="text-blue-200">
            Calgary, Alberta • Serving Dental Practices
          </div>
        </div>
      </div>
    </div>
  );
}