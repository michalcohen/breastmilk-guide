import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Sparkles, Clock, AlertTriangle, Droplets, Wind, Baby } from 'lucide-react';

const Sterilization = () => {
  return (
    <PageLayout title="הנחיות סטריליזציה">
      <Card className="p-6 bg-card">
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-start gap-4">
            <Baby className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">מתי נדרשת סטריליזציה?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>עד גיל חצי שנה (6 חודשים) יש לבצע סטריליזציה לכל הציוד</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>לאחר גיל חצי שנה, ניתן להסתפק בשטיפה יסודית במים חמים וסבון</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>במקרים מסוימים (תינוק פג, מערכת חיסון מוחלשת) ייתכן ויש להמשיך סטריליזציה מעבר לגיל חצי שנה</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Sparkles className="text-accent mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">ציוד הדורש סטריליזציה</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>בקבוקים ופטמות</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>מיכלי אחסון חלב</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>חלקי משאבה הבאים במגע עם החלב (משפכים, שסתומים, מכסים)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>מוצצים</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertTriangle className="text-destructive mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2 text-destructive">אין לבצע סטריליזציה ל:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>צינוריות האכלה - יש להחליף אחת לשבוע</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>צינורית המשאבה (לא באה במגע עם החלב)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>שקיות אחסון חד פעמיות - הן סטריליות מראש</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Droplets className="text-secondary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">שיטות סטריליזציה</h3>
              <div className="space-y-4">
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">רתיחה במים</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• לשטוף את הציוד היטב לפני הסטריליזציה</li>
                    <li>• להניח את הציוד בסיר מים רותחים</li>
                    <li>• להרתיח 5-10 דקות</li>
                    <li>• להוציא עם מלקחיים נקיים ולהניח לייבוש</li>
                  </ul>
                </div>
                
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">מעקר חשמלי (קיטור)</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• לפעול לפי הוראות היצרן</li>
                    <li>• בדרך כלל 8-12 דקות</li>
                    <li>• יעיל וקל לשימוש</li>
                  </ul>
                </div>

                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">שקיות סטריליזציה למיקרוגל</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• לפעול לפי הוראות היצרן</li>
                    <li>• בדרך כלל 3-5 דקות</li>
                    <li>• נוחות לשימוש בנסיעות</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Wind className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">ייבוש ואחסון</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>להניח לייבוש על מגבת נקייה או מתקן ייבוש ייעודי</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>לא לייבש עם מגבת - עלולה להעביר חיידקים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>לאחסן במקום נקי ויבש</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>להרכיב את הבקבוקים רק לפני השימוש</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="text-accent mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">תדירות הסטריליזציה</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>לפני השימוש הראשון בציוד חדש</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>לאחר כל שימוש (עד גיל חצי שנה)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>אם הציוד נפל על הרצפה או נחשף לזיהום</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-accent/20 p-4 rounded-lg border border-accent/30">
            <p className="text-sm text-foreground">
              <span className="font-bold">טיפ:</span> לפני כל סטריליזציה, יש לשטוף את הציוד היטב במים חמים וסבון ולהסיר שאריות חלב. סטריליזציה לא תהיה יעילה אם הציוד לא נשטף כראוי לפני כן.
            </p>
          </div>
        </div>
      </Card>
    </PageLayout>
  );
};

export default Sterilization;
