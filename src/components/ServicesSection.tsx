import { Target, Users, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: "Reducing Challenging Behaviors",
      description: "We guide you to understand behavioral patterns and create personalized strategies for navigating challenging moments with confidence."
    },
    {
      icon: Users,
      title: "Communication Development",
      description: "We help children find their voice—whether through speech, sign language, or assistive technology—to express their needs and feelings."
    },
    {
      icon: Heart,
      title: "Social Skills Building",
      description: "Through play-based learning and structured activities, we help children develop meaningful connections and friendships."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute bottom-4 right-4 w-32 md:w-48 h-32 md:h-48 opacity-20">
        <img 
          src="/lovable-uploads/d29a43a6-64a7-472e-b58c-e0178675735c.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">
          Our Services: Helping Your Child Shine Brighter Every Day
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-secondary text-secondary-foreground hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="bg-background/20 rounded-full p-3 md:p-4 w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-sm md:text-base">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;