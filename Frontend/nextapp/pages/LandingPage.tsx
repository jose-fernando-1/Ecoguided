import styles from '../styles/LandingPage.module.css';
import Navbar from '../components/Navbar';
import { ArrowRight02Icon  } from 'hugeicons-react';
import img_chapada from '../img/img_chapada.jpg';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Equipe from '../components/Equipe';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className={styles['banner']}
        style={{
          backgroundImage: `url(${img_chapada.src})`, 
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
            <ArrowRight02Icon />
            </button>
          </div>
        </div>
      </div>
      <section className={styles['most-wanted']}>
        <h2>Os mais procurados....</h2>
      </section>
       <section className={styles.mostWanted}>
        <Carousel />
      </section>
      <Equipe />
      <Footer/>
    </div>
  );
};
export default LandingPage