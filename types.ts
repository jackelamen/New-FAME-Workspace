
export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  backgroundImage: string;
}

export interface TimelineEvent {
  year: string;
  label: string;
  title: string;
  description: string;
  milestones: string[];
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  timeline: string;
  goals: string[];
}

export interface MetricRow {
  label: string;
  old: string;
  new: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}
