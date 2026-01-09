import { GuidelineSource } from '@/contexts/GuidelineContext';

export interface StorageGuideline {
  roomTemp?: string;
  roomTempDuration?: string;
  refrigerator?: string;
  refrigeratorBeforeFreezing?: string;
  freezerBest?: string;
  freezerAcceptable?: string;
  deepFreezer?: string;
  cooler?: string;
  thawing?: string;
  afterThawingCountertop?: string;
  afterThawingRefrigerator?: string;
  afterHeating?: string;
  container?: string;
  leftOvers?: string;
  sterilizationAge?: string;
  sterilizationFrequency?: string;
}

export const guidelines: Record<GuidelineSource, StorageGuideline> = {
  WHO: {
    roomTemp: 'עד 29°C',
    roomTempDuration: 'עד 4 שעות',
    refrigerator: '4°C - מומלץ עד 4 ימים, אפשרי עד 8',
    refrigeratorBeforeFreezing: 'תוך 4 ימים',
    freezerBest: '(4°C-) - עד 6 חודשים',
    freezerAcceptable: '(4°C-) - עד 12 חודשים',
    deepFreezer: '(20°C-) - עד 12 חודשים',
    cooler: '15°C - עד 24 שעות',
    thawing: 'במקרר או במים פושרים',
    afterThawingCountertop: 'עד שעתיים',
    afterThawingRefrigerator: 'עד 24 שעות במקרר',
    afterHeating: 'עד שעתיים',
    container: 'בשקית או כלי ייעודי לאחסון חלב אם',
    leftOvers: 'עד שעתיים מסיום ההאכלה',
    sterilizationFrequency: 'לפחות פעם ביום',
    sterilizationAge: 'חודשיים'
  },
  CDC: {
    roomTemp: '25°C',
    roomTempDuration: 'עד 4 שעות',
    refrigerator: '4°C - עד 4 ימים',
    refrigeratorBeforeFreezing: 'תוך 4 ימים',
    freezerBest: '(18°C-) - עד 6 חודשים',
    freezerAcceptable: '(18°C-) - עד 12 חודשים',
    deepFreezer: '(20°C-) - עד 12 חודשים',
    cooler: 'עד 24 שעות',
    thawing: 'במקרר, במים קרים או פושרים',
    afterThawingCountertop: 'עד שעתיים',
    afterThawingRefrigerator: 'עד 24 שעות במקרר',
    afterHeating: 'עד שעתיים',
    container: 'בשקית או כלי ייעודי לאחסון חלב אם',
    leftOvers: 'עד שעתיים מסיום ההאכלה',
    sterilizationFrequency: 'לפחות פעם ביום',
    sterilizationAge: 'חודשיים'
  },
  ABM: {
    roomTemp: 'עד 29°C',
    roomTempDuration: 'עד 4 שעות',
    refrigerator: '4°C - מומלץ עד 4 ימים, אפשרי עד 8',  
    refrigeratorBeforeFreezing: 'תוך 5 ימים',
    freezerBest: '(4°C-) - עד 6 חודשים',
    freezerAcceptable: '(4°C-) - עד 12 חודשים',
    deepFreezer: '(18°C-) - עד 12 חודשים',
    cooler: '15°C - עד 24 שעות',
    thawing: 'במקרר או בטמפרטורת החדר',
    afterThawingCountertop: 'שעתיים בטמפרטורת החדר',
    afterThawingRefrigerator: 'עד 24 שעות במקרר',
    afterHeating: 'עד שעתיים',
    container: 'בשקית (ייעודית - פוליפרופילן) או במיכל זכוכית או פלסטיק (ייעודי - פוליפרופילן ללא BPA)',
    leftOvers: 'עד שעתיים מסיום ההאכלה',
    sterilizationFrequency: 'לפחות פעם ביום',
    sterilizationAge: 'חודשיים'
  },
  MOH: {
    roomTemp: 'עד 29°C',
    roomTempDuration: 'מומלץ עד 4 שעות, אפשרי עד 6.',
    refrigerator: '4°C - מומלץ עד 3 ימים, אפשרי עד 8 ימים.',
    refrigeratorBeforeFreezing: 'תוך 24 שעות',
    freezerBest: '(4°C-) - עד 3 חודשים',
    freezerAcceptable: '(4°C-) - עד 12 חודשים',
    deepFreezer: '(18°C-) - מומלץ עד 6 חודשים. אפשרי עד 12 חודשים',
    cooler: '15°C - עד 24 שעות',
    thawing: 'במקרר בלבד',
    afterThawingCountertop: 'עד שעה לפני ההאכלה',
    afterThawingRefrigerator: 'עד 24 שעות במקרר',
    afterHeating: 'עד שעתיים',
    container: 'בשקית או כלי ייעודי לאחסון חלב אם, עם תו תקן ישראלי',
    leftOvers: 'עד שעה מתחילת ההאכלה',
    sterilizationFrequency: 'לפחות פעם ביום',
    sterilizationAge: '6 חודשים'
  },
};
