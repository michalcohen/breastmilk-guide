import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { StorageCard } from '@/components/StorageCard';
import { useGuideline } from '@/contexts/GuidelineContext';
import { guidelines } from '@/data/guidelines';
import { Thermometer, Calendar, AlertCircle, Zap, Snowflake as SnowflakeIcon } from 'lucide-react';

const Freezer = () => {
  const { source } = useGuideline();
  const data = guidelines[source];

  return (
    <PageLayout title="אחסון במקפיא">
      <Card className="p-6 bg-card">
        <div key={source} className="space-y-6 animate-fade-in">
          <div className="flex items-start gap-4">
            <Thermometer className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">טמפרטורה ומשך זמן</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  מקפיא רגיל מומלץ לשימוש: <span className="font-bold text-primary">{data.freezerBest}</span>
                </p>
                <p>
                  מקפיא רגיל ניתן לשימוש: <span className="font-bold text-primary">{data.freezerAcceptable}</span>
                </p>
                <p>
                  מקפיא עמוק ניתן לשימוש עד: <span className="font-bold text-primary">{data.deepFreezer}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Calendar className="text-secondary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">הנחיות הקפאה</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש לאחסן בחלק האחורי של המקפיא (לא בדלת)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש להשתמש בשקיות ייעודיות להקפאת חלב אם</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>מומלץ להשאיר מקום בשקית לפני אטימתה - החלב מתפשט בהקפאה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש לסמן בבירור תאריך ונפח שאיבה</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertCircle className="text-accent mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">טיפים חשובים</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש להשתמש קודם בחלב הישן ביותר</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>חלב מופשר אסור להקפיא שנית</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>מומלץ להקפיא במנות קטנות (60-120 מ"ל)  לנוחות ולמניעת בזבוז</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>מומלץ לא להקפיא חלב שנועד לצריכה בימים הקרובים. לחלב טרי תכונות בריאותיות עדיפות על פני חלב קפוא ומופשר</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>שיטת ההפשרה המומלצת היא הפשרה איטית במקרר</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">אפשרויות הפשרה</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   
          <StorageCard
            to="/slow-thaw"
            icon={<SnowflakeIcon size={40} />}
            title="הפשרה איטית במקרר"
            description="הדרך המומלצת - הפשרה הדרגתית"
          />
          <StorageCard
            to="/fast-thaw"
            icon={<Zap size={40} />}
            title="הפשרה מהירה"
            description="לצריכה מיידית - במים פושרים"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Freezer;
