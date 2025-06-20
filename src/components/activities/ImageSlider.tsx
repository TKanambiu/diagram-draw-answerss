
interface ImageSliderProps {
  images: string[];
  title: string;
  onBookNow: (title: string) => void;
}

const ImageSlider = ({ images, title, onBookNow }: ImageSliderProps) => {
  // Duplicate images for seamless looping
  const duplicatedImages = [...images, ...images];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 animate-slide-left-to-right">{title}</h3>
      <div className="scroll-container w-full h-60 relative">
        <div className="scroll-track">
          {duplicatedImages.map((image, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-80 h-60 relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 mx-2"
            >
              <img 
                src={image} 
                alt={`${title} ${(index % images.length) + 1}`}
                className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-all duration-500"
                onClick={() => onBookNow(title)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg animate-pulse">Click to Book!</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
