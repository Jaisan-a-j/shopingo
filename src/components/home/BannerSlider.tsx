import { useEffect, useState, type FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BannerSliderProps {
  autoplayInterval?: number;
}

export const BannerSlider: FC<BannerSliderProps> = ({
  autoplayInterval = 5000,
}) => {
  const banners = [
    {
      id: 1,
      title: "T-shirts",
      subtitle: "Under ₹179",
      description: "Few left, hurry now!",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      badgeText: "Big Sale",
      discount: "Up to 50% Instant Discount",
    },
    {
      id: 2,
      title: "Summer Collection",
      subtitle: "Under ₹299",
      description: "Limited time offer!",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      badgeText: "New Arrival",
      discount: "Up to 40% Off",
    },
    {
      id: 3,
      title: "Footwear Sale",
      subtitle: "Under ₹999",
      description: "Don't miss out!",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      badgeText: "Flash Sale",
      discount: "Up to 60% Instant Discount",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [banners.length, autoplayInterval]);

  const goToPrevious = (): void => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = (): void => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const banner = banners[currentSlide];

  return (
    <div className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 shadow-md">
      <div className="relative h-56 w-full">
        <img
          src={banner.image}
          alt={banner.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-yellow-300 px-3 py-1 text-xs font-bold text-gray-900">
              {banner.badgeText}
            </div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {banner.title}
            </h2>
            <p className="text-lg font-semibold text-white">
              {banner.subtitle}
            </p>
            <p className="text-sm text-gray-100">{banner.description}</p>
            <div className="mt-2 inline-block rounded-full bg-orange-400 px-3 py-1 text-xs font-semibold text-white">
              {banner.discount}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 backdrop-blur-sm transition hover:bg-white/50 sm:left-4"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/30 p-2 backdrop-blur-sm transition hover:bg-white/50 sm:right-4"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>
    </div>
  );
};
