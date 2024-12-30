import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Team = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const teamMembers = [
    {
      id: 1,
      name: "Av. Mehmet Yılmaz",
      position: language === 'tr' ? "Kurucu Ortak" : "Founding Partner",
      description: language === 'tr' ?
        "20 yılı aşkın deneyimiyle şirketler hukuku ve ticaret hukuku alanlarında uzmanlaşmıştır." :
        "Specialized in corporate law and commercial law with over 20 years of experience.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Av. Ayşe Kaya",
      position: language === 'tr' ? "Kıdemli Ortak" : "Senior Partner",
      description: language === 'tr' ?
        "Aile hukuku ve miras hukuku alanlarında 15 yıllık deneyime sahiptir." :
        "Has 15 years of experience in family law and inheritance law.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Av. Ali Demir",
      position: language === 'tr' ? "Ortak" : "Partner",
      description: language === 'tr' ?
        "İş hukuku ve sosyal güvenlik hukuku konularında uzmanlaşmıştır." :
        "Specialized in labor law and social security law.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-500 text-sm font-semibold tracking-wider uppercase block mb-4 font-sans">
            {t.ourTeam}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
            {t.professionalTeam}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            {language === 'tr' ?
              "Deneyimli ve uzman hukuk ekibimizle her zaman yanınızdayız." :
              "We are always by your side with our experienced and expert legal team."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair">
                {member.name}
              </h3>
              <p className="text-red-500 mb-4 font-sans">
                {member.position}
              </p>
              <p className="text-gray-600 font-sans">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 