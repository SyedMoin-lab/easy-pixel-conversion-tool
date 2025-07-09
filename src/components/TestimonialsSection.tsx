const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "StarRise really helped my daughter learn communication skills. The staff were very professional and caring.",
      author: "– Sarah L., Gary, NC",
      avatar: "👩"
    },
    {
      text: "We are grateful to have been connected to StarRise and feel proud knowing our son has the guidance & support he needs.",
      author: "– Elijah, Winston-Salem, NC", 
      avatar: "👨"
    }
  ];

  return (
    <section className="py-16 bg-yellow-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          What Families Are Saying About StarRise ABA Therapy
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-pink-300 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-bold text-blue-900">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;