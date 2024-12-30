import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase block mb-4 font-sans">
              {t.contact}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              {t.getInTouch}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-sans">
              {language === 'tr' ?
                "Hukuki danışmanlık için bizimle iletişime geçin. En kısa sürede size dönüş yapacağız." :
                "Contact us for legal consultation. We will get back to you as soon as possible."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 font-sans">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={language === 'tr' ? "Adınız Soyadınız" : "Your Full Name"}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors font-sans"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 font-sans">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={language === 'tr' ? "E-posta Adresiniz" : "Your Email Address"}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors font-sans"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2 font-sans">
                {t.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder={language === 'tr' ? "Konu" : "Subject"}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors font-sans"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 font-sans">
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder={language === 'tr' ? "Mesajınız" : "Your Message"}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-colors font-sans"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors font-sans"
              >
                {t.sendMessage}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 