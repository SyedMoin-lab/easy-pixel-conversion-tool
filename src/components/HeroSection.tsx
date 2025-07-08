import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 opacity-80">
        <img 
          src="/lovable-uploads/5c7ed23c-46f6-46d0-85c3-e189de41a50f.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 opacity-60">
        <img 
          src="/lovable-uploads/a23ded50-2249-4367-8158-cdf0caf573dc.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/2 right-1/4 w-32 md:w-48 h-32 md:h-48 opacity-40">
        <img 
          src="/lovable-uploads/dbc76bf5-25d2-4883-a681-3571832495a1.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Let's Bring Out the <span className="text-primary">Star</span> in Your Child!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Compassionate, Personalized ABA Therapy for Children with Autism
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-coral text-coral-foreground hover:bg-coral/90 text-base md:text-lg px-6 md:px-8">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img 
              src="/lovable-uploads/f228ef2a-b498-4afd-a794-0c4753dca26d.png"
              alt="Happy child playing with educational toys" 
              className="w-full h-auto max-w-md mx-auto lg:max-w-full"
            />
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-yellow text-yellow-foreground p-2 md:p-4 rounded-full">
              <Star className="h-6 w-6 md:h-8 md:w-8" />
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default HeroSection;