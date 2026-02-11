import { useGuideline, GuidelineSource } from '@/contexts/GuidelineContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const sources: { value: GuidelineSource; label: string }[] = [
  { value: 'WHO', label: 'WHO' },
  { value: 'CDC', label: 'CDC' },
  { value: 'ABM', label: 'ABM' },
  { value: 'MOH', label: 'משרד הבריאות' },
];

export const GuidelineSelector = () => {
  const { source, setSource } = useGuideline();

  return (
    <div className="flex items-center gap-3 justify-center mb-8">
      <span className="text-sm text-muted-foreground">לפי הנחיות</span>
      <Select value={source} onValueChange={(val) => setSource(val as GuidelineSource)}>
        <SelectTrigger className="w-[180px] bg-background">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-popover">
          {sources.map((s) => (
            <SelectItem key={s.value} value={s.value}>
              {s.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
