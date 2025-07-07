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
    <section className="py-16 bg-yellow">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-foreground mb-12">
          What Families Are Saying About StarRise ABA Therapy
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/90 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow rounded-full w-12 h-12 flex items-center justify-center">
                    <Star className="h-6 w-6 text-yellow-foreground" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;