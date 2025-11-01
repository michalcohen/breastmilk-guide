import { StorageCard } from '@/components/StorageCard';
import { BreastPump } from '@/components/BreastPump';
import { Baby, Refrigerator, Snowflake, Package } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            מדריך אחסון חלב אם
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            בחרי את דרך האחסון המתאימה לך וקבלי הוראות מפורטות מארגוני הבריאות המובילים בעולם
          </p>
        </div>

        <div className="mb-12">
          <BreastPump />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <StorageCard
            to="/direct-use"
            icon={<Baby size={48} />}
            title="צריכה ישירה"
            description="חלב שנשאב ומיועד לצריכה מיידית ללא אחסון"
          />
          
          <StorageCard
            to="/refrigerator"
            icon={<Refrigerator size={48} />}
            title="אחסון במקרר"
            description="אחסון קצר טווח לשימוש בימים הקרובים"
          />
          
          <StorageCard
            to="/cooler"
            icon={<Package size={48} />}
            title="אחסון בצידנית"
            description="להעברת חלב אם בטיולים ובדרכים"
          />
          
          <StorageCard
            to="/freezer"
            icon={<Snowflake size={48} />}
            title="אחסון במקפיא"
            description="אחסון ארוך טווח לשמירה על מלאי חלב"
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            המידע באתר מבוסס על הנחיות ארגון הבריאות העולמי (WHO), מרכז בקרת מחלות אמריקאי (CDC),
            <br />
            האקדמיה לרפואת הנקה (ABM) ומשרד הבריאות הישראלי
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
