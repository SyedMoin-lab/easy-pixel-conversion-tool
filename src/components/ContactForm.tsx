import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactForm = () => {
  return (
    <div className="absolute top-20 right-8 bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl border max-w-sm z-10">
      <div className="bg-coral text-coral-foreground px-6 py-3 rounded-t-2xl">
        <h3 className="font-bold text-center">Let's Get Started! CONTACT US</h3>
      </div>
      <div className="p-6 space-y-4">
        <div className="text-center space-y-1">
          <p className="text-sm font-medium">No Waitlist.</p>
          <p className="text-sm font-medium">Immediate Access to Care.</p>
        </div>
        <div className="space-y-3">
          <Input placeholder="Name" className="border-gray-300" />
          <Input placeholder="Phone" className="border-gray-300" />
          <Input placeholder="Email" className="border-gray-300" />
          <Input placeholder="Your Message" className="border-gray-300" />
        </div>
        <Button className="w-full bg-coral text-coral-foreground hover:bg-coral/90">
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;