import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { useGuideline } from '@/contexts/GuidelineContext';
import { guidelines } from '@/data/guidelines';
import { Clock, Thermometer, AlertCircle } from 'lucide-react';

const DirectUse = () => {
  const { source } = useGuideline();
  const data = guidelines[source];

  return (
    <PageLayout title="צריכה ישירה לאחר שאיבה">
      <Card className="p-6 bg-card">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Thermometer className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">טמפרטורת החדר</h3>
              <p className="text-muted-foreground">
                חלב אם שנשאב יכול להישאר בטמפרטורת החדר {' '}
                  <span className="font-bold text-primary">({data.roomTemp})</span>{' '}
                <span className="font-bold text-primary">{data.roomTempDuration}</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="text-secondary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">זמן צריכה מומלץ</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  לצריכה אופטימלית, מומלץ להאכיל את התינוק בחלב האם מיד לאחר השאיבה או בהקדם האפשרי.
                חלב טרי שומר על כל התכונות התזונתיות והאימונולוגיות שלו.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  יש לזרוק שאריות חלב שנותרו בבקבוק <span className="font-bold text-primary">{data.leftOvers}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertCircle className="text-accent mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">הנחיות חשובות</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש לוודא שהבקבוק או המיכל נקיים ומעוקרים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש לסמן את תאריך השאיבה על המיכל</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>אם החלב לא נצרך תוך הזמן המומלץ, יש להעביר למקרר או למקפיא בהקדם</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>אין להחזיר למקרר חלב שהתינוק כבר התחיל לשתות ממנו</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
            <p className="text-sm text-foreground">
              <span className="font-bold">לתשומת לבך:</span> ההמלצות משתנות בין ארגוני הבריאות השונים.
              ניתן לבחור את הארגון המועדף עליך מהכפתורים למעלה.
            </p>
          </div>
        </div>
      </Card>
    </PageLayout>
  );
};

export default DirectUse;
