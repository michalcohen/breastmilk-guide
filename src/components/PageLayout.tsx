import { ReactNode } from 'react';
import { GuidelineSelector } from './GuidelineSelector';
import { Button } from './ui/button';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  showSelector?: boolean;
}

export const PageLayout = ({ children, title, showSelector = true }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h1>
          <Link to="/">
            <Button variant="outline" size="icon">
              <Home className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        
        {showSelector && <GuidelineSelector />}
        
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};
