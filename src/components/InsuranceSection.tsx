const InsuranceSection = () => {
  const insuranceProviders = [
    { name: "United Healthcare", bgColor: "bg-primary", textColor: "text-primary-foreground" },
    { name: "Medicaid", bgColor: "bg-secondary", textColor: "text-secondary-foreground" },
    { name: "Kaiser Permanente", bgColor: "bg-accent", textColor: "text-accent-foreground" },
    { name: "Anthem", bgColor: "bg-navy", textColor: "text-white" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-8">
          Insurance & Accessibility
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          We accept a wide range of insurance providers and work with you to ensure you get the coverage you need. We're here to help you navigate the process.
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {insuranceProviders.map((provider, index) => (
            <div key={index} className={`${provider.bgColor} ${provider.textColor} px-6 py-3 rounded-lg font-bold`}>
              {provider.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;