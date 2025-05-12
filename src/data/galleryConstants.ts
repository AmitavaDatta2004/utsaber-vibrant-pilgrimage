
export type ImageCategory = 
  | 'idols'
  | 'pandals-exterior'
  | 'pandals-interior'
  | 'lighting-gates'
  | 'lighting-thematic' 
  | 'lighting-chandeliers'
  | 'rituals'
  | 'processions'
  | 'people'
  | 'behind-scenes'
  | 'events';

export type ContentType = 'photo' | 'video' | '360' | 'timelapse' | 'slowmotion';

export type GalleryImage = {
  id: number;
  src: string;
  title: string;
  description?: string;
  category: ImageCategory;
  contentType: ContentType;
  year: number;
  paraName?: string;
  tags: string[];
  photographer?: string;
  featured?: boolean;
};

export type CuratedCollection = {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  imageIds: number[];
};

export const GALLERY_CATEGORIES: { value: ImageCategory; label: string }[] = [
  { value: 'idols', label: 'Idols' },
  { value: 'pandals-exterior', label: 'Pandals - Exterior' },
  { value: 'pandals-interior', label: 'Pandals - Interior' },
  { value: 'lighting-gates', label: 'Lighting - Gates' },
  { value: 'lighting-thematic', label: 'Lighting - Thematic' },
  { value: 'lighting-chandeliers', label: 'Lighting - Chandeliers' },
  { value: 'rituals', label: 'Rituals & Puja' },
  { value: 'processions', label: 'Processions - Immersion' },
  { value: 'people', label: 'People & Devotees' },
  { value: 'behind-scenes', label: 'Behind the Scenes' },
  { value: 'events', label: 'Utsab Unites Events' },
];

export const CONTENT_TYPES: { value: ContentType; label: string }[] = [
  { value: 'photo', label: 'Photograph' },
  { value: 'video', label: 'Video' },
  { value: '360', label: '360° View' },
  { value: 'timelapse', label: 'Time-lapse' },
  { value: 'slowmotion', label: 'Slow-Motion' },
];

export const SORT_OPTIONS = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'featured', label: 'Editor\'s Picks' },
  { value: 'random', label: 'Random' },
];

export const VIEW_MODES = [
  { value: 'masonry', label: 'Masonry' },
  { value: 'grid', label: 'Grid' },
  { value: 'list', label: 'List' },
];

export const YEAR_OPTIONS = [
  { value: 2024, label: '2024' },
  { value: 2023, label: '2023' },
  { value: 2022, label: '2022' },
  { value: 2000, label: 'Pre-2000' },
  { value: 0, label: 'All Time' },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Barabazar Pandal at Night",
    description: "The magnificent pandal of Barabazar illuminated with thousands of lights, showcasing the theme of ancient temples.",
    category: "pandals-exterior",
    contentType: "photo",
    year: 2023,
    paraName: "Barabazar Sarbojanin",
    tags: ["award-winning", "lighting", "night"],
    photographer: "Amit Sen",
    featured: true
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    title: "Maa Jagadhatri Idol Close-up",
    description: "A detailed view of Gondolpara's exquisite Jagadhatri idol showcasing the divine countenance of the goddess.",
    category: "idols",
    contentType: "photo",
    year: 2023,
    paraName: "Gondolpara Club",
    tags: ["traditional", "idol", "craftsmanship"],
    photographer: "Priya Das"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    title: "Immersion Procession",
    description: "The lively immersion procession with devotees dancing to the rhythm of dhak drums.",
    category: "processions",
    contentType: "photo",
    year: 2023,
    paraName: "Central Club",
    tags: ["procession", "bisharjan", "culture"],
    photographer: "Raju Ghosh"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    title: "Evening Aarti",
    description: "Priests performing the evening aarti ceremony with traditional dhunuchi dance.",
    category: "rituals",
    contentType: "photo",
    year: 2022,
    paraName: "Laxmiganj Club",
    tags: ["ritual", "aarti", "tradition"],
    photographer: "Sanjay Dutta"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Intricate Lighting Design",
    description: "The breathtaking lighting display at Barabazar showcasing intricate patterns inspired by Bengali folk art.",
    category: "lighting-thematic",
    contentType: "photo",
    year: 2023,
    paraName: "Barabazar Club",
    tags: ["lighting", "design", "night"],
    photographer: "Amit Sen",
    featured: true
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Idol Making Process",
    description: "Artisans carefully crafting the face of the Jagadhatri idol, showing the traditional techniques passed down through generations.",
    category: "behind-scenes",
    contentType: "photo",
    year: 2023,
    tags: ["craftsmanship", "tradition", "behind-scenes"],
    photographer: "Rishi Roy"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    title: "Devotees Offering Prayers",
    description: "Devotees gathered to offer anjali during the morning puja ceremony.",
    category: "people",
    contentType: "photo",
    year: 2024,
    paraName: "Strand Road Club",
    tags: ["devotion", "people", "ritual"],
    photographer: "Soma Banerjee"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Intricate Pandal Interior",
    description: "The detailed interior of the award-winning pandal showing magnificent craftsmanship and artistry.",
    category: "pandals-interior",
    contentType: "photo",
    year: 2023,
    paraName: "Central Club",
    tags: ["award-winning", "craftsmanship", "interior"],
    photographer: "Debashis Ghosh"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Grand Lighting Gate",
    description: "The spectacular entrance gate illuminated with thousands of LED lights creating a magical pathway.",
    category: "lighting-gates",
    contentType: "photo",
    year: 2022,
    paraName: "Gondolpara Club",
    tags: ["lighting", "entrance", "night"],
    photographer: "Arnab Sen",
    featured: true
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Traditional Chandelier Lighting",
    description: "Handcrafted chandeliers with intricate designs illuminating the pathway to the pandal.",
    category: "lighting-chandeliers",
    contentType: "photo",
    year: 2023,
    paraName: "Barabazar Club",
    tags: ["chandelier", "traditional", "craftsmanship"],
    photographer: "Amit Sen"
  },
];

export const CURATED_COLLECTIONS: CuratedCollection[] = [
  {
    id: 1,
    title: "Masterpieces of Light: Top Illuminations",
    description: "A curated collection of the most breathtaking lighting displays from recent celebrations.",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    imageIds: [5, 9, 10]
  },
  {
    id: 2,
    title: "The Divine Faces: Idol Styles Across Paras",
    description: "Exploring the diverse artistic interpretations of Maa Jagadhatri across different neighborhoods.",
    coverImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    imageIds: [2, 6]
  },
  {
    id: 3,
    title: "Moments of Devotion: Puja Rituals",
    description: "Capturing the sacred moments of devotion and traditional rituals during the celebration.",
    coverImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    imageIds: [4, 7]
  }
];
