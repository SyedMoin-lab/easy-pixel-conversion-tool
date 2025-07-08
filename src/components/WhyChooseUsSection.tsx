import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUsSection = () => {
  const features = [
    {
      image: "/lovable-uploads/7f8900d6-31e2-4bee-a0db-7a3bc3159a92.png",
      title: "No Waitlist",
      description: "Start getting services right away. No waiting or delays."
    },
    {
      image: "/lovable-uploads/b1928414-1310-41a8-865b-8fedf1cdf45b.png",
      title: "Experienced Team",
      description: "Our certified ABA therapists are dedicated to helping your child succeed."
    },
    {
      image: "/lovable-uploads/bd23af11-31fb-4f02-941d-28c69ef98182.png",
      title: "In-Home ABA Therapy",
      description: "Therapy delivered in your child's natural environment for maximum comfort."
    },
    {
      image: "/lovable-uploads/466e6095-5a21-4813-90cb-2e8af23ba8ac.png",
      title: "Family-Focused Approach",
      description: "We work with your family to create lasting positive changes."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-1/2 left-0 w-24 md:w-40 h-24 md:h-40 opacity-15">
        <img 
          src="/lovable-uploads/26af771b-85e7-4e19-942a-29b6cb1b6842.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">
          Why Families Choose StarRise ABA Therapy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6 text-center">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-24 md:h-32 object-cover rounded mb-3 md:mb-4" 
                />
                <h3 className="font-bold mb-2 text-sm md:text-base">{feature.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;