import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80",
    alt: "Shop Electronics",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
    alt: "Fashion Deals",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
    alt: "Home & Kitchen",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1920&q=80",
    alt: "Tech Gadgets",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-0 top-0 h-1/2 px-4 flex items-center justify-center hover:bg-black/10 transition-colors"
      >
        <ChevronLeft className="w-10 h-10 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-0 h-1/2 px-4 flex items-center justify-center hover:bg-black/10 transition-colors"
      >
        <ChevronRight className="w-10 h-10 text-foreground" />
      </button>
    </div>
  );
};

export default HeroCarousel;
