
import { Pillar, RoadmapPhase, MetricRow, Project, TimelineEvent } from './types.ts';

export const PILLARS: Pillar[] = [
  {
    id: 'food',
    title: 'Food',
    subtitle: 'Great food for everyone',
    description: 'We help local food brands reach more people and more tables. By telling the right story and finding the right shops, we turn hidden gems into household names.',
    icon: 'F',
    color: 'from-[#00B8E4] to-[#0070B0]', 
    backgroundImage: 'https://images.unsplash.com/photo-1760463921658-0fa0ce72c91c'
  },
  {
    id: 'arts',
    title: 'Artistry',
    subtitle: 'Bringing joy through creativity',
    description: 'We believe in the power of art. We work with talented artists and designers to help them share their vision with the world through music, fashion, and creative projects.',
    icon: 'A',
    color: 'from-[#FFB700] to-[#FF9100]',
    backgroundImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b'
  },
  {
    id: 'media',
    title: 'Media',
    subtitle: 'Stories worth sharing',
    description: 'Our team creates beautiful videos and photos that capture people’s attention. We help brands talk to their audience in a way that feels real and exciting.',
    icon: 'M',
    color: 'from-[#2E476B] to-[#1A2E44]',
    backgroundImage: 'https://images.unsplash.com/photo-1506704888326-3b8834edb40a'
  },
  {
    id: 'events',
    title: 'Events',
    subtitle: 'Experiences that bring us together',
    description: 'Events are where everything comes to life. From festivals to private parties, we create spaces where people can have fun, meet new friends, and experience brands in person.',
    icon: 'E',
    color: 'from-[#FF3C00] to-[#C02E00]',
    backgroundImage: 'https://images.unsplash.com/photo-1521763663039-9ac06d263920'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2016',
    label: 'WHERE WE STARTED',
    title: 'Early Days in Seoul',
    description: 'We began our journey in the heart of Seoul, hosting local parties and events that brought the city together.',
    milestones: ['First team formed', 'Local events launched', 'Our first big festival']
  },
  {
    year: '2017',
    label: 'OUR VISION',
    title: 'The FAME Idea',
    description: 'We realized we could do more for artists. We started hosting rap battles and concerts to give local talent a stage.',
    milestones: ['Music series begins', 'Youth talent programs', 'City-wide celebrations']
  },
  {
    year: '2018',
    label: 'GROWING UP',
    title: 'A Creative Home',
    description: 'We opened our first creative space to help creators connect, work together, and build their dreams.',
    milestones: ['Creator house opened', 'Collaborative workspaces', 'New city partnerships']
  },
  {
    year: '2019',
    label: 'OUR IMPACT',
    title: 'Celebrating Culture',
    description: 'We focused on events that tell a story, like major fashion shows that brought different cultures together.',
    milestones: ['Cultural fashion shows', 'Monthly community meetups', 'Regional growth']
  },
  {
    year: 'NOW',
    label: 'OUR FUTURE',
    title: 'A Global Partner',
    description: 'Today, we help brands and artists grow across the world, connecting good ideas with the people who love them.',
    milestones: ['International reach', 'Supporting new brands', 'Connecting the world']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Celebrating Local Culture',
    category: 'Cultural Events',
    description: 'A beautiful event that brought together different designers to share their work on a big stage.',
    image: 'https://images.unsplash.com/photo-1492691523567-6170c3678ad9?auto=format&fit=crop&q=80&w=800',
    tags: ['Culture', 'Design', 'PR']
  },
  {
    id: '2',
    title: 'Helping Local Shops Grow',
    category: 'Sales & Growth',
    description: 'Helping small businesses find new customers and share their products with the world.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800',
    tags: ['Business', 'Branding', 'Global']
  },
  {
    id: '3',
    title: 'Live Music Experiences',
    category: 'Events',
    description: 'Events where music and products come together for a fun afternoon of discovery.',
    image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800',
    tags: ['Live Shows', 'Food', 'Fun']
  },
  {
    id: '4',
    title: 'Creator Community',
    category: 'Supporting Talent',
    description: 'A network of creative people who work together on big projects to tell better stories.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    tags: ['People', 'Stories', 'Social']
  }
];
