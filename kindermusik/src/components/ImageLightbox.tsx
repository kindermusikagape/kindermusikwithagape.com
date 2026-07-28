import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  if (currentIndex === null) return null;

  const handleNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/75 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 text-white/75 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="max-w-4xl max-h-[80vh] p-4 flex flex-col items-center justify-center animate-scale-up">
        <img
          src={images[currentIndex]}
          alt={`Gallery item ${currentIndex + 1}`}
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border-2 border-white/10"
        />
        <p className="text-white/70 text-xs font-mono tracking-wider mt-4">
          MOMENT {currentIndex + 1} OF {images.length}
        </p>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 text-white/75 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
