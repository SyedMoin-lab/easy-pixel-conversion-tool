import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactForm = () => {
  return (
    <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-white rounded-2xl shadow-2xl border max-w-xs md:max-w-sm z-20">
      <div className="bg-primary text-primary-foreground px-4 py-2 md:px-6 md:py-3 rounded-t-2xl">
        <h3 className="font-bold text-center text-sm md:text-base">Let's Get Started! CONTACT US</h3>
      </div>
      <div className="p-4 md:p-6 space-y-3 md:space-y-4">
        <div className="text-center space-y-1">
          <p className="text-xs md:text-sm font-medium text-foreground">No Waitlist.</p>
          <p className="text-xs md:text-sm font-medium text-foreground">Immediate Access to Care.</p>
        </div>
        <div className="space-y-2 md:space-y-3">
          <Input placeholder="Name" className="border-input text-sm" />
          <Input placeholder="Phone" className="border-input text-sm" />
          <Input placeholder="Email" className="border-input text-sm" />
          <Input placeholder="Your Message" className="border-input text-sm" />
        </div>
        <Button className="w-full bg-coral text-coral-foreground hover:bg-coral/90 text-sm md:text-base">
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;