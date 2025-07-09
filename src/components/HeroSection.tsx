const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background blob shapes */}
      <div className="absolute top-20 right-0 w-[400px] md:w-[600px] h-[300px] md:h-[400px] bg-cyan-400 rounded-full opacity-80"></div>
      <div className="absolute top-1/3 right-0 w-[300px] md:w-[500px] h-[400px] md:h-[600px] bg-pink-400 rounded-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[150px] md:h-[200px] bg-cyan-200 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 right-1/3 w-[150px] md:w-[200px] h-[150px] md:h-[200px] bg-yellow-300 rounded-full opacity-40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-blue-500">Let's Bring Out</span><br/>
              <span className="text-blue-500">the </span>
              <span className="text-yellow-500">Star</span>
              <span className="text-blue-500"> in</span><br/>
              <span className="text-blue-500">Your Child!</span>
            </h1>
            <div className="space-y-1 md:space-y-2">
              <p className="text-lg md:text-xl font-semibold text-blue-900">Compassionate, Personalized</p>
              <p className="text-lg md:text-xl font-semibold text-blue-900">ABA Therapy</p>
              <p className="text-lg md:text-xl font-semibold text-blue-900">for Children with Autism</p>
            </div>
          </div>
          
          {/* Right content - Contact Form */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative bg-pink-400 rounded-[3rem] p-6 md:p-8 max-w-sm w-full">
              <div className="text-center mb-6">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">No Waitlist.</h2>
                <p className="text-lg md:text-xl font-bold text-gray-800">Immediate Access to Care.</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="👤 Name" 
                    className="w-full px-4 py-3 rounded-lg border-0 bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="📞 Phone no" 
                    className="w-full px-4 py-3 rounded-lg border-0 bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="✉️ Email Id" 
                    className="w-full px-4 py-3 rounded-lg border-0 bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="🧒 Your child's age" 
                    className="w-full px-4 py-3 rounded-lg border-0 bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    id="agreement" 
                    className="mt-1 w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="agreement" className="text-sm text-gray-700">
                    I agree to be contacted by StarRise ABA Therapy
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-red-500 text-white py-3 px-6 rounded-full font-bold text-lg hover:bg-red-600 transition-colors"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Child image positioned at bottom center */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
          <img 
            src="/lovable-uploads/hero-child-new.png"
            alt="Happy child playing with toys" 
            className="w-full max-w-[600px] md:max-w-[800px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;