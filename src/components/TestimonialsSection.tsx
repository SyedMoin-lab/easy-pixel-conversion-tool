const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "StarRise truly brought out the star in our daughter. The care, patience, and expertise have been life-changing.",
      author: "Sofia L., Cary, NC"
    },
    {
      text: "We saw progress faster than we expected. StarRise made us feel supported every step of the way.",
      author: "Elijah, Winston-Salem, NC"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden" style={{
      backgroundImage: "url('/lovable-uploads/shape-8.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#F9D71C'
    }}>
      {/* Top text section */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-lg text-center relative">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            StarRise ABA Therapy proudly brings in-home ABA therapy to families in North Carolina and nearby communities. Wherever you are, we're here to help your child shine.
          </p>
          {/* Speech bubble pointer */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white"></div>
          </div>
        </div>
      </div>

      {/* Main testimonials section */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Families Are Saying About StarRise ABA Therapy
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center z-10">
                <img 
                  src="/lovable-uploads/aa416309-2c94-4588-aa31-bee7a401b770.png" 
                  alt="Quote" 
                  className="w-6 h-6"
                />
              </div>
              
              {/* Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                
                {/* Quote icon bottom right */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-400 rounded-lg flex items-center justify-center transform rotate-180">
                  <img 
                    src="/lovable-uploads/aa416309-2c94-4588-aa31-bee7a401b770.png" 
                    alt="Quote" 
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel dots */}
        <div className="flex justify-center space-x-2 mb-12">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>

        {/* Bottom text */}
        <div className="text-center mb-8">
          <p className="text-gray-700 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            StarRise ABA Therapy is dedicated to helping your child shine, grow, and thrive through compassionate, personalized care. Contact us today to start their journey toward a brighter future.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-red-500 py-6">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-0">
            SCHEDULE YOUR CONSULTATION.
          </h3>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;