import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const WhyChooseUs = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    {
      id: 1,
      value: "10k+",
      label: t.globalCustomers
    },
    {
      id: 2,
      value: "30+",
      label: t.yearsExperience
    },
    {
      id: 3,
      value: "24",
      label: t.teamExperts
    },
    {
      id: 4,
      value: "17",
      label: t.awardsHonors
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-500 text-sm font-semibold tracking-wider uppercase block mb-4 font-sans">
            {t.aboutUs}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
            {t.whyChooseUs}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            {language === 'tr' ?
              "Deneyimli ekibimiz ve profesyonel yaklaşımımızla hukuki süreçlerinizde yanınızdayız." :
              "We are by your side in your legal processes with our experienced team and professional approach."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2 font-playfair">
                {stat.value}
              </div>
              <div className="text-gray-600 font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 