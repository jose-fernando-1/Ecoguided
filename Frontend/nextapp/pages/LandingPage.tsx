import img_logo from '../img/img_logo.png';
import Image from 'next/image';
import styles from '../styles/LandingPage.module.css';
import Navbar from '../components/Navbar';
import img_chapada from '../img/img_chapada.jpg';
import { Filter } from 'lucide-react';
import oi from '../img/4.jpg';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className={styles['banner']}
        style={{
          backgroundImage: `url(${oi.src})`, 
        }}
      > 
        <div className={styles['banner-content']}>
          <h1 className={styles['banner-title']}>
            Descubra os melhores <br />
            <span className={styles['banner-highlight']}>
              pontos turísticos ecológicos
            </span>
          </h1>
          <div className={styles['search-bar']}>
            <input
              type="text"
              className={styles['search-input']}
              placeholder="Procure pelo seu próximo destino..."
            />
            <button className={styles['search-button']}>
              <Filter />
            </button>
          </div>
        </div>
      </div>
      <section className={styles['most-wanted']}>
        <h2>Os mais procurados....</h2>
        
      </section>
      <Footer/>
    </div>
  );
};
export default LandingPage