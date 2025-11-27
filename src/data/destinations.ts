export interface Destination {
  id: number;
  name: string;
  image: string;
  category: string;
  overview: string;
  latitude: number;
  longitude: number;
  bounds: {
    southWest: number[];
    northEast: number[];
  }
  top_experiences: {
    title: string;
    description: string;
    image: string[];
  }[];
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Kenya",
    image: "/Destination/Kenya.jpg",
    category: "Eastern Africa",
    overview: "Kenya is a land of diverse landscapes, rich wildlife, and vibrant cultures, making it one of Africa’s most sought-after destinations. From the rolling savannahs of the Maasai Mara, where the Great Migration unfolds, to the pristine beaches of Diani and the rugged terrains of Samburu, Kenya offers something for every traveller. Whether you’re looking for luxury safaris, adrenaline-packed adventures, or cultural immersions with the Maasai and Samburu tribes, Kenya seamlessly blends nature, adventure, and heritage. With world-class safari lodges, breathtaking scenery, and unforgettable wildlife encounters, this East African gem guarantees an experience of a lifetime.",
    latitude: -0.023559,
    longitude: 37.906193,
    bounds: {
      southWest: [-4.899520, 33.909821],
      northEast: [4.620780, 41.899078],
  },
    top_experiences: [
    {
      title: "The Great Migration in Maasai Mara",
      description: "Experience one of nature’s most thrilling spectacles as millions of wildebeest, zebras, and gazelles cross the Mara River, braving currents and crocodiles. Best viewed from July to October, the Maasai Mara also offers exceptional year-round game viewing with abundant lions, cheetahs, and leopards.",
      image:["/Exp/KE/ke_mara_1.jpg","/Exp/KE/ke_mara_2.jpg", "/Exp/KE/ke_mara_3.jpg", "/Exp/KE/ke_mara_4.jpg"]
    },
    {
      title: "Safari in Amboseli & Tsavo",
      description: "Amboseli, set against Mount Kilimanjaro, is famed for its massive elephant herds and stunning landscapes. Tsavo, Kenya’s largest park, is home to red-dusted elephants, leopards, and striking rock formations. Both parks promise diverse wildlife and breathtaking scenery.",
      image:["/Exp/KE/ke_ambo_1.jpg","/Exp/KE/ke_ambo_2.jpg", "/Exp/KE/ke_ambo_3.jpg", "/Exp/KE/ke_ambo_4.jpg"]
    },
    {
      title: "Luxury & Adventure in Laikipia",
      description: "Home to private conservancies like Ol Pejeta and Lewa, Laikipia offers exclusive safaris with rhino tracking. With a strong focus on conservation and luxury, it’s ideal for those seeking an intimate, high end safari experience.",
      image:["/Exp/KE/ke_laikipia_1.jpg","/Exp/KE/ke_laikipia_2.jpg", "/Exp/KE/ke_laikipia_3.jpg", "/Exp/KE/ke_laikipia_4.jpg"]
    },
    {
      title: "Cultural Encounters with the Maasai & Samburu",
      description: "Visit Maasai and Samburu villages to learn about their rich traditions, warrior dances, and deep connection to nature. These indigenous communities play a vital role in conservation, offering unique insights into Kenya’s cultural heritage.",
      image:["/Exp/KE/ke_maasai_1.jpg","/Exp/KE/ke_maasai_2.jpg", "/Exp/KE/ke_maasai_3.jpg", "/Exp/KE/ke_maasai_4.jpg"]
    },
    {
      title: "Kenyan Coast",
      description: "From Diani to Lamu, Kenya’s coastline is a paradise of white beaches and Swahili culture. Diani Beach is perfect for water sports like kite surfing and diving, while Lamu Island offers a laid-back escape with historic Swahili architecture, bustling markets, and dhow cruises.",
      image:["/Exp/KE/ke_coast_1.jpg","/Exp/KE/ke_coast_2.jpg", "/Exp/KE/ke_coast_3.jpg", "/Exp/KE/ke_coast_4.jpg"]
    },
  ],
  },
  {
    id: 2,
    name: "Tanzania",
    image: "/Destination/Tanzania.jpg",
    category: "Eastern Africa",
    overview: "Tanzania is a dream destination for safari lovers, adventure seekers, and beachgoers alike. Home to some of Africa’s most renowned national parks and game reserves, it offers unparalleled wildlife encounters, breathtaking landscapes, and cultural richness. Whether you're witnessing the dramatic Great Migration in the Serengeti, trekking the legendary Mount Kilimanjaro, or unwinding on the pristine shores of Zanzibar, Tanzania provides an unforgettable journey where adventure seamlessly meets luxury. From vibrant Maasai villages to secluded island retreats, this East African gem promises experiences that cater to both thrill-seekers and those looking to indulge in nature’s serenity.",
    latitude: -6.270353,
    longitude: 34.823454,
    bounds: {
      southWest: [-11.011916, 29.000000],
      northEast: [-1.001311, 40.185142],
    },
    top_experiences: [
      {
        title: "Serengeti National Park",
        description: "Famous for the Great Migration, the Serengeti hosts over 1.5 million wildebeest and zebras crossing its vast plains. Beyond the migration, it offers year-round game viewing with abundant lions, cheetahs, and leopards, making it a top destination for wildlife lovers.",
        image:["/Exp/TZ/tz_serengeti_1.jpg","/Exp/TZ/tz_serengeti_2.jpg", "/Exp/TZ/tz_serengeti_3.jpg", "/Exp/TZ/tz_serengeti_4.jpg"]
      },
      {
        title: "Ngorongoro Crater",
        description: "A UNESCO-listed wonder, Ngorongoro is the world’s largest inactive volcanic caldera, teeming with wildlife. Its enclosed ecosystem is home to elephants, buffalos, and rare black rhinos, offering breathtaking views and a chance to see the Big Five in a single game drive.",
        image:["/Exp/TZ/tz_ngorongoro_1.jpg","/Exp/TZ/tz_ngorongoro_2.jpg", "/Exp/TZ/tz_ngorongoro_3.jpg", "/Exp/TZ/tz_ngorongoro_4.jpg"]
      },
      {
        title: "Mount Kilimanjaro",
        description: "As Africa’s tallest peak (5,895m), Kilimanjaro is a bucket-list trek with routes like Marangu and Machame. Hikers pass through lush rainforests and alpine deserts before reaching the glacier-covered summit—an unforgettable adventure requiring no technical climbing experience.",
        image:["/Exp/TZ/tz_kili_1.jpg","/Exp/TZ/tz_kili_2.jpg", "/Exp/TZ/tz_kili_3.jpg", "/Exp/TZ/tz_kili_4.jpg"]
      },
      {
        title: "Zanzibar & the Swahili Coast",
        description: "Zanzibar is a tropical paradise of white-sand beaches, turquoise waters, and rich cultural heritage. Explore Stone Town’s UNESCO-listed streets, spice markets, and historic sites, or dive into world class snorkeling, diving, and dhow sailing on the Indian Ocean.",
        image:["/Exp/TZ/tz_zanzibar_1.jpg","/Exp/TZ/tz_zanzibar_2.jpg", "/Exp/TZ/tz_zanzibar_3.jpg", "/Exp/TZ/tz_zanzibar_4.jpg"]
      },
      {
        title: "Tarangire & Lake Manyara",
        description: "Tarangire is famed for its vast elephant herds and ancient baobabs, offering uncrowded safari experiences with lions, leopards, and over 500 bird species. Nearby, Lake Manyara is known for tree climbing lions and flamingo-filled shores, making it a photographer’s dream.",
        image:["/Exp/TZ/tz_manyara_1.jpg","/Exp/TZ/tz_manyara_2.jpg", "/Exp/TZ/tz_manyara_3.jpg", "/Exp/TZ/tz_manyara_4.jpg"]
      },
    ],
  },
  {
    id: 3,
    name: "Rwanda",
    image: "/Destination/Rwanda.jpg",
    category: "Eastern Africa",
    overview: "Rwanda is a breathtaking destination known for its rolling green hills, pristine lakes, and remarkable wildlife encounters. As one of Africa’s safest and cleanest countries, it offers a seamless blend of adventure and luxury. The country’s biggest highlight is its intimate gorilla trekking experiences, but beyond that, Rwanda boasts diverse national parks, vibrant cultural heritage, and stunning landscapes waiting to be explored.",
    latitude: -1.9403,
    longitude: 29.8739,
    bounds: {
      southWest: [-2.812398, 28.740200],
      northEast: [-0.981510, 30.929226],
    },
    top_experiences: [
      {
        title: "Volcanoes National Park – Gorilla Trekking in the Mist",
        description: "A once-in-a-lifetime experience to observe endangered mountain gorillas in their natural habitat. Trek through dense bamboo forests alongside expert guides for an unforgettable wildlife encounter.",
        image:["/Exp/RW/rw_volcanoes_1.jpg","/Exp/RW/rw_volcanoes_2.jpg", "/Exp/RW/rw_volcanoes_3.jpg", "/Exp/RW/rw_volcanoes_4.jpg"]
      },
      {
        title: "Nyungwe Forest National Park – Chimpanzees & Canopy Walks",
        description: "A lush rainforest teeming with chimpanzees, rare primates, and colorful birds. Walk above the treetops on East Africa’s only canopy walkway for a breathtaking view of the jungle.",
        image:["/Exp/RW/rw_nyungwe_1.jpg","/Exp/RW/rw_nyungwe_2.jpg", "/Exp/RW/rw_nyungwe_3.jpg", "/Exp/RW/rw_nyungwe_4.jpg"]
      },
      {
        title: "Akagera National Park – Rwanda’s Big Five Safari",
        description: "A conservation success story, this park offers classic safari experiences with lions, rhinos, elephants, and leopards. Enjoy game drives and boat safaris on Lake Ihema, home to hippos and crocodiles.",
        image:["/Exp/RW/rw_akagera_1.jpg","/Exp/RW/rw_akagera_2.jpg", "/Exp/RW/rw_akagera_3.jpg", "/Exp/RW/rw_akagera_4.jpg"]
      },
      {
        title: "Lake Kivu – A Scenic Lakeside Retreat",
        description: "One of Africa’s Great Lakes, perfect for relaxation, boat cruises, and watersports. Visit lakeside towns like Gisenyi for stunning sunsets and vibrant local culture.",
        image:["/Exp/RW/rw_kivu_1.jpg","/Exp/RW/rw_kivu_2.jpg", "/Exp/RW/rw_kivu_3.jpg", "/Exp/RW/rw_kivu_4.jpg"]
      },
      {
        title: "Kigali – Africa’s Cleanest & Most Vibrant Capital",
        description: "A city blending modernity with deep history. Visit the Kigali Genocide Memorial, explore bustling markets, and enjoy Rwanda’s growing café culture.",
        image:["/Exp/RW/rw_kigali_1.jpg","/Exp/RW/rw_kigali_2.jpg", "/Exp/RW/rw_kigali_3.jpg", "/Exp/RW/rw_kigali_4.jpg"]
      },
    ],
  },
  {
    id: 4,
    name: "Uganda",
    image: "/Destination/Uganda.jpg",
    category: "Eastern Africa",
    overview: "Uganda is a hidden gem for safari lovers, offering lush landscapes, diverse wildlife, and thrilling adventure experiences. From trekking with mountain gorillas in misty forests to cruising along the Nile in search of hippos and crocodiles, Uganda combines breathtaking nature with rich cultural heritage. With its mix of savannah, lakes, and mountains, Uganda offers an off-the-beaten-path safari experience that is both intimate and unforgettable.",
    latitude: 1.661020,
    longitude: 32.856375,
    bounds: {
      southWest: [-1.470426, 29.433514],
      northEast: [4.440763, 34.928363],
    },
    top_experiences: [
      {
        title: "Bwindi Impenetrable Forest – Gorilla Trekking Paradise",
        description: "A UNESCO World Heritage Site and one of the best places on Earth to see endangered mountain gorillas up close. Trek through dense rainforest with expert guides for an awe inspiring encounter with these gentle giants.",
        image:["/Exp/UG/ug_bwindi_1.jpg","/Exp/UG/ug_bwindi_2.jpg", "/Exp/UG/ug_bwindi_3.jpg", "/Exp/UG/ug_bwindi_4.jpg"]
      },
      {
        title: "Queen Elizabeth National Park – Diverse Wildlife & Scenic Beauty",
        description: "Home to tree-climbing lions, large elephant herds, and an abundance of hippos along the Kazinga Channel. Enjoy boat safaris, game drives, and breathtaking views of the Rwenzori Mountains.",
        image:["/Exp/UG/ug_elizabeth_1.jpg","/Exp/UG/ug_elizabeth_2.jpg", "/Exp/UG/ug_elizabeth_3.jpg", "/Exp/UG/ug_elizabeth_4.jpg"]
      },
      {
        title: "Murchison Falls National Park – The Power of the Nile",
        description: "Witness the mighty Nile River squeeze through a narrow gorge, creating the thunderous Murchison Falls. Spot giraffes, buffalo, crocodiles, and even the rare shoebill stork on a safari or boat cruise.",
        image:["/Exp/UG/ug_murchison_1.jpg","/Exp/UG/ug_murchison_2.jpg", "/Exp/UG/ug_murchison_3.jpg", "/Exp/UG/ug_murchison_4.jpg"]
      },
      {
        title: "Kibale National Park – Chimpanzee Tracking Haven",
        description: "Walk through lush forests to observe playful chimpanzees in their natural habitat, along with over 300 bird species and other primates.",
        image:["/Exp/UG/ug_kibale_1.jpg","/Exp/UG/ug_kibale_2.jpg", "/Exp/UG/ug_kibale_3.jpg", "/Exp/UG/ug_kibale_4.jpg"]
      },
      {
        title: "Lake Bunyonyi – A Serene Escape",
        description: "Known as the “Switzerland of Africa,” this picturesque lake is surrounded by rolling hills and dotted with islands. Perfect for canoeing, swimming, and relaxation.",
        image:["/Exp/UG/ug_bunyonyi_1.jpg","/Exp/UG/ug_bunyonyi_2.jpg", "/Exp/UG/ug_bunyonyi_3.jpg", "/Exp/UG/ug_bunyonyi_4.jpg"]
      },
      {
        title: "Rwenzori Mountains – The Mountains of the Moon",
        description: "A paradise for hikers, with snow-capped peaks, stunning valleys, and unique flora. A challenging but rewarding trekking experience.",
        image:["/Exp/UG/ug_rwenzori_1.jpg","/Exp/UG/ug_rwenzori_2.jpg", "/Exp/UG/ug_rwenzori_3.jpg", "/Exp/UG/ug_rwenzori_4.jpg"]
      },
    ],
  },
  {
    id: 5,
    name: "South Africa",
    image: "/Destination/SouthAfrica.jpg",
    category: "Southern Africa",
    overview: "South Africa is a country of breathtaking contrasts, offering everything from world-class safaris to cosmopolitan cities, stunning coastlines, and thrilling adventure experiences. Whether you’re spotting the Big Five in Kruger National Park, sipping fine wines in the Cape Winelands, or taking in the iconic views of Table Mountain, South Africa seamlessly blends nature, luxury, and culture. Its diverse landscapes range from dramatic cliffs along the Garden Route to the rolling hills of Zululand, ensuring that every traveller finds something extraordinary. With rich history, vibrant cities, and some of the most luxurious lodges and resorts in Africa, South Africa is a must-visit destination for both adventure seekers and leisure travellers.",
    latitude: -28.222089,
    longitude: 26.190889,
    bounds: {
      southWest: [-34.859861, 16.372993],
      northEast: [-21.832126, 33.743375],
    },
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
  },
  {
    id: 6,
    name: "Botswana",
    image: "/Destination/Botswana.jpg",
    category: "Southern Africa",
    overview: "Botswana is one of Africa’s most exclusive and pristine safari destinations, known for its vast wilderness, abundant wildlife, and high-end lodges offering unparalleled luxury. From the lush waterways of the Okavango Delta to the vast salt flats of the Makgadikgadi Pans, Botswana provides a diverse and breathtaking landscape for travellers seeking adventure, serenity, and authentic safari experiences. With a strong focus on conservation and low-impact tourism, Botswana offers private, intimate safaris where you can witness incredible wildlife without the crowds. Whether gliding through the Delta in a mokoro canoe, spotting massive elephant herds in Chobe, or experiencing the stark beauty of the Kalahari, Botswana is a haven for nature lovers and luxury travellers alike.",
    latitude: -21.860968,
    longitude: 24.079352,
    bounds: {
      southWest: [-26.979784, 19.915432],
      northEast: [-17.176478, 29.020123],
    },
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
  },
  {
    id: 7,
    name: "Victoria Falls",
    image: "/Destination/Victoria.jpg",
    category: "Southern Africa",
    overview: "Victoria Falls, one of the Seven Natural Wonders of the World, is a breathtaking spectacle on the border of Zambia and Zimbabwe. Known locally as Mosi-oa Tunya (The Smoke That Thunders), the falls are the largest sheet of falling water on Earth. Beyond the mesmerizing cascades, Victoria Falls is an adventure hub, offering thrilling activities, rich wildlife, and stunning landscapes for travelers seeking both relaxation and adrenaline-pumping experiences.",
    latitude: -17.924222,
    longitude: 25.856485,
    bounds: {
      southWest: [-18.000000, 25.700000],
      northEast: [-17.800000, 26.000000],
    },
    top_experiences: [
      {
        title: "Victoria Falls – A Natural Marvel",
        description: "Feel the power of the Zambezi River as it plunges over 100 meters, creating misty rainbows. Best views await in Victoria Falls National Park (Zimbabwe) and Mosi-oa-Tunya National Park (Zambia).",
        image:["/Exp/VF/vf_victoria_1.jpg","/Exp/VF/vf_victoria_2.jpg", "/Exp/VF/vf_victoria_3.jpg", "/Exp/VF/vf_victoria_4.jpg"]
      },
      {
        title: "Devil’s Pool – Swim on the Edge",
        description: "A bucket-list thrill, this natural rock pool lets you float right at the waterfall’s edge, offering breathtaking views and epic photo moments.",
        image:["/Exp/VF/vf_pool_1.jpg","/Exp/VF/vf_pool_2.jpg", "/Exp/VF/vf_pool_3.jpg", "/Exp/VF/vf_pool_4.jpg"]
      },
      {
        title: "Helicopter & Microlight Flights – Aerial Spectacle",
        description: "Soar above Victoria Falls for unmatched views of the cascading waters and winding Zambezi River in an unforgettable aerial adventure.",
        image:["/Exp/VF/vf_helicopter_1.jpg","/Exp/VF/vf_helicopter_2.jpg", "/Exp/VF/vf_helicopter_3.jpg", "/Exp/VF/vf_helicopter_4.jpg"]
      },
      {
        title: "Zambezi River Safaris – Tranquil & Thrilling",
        description: "Glide past hippos and elephants on a sunset cruise or conquer world-class rapids in an exhilarating white-water rafting experience.",
        image:["/Exp/VF/vf_zambezi_1.jpg","/Exp/VF/vf_zambezi_2.jpg", "/Exp/VF/vf_zambezi_3.jpg", "/Exp/VF/vf_zambezi_4.jpg"]
      },
      {
        title: "Chobe National Park – Safari Next Door",
        description: "Just a short drive into Botswana, witness Africa’s largest elephant herds on a thrilling game drive or a scenic Chobe River safari.",
        image:["/Exp/BT/bt_chobe_1.jpg","/Exp/BT/bt_chobe_2.jpg", "/Exp/BT/bt_chobe_3.jpg", "/Exp/BT/bt_chobe_4.jpg"]
      },
      {
        title: "Livingstone & Victoria Falls Town – Culture & Luxury",
        description: "Stroll vibrant markets, explore local history, and stay in world-class lodges offering a perfect blend of culture and indulgence.",
        image:["/Exp/VF/vf_livingstone_1.jpg","/Exp/VF/vf_livingstone_2.jpg", "/Exp/VF/vf_livingstone_3.jpg", "/Exp/VF/vf_livingstone_4.jpg"]
      },
    ],
  },
  {
    id: 8,
    name: "Namibia",
    image: "/Destination/Namibia.jpg",
    category: "Southern Africa",
    overview: "Namibia is a land of stark beauty and surreal landscapes. Home to the world's highest dunes, ancient tribal cultures, and vast wilderness, it is a haven for travellers seeking both solitude and excitement. Its otherworldly scenery ranges from the red sands of Sossusvlei to the desolate Skeleton Coast. The dry season from May to October is best for exploration and wildlife viewing.",
    latitude: -22.95764,
    longitude: 18.49041,
    bounds: {
      southWest: [-29.000000, 11.000000],
      northEast: [-17.000000, 25.000000],
    },
    top_experiences: [
      {
        title: "Sossusvlei & Deadvlei",
        description: "Climb the iconic red dunes and witness the haunting beauty of the white clay pan. Capture surreal sunrises and explore ancient camel thorn trees preserved in the clay.",
        image:["/Exp/NB/nb_sossusvlei_1.jpg","/Exp/NB/nb_sossusvlei_2.jpg", "/Exp/NB/nb_sossusvlei_3.jpg", "/Exp/NB/nb_sossusvlei_4.jpg"]
      },
      {
        title: "Etosha National Park Safaris",
        description: "Enjoy game drives in one of Africa’s premier parks, staying in exclusive lodges with floodlit waterholes. Spot lions, elephants, and rare black rhinos from the comfort of your lodge.",
        image:["/Exp/NB/nb_etosha_1.jpg","/Exp/NB/nb_etosha_2.jpg", "/Exp/NB/nb_etosha_3.jpg", "/Exp/NB/nb_etosha_4.jpg"]
      },
      {
        title: "Skeleton Coast",
        description: "Discover shipwrecks and windswept shores in a remote, mysterious landscape. Marvel at dramatic desert-meets-ocean scenery and desert-adapted wildlife. ",
        image:["/Exp/NB/nb_skeleton_1.jpg","/Exp/NB/nb_skeleton_2.jpg", "/Exp/NB/nb_skeleton_3.jpg", "/Exp/NB/nb_skeleton_4.jpg"]
      },
      {
        title: "Animal Tracking in Damaraland",
        description: "Join conservation-led tours to track endangered desert-adapted wildlife.",
        image:["/Exp/NB/nb_damaraland_1.jpg","/Exp/NB/nb_damaraland_2.jpg", "/Exp/NB/nb_damaraland_3.jpg", "/Exp/NB/nb_damaraland_4.jpg"]
      },
      {
        title: " Quad Biking & Sandboarding",
        description: "Ride across the Namib dunes or surf down their slopes. Enjoy adrenaline-packed adventures in the heart of the desert.",
        image:["/Exp/NB/nb_quad_1.jpg","/Exp/NB/nb_quad_2.jpg", "/Exp/NB/nb_quad_3.jpg", "/Exp/NB/nb_quad_4.jpg"]
      },
      {
        title: "Kayaking with Seals",
        description: "Paddle alongside playful Cape fur seals in Walvis Bay. Enjoy close encounters with marine life in calm, scenic waters.",
        image:["/Exp/NB/nb_kayaking_1.jpg","/Exp/NB/nb_kayaking_2.jpg", "/Exp/NB/nb_kayaking_3.jpg", "/Exp/NB/nb_kayaking_4.jpg"]
      },
    ],
  },
  {
    id: 9,
    name: "Mauritius",
    image: "/Destination/Mauritius.jpg",
    category: "Tropical Islands",
    overview: "Mauritius is a paradise island known for its stunning beaches, turquoise waters, and lush landscapes. This tropical gem offers more than just sun and sand—it's a blend of vibrant culture, rich history, and thrilling adventures. From exploring the island’s volcanic peaks and lush forests to indulging in luxury resorts and world-class diving, Mauritius is the perfect destination for honeymooners, adventure seekers, and luxury travelers alike.",
    latitude: -20.348404,
    longitude: 57.552152,
    bounds: {
      southWest: [-20.600000, 57.200000],
      northEast: [-20.200000, 57.800000],
    },
    top_experiences: [
      {
        title: "Grand Baie - Mauritius' Vibrant Coastal Hub",
        description: "A lively beach town with beautiful shores, excellent nightlife, and high-end shopping. Enjoy water sports, fine dining, and luxury resorts along the northern coastline.",
        image:["/Exp/MA/ma_baie_1.jpg","/Exp/MA/ma_baie_2.jpg", "/Exp/MA/ma_baie_3.jpg", "/Exp/MA/ma_baie_4.jpg"]
      },
      {
        title: "Le Morne Brabant – A UNESCO Heritage Site & Hiking Paradise",
        description: "This dramatic mountain, once a refuge for escaped slaves, offers breathtaking panoramic views and is a must-hike for nature lovers. The surrounding lagoon is perfect for kitesurfing.",
        image:["/Exp/MA/ma_brabant_1.jpg","/Exp/MA/ma_brabant_2.jpg", "/Exp/MA/ma_brabant_3.jpg", "/Exp/MA/ma_brabant_4.jpg"]
      },
      {
        title: "Île aux Cerfs – A Tropical Island Escape",
        description: "A small island off the east coast, famous for its pristine beaches, crystal-clear lagoons, and water activities like parasailing and snorkeling.",
        image:["/Exp/MA/ma_cerfs_1.jpg","/Exp/MA/ma_cerfs_2.jpg", "/Exp/MA/ma_cerfs_3.jpg", "/Exp/MA/ma_cerfs_4.jpg"]
      },
      {
        title: "Chamarel – The Seven Colored Earth & Chamarel Falls",
        description: "A natural wonder featuring sand dunes in mesmerizing shades of red, brown, and purple. Nearby, the stunning Chamarel Falls cascade down 100 meters into lush tropical surroundings.",
        image:["/Exp/MA/ma_chamarel_1.jpg","/Exp/MA/ma_chamarel_2.jpg", "/Exp/MA/ma_chamarel_3.jpg", "/Exp/MA/ma_chamarel_4.jpg"]
      },
      {
        title: "Black River Gorges National Park – A Nature Lover’s Dream",
        description: "Explore the island’s wild side with scenic hiking trails, waterfalls, and unique wildlife like the rare Mauritius kestrel.",
        image:["/Exp/MA/ma_gorges_1.jpg","/Exp/MA/ma_gorges_2.jpg", "/Exp/MA/ma_gorges_3.jpg", "/Exp/MA/ma_gorges_4.jpg"]
      },
      {
        title: "Port Louis – The Cultural Heart of Mauritius",
        description: "Discover the capital’s vibrant markets, colonial architecture, and historical sites like Fort Adelaide and Aapravasi Ghat, a UNESCO World Heritage Site.",
        image:["/Exp/MA/ma_louis_1.jpg","/Exp/MA/ma_louis_2.jpg", "/Exp/MA/ma_louis_3.jpg", "/Exp/MA/ma_louis_4.jpg"]
      },
      {
        title: "Diving & Snorkeling – Discover the Underwater World",
        description: "Mauritius is surrounded by coral reefs teeming with marine life, making it an ideal destination for diving and snorkeling. Blue Bay Marine Park is a top spot for exploring colorful fish and coral gardens.",
        image:["/Exp/MA/ma_snorkeling_1.jpg","/Exp/MA/ma_snorkeling_2.jpg", "/Exp/MA/ma_snorkeling_3.jpg", "/Exp/MA/ma_snorkeling_4.jpg"]
      },
    ],
  },
  {
    id: 10,
    name: "Seychelles",
    image: "/Destination/Seychelles.jpg",
    category: "Tropical Islands",
    overview: "Seychelles is a stunning archipelago of 115 islands in the Indian Ocean, renowned for its pristine white-sand beaches, crystal-clear waters, and lush tropical landscapes. A haven for luxury travelers, honeymooners, and nature lovers, Seychelles offers a perfect mix of relaxation, adventure, and rich marine biodiversity. Whether you're exploring vibrant coral reefs, hiking through lush nature reserves, or indulging in world-class resorts, this island paradise promises an unforgettable experience.",
    latitude: -4.679574,
    longitude: 55.491977,
    bounds: {
      southWest: [-10.000000, 50.000000],
      northEast: [-4.000000, 57.000000],
    },
    top_experiences: [
      {
        title: "Mahé Island – The Heart of Seychelles",
        description: "Home to Victoria and luxury resorts, Mahé boasts stunning beaches like Beau Vallon and Anse Intendance, plus the lush Morne Seychellois National Park.",
        image:["/Exp/SE/se_mahe_1.jpg","/Exp/SE/se_mahe_2.jpg", "/Exp/SE/se_mahe_3.jpg", "/Exp/SE/se_mahe_4.jpg"]
      },
      {
        title: "Praslin Island – Vallée de Mai & Pristine Beaches",
        description: "This UNESCO-listed reserve shelters the rare Coco de Mer and Seychelles Black Parrot, while Anse Lazio and Anse Georgette offer breathtaking shores.",
        image:["/Exp/SE/se_praslin_1.jpg","/Exp/SE/se_praslin_2.jpg", "/Exp/SE/se_praslin_3.jpg", "/Exp/SE/se_praslin_4.jpg"]
      },
      {
        title: "La Digue – An Idyllic Island Escape",
        description: "Famous for Anse Source d’Argent’s granite boulders, this tranquil island is best explored by bike, revealing unspoiled beauty and relaxed charm.",
        image:["/Exp/SE/se_digue_1.jpg","/Exp/SE/se_digue_2.jpg", "/Exp/SE/se_digue_3.jpg", "/Exp/SE/se_digue_4.jpg"]
      },
      {
        title: "Aldabra Atoll – A Natural Wonder",
        description: "One of the world’s largest coral atolls, this remote paradise is home to the largest population of giant tortoises and thriving marine life.",
        image:["/Exp/SE/se_aldabra_1.jpg","/Exp/SE/se_aldabra_2.jpg", "/Exp/SE/se_aldabra_3.jpg", "/Exp/SE/se_aldabra_4.jpg"]
      },
      {
        title: "Island Hopping – Seychelles’ Hidden Gems",
        description: "Visit Curieuse for free roaming tortoises or Cousin Island, a birdlife sanctuary, for a true taste of Seychelles’ untouched beauty.",
        image:["/Exp/SE/se_island_1.jpg","/Exp/SE/se_island_2.jpg", "/Exp/SE/se_island_3.jpg", "/Exp/SE/se_island_4.jpg"]
      },
      {
        title: "Snorkeling & Diving – A Marine Paradise",
        description: "Explore vibrant coral reefs, tropical fish, and seasonal whale sharks at top sites like Sainte Anne Marine Park and Silhouette Island.",
        image:["/Exp/SE/se_snorkeling_1.jpg","/Exp/SE/se_snorkeling_2.jpg", "/Exp/SE/se_snorkeling_3.jpg", "/Exp/SE/se_snorkeling_4.jpg"]
      },
    ],
  },
  {
    id: 11,
    name: "Madagascar",
    image: "/Destination/Madagascar.jpg",
    category: "Tropical Islands",
    overview: "Madagascar is an exotic island escape filled with rare wildlife, diverse landscapes, and rich cultural traditions. Known for its endemic species like lemurs and baobabs, it promises a once-in-a-lifetime journey for nature lovers and explorers. From the jagged limestone pinnacles of Tsingy de Bemaraha to the lush rainforests of Andasibe and the golden beaches of Nosy Be, Madagascar is a land of contrasts. Visitors can immerse themselves in vibrant Malagasy culture, spot chameleons in their natural habitat, and discover hidden waterfalls and remote coastlines untouched by mass tourism.",
    latitude: -18.766947,
    longitude: 46.869107,
    bounds: {
      southWest: [-26.000000, 43.000000],
      northEast: [-12.000000, 51.000000],
    },
    top_experiences: [
      {
        title: " Avenue of the Baobabs",
        description: "Walk among ancient baobab trees in a surreal sunset landscape. One of Madagascar’s most iconic sights and a photographer’s dream.",
        image:["/Exp/MD/md_baobabs_1.jpg","/Exp/MD/md_baobabs_2.jpg", "/Exp/MD/md_baobabs_3.jpg", "/Exp/MD/md_baobabs_4.jpg"]
      },
      {
        title: "Lemur Watching in Andasibe",
        description: "Spot various lemur species in lush, misty rainforests. Discover Madagascar’s beloved primates in their natural habitat.",
        image:["/Exp/MD/md_lemur_1.jpg","/Exp/MD/md_lemur_2.jpg", "/Exp/MD/md_lemur_3.jpg", "/Exp/MD/md_lemur_4.jpg"]
      },
      {
        title: " Luxury in Nosy Be",
        description: "Relax in high-end oceanfront retreats with snorkeling, diving, and spa treatments. A tropical escape with turquoise waters and white sands.",
        image:["/Exp/MD/md_nosybe_1.jpg","/Exp/MD/md_nosyb_2.jpg", "/Exp/MD/md_nosyb_3.jpg", "/Exp/MD/md_nosyb_4.jpg"]
      },
      {
        title: "Whale Watching & Marine Safaris",
        description: "See humpback whales, whale sharks, and dolphins off Madagascar's pristine coastlines. Seasonal spectacles unfold on the surrounding ocean.",
        image:["/Exp/MD/md_whale_1.jpg","/Exp/MD/md_whale_2.jpg", "/Exp/MD/md_whale_3.jpg", "/Exp/MD/md_whale_4.jpg"]
      },
      {
        title: "Tsingy de Bemaraha",
        description: "Trek through a labyrinth of jagged limestone pinnacles in a UNESCO World Heritage Site. A dramatic and adventurous experience for avid hikers.",
        image:["/Exp/MD/md_tsingy_1.jpg","/Exp/MD/md_tsingy_2.jpg", "/Exp/MD/md_tsingy_3.jpg", "/Exp/MD/md_tsingy_4.jpg"]
      },
      {
        title: "Cultural Tours in Antananarivo",
        description: "Explore the island's capital with its French colonial charm and bustling markets. Dive into local cuisine, history, and urban life.",
        image:["/Exp/MD/md_antananarivo_1.jpg","/Exp/MD/md_antananarivo_2.jpg", "/Exp/MD/md_antananarivo_3.jpg", "/Exp/MD/md_antananarivo_4.jpg"]
      },
      {
        title: "Masoala National Park",
        description: "Adventure through remote rainforests and untouched beaches. Discover coral reefs, exotic birds, and rich biodiversity.",
        image:["/Exp/MD/md_masoala_1.jpg","/Exp/MD/md_masoala_2.jpg", "/Exp/MD/md_masoala_3.jpg", "/Exp/MD/md_masoala_4.jpg"]
      },
    ],
  },
  
];