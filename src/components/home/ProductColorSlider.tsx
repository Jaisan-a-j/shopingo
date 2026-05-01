import { useState, type FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductColorSliderProps {
  images: string[];
}

export const ProductColorSlider: FC<ProductColorSliderProps> = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCount = 4;
  const canSlideLeft = startIndex > 0;
  const canSlideRight = startIndex + visibleCount < images.length;

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  const goLeft = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const goRight = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCount, images.length - visibleCount),
    );
  };

  return (
    <div className="mt-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-900">More Colors</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goLeft}
            disabled={!canSlideLeft}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Previous color"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goRight}
            disabled={!canSlideRight}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Next color"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {visibleImages.map((image, index) => {
          const globalIndex = startIndex + index;
          return (
            <button
              key={`${image}-${globalIndex}`}
              type="button"
              onClick={() => setActiveIndex(globalIndex)}
              className={`overflow-hidden rounded-3xl border p-1 transition ${
                globalIndex === activeIndex
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <img
                src={image}
                alt={`Product color ${globalIndex + 1}`}
                className="h-20 w-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
