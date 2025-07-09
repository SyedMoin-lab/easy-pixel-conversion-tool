const ContactForm = () => {
  return (
    <div className="absolute top-8 right-8 bg-white rounded-3xl shadow-xl max-w-sm z-20 overflow-hidden">
      {/* Header with cyan background */}
      <div className="bg-cyan-400 text-black px-6 py-4 text-center">
        <h3 className="font-bold text-base">Let's Get Started! <span className="bg-yellow-400 px-2 py-1 rounded text-sm ml-2">CONTACT US</span></h3>
      </div>
      
      {/* Pink section */}
      <div className="bg-pink-300 text-center py-4 px-6">
        <p className="font-semibold text-black">No Waitlist.</p>
        <p className="font-semibold text-black">Immediate Access to Care.</p>
      </div>
      
      {/* Form section */}
      <div className="p-6 space-y-4">
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">👤</span>
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">📞</span>
          <input 
            type="text" 
            placeholder="Phone no" 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">✉️</span>
          <input 
            type="email" 
            placeholder="Email Id" 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🎂</span>
          <input 
            type="text" 
            placeholder="Your child's age" 
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="flex items-start space-x-2">
          <input type="checkbox" className="mt-1" />
          <label className="text-sm text-gray-600">I agree to be contacted by StarRise ABA Therapy</label>
        </div>
        
        <button className="w-full bg-red-500 text-white py-3 rounded-full font-bold hover:bg-red-600 transition-colors">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default ContactForm;