import { useGuideline, GuidelineSource } from '@/contexts/GuidelineContext';
import { Button } from '@/components/ui/button';

const sources: { value: GuidelineSource; label: string }[] = [
  { value: 'WHO', label: 'WHO' },
  { value: 'CDC', label: 'CDC' },
  { value: 'ABM', label: 'ABM' },
  { value: 'MOH', label: 'משרד הבריאות' },
];

export const GuidelineSelector = () => {
  const { source, setSource } = useGuideline();

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {sources.map((s) => (
        <Button
          key={s.value}
          variant={source === s.value ? 'default' : 'outline'}
          onClick={() => setSource(s.value)}
          className="min-w-[120px]"
        >
          {s.label}
        </Button>
      ))}
    </div>
  );
};
