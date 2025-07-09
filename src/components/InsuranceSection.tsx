const InsuranceSection = () => {
  const insuranceProviders = [
    { name: "United Healthcare", bgColor: "bg-blue-600" },
    { name: "Medicaid", bgColor: "bg-blue-500" }, 
    { name: "Kaiser Permanente", bgColor: "bg-blue-400" },
    { name: "Anthem", bgColor: "bg-blue-800" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Insurance & Accessibility
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We accept a wide range of insurance providers and work with you to ensure you get the coverage you need. We're here to help you navigate the process.
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {insuranceProviders.map((provider, index) => (
            <div key={index} className={`${provider.bgColor} text-white px-6 py-3 rounded-lg font-bold`}>
              {provider.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;