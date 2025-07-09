import ContactForm from './ContactForm';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background blob shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-cyan-400 rounded-full blur-3xl opacity-60 -translate-y-20 translate-x-40"></div>
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-pink-300 rounded-full blur-3xl opacity-70 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-cyan-200 rounded-full blur-2xl opacity-50"></div>
      <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-yellow-300 rounded-full blur-2xl opacity-40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-blue-500">Let's Bring Out</span><br/>
              <span className="text-blue-500">the </span>
              <span className="text-yellow-500">Star</span>
              <span className="text-blue-500"> in</span><br/>
              <span className="text-blue-500">Your Child!</span>
            </h1>
            <div className="space-y-2">
              <p className="text-xl font-semibold text-blue-900">Compassionate, Personalized</p>
              <p className="text-xl font-semibold text-blue-900">ABA Therapy</p>
              <p className="text-xl font-semibold text-blue-900">for Children with Autism</p>
            </div>
          </div>
          
          {/* Right content - Child image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/1c215e3c-706c-43bf-845e-5ed5a16dcadb.png"
                alt="Happy child playing with toys" 
                className="w-full max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      <ContactForm />
    </section>
  );
};

export default HeroSection;