const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <p className="text-lg mb-4">
            StarRise ABA Therapy proudly provides in-home ABA therapy to families in North Carolina and nearby communities. Wherever you are, we're here to help your child shine.
          </p>
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M12 2L14 8L20 8L15.5 12L17 18L12 15L7 18L8.5 12L4 8L10 8Z" fill="#FF6B6B" />
                <path d="M12 2L10 8L4 8L8.5 12L7 18L12 15L17 18L15.5 12L20 8L14 8Z" fill="#4ECDC4" />
                <path d="M12 2L12 15" stroke="#FFE66D" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="text-2xl font-bold">StarRise ABA Therapy</span>
          </div>
          <p className="text-center text-blue-300">
            StarRise ABA Therapy is dedicated to helping your child shine, grow, and share through compassionate, personalized care. Contact us today to start their journey towards a brighter future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;