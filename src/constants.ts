import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  // --- Featured Items (Have Images) ---
  {
    id: '9',
    title: 'How Others See You'',
    price: '$30.00',
    category: 'General',
    image: 'https://i.etsystatic.com/18183127/r/il/a376f0/7605922552/il_1140xN.7605922552_dqg6.jpg',
    description: 'How Others See You | Delivered within 8 Hours | Audio + Personalized Interactive Webpage.',
    etsyUrl: 'https://sibylhaus.etsy.com/listing/4441736392/'
  },
  {
    id: '11',
    title: 'Strategic Pivot',
    price: '$30.00',
    category: 'General',
    image: 'https://i.etsystatic.com/18183127/r/il/8aff4c/7604591492/il_794xN.7604591492_o7rv.jpg',
    description: 'Strategic Pivot | Delivered within Hours | Audio + Personalized Interactive Web Page.',
    etsyUrl: 'https://sibylhaus.etsy.com/listing/4441477118/'
  },
  {
    id: '12',
    title: 'Tarot Phone Consultation',
    price: '$50.00',
    category: 'Live',
    image: 'https://i.etsystatic.com/18183127/r/il/2fa359/7456062941/il_794xN.7456062941_e1nq.jpg',
    description: 'Tarot Phone Consultation | Live Tarot Reading.',
    etsyUrl: 'https://sibylhaus.etsy.com/listing/4406770298/'
  },
  {
    id: '13',
    title: 'The Quickie',
    price: '$7.00',
    category: 'Mini',
    image: 'https://i.etsystatic.com/18183127/r/il/946ede/7665070555/il_794xN.7665070555_eex6.jpg',
    description: 'Quick One Card Intuitive Reading | Delivered within Hours | Audio + Personalized Web Dashboard.',
    etsyUrl: 'https://sibylhaus.etsy.com/listing/4443421416/'
  },
  {
    id: '15',
    title: 'Same Day Tarot Reading',
    price: '$15.00',
    category: 'General',
    image: 'https://i.imgur.com/rHtx3vY.jpeg',
    description: 'General - 2 Questions. Quick, specific answers delivered within hours. Audio + PDF.',
    etsyUrl: 'https://www.etsy.com/listing/4305847641/'
  },
  // --- Archive Items (Placeholders) ---
  {
    id: '1',
    title: '72 Hour Energy Tarot Reading',
    price: '$25.00',
    category: 'Timeline',
    image: 'placeholder',
    description: 'A look at the energies surrounding you for the next 3 days. Delivered within hours.',
    etsyUrl: 'https://www.etsy.com/listing/4314429113/'
  },
  {
    id: '2',
    title: 'Tarot Phone Consultation',
    price: '$50.00',
    category: 'Consultation',
    image: 'placeholder',
    description: 'Live 30-minute phone consultation. Ask questions as they come, find out now.',
    etsyUrl: 'https://www.etsy.com/listing/4406770298/'
  },
  {
    id: '8',
    title: 'Love & Purpose Alignment',
    price: '$28.00',
    category: 'Love',
    image: 'placeholder',
    description: 'Align your heart and higher purpose. Clarity on love, life path, and spiritual direction.',
    etsyUrl: 'https://www.etsy.com/listing/4414069401/'
  },
  {
    id: '3',
    title: 'Core Tier | Audio Tarot',
    price: '$14.00',
    category: 'General',
    image: 'placeholder',
    description: 'Essential guidance. A straightforward reading covering your core questions.',
    etsyUrl: 'https://www.etsy.com/listing/4332416194/'
  },
  {
    id: '4',
    title: 'Energy Perception Tarot',
    price: '$25.00',
    category: 'General',
    image: 'placeholder',
    description: 'How the world actually sees you. A deep dive into your external energetic projection.',
    etsyUrl: 'https://www.etsy.com/listing/4318251301/'
  },
  {
    id: '6',
    title: 'No Contact Tarot Reading',
    price: '$22.00',
    category: 'Love',
    image: 'placeholder',
    description: 'Insights into separation, silence, and what is happening behind the scenes.',
    etsyUrl: 'https://www.etsy.com/listing/4314169119/'
  },
  {
    id: '7',
    title: '7-Day Tarot Reading',
    price: '$18.99',
    category: 'Timeline',
    image: 'placeholder',
    description: 'Weekly forecast. What to expect day-by-day for the next week.',
    etsyUrl: 'https://www.etsy.com/listing/4314151838/'
  },
  {
    id: '14',
    title: 'Who Is Coming Toward You?',
    price: '$22.00',
    category: 'Love',
    image: 'placeholder',
    description: 'Love tarot reading identifying upcoming romantic connections.',
    etsyUrl: 'https://www.etsy.com/listing/4321911983/'
  },
  {
    id: '16',
    title: 'Deluxe Love Tarot Reading',
    price: '$25.00',
    category: 'Love',
    image: 'placeholder',
    description: 'Direct answers about their current feelings and intentions. A deep dive into the heart.',
    etsyUrl: 'https://www.etsy.com/listing/4314466408/'
  },
  {
    id: '17',
    title: 'Are You Wasting Your Time?',
    price: '$20.00',
    category: 'General',
    image: 'placeholder',
    description: 'Brutally honest assessment of a situation, person, or project.',
    etsyUrl: 'https://www.etsy.com/listing/4321907603/'
  },
  {
    id: '18',
    title: 'Love Tarot Check-In',
    price: '$32.00',
    category: 'Love',
    image: 'placeholder',
    description: 'Comprehensive look at the dynamics, strengths, and challenges of your connection.',
    etsyUrl: 'https://www.etsy.com/listing/4314704436/'
  },
  {
    id: '19',
    title: '30-Day Tarot Reading',
    price: '$38.00',
    category: 'Timeline',
    image: 'placeholder',
    description: 'Intuitive month-ahead forecast covering love, career, and general themes.',
    etsyUrl: 'https://www.etsy.com/listing/4314166586/'
  },
  {
    id: '21',
    title: 'Intuition vs Anxiety',
    price: '$15.00',
    category: 'General',
    image: 'placeholder',
    description: 'Distinguish between fear and gut feeling. Clear the mental static and find your center.',
    etsyUrl: 'https://www.etsy.com/listing/4314164299/'
  },
  {
    id: '20',
    title: 'What Spirit Wants You To Know',
    price: '$22.00',
    category: 'General',
    image: 'placeholder',
    description: 'Unprompted messages from your guides. What you need to hear right now.',
    etsyUrl: 'https://www.etsy.com/listing/4314173776/'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Heather',
    rating: 5,
    text: 'I\'d never consult another reader other than sibylhaus! Truly the best on here with the accuracy and clarity! Will definitely be buying more readings!',
    date: 'Aug 28, 2025'
  },
  {
    id: '2',
    author: 'Meera',
    rating: 5,
    text: 'I have so many wonderful things to say. This seller went above and beyond for me! Super friendly, very response and a authentic reading, I will be back 💜',
    date: 'Jul 18, 2025'
  },
  {
    id: '3',
    author: 'Joy',
    rating: 5,
    text: 'Accurate description of person didn\'t have to tell her she picked up and read it correctly.',
    date: 'Nov 7, 2025'
  },
  {
    id: '4',
    author: 'Shawn',
    rating: 5,
    text: 'Simply the best at what she does! I am very pleased with my tarot reading. Shea is very knowledgeable in her practice.',
    date: 'Jul 10, 2025'
  },
  {
    id: '5',
    author: 'Jeremiah',
    rating: 5,
    text: 'Idk how she does it but she couldn\'t of been anymore spot on! The quality is just as described exceeding my expectations.',
    date: 'Jun 17, 2025'
  },
  {
    id: '6',
    author: 'Rxx',
    rating: 5,
    text: 'She was able to tune into my energy and it resonated. Definitely recommend! :)',
    date: 'Jun 19, 2025'
  }
];
