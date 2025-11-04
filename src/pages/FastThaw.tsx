import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { useGuideline } from '@/contexts/GuidelineContext';
import { guidelines } from '@/data/guidelines';
import { Zap, Droplets, AlertCircle, Flame } from 'lucide-react';

const FastThaw = () => {
  const { source } = useGuideline();
  const data = guidelines[source];

  return (
    <PageLayout title="הפשרה מהירה וצריכה מיידית">
      <Card className="p-6 bg-card">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Zap className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">שיטות הפשרה מהירה</h3>
              <p className="text-muted-foreground mb-3">
                כאשר יש צורך בחלב במהירות, ניתן להפשיר בשיטה מהירה:
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Droplets className="text-secondary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">הפשרה במים</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>החזיקי את השקית או הבקבוק תחת מים קרים זורמים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>העלי בהדרגה את טמפרטורת המים לפושרים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ודאי שהמים לא חמים מדי - פושרים בלבד</span>
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
                  <span>אל תשתמשי במים רותחים או חמים מאוד</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>חלב מופשר אסור להקפאה חוזרת</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Flame className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">לאחר ההפשרה</h3>
              <p className="text-muted-foreground">
                ניתן לחמם את החלב בעדינות לטמפרטורת גוף. יש לצרוך את החלב <span className="font-bold text-primary">{data.afterHeating}</span> לכל היותר.
              </p>
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
    </PageLayout>
  );
};

export default FastThaw;
