import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];

  const testimonials = [
    {
      id: 1,
      quote: language === 'tr' ?
        "Hukuki süreçlerimizde gösterdikleri profesyonel yaklaşım ve başarılı sonuçlar için teşekkür ederiz." :
        "Thank you for their professional approach and successful results in our legal processes.",
      author: "John Doe",
      position: language === 'tr' ? "Genel Müdür, ABC Şirketi" : "CEO, ABC Company",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: language === 'tr' ?
        "Karmaşık hukuki süreçleri bizim için basitleştirdiler ve her aşamada yanımızda oldular." :
        "They simplified complex legal processes for us and were with us at every stage.",
      author: "Jane Smith",
      position: language === 'tr' ? "Yönetici, XYZ Ltd." : "Director, XYZ Ltd.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-500 text-sm font-semibold tracking-wider uppercase block mb-4 font-sans">
            {t.clientsSay}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
            {t.testimonials}
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className="text-center">
                <div className="mb-8">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full mx-auto object-cover"
                  />
                </div>
                <blockquote className="text-xl text-gray-600 mb-8 font-sans">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="block font-bold text-gray-900 mb-2 font-playfair">
                  {testimonial.author}
                </cite>
                <span className="text-gray-600 font-sans">
                  {testimonial.position}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-red-500' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 