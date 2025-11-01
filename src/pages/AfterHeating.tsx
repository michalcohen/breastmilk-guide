import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { useGuideline } from '@/contexts/GuidelineContext';
import { guidelines } from '@/data/guidelines';
import { Flame, Thermometer, AlertTriangle, Clock } from 'lucide-react';

const AfterHeating = () => {
  const { source } = useGuideline();
  const data = guidelines[source];

  return (
    <PageLayout title="צריכה לאחר חימום">
      <Card className="p-6 bg-card">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Flame className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">כיצד לחמם חלב אם</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>העמידי את הבקבוק במים חמים (לא רותחים)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ניתן להשתמש במחמם בקבוקים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>הסיבי בעדינות כדי לערבב שכבות שומן</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>בדקי את הטמפרטורה על פרק כף היד לפני ההאכלה</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertTriangle className="text-destructive mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2 text-destructive">אל תעשי זאת!</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>אל תחממי במיקרוגל - עלול להרוס חומרים מזינים ולגרום לכוויות</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>אל תרתיחי את החלב - פוגע בתכונות התזונתיות</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>אל תחממי חלב שכבר התחמם פעם</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="text-accent mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">משך זמן שימוש</h3>
              <p className="text-muted-foreground">
                חלב שחומם ולא נצרך יכול להישאר בטמפרטורת החדר למשך{' '}
                <span className="font-bold text-primary">{data.afterHeating}</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Thermometer className="text-secondary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">טמפרטורה מומלצת</h3>
              <p className="text-muted-foreground">
                טמפרטורת הגוף (37°C) היא הטמפרטורה האידיאלית. החלב יכול להיות מעט פושר אבל לא חם.
              </p>
            </div>
          </div>

          <div className="bg-accent/20 p-4 rounded-lg border border-accent/30">
            <p className="text-sm text-foreground">
              <span className="font-bold">שימי לב:</span> חלב שהתינוק התחיל לשתות ממנו אסור לשימוש חוזר.
              יש לזרוק שאריות לאחר ההאכלה.
            </p>
          </div>
        </div>
      </Card>
    </PageLayout>
  );
};

export default AfterHeating;
