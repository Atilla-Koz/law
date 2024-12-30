import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const LatestNews = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const news = [
    {
      id: 1,
      title: language === 'tr' ? 
        "Yeni İş Kanunu Değişiklikleri ve Etkileri" : 
        "New Labor Law Changes and Their Effects",
      date: language === 'tr' ? "15 Kasım 2023" : "November 15, 2023",
      category: language === 'tr' ? "İş Hukuku" : "Labor Law",
      excerpt: language === 'tr' ?
        "Yeni iş kanunu değişiklikleri ile çalışma hayatında önemli düzenlemeler yapıldı. Bu değişiklikler işveren ve çalışanları nasıl etkileyecek?" :
        "Important regulations have been made in working life with the new labor law changes. How will these changes affect employers and employees?",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: language === 'tr' ? 
        "Dijital Hukuk ve Siber Güvenlik" : 
        "Digital Law and Cybersecurity",
      date: language === 'tr' ? "10 Kasım 2023" : "November 10, 2023",
      category: language === 'tr' ? "Teknoloji Hukuku" : "Technology Law",
      excerpt: language === 'tr' ?
        "Dijital dünyada hukuki hakların korunması ve siber güvenlik önlemleri giderek daha fazla önem kazanıyor." :
        "Protection of legal rights in the digital world and cybersecurity measures are becoming increasingly important.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: language === 'tr' ? 
        "Gayrimenkul Hukukunda Yeni Düzenlemeler" : 
        "New Regulations in Real Estate Law",
      date: language === 'tr' ? "5 Kasım 2023" : "November 5, 2023",
      category: language === 'tr' ? "Gayrimenkul Hukuku" : "Real Estate Law",
      excerpt: language === 'tr' ?
        "Gayrimenkul alım satımında yeni düzenlemeler ve dikkat edilmesi gereken hukuki noktalar." :
        "New regulations in real estate trading and legal points to consider.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-500 text-sm font-semibold tracking-wider uppercase block mb-4 font-sans">
            {t.blog}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
            {t.latestNews}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans">
            {language === 'tr' ?
              "Hukuk dünyasındaki son gelişmeler ve güncel haberler." :
              "Latest developments and current news in the legal world."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-500 text-sm font-semibold font-sans">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm font-sans">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-playfair">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 font-sans">
                  {item.excerpt}
                </p>
                <button className="text-red-500 font-semibold hover:text-red-600 transition-colors font-sans">
                  {t.readMore} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews; 