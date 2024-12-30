import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Consultation = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6 font-playfair">
            {t.freeConsultation}
          </h2>
          <p className="text-xl mb-8 font-sans">
            {language === 'tr' ?
              "Size nasıl yardımcı olabileceğimizi öğrenmek için hemen ücretsiz danışmanlık randevunuzu alın." :
              "Schedule your free consultation now to learn how we can help you."}
          </p>
          <button className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors font-sans">
            {t.makeAppointment}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Consultation; 