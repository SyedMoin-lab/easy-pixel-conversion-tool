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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              How We Bring Out the Star in Every Child
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2 text-blue-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/8c6db565-1b4d-4ddb-9194-60baf498c198.png"
              alt="Children supporting each other" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;