export interface Service {
  id: string;
  index: string;
  title: string;
  audience: string;
  summary: string;
  deliverables: string[];
}

export interface Capability {
  id: string;
  title: string;
  line: string;
  detail: string;
}

export interface Step {
  index: string;
  title: string;
  detail: string;
  output: string;
}

export interface TimelineEvent {
  year: string;
  label: string;
  title: string;
  description: string;
  milestones: string[];
}
