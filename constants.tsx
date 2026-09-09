import { Service, Capability, Step, TimelineEvent } from './types.ts';

export const CONTACT_EMAIL = 'jack.lyons@fameentgroup.com';

export const MARKETS = ['Seoul', 'Atlanta', 'Singapore', 'Kuala Lumpur'];

/* The two things a visitor can actually hire us for. Everything else is proof. */
export const SERVICES: Service[] = [
  {
    id: 'export',
    index: '01',
    title: 'Getting your brand onto foreign shelves',
    audience: 'For Korean food, beverage and lifestyle brands',
    summary:
      'You make something good and it sells at home. Abroad, you are one unknown label among thousands, and the buyers who matter never see it. We handle the part between your factory and a shelf in Atlanta, Singapore or Kuala Lumpur.',
    deliverables: [
      'Distributor and importer introductions in the US and Southeast Asia',
      'Retail buyer meetings, pitch decks and line sheets built for those buyers',
      'Labelling, positioning and pricing adjusted for the destination market',
      'Marketplace listings and launch campaigns that move the first cases',
    ],
  },
  {
    id: 'entry',
    index: '02',
    title: 'Landing your company in Korea',
    audience: 'For overseas brands, platforms and software companies',
    summary:
      'Korea rewards companies that show up correctly and punishes the ones that do not. We have been running campaigns, events and retail here since 2016, and we open the doors we already know.',
    deliverables: [
      'Market read: who your buyer is here, what they already use, what it costs',
      'Local partner, reseller and venue sourcing',
      'Korean-language brand, campaign and social execution',
      'Launch events, activations and press to make the arrival visible',
    ],
  },
];

/* What the team actually does day to day. Four because there are four, not for symmetry. */
export const CAPABILITIES: Capability[] = [
  {
    id: 'trade',
    title: 'Trade',
    line: 'Distribution, buyers, logistics',
    detail:
      'Sourcing, importer relationships, retail placement and the follow-through that keeps a product reordering after the launch month.',
  },
  {
    id: 'brand',
    title: 'Brand',
    line: 'Positioning, identity, packaging',
    detail:
      'The story a buyer needs to hear and the shelf presence a shopper needs to see, rebuilt for a market that has never heard of you.',
  },
  {
    id: 'media',
    title: 'Media',
    line: 'Film, photography, social',
    detail:
      'In-house production in Seoul. Campaign film, product photography and social built to run in Korean and English without being reshot.',
  },
  {
    id: 'events',
    title: 'Events',
    line: 'Launches, festivals, activations',
    detail:
      'Where we started. Festivals, club nights, pop-ups and brand activations that put a product in front of people who will talk about it.',
  },
];

export const PROCESS: Step[] = [
  {
    index: '01',
    title: 'We read the market',
    detail:
      'Two weeks looking at where your product actually fits: the shelf it belongs on, the price it can hold, the competitors already there.',
    output: 'A market read and a go / no-go recommendation',
  },
  {
    index: '02',
    title: 'We rebuild the pitch',
    detail:
      'Positioning, packaging notes, line sheet and buyer deck, written for the person who signs the purchase order rather than for your existing customers.',
    output: 'Buyer-ready brand and sales materials',
  },
  {
    index: '03',
    title: 'We open the doors',
    detail:
      'Introductions to distributors, importers and retail buyers we already work with, and we sit in the meetings with you.',
    output: 'Live conversations with named buyers',
  },
  {
    index: '04',
    title: 'We make it sell',
    detail:
      'Campaign, content, events and marketplace work behind the launch, so the first order is followed by a second.',
    output: 'Sell-through, not just placement',
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2016',
    label: 'Itaewon',
    title: 'It started with a room in Itaewon',
    description:
      'Entourage Seoul took over Owl Lounge and started throwing parties. Not a strategy, just a group of people who wanted somewhere to go.',
    milestones: [
      'Entourage Seoul founded',
      'Owl Lounge takeover',
      'Hamilton Hotel pool parties',
      'Club MADE launch',
    ],
  },
  {
    year: '2017',
    label: 'FAME',
    title: 'The parties turned into a platform',
    description:
      'FAME launched as Fashion, Art, Music and Entertainment: concert series, university rap battles and the first festival.',
    milestones: [
      'FAME Live concert series',
      'Obey My Mic hip hop series',
      'Golden Mic university battles',
      'FAME FEST music festival',
      'Red Rock Beer partnership',
    ],
  },
  {
    year: '2018',
    label: 'Operations',
    title: 'Brands started paying us to run things',
    description:
      'Marketing and operations for restaurants and venues across Seoul, including the city&rsquo;s largest Halloween party that year.',
    milestones: [
      'View 33 operations takeover',
      'Club Lucidream promo team',
      'Yeouido Marina Gatsby party',
      'Largest Seoul Halloween party',
      'FAME Creators Network launch',
    ],
  },
  {
    year: '2019',
    label: 'Reach',
    title: 'Culture work beyond the nightlife',
    description:
      'Fashion shows, a documentary series and a tourism platform. The audience got wider than the room we started in.',
    milestones: [
      'FAME First Fridays',
      'Latin cruise party on the Han River',
      'Seoul Africa Fashion Show',
      'FAME Creators docuseries',
      'Tourism promotion platform',
    ],
  },
  {
    year: '2020',
    label: 'The shutdown',
    title: 'Every stage went dark',
    description:
      'The pandemic ended live events overnight. We had a network, a production team and no venues. So we pointed all of it at products instead of parties.',
    milestones: [
      'Live business suspended',
      'Network redirected to brand work',
      'First trading relationships built',
    ],
  },
  {
    year: 'Now',
    label: 'Trading house',
    title: 'A lifestyle trading house with a creative team attached',
    description:
      'Today we move premium Korean brands into US and Southeast Asian retail, and bring overseas companies into Korea. The events team never left; it just sells things now.',
    milestones: [
      'Seoul, Atlanta, Singapore, Kuala Lumpur',
      'Food and lifestyle brand export',
      'Inbound Korea market entry',
      'Creative and events in-house',
    ],
  },
];

export const TICKER = [
  'Lifestyle trading house',
  'Seoul → Atlanta',
  'Seoul → Singapore',
  'Seoul → Kuala Lumpur',
  'Food & beverage export',
  'Retail placement',
  'Korea market entry',
  'Creative & events, in-house',
];
