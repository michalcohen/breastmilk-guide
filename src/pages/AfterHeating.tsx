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
        <div key={source} className="space-y-6 animate-fade-in">
          <div className="flex items-start gap-4">
            <Flame className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">כיצד לחמם חלב אם</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ניתן להעמיד את הבקבוק במים חמימים (לא רותחים), או במחמם בקבוקים ייעודי</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש לערבב את החלב בבקבוק בתנועות סיבוביות עדינות כדי להמיס את שכבות השומן מבלי להכניס בועות אוויר רבות לחלב</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש לבדוק את הטמפרטורה על פרק כף היד לפני ההאכלה</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertTriangle className="text-destructive mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2 text-destructive">אזהרה!</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>אסור לחמם במיקרוגל - הדבר עלול להרוס חומרים מזינים ולגרום לכוויות</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>אסור להרתיח חלב אם - הדבר פוגע בתכונות התזונתיות של החלב</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>אסור לחמם בשנית חלב שכבר חומם בעבר</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="text-accent mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">משך זמן שימוש</h3>
              <p className="text-muted-foreground">
                חלב שחומם ולא נצרך יכול להישאר בטמפרטורת החדר{' '}
                <span className="font-bold text-primary">{data.afterHeating}</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Thermometer className="text-secondary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">טמפרטורת הגשה</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>טמפרטורת הגוף (37°C) היא טמפרטורת החימום האידיאלית. החלב יכול להיות פושר או חמים אבל לא חם.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>ניתן להגיש את החלב גם קר, הישר מהמקרר. ישנם ילדים שאף מעדיפים אותו כך.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-accent/20 p-4 rounded-lg border border-accent/30">
            <p className="text-sm text-foreground">
              <span className="font-bold">שימי לב:</span> חלב שהתינוק התחיל לשתות ממנו אסור לשימוש חוזר.
              יש לזרוק שאריות לאחר ההאכלה. ניתן להמשיך להאכיל מהבקבוק {' '}
              <span className="font-bold text-primary">{data.leftOvers}</span>
            </p>
          </div>
        </div>
      </Card>
    </PageLayout>
  );
};

export default AfterHeating;
