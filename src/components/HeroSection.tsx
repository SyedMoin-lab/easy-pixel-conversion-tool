import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ContactForm from './ContactForm';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-hero-bg via-hero-secondary/20 to-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded-full">
              Let's Get Started! CONTACT US
            </Badge>
            <h1 className="text-5xl font-bold text-foreground leading-tight">
              Let's Bring Out the <span className="text-primary">Star</span> in Your Child!
            </h1>
            <p className="text-xl text-muted-foreground">
              Compassionate, Personalized ABA Therapy for Children with Autism
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-coral text-coral-foreground hover:bg-coral/90">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/f228ef2a-b498-4afd-a794-0c4753dca26d.png"
              alt="Happy child playing with educational toys" 
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -top-4 -right-4 bg-yellow text-yellow-foreground p-4 rounded-full">
              <Star className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default HeroSection;