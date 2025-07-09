interface CTASectionProps {
  title: string;
  buttonText: string;
  backgroundColor?: string;
}

const CTASection = ({ title, buttonText, backgroundColor = "bg-red-500" }: CTASectionProps) => {
  return (
    <section className={`py-8 ${backgroundColor} text-white`}>
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="bg-white text-red-500 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default CTASection;