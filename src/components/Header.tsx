import { Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-background py-4 px-6 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Star className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">StarRise</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>(555) 123-4567</span>
          </div>
          <Button variant="outline">Contact Us</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;