import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ServiceAreas = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      id: 1,
      title: t.bankingFinance,
      description: language === 'tr' ?
        "Bankacılık ve finans alanında uzman ekibimizle yanınızdayız." :
        "We are at your side with our expert team in banking and finance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l9-4 9 4v12l-9 4-9-4V6z" />
        </svg>
      )
    },
    {
      id: 2,
      title: t.capitalMarkets,
      description: language === 'tr' ?
        "Sermaye piyasaları konusunda profesyonel danışmanlık hizmeti veriyoruz." :
        "We provide professional consulting services in capital markets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 3,
      title: t.corporateCommercial,
      description: language === 'tr' ?
        "Kurumsal ve ticari hukuk alanında geniş deneyime sahibiz." :
        "We have extensive experience in corporate and commercial law.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 font-playfair">
          {t.serviceAreasTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.id} className="text-center">
              <div className="text-red-500 mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair">
                {service.title}
              </h3>
              <p className="text-gray-600 font-sans">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas; 