/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, PortfolioItem, TestimonialItem, JournalPost } from '../types';
import starterLocsBefore from '../assets/images/starter_locs_before_1782434728414.jpg';
import starterLocsAfter from '../assets/images/starter_locs_after_1782434744341.jpg';

export const brandDetails = {
  name: 'Yaya Styled',
  byline: 'Crown Care by Ayanna Polite',
  owner: 'Ayanna Polite',
  ownerRole: 'ATL Master Loctician, Fashion Stylist, & Wellness Coach',
  location: 'Suite #106, Phenix Salon Suites Edgewood, Atlanta, Georgia',
  contactNumber: '+1 (470) 559-7087',
  whatsappUrl: 'https://wa.me/14705597087',
  email: 'yayastyledlc@gmail.com',
  instagram: '@yayastyled',
  instagramUrl: 'https://instagram.com/yayastyled',
  bookingUrl: 'https://yayastyled.acuityscheduling.com', // Representative booking URL
  tagline: 'Transforming You Inside & Out.',
  corePhilosophy: 'Locs as self-discovery, sacred ritual care, not just hair. Look good, feel good, be treated better.',
  trustLine: "Atlanta's Premier Master Loctician | Suite #106 Phenix Salon Suites Edgewood",
  aboutVoiceQuote: `Hey loves! It's Yaya, your Atlanta hairstylist and fashion stylist. Growing up, I realized that when I looked good, I felt good, and people treated me better. Embracing my natural locs has been a journey of self-discovery, giving me a sense of freedom and sexiness. Now, I'm here to help you feel and look your best.`,
  aboutFullStory: `At Yaya Styled, my work is never just transactional. It is a deeply supportive partnership through the often emotional and patience-requiring process of starting, maintaining, repairing, or enhancing your locs. 

As a certified Master Loctician and Wellness Coach, I bring together precise technical mastery (like artistic diamond partings and seamless microlocs) with fashion sensibility and holistic wellness. Your hair is your crown—the ultimate vehicle for confidence, freedom, and self-celebration. Let's elevate your crown together.`
};

