import { Pillar, Clip, Offer, Step } from './types.ts';

export const CONTACT_EMAIL = 'jack.lyons@fameentgroup.com';

/* ---------------------------------------------------------------------------
   FOOTAGE

   Every background clip on the site is declared here. Set `src` to an mp4 URL
   and that section becomes video-led; leave it null and it renders the filmic
   motion fallback. Nothing else changes, so footage can land one clip at a time.

   Self-hosting under /public/video is better than hotlinking a stock CDN:
   it survives the clip being reorganised or removed upstream. Keep each file
   under ~4MB, 1080p, muted, 8-12 seconds, and it will loop invisibly.
--------------------------------------------------------------------------- */
export const CLIPS: Record<string, Clip> = {
  hero: { src: null, poster: null },
  tension: { src: null, poster: null },
  idea: { src: null, poster: null },
  invitation: { src: null, poster: null },
};

/* The name is the offer. Order is fixed: it spells FAME. */
export const PILLARS: Pillar[] = [
  {
    letter: 'F',
    name: 'Food',
    line: 'Chefs, bartenders, hospitality operators',
    detail: 'The people who can turn a room full of strangers into a table.',
  },
  {
    letter: 'A',
    name: 'Artistry',
    line: 'Designers, stylists, set and spatial builders',
    detail: 'The people who decide what a night looks like before anyone walks in.',
  },
  {
    letter: 'M',
    name: 'Media',
    line: 'Directors, photographers, editors, writers',
    detail: 'The people who make sure it exists after the lights come up.',
  },
  {
    letter: 'E',
    name: 'Events',
    line: 'Producers, promoters, technical and stage',
    detail: 'The people who hold the whole thing together while it is happening.',
  },
];

/* What a member gets. This is the argument, so it stays concrete. */
export const OFFER: Offer[] = [
  {
    index: '01',
    title: 'Briefs you cannot win alone',
    detail:
      'A brand looking for a dinner, a set, a film and a night wants one point of contact. Alone you are a line item. Together we are the answer, and the work is shared out inside the collective.',
  },
  {
    index: '02',
    title: 'A floor under your rate',
    detail:
      'Members see what other members charge. Published internal rate bands end the guesswork that keeps good people underpaid, and nobody in the collective undercuts another member on the same brief.',
  },
  {
    index: '03',
    title: 'The parts you hate',
    detail:
      'Contracts, invoicing, deposits, chasing payment, and the Korean-language paperwork for foreign members. Handled centrally so you spend your week on the work.',
  },
  {
    index: '04',
    title: 'A room and a crew',
    detail:
      'Shared production space, gear and, more importantly, four other people who have solved the problem you are stuck on. Independence without the isolation.',
  },
  {
    index: '05',
    title: 'A route out of Korea',
    detail:
      'Seoul is the base, not the ceiling. Members travel on international briefs, and members abroad bring work back in. The passport is not the qualification.',
  },
];

/* A collective that only lists benefits reads like a subscription. */
export const ASKS = [
  'Show up for other members’ projects, not only your own.',
  'Bring work in as well as take work out.',
  'Hold the standard in public. Your name and the collective’s travel together.',
  'Be reachable. A collective runs on people answering.',
];

export const STEPS: Step[] = [
  {
    index: '01',
    title: 'You send work',
    detail: 'Not a CV. Three things you made and one line on what you want from the next two years.',
  },
  {
    index: '02',
    title: 'We talk properly',
    detail: 'A long conversation, in person in Seoul or on a call. Both sides are deciding here.',
  },
  {
    index: '03',
    title: 'You run one project',
    detail: 'A real brief with existing members before anything is permanent. Fit shows up in the work.',
  },
  {
    index: '04',
    title: 'You are in',
    detail: 'Full member. A say in who joins next, and a share of what the collective wins.',
  },
];

export const FIT = {
  yes: [
    'You already have your own practice and clients',
    'You have turned down work you could not deliver alone',
    'You would rather own a share of something than be staff',
    'You are in Seoul, or you want a reason to be',
  ],
  no: [
    'You are looking for a full-time job with a salary',
    'You want leads handed over without contributing any',
    'You need creative direction rather than collaborators',
    'You are not ready to be accountable to other members',
  ],
};
