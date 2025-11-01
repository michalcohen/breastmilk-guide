import { GuidelineSource } from '@/contexts/GuidelineContext';

export interface StorageGuideline {
  roomTemp?: string;
  roomTempDuration?: string;
  refrigerator?: string;
  freezer?: string;
  deepFreezer?: string;
  cooler?: string;
  thawing?: string;
  afterThawing?: string;
  afterHeating?: string;
}

export const guidelines: Record<GuidelineSource, StorageGuideline> = {
  WHO: {
    roomTemp: '25°C',
    roomTempDuration: '4 שעות',
    refrigerator: '4°C - עד 4 ימים',
    freezer: '-18°C - עד 6 חודשים',
    deepFreezer: '-20°C - עד 12 חודשים',
    cooler: '15°C - עד 24 שעות',
    thawing: 'במקרר או במים פושרים',
    afterThawing: 'עד 24 שעות במקרר',
    afterHeating: 'עד 2 שעות',
  },
  CDC: {
    roomTemp: '25°C',
    roomTempDuration: 'עד 4 שעות',
    refrigerator: '4°C - עד 4 ימים',
    freezer: '-18°C - עד 6-12 חודשים',
    deepFreezer: '-20°C - עד 12 חודשים',
    cooler: '15°C - עד 24 שעות',
    thawing: 'במקרר, במים קרים או פושרים',
    afterThawing: 'עד 24 שעות במקרר',
    afterHeating: 'עד 2 שעות',
  },
  ABM: {
    roomTemp: '25°C',
    roomTempDuration: 'עד 6-8 שעות',
    refrigerator: '4°C - עד 5 ימים',
    freezer: '-18°C - עד 6 חודשים',
    deepFreezer: '-20°C - עד 12 חודשים',
    cooler: '15°C - עד 24 שעות',
    thawing: 'במקרר או בטמפרטורת החדר',
    afterThawing: 'עד 24 שעות במקרר, 4 שעות בטמפרטורת החדר',
    afterHeating: 'עד 2 שעות',
  },
  MOH: {
    roomTemp: '25°C',
    roomTempDuration: 'עד 3 שעות',
    refrigerator: '4°C - עד 3 ימים',
    freezer: '-18°C - עד 6 חודשים',
    deepFreezer: '-20°C - עד 12 חודשים',
    cooler: '15°C - עד 24 שעות',
    thawing: 'במקרר בלבד',
    afterThawing: 'עד 24 שעות במקרר',
    afterHeating: 'שעתיים לכל היותר',
  },
};
