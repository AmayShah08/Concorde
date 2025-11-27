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
      "/Exp/Wonder/karisa_walking_safari_1.webp",
      "/Exp/Wonder/karisa_walking_safari_2.webp",
      "/Exp/Wonder/karisa_walking_safari_3.webp",
      "/Exp/Wonder/karisa_walking_safari_4.webp",
      "/Exp/Wonder/karisa_walking_safari_5.webp",
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
    description: "Discover Zanzibar at your own pace — on two wheels. Cycle past spice farms, along palm-fringed beaches, and through the winding streets of Stone Town. It’s a vibrant blend of adventure, culture, and island charm.",
    images: [
      "/Exp/Wonder/cycling1.jpg",
      "/Exp/Wonder/cycling2.jpg",
      "/Exp/Wonder/cycling3.jpg",
      "/Exp/Wonder/cycling4.jpg",
    ],
    link: "/experience/cycling",
    highlights: [
      "Cycle through spice plantations and coastal villages",
      "Explore UNESCO listed Stone Town",
      "Interact with locals along scenic backroads",
      "Combine history, adventure and relaxation",
    ],
    practicalDetails: [
      "Duration- Half-day to full-day tours",
      "Best time- June to October and December to February (dry seasons)",
      "Suitable for all fitness levels (e-bikes available in some tours)",
    ],
  },
  {
    id: 3,
    title: "Lewa Conservancy - Horseback Safaris",
    subHeading: "Ride with the Wild",
    description: "Gallop across open plains, trotting quietly alongside giraffes, zebras, and antelope in Lewa Conservancy. Few experiences capture the spirit of safari quite like seeing wildlife from horseback.",
    images: [
      "/Exp/Wonder/horseback1.jpg",
      "/Exp/Wonder/horseback2.jpg",
      "/Exp/Wonder/horseback3.jpg",
      "/Exp/Wonder/horseback4.webp",
      "/Exp/Wonder/horseback5.webp",
    ],
    link: "/experience/horseback",
    highlights: [
      "Exclusive horseback rides in Lewa Conservancy",
      "Ride alongside herds of giraffes, zebras, and antelope",
      "Expert equestrian guides for all levels",
      "Scenic backdrops of Mount Kenya and rolling savannahs",
    ],
    practicalDetails: [
      "Duration: 2–3 hours per ride (longer safaris available)",
      "Best time: June–October and December–March",
      "Riders of all abilities welcome; children over 12 recommended.",
    ],
  },
  {
    id: 4,
    title: "Luxury Cruises",
    subHeading: "Sail Beyond Horizons",
    description: "From African river journeys to worldwide ocean voyages, luxury cruises combine adventure with indulgence. With Concorde Safaris, you’ll enjoy curated itineraries, world-class service, and seamless pre- and post-cruise safari extensions.",
    images: [
      "/Exp/Wonder/cruise1.jpg",
      "/Exp/Wonder/cruise2.jpg",
      "/Exp/Wonder/cruise3.jpg",
      "/Exp/Wonder/cruise4.jpg",
    ],
    link: "/experience/cruise",
    highlights: [
      "Sanctuary & A&K: intimate river cruises in Africa and beyond",
      "Crystal Cruises: ultra-luxury ocean voyages",
      "MSC & Norwegian: stylish, family-friendly explorations",
      "Gourmet dining, wellness facilities, and exclusive excursions",
    ],
    practicalDetails: [
      "Duration: From 3 nights to world voyages",
      "Best time: Year-round, depending on region",
      "Suitable for couples, families, and group travelers",
    ],
  },
  {
    id: 5,
    title: "Mt. Kenya & Mt. Kilimanjaro Hiking",
    subHeading: "Conquer Africa’s Legendary Peaks",
    description: "Stand tall on the rooftops of Africa. From the rugged beauty of Mt. Kenya to the snow-capped majesty of Mt. Kilimanjaro, these iconic hikes promise adventure, breathtaking landscapes, and the triumph of reaching the summit.",
    images: [
      "/Exp/Wonder/mt1.jpg",
      "/Exp/Wonder/mt2.jpg",
      "/Exp/Wonder/mt3.jpg",
      "/Exp/Wonder/mt4.jpg",
    ],
    link: "/experience/culture",
    highlights: [
      "Mt. Kenya: jagged peaks, alpine lakes, and diverse ecosystems",
      "Mt. Kilimanjaro: the world’s tallest freestanding mountain",
      "Guided treks tailored to your fitness and experience level",
      "Panoramic sunrises above the clouds",
    ],
    practicalDetails: [
      "Duration: Mt. Kenya (4–6 days), Mt. Kilimanjaro (6–9 days)",
      "Best time: January–March and June–October",
      "Suitable for fit travelers; no technical climbing required",
    ],
  },
  {
    id: 6,
    title: "Camel Safaris",
    subHeading: "Journey Back in Time",
    description: "Explore Kenya’s wild northern frontiers on camelback, led by Samburu or Somali guides. This unique safari evokes the romance of ancient caravan trails, combining slow travel with unmatched authenticity.",
    images: [
      "/Exp/Wonder/camel1.webp",
      "/Exp/Wonder/camel2.webp",
      "/Exp/Wonder/camel3.webp",
      "/Exp/Wonder/camel4.webp",
      "/Exp/Wonder/camel5.webp",
    ],
    link: "/experience/camel",
    highlights: [
      "Multi-day camel treks through Samburu or Laikipia",
      "Experience traditional nomadic culture",
      "Camp under the stars in remote wilderness",
      "Wildlife encounters along untouched trails",
    ],
    practicalDetails: [
      "Duration: Half-day excursions to 3–5 day expeditions",
      "Best time: June–October and December–March",
      "Suitable for adventurous travelers seeking offbeat safari style",
    ],
  },
];