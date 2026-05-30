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
  freshOverFrozen?: string;
}

export const guidelines: Record<GuidelineSource, StorageGuideline> = {
  WHO: {
    roomTemp: 'עד 29°C',
    roomTempDuration: 'עד 4 שעות',
    refrigerator: '4°C - מומלץ עד 4 ימים, אפשרי עד 8',
    refrigeratorBeforeFreezing: ' 4 ימים',
    freezerBest: '(4°C-) - מומלץ עד 6 חודשים, אפשרי עד 12 חודשים',
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
    sterilizationAge: 'חודשיים',
    freshOverFrozen: '4 ימים'
  },
  CDC: {
    roomTemp: '25°C',
    roomTempDuration: 'עד 4 שעות',
    refrigerator: '4°C - עד 4 ימים',
    refrigeratorBeforeFreezing: '4 ימים',
    freezerBest: '(18°C-) - מומלץ עד 6 חודשים, אפשרי עד 12 חודשים',
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
    sterilizationAge: 'חודשיים',
    freshOverFrozen: '4 ימים'
  },
  ABM: {
    roomTemp: 'עד 29°C',
    roomTempDuration: 'עד 4 שעות',
    refrigerator: '4°C - מומלץ עד 4 ימים, אפשרי עד 8',
    refrigeratorBeforeFreezing: '5 ימים',
    freezerBest: '(4°C-) - מומלץ עד 6 חודשים, אפשרי עד 12 חודשים',
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
    sterilizationAge: 'חודשיים',
    freshOverFrozen: '4 ימים'
  },
  MOH: {
    roomTemp: 'עד 29°C',
    roomTempDuration: 'מומלץ עד 4 שעות, אפשרי עד 6 שעות.', // [c 5 s 5.1]
    refrigerator: '4°C - מומלץ עד 3 ימים, אפשרי עד 8 ימים.', // [c 5 s 5.2]
    refrigeratorBeforeFreezing: '24 שעות', // [c 1 s 1.5]
    freezerBest: '(4°C-) - מומלץ עד 3 חודשים, אפשרי עד 12 חודשים', // [c 5 s 5.5]
    freezerAcceptable: '(4°C-) - עד 12 חודשים', // [c 5 s 5.5]
    deepFreezer: '(18°C-) - מומלץ עד 6 חודשים. אפשרי עד 12 חודשים', // [c 5 s 5.6]
    cooler: 'מינוס 15°C - עד 24 שעות', // [c 5 s 5.2]
    thawing: 'במקרר בלבד',
    afterThawingCountertop: 'עד שעה לפני ההאכלה', // [c 6 s 6.3 ss ג]
    afterThawingRefrigerator: 'עד 24 שעות במקרר', // [c 5 s 5.7]
    afterHeating: 'עד שעה', // [summary with Dr Tony Duwek]
    container: 'בשקית או כלי ייעודי לאחסון חלב אם, עם תו תקן ישראלי', // [c 2 s 2.1 & 2.2]
    leftOvers: 'עד שעה מסיום ההאכלה', // [c 4 s 4.4]
    sterilizationFrequency: 'לפחות פעם ביום', // https://me.health.gov.il/parenting/raising-children/baby-nutrition/bottle-feeding/bottles-and-bottle-nipples/
    sterilizationAge: '6 חודשים', // https://me.health.gov.il/parenting/raising-children/baby-nutrition/bottle-feeding/bottles-and-bottle-nipples/
    freshOverFrozen: '3 ימים' // [c 1 s 1.4]
  },
};
