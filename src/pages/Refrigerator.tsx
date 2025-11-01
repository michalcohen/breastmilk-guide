import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { StorageCard } from '@/components/StorageCard';
import { useGuideline } from '@/contexts/GuidelineContext';
import { guidelines } from '@/data/guidelines';
import { Thermometer, Calendar, AlertCircle, Flame, Snowflake } from 'lucide-react';

const Refrigerator = () => {
  const { source } = useGuideline();
  const data = guidelines[source];

  return (
    <PageLayout title="אחסון במקרר">
      <Card className="p-6 bg-card">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Thermometer className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">טמפרטורה ומשך זמן</h3>
              <p className="text-muted-foreground">
                חלב אם ניתן לאחסון במקרר בטמפרטורה של{' '}
                <span className="font-bold text-primary">{data.refrigerator}</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Calendar className="text-secondary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">הנחיות אחסון</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>אחסני את החלב בחלק האחורי של המקרר (לא בדלת)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>סמני כל בקבוק עם תאריך ושעת השאיבה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>השתמשי קודם בחלב הישן ביותר</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ניתן לאחסן במיכלים סגורים היטב או בשקיות אחסון מיוחדות</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertCircle className="text-accent mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">שימו לב</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>אל תערבבי חלב חם עם חלב קר - קרי את החלב החדש לפני הוספה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>חלב מופשר שאוחסן במקרר אסור להקפיא שוב</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">מה הלאה?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StorageCard
            to="/freezer"
            icon={<Snowflake size={40} />}
            title="העברה למקפיא"
            description="לאחסון ארוך טווח"
          />
          
          <StorageCard
            to="/after-heating"
            icon={<Flame size={40} />}
            title="צריכה לאחר חימום"
            description="כיצד לחמם ולהגיש חלב ממקרר"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Refrigerator;