export const servicesData: ServiceItem[] = [
  {
    id: 'consultation',
    category: 'Consultation',
    title: 'Crown Care Consultation',
    description: 'The sacred beginning of your loc journey. We assess your hair texture, scalp health, lifestyle, and design a customized roadmap for your crown.',
    benefits: [
      'Thorough scalp and density assessment',
      'Personalized method matching (Starter vs Microlocs)',
      'Custom scheduling & growth estimation',
      'Answering all lock maintenance & product questions'
    ],
    idealClient: 'Individuals looking to start locs, transition from loose natural hair, or seeking custom solutions for existing loc concerns.',
    priceInfo: 'Starting at $50',
    duration: '30 - 45 Mins',
    bookingLink: brandDetails.bookingUrl
  },
  {
    id: 'ritual-care',
    category: 'Ritual Care',
    title: 'Sacred Retwist & Maintenance',
    description: 'Regular loc upkeep combining deep cleansing, palm rolling, meticulous clean-ups, and targeted scalp nourishment to keep your crown thriving.',
    benefits: [
      'Deep clarifying & moisturizing shampoo rituals',
      'Artistic, clean, and tension-free palm rolling',
      'Soothing herbal scalp oiling & steam treatments',
      'Lightweight styling for protection and movement'
    ],
    idealClient: 'Loc clients who value neatness, consistency, and a relaxing, therapeutic hair care experience between major transformations.',
    priceInfo: 'Starting at $120',
    duration: '2 - 3 Hours',
    bookingLink: brandDetails.bookingUrl
  },
  {
    id: 'the-journey',
    category: 'The Journey',
    title: 'Microlocs & Starter Locs Install',
    description: 'Expertly crafted foundations. Utilizing artistic parting grids (including custom diamond and triangle patterns) and high-count sectioning.',
    benefits: [
      'Precise grid-patterns with high part counts (90+ sections)',
      'Microlocs interlocking or traditional twists install',
      'Seamless addition of extensions for immediate volume',
      'Comprehensive starter kit & initial follow-up guidelines'
    ],
    idealClient: 'Clients ready to embark on a structured, documented multi-week loc transformation focusing on elite-tier parting aesthetics.',
    priceInfo: 'Varies by density & length',
    duration: '1 - 2 Days',
    bookingLink: brandDetails.bookingUrl
  },
  {
    id: 'transformation',
    category: 'Transformation',
    title: 'Repairs, Reattachments & Extensions',
    description: 'Advanced restoration work using specialized crochet and re-weaving methods to repair damaged locs, reattach historic crowns, or extend length.',
    benefits: [
      'Invisible reattachment of previously cut locs',
      'Thorough loc repair (fixing thinning roots and weak points)',
      'High-grade extensions for natural movement, volume, and body',
      'Structural reinforcement that lasts long-term'
    ],
    idealClient: 'Clients seeking high-value, meticulous rehabilitation of their locs, avoiding quick fixes in favor of premium natural outcomes.',
    priceInfo: 'Custom Quote Required',
    duration: 'By consultation',
    bookingLink: brandDetails.bookingUrl
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 'portfolio-1',
    category: 'starter',
    categoryLabel: 'Starter Locs',
    title: 'Perfect Diamond Grid Starter Locs',
    description: 'Meticulous 120-section starter installation with custom diamond parting grid, focusing on balanced density and scalp harmony.',
    beforeImage: starterLocsBefore,
    afterImage: starterLocsAfter,
    caption: 'Starter Locs Installation | Atlanta, GA'
  },
  {
    id: 'portfolio-2',
    category: 'microlocs',
    categoryLabel: 'Microlocs',
    title: 'Ultra-Fine Interlocking Microlocs',
    description: 'Bespoke micro installation with 400+ locs using interlock methodology for an instant, lightweight, highly versatile crown.',
    beforeImage: 'https://images.unsplash.com/photo-1595959183075-c1d0a1653de6?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=600&q=80',
    caption: '8-week microloc journey'
  },
  {
    id: 'portfolio-3',
    category: 'repairs',
    categoryLabel: 'Repairs & Extensions',
    title: 'Root Reconstruction & Crochet Extension',
    description: 'Rehabilitation of thinning roots and application of human hair loc extensions to create seamless density and flowing movement.',
    beforeImage: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=600&q=80',
    caption: 'Complete crown reconstruction'
  },
  {
    id: 'portfolio-4',
    category: 'styled',
    categoryLabel: 'Styled Looks',
    title: 'Two-Strand Twist Protective Crown',
    description: 'Sophisticated lightweight styling showcasing fluid movement and radiant shine, ready for the warm Atlanta summer.',
    beforeImage: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=600&q=80',
    caption: 'Luxe summer style'
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: '"Ayanna is truly a master of her craft. She didn’t just retwist my locs; she healed my scalp and taught me how to nourish my hair. The privacy and serenity of Suite #106 makes every visit feel like a spa retreat. I look good, feel amazing, and I am treated with true respect."',
    author: 'Kendall J.',
    title: 'Microlocs Client, Atlanta',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    quote: '"After a bad experience at another salon that left my roots damaged, I found Ayanna. Her crochet repair work was invisible, painless, and completely saved my locs. The patience and precise parting she delivers are unmatched. She is the best loctician in Atlanta, hands down."',
    author: 'Marcus T.',
    title: 'Loc Repair & Style Client',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    quote: '"Starting my loc journey with Yaya was the best decision of my life. She gave me custom diamond parts that look like fine art. Every step of this crown care journey is documented, scheduled, and personalized. Truly a sacred experience of self-discovery."',
    author: 'Sasha M.',
    title: 'Diamond Part Starter Client',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  }
];

