import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';

interface StorageCardProps {
  to: string;
  icon: ReactNode;
  title: string;
  description: string;
}

export const StorageCard = ({ to, icon, title, description }: StorageCardProps) => {
  return (
    <Link to={to} className="block group">
      <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-2 border-border hover:border-primary">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
          <ArrowLeft className="text-primary mt-2" size={20} />
        </div>
      </Card>
    </Link>
  );
};
