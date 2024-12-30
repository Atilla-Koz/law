import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="bg-[#1B2534] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold font-playfair">
            LAWYERS
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-red-500 transition-colors font-sans">
              {t.home}
            </Link>
            <Link to="/about" className="hover:text-red-500 transition-colors font-sans">
              {t.about}
            </Link>
            <Link to="/practice-areas" className="hover:text-red-500 transition-colors font-sans">
              {t.practiceAreas}
            </Link>
            <Link to="/contact" className="hover:text-red-500 transition-colors font-sans">
              {t.contact}
            </Link>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors rounded font-sans"
            >
              {language === 'tr' ? 'EN' : 'TR'}
            </button>
            <Link
              to="/contact"
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors font-sans"
            >
              {t.getConsultation}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-red-500 transition-colors font-sans">
                {t.home}
              </Link>
              <Link to="/about" className="hover:text-red-500 transition-colors font-sans">
                {t.about}
              </Link>
              <Link to="/practice-areas" className="hover:text-red-500 transition-colors font-sans">
                {t.practiceAreas}
              </Link>
              <Link to="/contact" className="hover:text-red-500 transition-colors font-sans">
                {t.contact}
              </Link>
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors rounded font-sans text-left"
              >
                {language === 'tr' ? 'EN' : 'TR'}
              </button>
              <Link
                to="/contact"
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors font-sans inline-block"
              >
                {t.getConsultation}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 