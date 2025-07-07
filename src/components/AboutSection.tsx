const AboutSection = () => {
  return (
    <section className="py-16 bg-light-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/101d164b-1ff2-4812-8f8f-c9c2da3af78b.png"
              alt="Child in therapy session" 
              className="rounded-full w-80 h-80 object-cover mx-auto shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              At StarRise ABA Therapy, we believe every child has a star inside them—waiting to shine.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              We know that as a parent, you're at that challenging point where you need support, that's why we bring our mission a complete bundle of growth and development.
            </p>
            <p className="text-lg text-muted-foreground">
              Our mission is simple: to help every child discover their strengths, build true confidence, and achieve meaningful progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;