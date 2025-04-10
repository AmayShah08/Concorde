export interface Destination {
  id: number;
  name: string;
  image: string;
  overview: string;
  top_experiences: {
    title: string;
    description: string;
    image: string[];
  }[];
  time_to_visits: { months: string; reason: string }[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "South Africa",
    image: "/Destination/SouthAfrica.jpg",
    overview: "South Africa is a country of breathtaking contrasts, offering everything from world-class safaris to cosmopolitan cities, stunning coastlines, and thrilling adventure experiences. Whether you’re spotting the Big Five in Kruger National Park, sipping fine wines in the Cape Winelands, or taking in the iconic views of Table Mountain, South Africa seamlessly blends nature, luxury, and culture. Its diverse landscapes range from dramatic cliffs along the Garden Route to the rolling hills of Zululand, ensuring that every traveller finds something extraordinary. With rich history, vibrant cities, and some of the most luxurious lodges and resorts in Africa, South Africa is a must-visit destination for both adventure seekers and leisure travellers.",
    top_experiences: [
      {
        title: "Big Five Safaris in Kruger & Private Game Reserves",
        description: "Experience close encounters with the Big Five in Kruger National Park, one of Africa’s top wildlife destinations. For a more exclusive safari, South Africa’s private reserves like Sabi Sands offer luxury lodges, expert-guided game drives, and unforgettable bush dinners under the stars.",
        image:["/Exp/SA/sa_kruger_1.jpg","/Exp/SA/sa_kruger_2.jpg", "/Exp/SA/sa_kruger_3.jpg","/Exp/SA/sa_kruger_4.jpg"]
      },
      {
        title: "Cape Town and Table Mountain",
        description: "Cape Town is a vibrant mix of culture, stunning landscapes, and world-class dining. Ride a cable car up Table Mountain, visit historic Robben Island, or stroll through the colorful Bo-Kaap. With lively waterfronts, pristine beaches, and nearby nature reserves, it’s the perfect mix of adventure and relaxation.",
        image:["/Exp/SA/sa_ct_1.jpg","/Exp/SA/sa_ct_2.jpg", "/Exp/SA/sa_ct_3.jpg", "/Exp/SA/sa_ct_4.jpg"]
      },
      {
        title: "Cape Winelands- A Taste of South Africa's Finest Wines",
        description: "Savor world-class wines in the scenic valleys of Stellenbosch, Franschhoek, and Paarl. The Cape Winelands offer award-winning vineyards, gourmet dining, and charming estates. Enjoy guided tastings, vineyard picnics, and even hot air balloon rides over the breathtaking countryside.",
        image:["/Exp/SA/sa_wine_1.jpg","/Exp/SA/sa_wine_2.jpg", "/Exp/SA/sa_wine_3.jpg", "/Exp/SA/sa_wine_4.jpg"]
      },
      {
        title: "The Garden Route – Coastal Beauty & Adventure",
        description: "The Garden Route, stretching from Cape Town to Port Elizabeth, is famed for its dramatic cliffs, lush forests, and charming seaside towns. Explore Knysna’s lagoons, bungee jump from Bloukrans Bridge, or go whale watching in Hermanus. With hiking trails, adventure sports, and luxury lodges, it’s a paradise for nature lovers and thrill-seekers.",
        image:["/Exp/SA/sa_gr_1.jpg","/Exp/SA/sa_gr_2.jpg", "/Exp/SA/sa_gr_3.jpg", "/Exp/SA/sa_gr_4.jpg"]
      },
      {
        title: "Wildlife & Zulu Culture in KwaZulu-Natal",
        description: "Beyond its golden beaches, KwaZulu-Natal boasts incredible game reserves like Hluhluwe-iMfolozi, where you can see rare black and white rhinos. The region is also rich in Zulu heritage, offering cultural tours where visitors can learn about traditional customs, warrior history, and vibrant local traditions.",
        image:["/Exp/SA/sa_zulu_1.jpg","/Exp/SA/sa_zulu_2.jpg", "/Exp/SA/sa_zulu_3.jpg", "/Exp/SA/sa_zulu_4.jpg"]
      },
      {
        title: "Luxury & Safari on the Eastern Cape",
        description: "Beyond its golden beaches, KwaZulu-Natal boasts incredible game reserves like Hluhluwe-iMfolozi, where you can see rare black and white rhinos. The region is also rich in Zulu heritage, offering cultural tours where visitors can learn about traditional customs, warrior history, and vibrant local traditions.",
        image:["/Exp/SA/sa_east_1.jpg","/Exp/SA/sa_east_2.jpg", "/Exp/SA/sa_east_3.jpg", "/Exp/SA/sa_east_4.jpg"]
      },
      {
        title: "Shark Cage Diving in Gansbaai",
        description: "Experience the thrill of coming face-to-face with great white sharks in their natural habitat. An adrenaline-pumping adventure for thrill-seekers and marine enthusiasts.",
        image:["/Exp/SA/sa_shark_1.jpg","/Exp/SA/sa_shark_2.jpg", "/Exp/SA/sa_shark_3.jpg", "/Exp/SA/sa_shark_4.jpg"]
      },
    ],
    time_to_visits: [
        {
          months: "May - September:",
          reason: "The best time for safaris, as wildlife gathers around water sources and the vegetation is less dense, making spotting animals easier.",
        },
        {
          months: "November - March:",
          reason: "Ideal for beach holidays, wine country tours, and exploring Cape Town in its warmest months.",
        },
        {
          months: "July - November:",
          reason: "Best for whale watching along the coast, especially in Hermanus.",
        },
      ],
  },
  {
    id: 2,
    name: "Botswana",
    image: "/Destination/Botswana.jpg",
    overview: "Botswana is one of Africa’s most exclusive and pristine safari destinations, known for its vast wilderness, abundant wildlife, and high-end lodges offering unparalleled luxury. From the lush waterways of the Okavango Delta to the vast salt flats of the Makgadikgadi Pans, Botswana provides a diverse and breathtaking landscape for travellers seeking adventure, serenity, and authentic safari experiences. With a strong focus on conservation and low-impact tourism, Botswana offers private, intimate safaris where you can witness incredible wildlife without the crowds. Whether gliding through the Delta in a mokoro canoe, spotting massive elephant herds in Chobe, or experiencing the stark beauty of the Kalahari, Botswana is a haven for nature lovers and luxury travellers alike.",
    top_experiences: [
      {
        title: "Okavango Delta- The Jewel of Botswana",
        description: "The Okavango Delta, a UNESCO-listed wonder, is a maze of waterways teeming with wildlife. Explore by mokoro (traditional canoe), boat safari, or guided walks to spot hippos, elephants, and rare birds. Stay in exclusive lodges that blend seamlessly into this lush paradise.",
        image:["/Exp/BT/bt_ok_1.jpg","/Exp/BT/bt_ok_2.jpg", "/Exp/BT/bt_ok_3.jpg", "/Exp/BT/bt_ok_4.jpg"]
      },
      {
        title: "Chobe National Park- The Land of the Giants",
        description: "Chobe National Park, home to Africa’s largest elephant population, is a must-visit for wildlife lovers. Enjoy sunset boat safaris along the Chobe River, spotting elephants, buffalo, and hippos, or take a game drive to see lions and leopards. With stunning riverfront lodges, Chobe offers a thrilling safari experience.",
        image:["/Exp/BT/bt_chobe_1.jpg","/Exp/BT/bt_chobe_2.jpg", "/Exp/BT/bt_chobe_3.jpg", "/Exp/BT/bt_chobe_4.jpg"]
      },
      {
        title: "Moremi Game Reserve – A Classic Big Five Safari Destination",
        description: "Moremi Game Reserve, nestled in the Okavango Delta, is a wildlife haven where you can spot the Big Five in a breathtaking natural setting. Offering both land and water safaris, it provides one of Africa’s most diverse and rewarding game-viewing experiences.",
        image:["/Exp/BT/bt_moremi_1.jpg","/Exp/BT/bt_moremi_2.jpg", "/Exp/BT/bt_moremi_3.jpg", "/Exp/BT/bt_moremi_4.jpg"]
      },
      {
        title: "Makgadikgadi Pans – Otherworldly Desert Landscapes",
        description: "The Makgadikgadi Salt Pans create a surreal, lunar-like landscape, contrasting Botswana’s lush deltas. Visit during the rainy season to witness thousands of flamingos and the dramatic zebra migration. For a unique experience, walk with San Bushmen and learn their ancient survival skills.",
        image:["/Exp/BT/bt_pans_1.jpg","/Exp/BT/bt_pans_2.jpg", "/Exp/BT/bt_pans_3.jpg", "/Exp/BT/bt_pans_4.jpg"]
      },
      {
        title: "Central Kalahari Game Reserve – A Remote Wilderness Escape",
        description: "The Central Kalahari, one of Africa’s most remote reserves, offers a raw and untouched safari experience. Spot black-maned Kalahari lions, cheetahs, and elusive brown hyenas in this vast desert wilderness, perfect for those seeking solitude and adventure.",
        image:["/Exp/BT/bt_kalahari_1.jpg","/Exp/BT/bt_kalahari_2.jpg", "/Exp/BT/bt_kalahari_3.jpg", "/Exp/BT/bt_kalahari_4.jpg"]
      },
    ],
    time_to_visits: [
      {
        months: "May - October:",
        reason: "The dry season offers the best wildlife viewing, as animals gather around water sources, and the landscapes are more open.",
      },
      {
        months: "November - April:",
        reason: "The wet season brings lush scenery, dramatic skies, and the arrival of migratory birds, making it perfect for birdwatching and experiencing the zebra migration in Makgadikgadi.",
      },
    ],
  },
  // {
  //   id: 3,
  //   name: "Dubai, UAE",
  //   image: "https://via.placeholder.com/300x200?text=Dubai",
  //   overview: "A modern marvel with luxury shopping and iconic skyscrapers.",
  //   top_experiences: ["Burj Khalifa", "Palm Jumeirah", "Desert Safari"],
  //   time_to_visits: [
  //     {
  //       months: "May - September:",
  //       reason: "The best time for safaris, as wildlife gathers around water sources and the vegetation is less dense, making spotting animals easier.",
  //     },
  //     {
  //       months: "November - March:",
  //       reason: "Ideal for beach holidays, wine country tours, and exploring Cape Town in its warmest months.",
  //     },
  //     {
  //       months: "July - November:",
  //       reason: "Best for whale watching along the coast, especially in Hermanus.",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   name: "Tokyo, Japan",
  //   image: "https://via.placeholder.com/300x200?text=Tokyo",
  //   overview: "A bustling city blending tradition and modernity.",
  //   top_experiences: ["Tokyo Tower", "Shibuya Crossing", "Meiji Shrine"],
  //   time_to_visits: [
  //     {
  //       months: "May - September:",
  //       reason: "The best time for safaris, as wildlife gathers around water sources and the vegetation is less dense, making spotting animals easier.",
  //     },
  //     {
  //       months: "November - March:",
  //       reason: "Ideal for beach holidays, wine country tours, and exploring Cape Town in its warmest months.",
  //     },
  //     {
  //       months: "July - November:",
  //       reason: "Best for whale watching along the coast, especially in Hermanus.",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   name: "New York, USA",
  //   image: "https://via.placeholder.com/300x200?text=New+York",
  //   overview: "The city that never sleeps, full of iconic landmarks.",
  //   top_experiences: ["Statue of Liberty", "Times Square", "Central Park"],
  //   time_to_visits: [
  //     {
  //       months: "May - September:",
  //       reason: "The best time for safaris, as wildlife gathers around water sources and the vegetation is less dense, making spotting animals easier.",
  //     },
  //     {
  //       months: "November - March:",
  //       reason: "Ideal for beach holidays, wine country tours, and exploring Cape Town in its warmest months.",
  //     },
  //     {
  //       months: "July - November:",
  //       reason: "Best for whale watching along the coast, especially in Hermanus.",
  //     },
  //   ],
  // },
];