export type Experience = {
  id: number;
  title: string;
  subHeading: string;
  description: string;
  images: string[];
  link: string;
  highlights: string[];
  practicalDetails: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Karisa Walking Safaris",
    subHeading: "Walk Among Giants",
    description: "Step away from the safari vehicle and experience the wilderness on foot. Guided by Maasai trackers and naturalists, every footprint, bird call, and rustle in the grass tells a story. It’s the most authentic way to reconnect with the rhythms of nature.",
    images: [
      "/experience/safari1.jpg",
      "/experience/safari2.jpg",
      "/experience/safari3.jpg",
      "/experience/safari4.jpg",
      "/experience/safari5.jpg",
    ],
    link: "/experience/safari",
    highlights: [
      "Guided bush walks with expert naturalists",
      "Learn traditional Maasai tracking and survival skills",
      "Spot wildlife up-close, from giraffes to antelopes, in their natural habitat",
      "Morning or evening walks with scenic sundowner options",
    ],
    practicalDetails: [
      "Duration- 2-3 hours per walk",
      "Best time- Year-round, with cooler mornings and evenings preferred",
      "Suitable for adventurous travelers (ages 12+)",
    ],
  },
  {
    id: 2,
    title: "Cycling Around Zanzibar",
    subHeading: "Pedal Through Paradise",
    description: "Enjoy pristine beaches, turquoise waters, and vibrant marine life along the Indian Ocean.",
    images: [
      "/experience/beach1.jpg",
      "/experience/beach2.jpg",
      "/experience/beach3.jpg",
      "/experience/beach4.jpg",
      "/experience/beach5.jpg",
    ],
    link: "/experience/beach",
    highlights: [
      "White sand beaches",
      "Water sports available",
      "Resort accommodations",
      "Coral reef snorkeling",
      "Sunset cruises",
    ],
    practicalDetails: [
      "Best season: December–March",
      "Airport transfers available",
      "Local cuisine recommended",
      "Beachwear required",
      "Advance reservations suggested",
    ],
  },
  {
    id: 3,
    title: "Mountain Trek",
    subHeading: "Challenge yourself with breathtaking climbs and views.",
    description: "Trek Kenya’s scenic mountains and enjoy panoramic vistas and unique flora and fauna.",
    images: [
      "/experience/mountain1.jpg",
      "/experience/mountain2.jpg",
      "/experience/mountain3.jpg",
      "/experience/mountain4.jpg",
      "/experience/mountain5.jpg",
    ],
    link: "/experience/mountain",
    highlights: [
      "Guided hiking tours",
      "Panoramic viewpoints",
      "Wildlife encounters",
      "Alpine scenery",
      "Camping options",
    ],
    practicalDetails: [
      "Best season: January–March",
      "Physical fitness required",
      "Permit may be needed",
      "Weather can change rapidly",
      "Pack appropriate gear",
    ],
  },
  {
    id: 4,
    title: "City Lights",
    subHeading: "Experience the vibrant energy of Kenya’s urban centers.",
    description: "Discover culture, cuisine, and nightlife in Nairobi and other bustling cities.",
    images: [
      "/experience/city1.jpg",
      "/experience/city2.jpg",
      "/experience/city3.jpg",
      "/experience/city4.jpg",
      "/experience/city5.jpg",
    ],
    link: "/experience/city",
    highlights: [
      "Museums and galleries",
      "Nightlife hotspots",
      "Shopping districts",
      "Local markets",
      "Cultural festivals",
    ],
    practicalDetails: [
      "Best explored by taxi",
      "Local SIM recommended",
      "Safety precautions advised",
      "Cashless payments accepted",
      "Dress code varies",
    ],
  },
  {
    id: 5,
    title: "Cultural Journey",
    subHeading: "Immerse yourself in Kenya’s rich traditions and heritage.",
    description: "Engage with local communities, enjoy traditional music, and explore vibrant art scenes.",
    images: [
      "/experience/culture1.jpg",
      "/experience/culture2.jpg",
      "/experience/culture3.jpg",
      "/experience/culture4.jpg",
      "/experience/culture5.jpg",
    ],
    link: "/experience/culture",
    highlights: [
      "Traditional performances",
      "Craft markets",
      "Community visits",
      "Culinary experiences",
      "Art workshops",
    ],
    practicalDetails: [
      "Respect local customs",
      "Photography may require permission",
      "Guided tours available",
      "Language barriers possible",
      "Advance arrangements recommended",
    ],
  },
  {
    id: 6,
    title: "Wildlife Encounters",
    subHeading: "Get close to Kenya’s iconic animals in their natural habitats.",
    description: "Enjoy bird watching, nature walks, and visits to conservation centers for unforgettable wildlife experiences.",
    images: [
      "/experience/wildlife1.jpg",
      "/experience/wildlife2.jpg",
      "/experience/wildlife3.jpg",
      "/experience/wildlife4.jpg",
      "/experience/wildlife5.jpg",
    ],
    link: "/experience/wildlife",
    highlights: [
      "Bird watching",
      "Nature walks",
      "Conservation centers",
      "Photography opportunities",
      "Expert guides",
    ],
    practicalDetails: [
      "Binoculars recommended",
      "Early morning tours best",
      "Follow guide instructions",
      "Dress for outdoors",
      "Respect wildlife boundaries",
    ],
  },
];