import React, { createContext, useContext, useState, ReactNode } from 'react';

export type GuidelineSource = 'WHO' | 'CDC' | 'ABM' | 'MOH';

interface GuidelineContextType {
  source: GuidelineSource;
  setSource: (source: GuidelineSource) => void;
}

const GuidelineContext = createContext<GuidelineContextType | undefined>(undefined);

export const GuidelineProvider = ({ children }: { children: ReactNode }) => {
  const [source, setSource] = useState<GuidelineSource>('MOH');

  return (
    <GuidelineContext.Provider value={{ source, setSource }}>
      {children}
    </GuidelineContext.Provider>
  );
};

export const useGuideline = () => {
  const context = useContext(GuidelineContext);
  if (!context) {
    throw new Error('useGuideline must be used within a GuidelineProvider');
  }
  return context;
};