export const journalPosts: JournalPost[] = [
  {
    id: 'post-1',
    title: 'Microlocs vs Starter Locs: Which Atlanta Crown Care Journey Is Yours?',
    category: 'Education & Journey',
    snippet: 'Discover the stylistic and technical differences between microlocs and traditional starter locs, and choose the perfect path for your lifestyle.',
    content: [
      'Choosing how to start your loc journey is a sacred and beautiful decision. In Atlanta, natural hair is a major form of self-expression, and both Microlocs and Starter Locs offer powerful vehicles for confidence, empowerment, and cultural pride.',
      'Microlocs are incredibly fine, high-count locks (ranging from 150 to over 400+) usually installed using interlocking methods or micro-coils. They provide maximum styling versatility, resembling loose hair in volume, and can be parted in countless creative ways, including flawless diamond parted grids.',
      'Starter Locs, on the other hand, are traditional-sized locs begun via comb coils, two-strand twists, or palm-rolling. They evolve beautifully, swelling into thick, majestic crowns over months of patience, consistency, and ritual care.',
      'Whichever route you choose, at Yaya Styled, we structure your loc development through dedicated multi-week schedules, starting with a comprehensive Crown Care Consultation to analyze scalp health, density, and alignment with your daily lifestyle.'
    ],
    date: 'June 18, 2026',
    readTime: '4 min read',
    slug: 'microlocs-vs-starter-locs',
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=600&q=80',
    keywords: ['microlocs Atlanta', 'starter locs Atlanta', 'best loctician Atlanta']
  },
  {
    id: 'post-2',
    title: 'How to Care for New Locs: Sacred Rules for Meticulous Maintenance',
    category: 'Sacred Ritual Care',
    snippet: 'Keep your starter grid crisp, healthy, and hydrated with these essential tips from Atlanta’s premier certified loctician.',
    content: [
      'The initial months of starting locs require intentional patience and protective care. Your brand new diamond parting grid is an artistic masterpiece—keeping it neat and healthy is a supportive partnership between you and your loctician.',
      'Rule #1: Moisture is your crown’s best friend, but over-saturating can unravel new coils. Use lightweight, water-based rosewater mists instead of heavy mineral oils or waxes that trigger buildup.',
      'Rule #2: Protect your scalp at night. Always wrap your locs in a silk or satin scarf, bonnet, or sleep on a satin pillowcase. This prevents lint gathering, friction-induced frizz, and moisture loss.',
      'Rule #3: Trust the schedule. Locs thrive on rhythm and consistency. Skipping maintenance sessions can cause your clean grid lines to merge and scalp tension to increase. Book regular, 4-to-6-week ritual appointments to keep your locs growing strong.'
    ],
    date: 'May 12, 2026',
    readTime: '5 min read',
    slug: 'care-for-new-locs',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    keywords: ['best loctician Atlanta', 'starter locs Atlanta', 'sacred scalp care']
  },
  {
    id: 'post-3',
    title: 'The Ultimate Loc Repair Guide: Restoring Weak and Damaged Crowns',
    category: 'Transformations',
    snippet: 'Thinning roots? Loose locs? Learn how crochet-weaving and crown reattachments restore natural movement, vitality, and strength.',
    content: [
      'Locs are resilient, but excess styling tension, medical changes, and chemical processes can sometimes lead to thinning roots, loose locs, or structural fatigue.',
      'At Yaya Styled, we specialize in advanced loc restoration. Rather than using glue or heavy binding agents that damage natural fibers, we utilize precise crochet re-weaving methods. This technique interlocks fibers at a micro level, restoring maximum strength.',
      'For clients wishing to instantly restore a previously cropped crown, our professional Loc Reattachment service seamlessly binds your historic locs back to your healthy roots with incredible body, swing, and movement.',
      'You don’t have to shave or restart. Meticulous, high-value loc repair is a journey that heals both your hair and your confidence, allowing you to walk with your head held high.'
    ],
    date: 'April 24, 2026',
    readTime: '4 min read',
    slug: 'loc-repair-guide',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=600&q=80',
    keywords: ['loc repairs Atlanta', 'best loctician Atlanta', 'microlocs Atlanta']
  }
];
