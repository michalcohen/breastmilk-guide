import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';

interface StorageCardProps {
  to: string;
  icon?: ReactNode;
  title: string;
  description: string;
  image?: string;
}

export const StorageCard = ({ to, icon, title, description, image }: StorageCardProps) => {
  return (
    <Link to={to} className="block group transition-all duration-300 hover:scale-105 hover:-translate-y-1">
      <Card className="p-8 h-full bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/50 hover:shadow-[0_12px_40px_-8px_hsl(var(--primary)_/_0.25)]">
        <div className="flex flex-col items-center text-center gap-4">
          {image ? (
            <div className="w-32 h-32 flex items-center justify-center mb-2">
              <img src={image} alt={title} className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            </div>
          ) : icon ? (
            <div className="text-primary group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
              {icon}
            </div>
          ) : null}
          <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground text-base leading-relaxed">{description}</p>
          <ArrowLeft className="text-primary mt-2 group-hover:translate-x-1 transition-transform" size={24} />
        </div>
      </Card>
    </Link>
  );
};
