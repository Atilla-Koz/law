import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];

  const slides = [
    {
      id: 1,
      title: t.heroTitle,
      subtitle: t.heroSubtitle,
      category: t.heroCategory,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: t.heroTitle,
      subtitle: t.heroSubtitle,
      category: t.heroCategory,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: t.heroTitle,
      subtitle: t.heroSubtitle,
      category: t.heroCategory,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen">
      {/* Slider */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Arka plan görseli */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-black/60"></div>
            </div>

            {/* İçerik */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
                  {slide.category}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6 font-playfair">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl font-sans">
                  {slide.subtitle}
                </p>
                <button className="bg-red-500 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-600 transition-colors font-sans">
                  {t.getConsultationFree}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-red-500' : 'bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero; 