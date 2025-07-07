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
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          Our Services: Helping Your Child Shine Brighter Every Day
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-secondary text-secondary-foreground hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="bg-background/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-sm">{service.description}</p>
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