import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const PracticeAreas = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const areas = [
    {
      id: 1,
      title: t.businessLaw,
      description: language === 'tr' ? 
        "İş hukuku alanında uzman ekibimizle şirketinizin tüm hukuki ihtiyaçlarını karşılıyoruz." :
        "We provide all legal needs of your company with our expert team in business law.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: t.familyLaw,
      description: language === 'tr' ?
        "Aile hukuku konularında hassas ve profesyonel yaklaşımla yanınızdayız." :
        "We are by your side with a sensitive and professional approach in family law matters.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: t.criminalLaw,
      description: language === 'tr' ?
        "Ceza hukuku alanında deneyimli avukatlarımızla haklarınızı koruyoruz." :
        "We protect your rights with our experienced lawyers in criminal law.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-500 text-sm font-semibold tracking-wider uppercase block mb-4 font-sans">
            {t.whatWeDo}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
            {t.practiceAreasTitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            {language === 'tr' ?
              "Hukuki ihtiyaçlarınız için uzman ekibimizle yanınızdayız. Her alanda profesyonel hizmet sunuyoruz." :
              "We are at your side with our expert team for your legal needs. We provide professional service in all areas."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div key={area.id} className="group relative overflow-hidden rounded-lg">
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-playfair">
                  {area.title}
                </h3>
                <p className="text-gray-300 font-sans">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas; 