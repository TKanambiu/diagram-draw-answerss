
interface ImageSliderProps {
  images: string[];
  title: string;
  onBookNow: (title: string) => void;
}

const ImageSlider = ({ images, title, onBookNow }: ImageSliderProps) => {
  // Create duplicated images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 animate-slide-left-to-right">
        {title}
      </h3>
      
      <div className="image-slider-container">
        <div className="image-slider-track">
          {duplicatedImages.map((image, index) => (
            <div 
              key={`${image}-${index}`}
              className="image-slider-item"
              onClick={() => onBookNow(title)}
            >
              <img 
                src={image} 
                alt={`${title} ${(index % images.length) + 1}`}
              />
              <div className="image-slider-overlay">
                <span className="image-slider-text">Click to Book!</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
