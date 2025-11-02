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
}

export const guidelines: Record<GuidelineSource, StorageGuideline> = {
  WHO: {
    roomTemp: '25°C',
    roomTempDuration: '4 עד שעות',
    refrigerator: '4°C - עד 4 ימים',
    refrigeratorBeforeFreezing: 'אם ניתן להקפיא במקרר',
    freezerBest: '-18°C - עד 6 חודשים',
    freezerAcceptable: '-18°C - עד 12 חודשים',
    deepFreezer: '-20°C - עד 12 חודשים',
    cooler: '15°C - עד 24 שעות',
    thawing: 'במקרר או במים פושרים',
    afterThawingCountertop: 'עד שעתיים',
    afterThawingRefrigerator: 'עד 24 שעות במקרר',
    afterHeating: 'עד 2 שעות',
    container: 'בשקית או כלי ייעודי לאחסון חלב אם',
    leftOvers: 'לא ניתן להשאיר חלב אם במקרר יותר מ-24 שעות'
  },
  CDC: {
    roomTemp: '25°C',
    roomTempDuration: 'עד 4 שעות',
    refrigerator: '4°C - עד 4 ימים',
    refrigeratorBeforeFreezing: 'תוך 4 ימים',
    freezerBest: '-18°C - עד 6 חודשים',
    freezerAcceptable: '-18°C - עד 12 חודשים',
    deepFreezer: '-20°C - עד 12 חודשים',
    cooler: 'עד 24 שעות',
    thawing: 'במקרר, במים קרים או פושרים',
    afterThawingCountertop: 'עד שעתיים',
    afterThawingRefrigerator: 'עד 24 שעות',
    afterHeating: 'עד שעתיים',
    container: 'בשקית או כלי ייעודי לאחסון חלב אם',
    leftOvers: 'עד שעתיים מסיום האכלה'
  },
  ABM: {
    roomTemp: '29°C',
    roomTempDuration: 'עד 4 שעות',
    refrigerator: '4°C - עד 5 ימים',  
    refrigeratorBeforeFreezing: '4°C - עד 5 ימים',
    freezerBest: '-18°C - עד 3 חודשים',
    freezerAcceptable: '-18°C - עד 6 חודשים',
    deepFreezer: '-20°C - עד 12 חודשים',
    cooler: '15°C - עד 24 שעות',
    thawing: 'במקרר או בטמפרטורת החדר',
    afterThawingCountertop: 'עד 24 שעות במקרר, 4 שעות בטמפרטורת החדר',
    afterThawingRefrigerator: 'עד 24 שעות במקרר',
    afterHeating: 'עד 2 שעות',
    container: 'בשקית (ייעודית - פוליפרופילן) או במיכל זכוכית או פלסטיק (ייעודי - פוליפרופילן ללא BPA)',
    leftOvers: 'לא ניתן להשאיר חלב אם במקרר יותר מ-24 שעות'
  },
  MOH: {
    roomTemp: '29°C',
    roomTempDuration: 'מומלץ עד 4 שעות. אפשרי עד 6',
    refrigerator: '4°C - מומלץ עד 3 ימים. אפשרי עד 8 ימים',
    refrigeratorBeforeFreezing: 'תוך 24 שעות',
    freezerBest: 'עד 3 חודשים',
    freezerAcceptable: 'עד 12 חודשים',
    deepFreezer: '-18°C - מומלץ עד 6 חודשים. אפשרי עד 12 חודשים',
    cooler: '15°C - עד 24 שעות',
    thawing: 'במקרר בלבד',
    afterThawingCountertop: 'עד שעה לפני ההאכלה',
    afterThawingRefrigerator: 'עד 24 שעות',
    afterHeating: 'שעתיים לכל היותר',
    container: 'בשקית או כלי ייעודי לאחסון חלב אם, עם תו תקן ישראלי',
    leftOvers: 'עד שעה מתחילת ההאכלה'
  },
};
