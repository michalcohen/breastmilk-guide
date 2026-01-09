import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Sparkles, Clock, AlertTriangle, Droplets, Wind, Baby, ListCheck } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import { useGuideline } from '@/contexts/GuidelineContext';
import { guidelines } from '@/data/guidelines';

const Sterilization = () => {
  type MethodStatus = 'allowed' | 'forbidden' | 'unknown' | 'unrecomanded';

  const sterilizationMethods = ['הרתחה במים', 'מדיח', 'מעקר חשמלי (קיטור)', 'שקיות סטריליזציה למיקרוגל'];

  const pumps: { name: string; manufacturer: string; statuses: MethodStatus[] }[] = [
    {
      name: 'Mya Joy / Finesse',
      manufacturer: 'Ameda',
      statuses: ['allowed', 'allowed', 'unknown', 'unknown'],
    },
    {
      name: 'Annabella',
      manufacturer: 'Annabella',
      statuses: ['allowed', 'allowed', 'allowed', 'forbidden'],
    },
    {
      name: 'Alyssa / Calypso / Bellis',
      manufacturer: 'Ardo',
      statuses: ['allowed', 'allowed', 'unknown', 'allowed'],
    },
    {
      name: 'Pump Pro / New / Soft / Pump up',
      manufacturer: 'Biamba',
      statuses: ['allowed', 'allowed', 'unknown', 'forbidden'],
    },
    {
      name: 'Pro II/III',
      manufacturer: 'Clinicare',
      statuses: ['allowed', 'unknown', 'unknown', 'unrecomanded'],
    },
    {
      name: 'Free Style / Swing Maxi',
      manufacturer: 'Medela',
      statuses: ['allowed', 'allowed', 'unknown', 'allowed'],
    },
  ];

  const renderStatus = (status: MethodStatus) => {
    if (status === 'allowed') {
      return <span className="text-emerald-600 font-bold">✔</span>;
    }
    if (status === 'forbidden') {
      return <span className="text-destructive font-bold">✖</span>;
    }
    if (status === 'unrecomanded'){
      return <span className="text-destructive font-bold">〆</span>;
    }
    return null;
  };

  const { source } = useGuideline();
  const data = guidelines[source];
  return (
    <PageLayout title="הנחיות סטריליזציה">
      <Card className="p-6 bg-card">
        <div className="space-y-6 animate-fade-in">

        <div className="flex items-start gap-4">
            <ListCheck className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">הנחיות כלליות</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש לשטוף ידיים היטב במים ובסבון לפי כל מגע עם המשאבה וחלקיה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש לשטוף במים את חלקי המשאבה מיד לאחר כל שימוש בה כדי למנוע ייבוש של החלב באזורים קשים לניקוי</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש לוודא ייבוש מלא של החלקים לפני ההרכבה, ביחוד החלקים הפונים כלפי המנוע (רטיבות במנוע עלולה לשבש את פעולתו).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש להשתמש בציוד ניקיון ייעודי כמו מנקה בקבוקים ייעודי או ספוג ייעודי. בכל מקרה אין להשתמש בציוד ניקוי שיש עליו שאריות מזון אחרות.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>מומלץ להשתמש בקערה לניקוי הציוד כך שלא יהיה זיהום משני משאריות מזון בכיור או על השיש</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Baby className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">מתי נדרשת סטריליזציה?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span> יש לבצע סטריליזציה לכל הציוד עד גיל <span className="font-bold text-primary">{data.sterilizationAge}</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>לאחר גיל <span className="font-bold text-primary">{data.sterilizationAge}</span>, ניתן להסתפק בשטיפה יסודית במים חמים וסבון</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>במקרים מסוימים (תינוק פג, מערכת חיסון מוחלשת) ייתכן ויש להמשיך סטריליזציה מעבר לגיל <span className="font-bold text-primary">{data.sterilizationAge}</span></span>
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
                  <span>בקבוקים, פטמות בקבוקים, מוצצים ופטמות סיליקון</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>מיכלי אחסון חלב</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>חלקי משאבה הבאים במגע עם החלב (משפכים, שסתומים, דיאפרגמות)</span>
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
                  <span>צינורית המשאבה (לא באה במגע עם החלב, וכניסה של מים שנותרו בצינורית למנוע עלולה לשבש את פעולתו)</span>
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
                  <h4 className="font-semibold mb-2">הרתחה במים</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• לשטוף את הציוד היטב לפני הסטריליזציה במים ובסבון</li>
                    <li>• להניח את הציוד בסיר מים רותחים</li>
                    <li>• להרתיח לפחות 5 דקות, תוך כדי ערבוב</li>
                    <li>• להוציא עם מלקחיים נקיים ולהניח לייבוש</li>
                  </ul>
                </div>

                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">מדיח</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• להניח במגש המדיח העליון (שימו לב להניח כך שלא יהיה לחץ על חלקי הסיליקון, למשל את השסתום לא להניח על פין)</li>
                    <li>• להפעיל בתכנית של 65 מעלות ומעלה</li>
                    <li>• אין צורך בניקוי מקדים</li>
                  </ul>
                </div>
                
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">מעקר חשמלי (קיטור)</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• לפעול לפי הוראות היצרן</li>
                    <li>• בדרך כלל 8-12 דקות</li>
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
            <ListCheck className="text-primary mt-1" size={24} />
            <div className="w-full">
              <h3 className="font-bold text-lg mb-2">טבלת התאמה לפי סוג המשאבה ושיטת הסטריליזציה</h3>
              <p className="text-sm text-muted-foreground mb-3">
                הסימונים בטבלה מתייחסים להנחיות היצרן עבור חלקי המשאבה שבאים במגע עם החלב. תמיד יש לוודא בהתאם
                להוראות השימוש של הדגם הספציפי.
              </p>
              <div className="bg-secondary/10 p-3 rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right w-48">יצרן ומשאבה</TableHead>
                      {sterilizationMethods.map((method) => (
                        <TableHead key={method} className="text-center">
                          {method}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pumps.map((pump) => (
                      <TableRow key={`${pump.manufacturer}-${pump.name}`}>
                        <TableCell className="font-medium text-right whitespace-nowrap">
                          {pump.manufacturer} – {pump.name}
                        </TableCell>
                        {pump.statuses.map((status, index) => (
                          <TableCell key={`${pump.manufacturer}-${pump.name}-${index}`} className="text-center">
                            {renderStatus(status)}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableCaption className="text-xs">
                    ✔ = מותר לפי היצרן | ✖ = אסור לפי היצרן | 〆 לא מומלץ לפי היצרן | תא ריק = אין מידע מפורש בהוראות היצרן
                  </TableCaption>
                </Table>
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
                  <span>להניח לייבוש על מגבת נקייה או מתקן ייבוש ייעודי. ניתן לייבש גם עם נייר מגבת שאוחסן באזור מוגן מאבק</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>לא לייבש עם מגבת מטבח בשימוש כללי - עלולה להעביר חיידקים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>לאחסן במקום נקי, יבש ומוגן מאבק</span>
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
                  <span>{' '}
                  <span className="font-bold text-primary">{data.sterilizationFrequency}</span> עד גיל <span className="font-bold text-primary">{data.sterilizationAge}</span> </span>
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
