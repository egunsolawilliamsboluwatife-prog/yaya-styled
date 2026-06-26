/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  benefits: string[];
  idealClient: string;
  priceInfo?: string;
  duration?: string;
  bookingLink: string;
}

export interface PortfolioItem {
  id: string;
  category: 'starter' | 'microlocs' | 'repairs' | 'styled';
  categoryLabel: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  caption: string;
  instagramReelId?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  rating: number;
  image?: string;
}

export interface JournalPost {
  id: string;
  title: string;
  category: string;
  snippet: string;
  content: string[];
  date: string;
  readTime: string;
  slug: string;
  image: string;
  keywords: string[];
}
