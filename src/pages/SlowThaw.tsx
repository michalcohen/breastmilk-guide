import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { StorageCard } from '@/components/StorageCard';
import { useGuideline } from '@/contexts/GuidelineContext';
import { guidelines } from '@/data/guidelines';
import { Snowflake, Clock, AlertCircle, Thermometer } from 'lucide-react';

const SlowThaw = () => {
  const { source } = useGuideline();
  const data = guidelines[source];

  return (
    <PageLayout title="הפשרה איטית במקרר">
      <Card className="p-6 bg-card">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Snowflake className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">השיטה המומלצת</h3>
              <p className="text-muted-foreground">
                הפשרה איטית במקרר היא השיטה הבטוחה והמומלצת ביותר לשמירה על איכות החלב
                ועל כל התכונות התזונתיות והאימונולוגיות שלו.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="text-secondary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">תהליך ההפשרה</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>העבירי את החלב מהמקפיא למקרר</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>אחסני בחלק האחורי של המקרר (לא בדלת)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>תהליך ההפשרה יארך כ-12-24 שעות</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>תכנני מראש - העבירי למקרר בערב לפני יום השימוש</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Thermometer className="text-accent mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">לאחר ההפשרה</h3>
              <p className="text-muted-foreground mb-3">
                משך זמן שימוש: {data.afterThawingRefrigerator} מהפשרה מלאה (לא מרגע ההעברה למקרר)
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ניתן לחמם את החלב בעדינות לפני ההאכלה</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>ערבבי בעדינות את החלב כדי לשחרר שכבות שומן שהתקשו</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertCircle className="text-destructive mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">חשוב לזכור</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>חלב מופשר אסור להקפאה חוזרת</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>אם לא השתמשת בחלב תוך 24 שעות - יש לזרוק אותו</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">המשך לשלב הבא</h2>
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

export default SlowThaw;
