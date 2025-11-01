import { StorageCard } from '@/components/StorageCard';
import { Baby, Refrigerator, Snowflake, Package } from 'lucide-react';
import breastPumpImg from '@/assets/breast-pump.png';
import refrigeratorImg from '@/assets/refrigerator.png';
import coolerBagImg from '@/assets/cooler-bag.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 drop-shadow-sm">
            מדריך אחסון חלב אם
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            בחרי את דרך האחסון המתאימה לך וקבלי הוראות מפורטות מארגוני הבריאות המובילים בעולם
          </p>
        </div>

        <div className="mb-16 flex justify-center">
          <div className="w-64 h-64 animate-fade-in">
            <img src={breastPumpImg} alt="משאבת חלב" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <StorageCard
              to="/direct-use"
              icon={<Baby size={56} strokeWidth={1.5} />}
              title="צריכה ישירה"
              description="חלב שנשאב ומיועד לצריכה מיידית ללא אחסון"
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <StorageCard
              to="/refrigerator"
              image={refrigeratorImg}
              icon={<Refrigerator size={56} strokeWidth={1.5} />}
              title="אחסון במקרר"
              description="אחסון קצר טווח לשימוש בימים הקרובים"
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <StorageCard
              to="/cooler"
              image={coolerBagImg}
              icon={<Package size={56} strokeWidth={1.5} />}
              title="אחסון בצידנית"
              description="להעברת חלב אם בטיולים ובדרכים"
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <StorageCard
              to="/freezer"
              icon={<Snowflake size={56} strokeWidth={1.5} />}
              title="אחסון במקפיא"
              description="אחסון ארוך טווח לשמירה על מלאי חלב"
            />
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="max-w-3xl mx-auto bg-card/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-border/30">
            <p className="text-sm text-muted-foreground leading-relaxed">
              המידע באתר מבוסס על הנחיות ארגון הבריאות העולמי (WHO), מרכז בקרת מחלות אמריקאי (CDC),
              <br />
              האקדמיה לרפואת הנקה (ABM) ומשרד הבריאות הישראלי
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
