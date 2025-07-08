const AboutSection = () => {
  return (
    <section className="py-12 md:py-16 bg-light-blue relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-4 left-4 w-24 md:w-32 h-24 md:h-32 opacity-30">
        <img 
          src="/lovable-uploads/efee1572-f03a-462d-a8bc-947e3c6885b4.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src="/lovable-uploads/101d164b-1ff2-4812-8f8f-c9c2da3af78b.png"
              alt="Child in therapy session" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
              At StarRise ABA Therapy, we believe every child has a star inside them—waiting to shine.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4">
              We know that as a parent, you're at that challenging point where you need support, that's why we bring our mission a complete bundle of growth and development.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              Our mission is simple: to help every child discover their strengths, build true confidence, and achieve meaningful progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;