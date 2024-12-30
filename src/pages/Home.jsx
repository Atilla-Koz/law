import Hero from '../components/Hero';
import Stats from '../components/Stats';
import PracticeAreas from '../components/PracticeAreas';
import ServiceAreas from '../components/ServiceAreas';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import LatestNews from '../components/LatestNews';
import Consultation from '../components/Consultation';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <main>
      <Hero />
      <Stats />
      <PracticeAreas />
      <ServiceAreas />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <LatestNews />
      <Consultation />
      <ContactForm />
    </main>
  );
};

export default Home; 