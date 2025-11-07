import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { useGuideline } from '@/contexts/GuidelineContext';
import { guidelines } from '@/data/guidelines';
import { StorageCard } from '@/components/StorageCard';
import { Thermometer, Droplets, AlertCircle, Flame } from 'lucide-react';

const FastThaw = () => {
  const { source } = useGuideline();
  const data = guidelines[source];

  return (
    <PageLayout title="הפשרה מהירה וצריכה מיידית">
      <Card className="p-6 bg-card">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Droplets className="text-secondary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">הפשרה במים</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>להחזיק את השקית או הבקבוק תחת מים קרים זורמים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>להעלות בהדרגה את טמפרטורת המים לפושרים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש לוודא שהמים לא חמים מדי - פושרים בלבד</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ניתן גם להניח את השקית בקערית עם מים פושרים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>תהליך ההפשרה יארך כ-10-20 דקות</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertCircle className="text-destructive mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">הנחיות חשובות</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>הפשרה במיקרוגל הורסת רכיבים חיוניים בחלב ועלולה לגרום לכוויות</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>אסור להשתמש במים רותחים או חמים מאוד</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>חלב מופשר אסור להקפאה חוזרת</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>חלב שהופשר בשיטה המהירה הוא למטרת צריכה מיידית ואין לאחסנו במקרר (גם אם לא נאכל)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Flame className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">לאחר ההפשרה</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  ניתן לחמם את החלב בעדינות לטמפרטורת גוף. יש לצרוך את החלב <span className="font-bold text-primary">{data.afterHeating}</span> לכל היותר.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ניתן להציע את החלב גם קר מהמקרר. יש תינוקות שאף מעדיפים לצרוך אותו כך</span>
                </li>
                
              </ul>
              
            </div>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
            <p className="text-sm text-foreground">
              <span className="font-bold">שימי לב:</span> הפשרה מהירה מתאימה לשימוש מיידי. להפשרה
              מתוכננת, עדיפה הפשרה איטית במקרר.
            </p>
          </div>
        </div>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">השלב הבא</h2>
        <div className="max-w-md mx-auto">
          <StorageCard
            to="/after-heating"
            icon={<Thermometer size={40} />}
            title="צריכה לאחר חימום"
            description="הוראות לחימום והגשת החלב המופשר"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default FastThaw;
