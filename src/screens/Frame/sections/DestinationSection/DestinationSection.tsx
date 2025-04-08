import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const DestinationSection = (): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0); // Track the active slide index
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]); // Store slide positions

  // Update the active slide index when the carousel changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Initialize the carousel and set up event listeners
  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const destinations = [
    {
      id: 1,
      image: "Hotels/Almanara-Casa-Bella-Boutique-Hotel-HD.jpg",
      title: "Almanara Casa Bella Boutique Hotel- Kenya",
      description: "A private, exclusive retreat on Diani Beach, perfect for barefoot luxury and personalized service.",
    },
    {
      id: 2,
      image: "Hotels/Angama-Mara-Masai-Mara.avif",
      title: "Angama Mara- Masai Mara",
      description: "Perched on the edge of the Great Rift Valley, this elegant lodge boasts panoramic views and exceptional game viewing.",
    },
    {
      id: 3,
      image: "Hotels/Chale-Islands-Resort.webp",
      title: "Chale Island Resort- Kenya",
      description: "A secluded island paradise with pristine beaches, lush forests, and a serene Indian Ocean escape.",
    },
    {
      id: 4,
      image: "Hotels/Chiefs-Camp-Botswana.jpg",
      title: "Sanctuary Chief’s Camp – Botswana",
      description: "An ultra-luxurious safari retreat in the Moremi Game Reserve, known for its 'Big Five' sightings and top-tier service.",
    },
    {
      id: 5,
      image: "Hotels/Constance-Ephelia-Resort-Mahe-Seychelles.png",
      title: "Constance Ephelia Resort – Mahé, Seychelles",
      description: "A tropical haven with two stunning beaches, world-class spa experiences, and lush natural surroundings.",
    },
    {
      id: 6,
      image: "Hotels/Elewana-Tortillis-Camp-Amboseli.jpg",
      title: "Tortilis Camp – Amboseli",
      description: "A charming eco-lodge with breathtaking views of Mount Kilimanjaro and access to Amboseli’s famous elephant herds.",
    },
    {
      id: 7,
      image: "Hotels/Finch-Hattons-Luxury-Camp-Tsavo.jpg",
      title: "Finch Hattons Luxury Camp – Tsavo",
      description: "A sophisticated, award-winning camp blending vintage safari charm with modern luxury in the heart of Tsavo.",
    },
    {
      id: 8,
      image: "Hotels/Kilimamoja-Lodge-Lake-Manyara.jpg",
      title: "Kilimamoja Lodge – Lake Manyara",
      description: "A tranquil retreat with stunning views of Lake Manyara, offering easy access to rich birdlife and tree-climbing lions.",
    },
    {
      id: 9,
      image: "Hotels/Kleins-Camp-Serengeti-National-Park-TZ.jpg",
      title: "AndBeyond Klein’s Camp – Serengeti",
      description: "An exclusive safari escape set in a private Serengeti concession, ideal for off-the-beaten-path wildlife encounters.",
    },
    {
      id: 10,
      image: "Hotels/Mahali-Mzuri-Masai-Mara.jpg",
      title: "Mahali Mzuri – Masai Mara",
      description: "Sir Richard Branson’s luxury safari camp, offering front-row seats to the Great Migration with stunning tented suites.",
    },
    {
      id: 11,
      image: "Hotels/okahirongo-elephant-lodge-Namibia.webp",
      title: "Okahirongo Elephant Lodge – Namibia",
      description: "A remote desert oasis in Kaokoland, offering rare encounters with desert-adapted elephants and breathtaking landscapes.",
    },
    {
      id: 12,
      image: "Hotels/Olare-Mara-Masai-Mara.jpg",
      title: "Olare Mara – Masai Mara",
      description: "An exclusive tented camp in a private conservancy, known for its intimate safari experiences and abundant wildlife.",
    },
    {
      id: 13,
      image: "Hotels/Olivers-Camp-Tarangire-National-Park.jpg",
      title: "Asilia Oliver’s Camp – Tarangire",
      description: "A classic safari camp in Tarangire National Park, perfect for walking safaris and close encounters with elephants.",
    },
    {
      id: 14,
      image: "Hotels/One-Nature-Mara-River-Nothern-Serengeti.png",
      title: "One Nature – Mara River, Northern Serengeti",
      description: "A luxurious eco-lodge near the Mara River, offering prime viewing of the Great Migration crossings.",
    },
    {
      id: 15,
      image: "Hotels/Sanctuary-Gorilla-Forest-Camp-Uganda.png",
      title: "Gorilla Forest Camp – Uganda",
      description: "A secluded, intimate camp in Bwindi Impenetrable Forest, providing direct access to rare gorilla encounters.",
    },
    {
      id: 16,
      image: "Hotels/Sandibe-Okavango-Safari-Lodge-Botswana.jpg",
      title: "Sandibe Okavango Safari Lodge – Botswana",
      description: "A strikingly designed lodge in the Okavango Delta, delivering exceptional wildlife experiences and barefoot luxury.",
    },
    {
      id: 17,
      image: "Hotels/Wilderness-Bisante-Rwanda.jpg",
      title: "Wilderness Bisate – Rwanda",
      description: "A one-of-a-kind lodge near Volcanoes National Park, offering immersive gorilla trekking and sustainable luxury.",
    },

  ];

  return (
    <section className="relative w-full h-[80vh]">
      {/* Static Text Content */}
      <div className="absolute inset-x-0 top-0 z-10 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-5xl font-medium font-['Roboto',Helvetica] tracking-normal mb-4 md:mb-8 text-white drop-shadow-lg">
              Your Next Destination Awaits
            </h2>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full touch-pan-y">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="flex-[0_0_100%] min-w-0 relative h-full"
          >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>

        {/* Title and Description */}
          <div className="absolute left-20 top-[80%] -translate-y-1/2 z-20 text-white bg-gray-200 bg-opacity-50 border border-white p-4 rounded-md w-[300px] break-words">
            <h3 className="text-xl font-semibold">{destination.title}</h3>
            <p className="text-sm">{destination.description}</p>
          </div>
        </div>
        ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-20"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 z-20"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </Button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};