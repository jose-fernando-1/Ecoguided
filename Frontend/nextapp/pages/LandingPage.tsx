import React, { useState } from 'react';
import styles from '../styles/LandingPage.module.css';
import Navbar from '../components/Navbar';
import { FilterIcon } from 'hugeicons-react';
import img_chapada from '../img/img_chapada.jpg';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Equipe from '../components/Equipe';
import logout from '../scripts/logout';
import Button from '../components/Button';
import FilterPopup from '../components/FilterPopup';
import { useRouter } from 'next/router';

const LandingPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const applyFilters = (newFilters: any) => {
    router.push('/ResultadoFiltro');
  };

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
            <button className={styles['search-button']} onClick={togglePopup}>
              <FilterIcon />
            </button>
          </div>
        </div>
      </div>
      <FilterPopup isOpen={isPopupOpen} onClose={togglePopup} onApply={applyFilters} />
      <section className={styles['most-wanted']}>
        <h2>Os mais procurados....</h2>
      </section>
      <section className={styles.mostWanted}>
        <Carousel />
      </section>
      <Equipe />
      <Footer />
    </div>
  );
};

export default LandingPage;