const ServicesSection = () => {
  const services = [
    {
      icon: "🎯",
      title: "Reducing Challenging Behaviors",
      description: "We guide you to understand behavioral patterns and create personalized strategies for navigating challenging moments with confidence."
    },
    {
      icon: "💬",
      title: "Communication Development", 
      description: "We help children find their voice—whether through speech, sign language, or assistive technology—to express their needs and feelings."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Our Services: Helping Your Child Shine Brighter Every Day
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-500 text-white p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;