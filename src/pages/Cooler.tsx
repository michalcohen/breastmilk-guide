import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { StorageCard } from '@/components/StorageCard';
import { useGuideline } from '@/contexts/GuidelineContext';
import { guidelines } from '@/data/guidelines';
import { Thermometer, Clock, AlertCircle, Flame, Refrigerator, Snowflake } from 'lucide-react';

const Cooler = () => {
  const { source } = useGuideline();
  const data = guidelines[source];

  return (
    <PageLayout title="אחסון בצידנית">
      <Card className="p-6 bg-card">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Thermometer className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">טמפרטורה ומשך זמן</h3>
              <p className="text-muted-foreground">
                חלב אם בצידנית עם קרח:{' '}
                <span className="font-bold text-primary">{data.cooler}</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="text-secondary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">הנחיות שימוש</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש להשתמש בצידנית מבודדת עם קרחומים קפואים</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש לוודא שהקרח נשאר קפוא במהלך כל תקופת האחסון</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש למזער פתיחה וסגירה של הצידנית</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>מומלץ להימנע מחשיפה ישירה לשמש</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש להקפיד שהקרחום יהיה צמוד למיכל החלב</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <AlertCircle className="text-accent mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">חשוב לדעת</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש להעביר את החלב למקרר או למקפיא כמה שיותר מוקדם</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>אם הקרח הופשר לחלוטין, יש להתייחס לחלב כאל חלב בטמפרטורת החדר</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>יש לסמן את זמן השאיבה על כל מיכל</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">מה הלאה?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StorageCard
            to="/after-heating"
            icon={<Flame size={40} />}
            title="צריכה לאחר חימום"
            description="חימום חלב מהצידנית"
          />
          
          <StorageCard
            to="/refrigerator"
            icon={<Refrigerator size={40} />}
            title="העברה למקרר"
            description="אחסון קצר טווח"
          />
          
          <StorageCard
            to="/freezer"
            icon={<Snowflake size={40} />}
            title="העברה למקפיא"
            description="אחסון ארוך טווח"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Cooler;
