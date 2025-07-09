const Header = () => {
  return (
    <header className="bg-white py-4 px-6 relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Star logo with multiple colors */}
          <div className="relative w-8 h-8">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path d="M12 2L14 8L20 8L15.5 12L17 18L12 15L7 18L8.5 12L4 8L10 8Z" fill="#FF6B6B" />
              <path d="M12 2L10 8L4 8L8.5 12L7 18L12 15L17 18L15.5 12L20 8L14 8Z" fill="#4ECDC4" />
              <path d="M12 2L12 15" stroke="#FFE66D" strokeWidth="1.5" />
            </svg>
          </div>
          <div>
            <span className="text-2xl font-bold text-red-500">StarRise</span>
            <div className="text-sm text-gray-500 -mt-1">ABA Therapy</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;