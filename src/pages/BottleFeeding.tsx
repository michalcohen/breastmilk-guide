import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { useGuideline } from '@/contexts/GuidelineContext';
import { guidelines } from '@/data/guidelines';
import { Flame, Thermometer, AlertTriangle, Clock, PillBottleIcon, Option, List, Ear, OptionIcon, InfoIcon, MedalIcon, TestTube } from 'lucide-react';

const BottleFeeding = () => {
  const { source } = useGuideline();
  const data = guidelines[source];

  return (
    <PageLayout title="האכלה קשובה">
      <Card className="p-6 bg-card">
        <div key={source} className="space-y-6 animate-fade-in">
          <div className="flex items-start gap-4">
            <Option className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">אפשרויות האכלה</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>בקבוק חלב</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>כפית</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>כוסית פתוחה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>צינורית</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>מזרק</span>
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
                  <span>יש להשתמש רק בכלים המתאימים לשימוש במזון ושקיבלו תו תקן ישראלי</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>עד גיל חצי שנה, יש לבצע סטריליזציה גם למיכלי החלב ולבקבוקים (לא מבצעים סטריליזציה לצינורית האכלה, אותה יש להחליף כאחת לשבוע)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>אין להאכיל תינוק בשכיבה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>יש להשגיח על התינוק בכל משך ההאכלה</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Ear className="text-accent mt-1" size={24} />
            <div className="w-full">
              <h3 className="font-bold text-lg mb-2">האכלה קשובה מבקבוק</h3>
              
              <div className="mb-4 rounded-xl overflow-hidden shadow-lg">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/U0vFcEe3CF4"
                    title="האכלה קשובה מבקבוק"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>התינוק ישב במאונך </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>הבקבוק יהיה מקביל לרצפה, ופיטמת הבקבוק תהיה מלאה בחלב עד חציה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>יש להציע לתינוק הפסקות יזומות</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>פטמת הבקבוק תהיה הקטנה ביותר האפשרית</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <TestTube className="text-secondary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">צורות האכלה חלופיות</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>ישנם מקרים בהם נעדיף להימנע מהצגה של בקבוק (מתן קולוסטרום, גיל צעיר, היסטוריה של העדפת בקבוק). במקרה זה ניתן להשתמש בשיטות האכלה חלופיות לבקבוק</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>כפית ומזרק הן חלופות טובות עבור מתן כמויות חלב קטנות (כדוגמת קולוסטרום)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>צינורית מעודדת התפתחות תפקודי פה ותורמת לייצור החלב</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>כוסית פתוחה (או במידת הצורך כוס אימון) זוהי חלופה טובה במקרה של סרבנות בקבוקים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>בכל מקרה של תיסוף חלב, מומלץ להיעזר ביועצת הנקה</span>
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

export default BottleFeeding;
