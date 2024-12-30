import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const quickLinks = [
    { id: 1, text: t.home, href: "/" },
    { id: 2, text: t.aboutUs, href: "/about" },
    { id: 3, text: t.services, href: "/services" },
    { id: 4, text: t.contact, href: "/contact" },
    { id: 5, text: t.blog, href: "/blog" }
  ];

  const practiceAreas = [
    { id: 1, text: t.businessLaw, href: "/practice/business" },
    { id: 2, text: t.familyLaw, href: "/practice/family" },
    { id: 3, text: t.criminalLaw, href: "/practice/criminal" },
    { id: 4, text: t.realEstateLaw, href: "/practice/real-estate" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">{t.aboutUs}</h3>
            <p className="text-gray-400 mb-6 font-sans">
              {language === 'tr' ?
                "1970'den beri müvekkillerimize en iyi hukuki hizmetleri sunuyoruz. Deneyimli ekibimizle yanınızdayız." :
                "We have been providing the best legal services to our clients since 1970. We are by your side with our experienced team."}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.016 18.6h-2.91v-4.575c0-1.086-.018-2.484-1.512-2.484-1.515 0-1.746 1.183-1.746 2.406v4.653H7.938V8.997h2.79v1.282h.04c.39-.738 1.338-1.515 2.754-1.515 2.946 0 3.484 1.938 3.484 4.458V18.6z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">{t.quickLinks}</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors font-sans"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">{t.practiceAreas}</h3>
            <ul className="space-y-4">
              {practiceAreas.map((area) => (
                <li key={area.id}>
                  <a
                    href={area.href}
                    className="text-gray-400 hover:text-white transition-colors font-sans"
                  >
                    {area.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">{t.contact}</h3>
            <div className="space-y-4">
              <p className="text-gray-400 font-sans">
                <strong className="block text-white">{t.address}:</strong>
                {language === 'tr' ?
                  "Atatürk Bulvarı No:123, Çankaya, Ankara" :
                  "123 Ataturk Boulevard, Cankaya, Ankara"}
              </p>
              <p className="text-gray-400 font-sans">
                <strong className="block text-white">{t.email}:</strong>
                info@lawfirm.com
              </p>
              <p className="text-gray-400 font-sans">
                <strong className="block text-white">{t.phone}:</strong>
                +90 (312) 123 45 67
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 font-sans">
          <p>
            © 2024 Law Firm. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 