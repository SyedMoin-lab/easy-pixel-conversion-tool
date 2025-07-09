const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto">
              <img 
                src="/lovable-uploads/101d164b-1ff2-4812-8f8f-c9c2da3af78b.png"
                alt="Child in therapy session" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6 leading-tight">
              At StarRise ABA Therapy, we believe every child has a star inside them—waiting to shine.
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              We know that as a parent, you're at that challenging point where you need support, that's why we bring our mission a complete bundle of growth and development.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is simple: to help every child discover their strengths, build true confidence, and achieve meaningful progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;