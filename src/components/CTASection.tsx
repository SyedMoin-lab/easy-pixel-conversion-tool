import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title: string;
  buttonText: string;
  backgroundColor?: string;
}

const CTASection = ({ title, buttonText, backgroundColor = "bg-coral" }: CTASectionProps) => {
  return (
    <section className={`py-8 ${backgroundColor} text-coral-foreground`}>
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button size="lg" variant="outline" className="border-coral-foreground text-coral-foreground hover:bg-coral-foreground hover:text-coral">
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;