export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  subValue?: string;
  growth?: string;
  description: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: 'search' | 'message' | 'handshake' | 'rocket';
}

export interface ExperienceItem {
  category: string;
  skills: string[];
}

export interface SectionProps {
  id: string;
  className?: string;
}

export interface ChartDataPoint {
  month: string;
  meetings: number;
  opportunities: number;
}