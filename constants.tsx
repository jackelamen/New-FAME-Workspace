import { Pillar, WorkItem, Client } from './types.ts';

export const CONTACT_EMAIL = 'jack.lyons@fameentgroup.com';

/* Hero film still. Drop a file in /public and set the path here; until then
   the hero renders a quiet tonal panel rather than borrowed stock. */
export const HERO_IMAGE: string | null = null;

/* The name is the offer. Order is fixed: it spells FAME. */
export const PILLARS: Pillar[] = [
  {
    letter: 'F',
    name: 'Food',
    line: 'Concepts, menus, hospitality',
    detail:
      'Dining concepts and F&B activations built as part of the experience, not catered alongside it.',
  },
  {
    letter: 'A',
    name: 'Artistry',
    line: 'Direction, spatial design, concept',
    detail:
      'The creative idea and the room it lives in. Art direction, set and spatial design, styling.',
  },
  {
    letter: 'M',
    name: 'Media',
    line: 'Film, photography, content',
    detail:
      'In-house production. The work is captured as it happens and finished for every channel it needs to run on.',
  },
  {
    letter: 'E',
    name: 'Events',
    line: 'Production, staging, live',
    detail:
      'Full production and on-the-night execution, from private brand dinners to public cultural programming.',
  },
];

/* The formats we produce. Add an `image` path (file under /public/work) and a
   real project title once assets and client clearances are in hand: the Work
   section switches from a typographic index to an image-led grid as soon as
   any entry has one. */
export const WORK: WorkItem[] = [
  {
    id: 'spirits',
    title: 'Brand activations',
    category: 'Brand experience',
    pillars: ['Food', 'Artistry', 'Media', 'Events'],
    image: null,
  },
  {
    id: 'hospitality',
    title: 'Hospitality concepts',
    category: 'Venue & F&B',
    pillars: ['Food', 'Artistry'],
    image: null,
  },
  {
    id: 'cultural',
    title: 'Public cultural programmes',
    category: 'Live event',
    pillars: ['Artistry', 'Media', 'Events'],
    image: null,
  },
];

export const CLIENTS: Client[] = [
  {
    label: 'Brands',
    detail: 'Spirits, lifestyle and premium consumer brands building presence through experience.',
  },
  {
    label: 'Cultural institutions',
    detail: 'Festivals, galleries and public programmes that need production and creative direction.',
  },
  {
    label: 'Venue operators',
    detail: 'Hotels, restaurants and spaces developing a concept or a programme of their own.',
  },
];

export const HERITAGE = [
  { year: '2016', note: 'Founded in Seoul. Nightlife, music and live programming.' },
  { year: '2018', note: 'Marketing and operations for venues and restaurants across the city.' },
  { year: '2019', note: 'Fashion shows, documentary work and city-scale cultural events.' },
  { year: 'Today', note: 'Four disciplines under one creative direction.' },
];
