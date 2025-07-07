import { Star, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-6 w-6" />
              <span className="text-xl font-bold">StarRise</span>
            </div>
            <p className="text-sm text-gray-300">
              StarRise ABA Therapy proudly serves North Carolina. ABA therapy for families in North Carolina and nearby communities.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@starrise-aba.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>North Carolina</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>ABA Therapy</li>
              <li>Behavior Support</li>
              <li>Communication Development</li>
              <li>Social Skills Training</li>
              <li>Family Support</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2024 StarRise ABA Therapy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;