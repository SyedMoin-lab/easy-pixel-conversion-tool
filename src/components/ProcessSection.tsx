const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Initial Assessment",
      description: "We begin by understanding your child's unique strengths and challenges through comprehensive evaluation."
    },
    {
      number: "2",
      title: "Custom Therapy Plan",
      description: "A personalized plan tailored to your family's specific needs, goals, and preferences."
    },
    {
      number: "3",
      title: "Ongoing Support & Therapy",
      description: "Regular therapy sessions with continuous progress monitoring and plan adjustments."
    },
    {
      number: "4",
      title: "Family Collaboration",
      description: "We guide and support families, helping you feel confident in your journey."
    },
    {
      number: "5",
      title: "Celebrate Growth",
      description: "We track and celebrate every step forward together."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-light-blue relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute bottom-0 right-0 w-32 md:w-48 h-32 md:h-48 opacity-25">
        <img 
          src="/lovable-uploads/f4730920-1126-4a90-9678-ebe0664dbe79.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
              How We Bring Out the Star in Every Child
            </h2>
            <div className="space-y-4 md:space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-coral text-coral-foreground rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">{step.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img 
              src="/lovable-uploads/8c6db565-1b4d-4ddb-9194-60baf498c198.png"
              alt="Children supporting each other" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;