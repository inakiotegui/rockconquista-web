import Hero from '../components/Hero';
import Tickets from '../components/Tickets';
import Bandera from '../components/Bandera';
import Countdown from '../components/Countdown';
import AboutUs from '../components/AboutUs';
import Lineup from '../components/Lineup';
import Newsletter from '../components/Newsletter';

const Sections = () => {
  return (
      <main className='sections-body'>
        <Hero />
        <Tickets />
        <Bandera />
        <Countdown />
        <AboutUs />
        <Lineup />
        <Newsletter />
      </main>
  );
};

export default Sections;