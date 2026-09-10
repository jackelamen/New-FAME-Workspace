export interface Pillar {
  letter: string;
  name: string;
  line: string;
  detail: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  pillars: string[];
  /* Drop a file in /public/work and put its path here. Null renders the
     placeholder panel instead of a broken image. */
  image: string | null;
}

export interface Client {
  label: string;
  detail: string;
}
