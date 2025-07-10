const TestimonialsSection = () => {
  return (
    <section className="relative py-0 overflow-hidden" style={{
      backgroundImage: "url('/lovable-uploads/shape-8.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#F9D71C'
    }}>
      {/* Top speech bubble */}
      <div className="pt-16 pb-8">
        <div className="max-w-lg mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center relative">
            <p className="text-gray-600 text-sm leading-relaxed">
              StarRise ABA Therapy proudly brings in-home ABA therapy to families in North Carolina and nearby communities. Wherever you are, we're here to help your child shine.
            </p>
            {/* Speech bubble tail */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-12 px-4">
            What Families Are Saying About StarRise ABA Therapy
          </h2>
          
          {/* Testimonial cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* First testimonial */}
            <div className="relative">
              {/* Top left quote */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-pink-400 rounded-lg flex items-center justify-center z-10">
                <img 
                  src="/lovable-uploads/aa416309-2c94-4588-aa31-bee7a401b770.png" 
                  alt="Quote" 
                  className="w-5 h-5"
                />
              </div>
              
              {/* Card with blue background */}
              <div className="bg-blue-500 p-1 rounded-2xl">
                <div className="bg-white p-6 rounded-2xl shadow-lg relative">
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    "StarRise truly brought out the star in our daughter. The care, patience, and expertise have been life-changing."
                  </p>
                  <p className="font-semibold text-gray-800 text-center">Sofia L., Cary, NC</p>
                  
                  {/* Bottom right quote */}
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-pink-400 rounded-lg flex items-center justify-center transform rotate-180">
                    <img 
                      src="/lovable-uploads/aa416309-2c94-4588-aa31-bee7a401b770.png" 
                      alt="Quote" 
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>
              
              {/* Speech bubble tail */}
              <div className="flex justify-center mt-2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-blue-500"></div>
              </div>
            </div>

            {/* Second testimonial */}
            <div className="relative">
              {/* Top left quote */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-pink-400 rounded-lg flex items-center justify-center z-10">
                <img 
                  src="/lovable-uploads/aa416309-2c94-4588-aa31-bee7a401b770.png" 
                  alt="Quote" 
                  className="w-5 h-5"
                />
              </div>
              
              {/* Card with blue background */}
              <div className="bg-blue-500 p-1 rounded-2xl">
                <div className="bg-white p-6 rounded-2xl shadow-lg relative">
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    "We saw progress faster than we expected. StarRise made us feel supported every step of the way."
                  </p>
                  <p className="font-semibold text-gray-800 text-center">Elijah, Winston-Salem, NC</p>
                  
                  {/* Bottom right quote */}
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-pink-400 rounded-lg flex items-center justify-center transform rotate-180">
                    <img 
                      src="/lovable-uploads/aa416309-2c94-4588-aa31-bee7a401b770.png" 
                      alt="Quote" 
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>
              
              {/* Speech bubble tail */}
              <div className="flex justify-center mt-2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-blue-500"></div>
              </div>
            </div>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>

          {/* Bottom text */}
          <div className="text-center px-4">
            <p className="text-gray-700 text-sm max-w-3xl mx-auto leading-relaxed">
              StarRise ABA Therapy is dedicated to helping your child shine, grow, and thrive through compassionate, personalized care. Contact us today to start their journey toward a brighter future.
            </p>
          </div>
        </div>
      </div>

      {/* Red CTA section */}
      <div className="bg-red-500 py-4">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <h3 className="text-white text-lg md:text-xl font-bold text-center md:text-left">
            SCHEDULE YOUR CONSULTATION.
          </h3>
          <button className="bg-white text-black px-6 py-2 rounded-lg font-bold text-base hover:bg-gray-100 transition-colors">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;