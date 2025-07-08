import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "StarRise really helped my daughter learn communication skills. The staff were very professional and caring.",
      author: "– Sarah L., Gary, NC"
    },
    {
      text: "We are grateful to have been connected to StarRise and feel proud knowing our son has the guidance & support he needs.",
      author: "– Elijah, Winston-Salem, NC"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-yellow relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-yellow-foreground mb-8 md:mb-12">
          What Families Are Saying About StarRise ABA Therapy
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/90 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-yellow rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <Star className="h-5 w-5 md:h-6 md:w-6 text-yellow-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-3 md:mb-4 italic text-sm md:text-base">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-sm md:text-base">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;