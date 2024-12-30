import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Stats = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-playfair">
            {t.recovered}
          </h2>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex items-baseline">
              <span className="text-gray-600 text-2xl italic font-playfair">over</span>
              <span className="text-red-500 text-6xl md:text-7xl font-bold mx-2 font-playfair">$100.000.000</span>
            </div>
            <p className="text-2xl font-bold text-gray-800 font-playfair tracking-wide">
              {t.since} 1970
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-gray-600 text-lg">
          <p className="leading-relaxed font-sans">
            {language === 'tr' ? 
              "Ciddi kazaların mağdurları için tutkulu savunucularız. Donec suscipit lobortis ornare. Aenean vel varius odio. Cras ligula odio, congue vel adipiscing non, congue vitae neque. Pellentesque adipiscing ultricies risus, auctor ullamcorper magna." :
              "We are passionate advocates for victims of serious accidents. Donec suscipit lobortis ornare. Aenean vel varius odio. Cras ligula odio, congue vel adipiscing non, congue vitae neque. Pellentesque adipiscing ultricies risus, auctor ullamcorper magna."}
          </p>
          <p className="leading-relaxed font-sans">
            {language === 'tr' ? 
              "Sed elit nulla, varius vitae lacus hendrerit, pulvinar tincidunt lacus. Suspendisse quis purus ultrices, convallis felis ac, pulvinar tortor. Etiam adipiscing enim diam, vitae lacinia ipsum volutpat id. Sed varius nisl quis justo feugiat, a tempor enim pellentesque." :
              "Sed elit nulla, varius vitae lacus hendrerit, pulvinar tincidunt lacus. Suspendisse quis purus ultrices, convallis felis ac, pulvinar tortor. Etiam adipiscing enim diam, vitae lacinia ipsum volutpat id. Sed varius nisl quis justo feugiat, a tempor enim pellentesque."}
          </p>
          <p className="leading-relaxed font-sans">
            {language === 'tr' ? 
              "Nullam at ligula at velit adipiscing malesuada et venenatis enim. Praesent lacinia volutpat imperdiet. Integer ultricies aliquam auctor. Etiam gravida sagittis ipsum nec dictum. Nunc pretium est quis placerat congue. Nam dui lectus, pretium get elit." :
              "Nullam at ligula at velit adipiscing malesuada et venenatis enim. Praesent lacinia volutpat imperdiet. Integer ultricies aliquam auctor. Etiam gravida sagittis ipsum nec dictum. Nunc pretium est quis placerat congue. Nam dui lectus, pretium get elit."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats; 