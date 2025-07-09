const WhyChooseUsSection = () => {
  const features = [
    {
      image: "/lovable-uploads/7f8900d6-31e2-4bee-a0db-7a3bc3159a92.png",
      title: "No Waitlist",
      description: "Start getting services right away. No waiting or delays."
    },
    {
      image: "/lovable-uploads/b1928414-1310-41a8-865b-8fedf1cdf45b.png", 
      title: "Experienced Team",
      description: "Our certified ABA therapists are dedicated to helping your child succeed."
    },
    {
      image: "/lovable-uploads/bd23af11-31fb-4f02-941d-28c69ef98182.png",
      title: "In-Home ABA Therapy", 
      description: "Therapy delivered in your child's natural environment for maximum comfort."
    },
    {
      image: "/lovable-uploads/466e6095-5a21-4813-90cb-2e8af23ba8ac.png",
      title: "Family-Focused Approach",
      description: "We work with your family to create lasting positive changes."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Why Families Choose StarRise ABA Therapy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-32 object-cover rounded mb-4" 
              />
              <h3 className="font-bold mb-2 text-blue-900">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;