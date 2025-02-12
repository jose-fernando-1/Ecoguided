import React, { useState } from 'react';
import styles from '../styles/ProfileMappingLifestyle.module.css';
import NavbarSimple from '../components/NavbarSimple';
import { ArrowRight02Icon, ArrowLeft02Icon } from 'hugeicons-react';
import Link from 'next/link';

const LifestylePage = () => {
  const [selectedEcotrip, setSelectedEcotrip] = useState('Observação de Pássaros');
  const [selectedTravelPreference, setSelectedTravelPreference] = useState('Com amigos');
  const [selectedTravelFrequency, setSelectedTravelFrequency] = useState('1-2 vezes');

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavbarSimple />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <strong>Lifestyle</strong> <span className={styles.progress}>2/4</span>
        </h2>

        {/* Estilo de Ecotrip */}
        <div className={styles.section}>
          <h3>Qual o seu estilo de ecotrip?</h3>
          <div className={styles.options}>
            {['Observação de Pássaros', 'Aqua Trekking', 'Trilhas e Caminhadas', 'Eco-Diving', 'Arborismo', 'Passeios a Cavalo', 'Canoagem e Caiaque', 'Ciclismo de Montanha'].map((ecotrip) => (
              <button
                key={ecotrip}
                className={`${styles.option} ${selectedEcotrip === ecotrip ? styles.selected : ''}`}
                onClick={() => setSelectedEcotrip(ecotrip)}
              >
                {ecotrip}
              </button>
            ))}
          </div>
        </div>

        {/* Preferência de Viagem */}
        <div className={styles.section}>
          <h3>Você prefere viajar:</h3>
          <div className={styles.options}>
            {['Sozinho(a)', 'Em casal', 'Com amigos', 'Em família'].map((preference) => (
              <button
                key={preference}
                className={`${styles.option} ${selectedTravelPreference === preference ? styles.selected : ''}`}
                onClick={() => setSelectedTravelPreference(preference)}
              >
                {preference}
              </button>
            ))}
          </div>
        </div>

        {/* Frequência de Viagem */}
        <div className={styles.section}>
          <h3>Quantas vezes por ano você costuma viajar?</h3>
          <div className={styles.options}>
            {['Nunca', '1-2 vezes', '3-5 vezes', '5+ vezes'].map((frequency) => (
              <button
                key={frequency}
                className={`${styles.option} ${selectedTravelFrequency === frequency ? styles.selected : ''}`}
                onClick={() => setSelectedTravelFrequency(frequency)}
              >
                {frequency}
              </button>
            ))}
          </div>
        </div>

        {/* Botões de Navegação */}
        <div className={styles.navigation}>
          <Link href="/ProfileMappingDemographic" passHref legacyBehavior>
            <button className={styles.navButton}>
              <ArrowLeft02Icon /> Anterior
            </button>
          </Link>
          <Link href="/ProfileMappingFinance" passHref legacyBehavior>
            <button className={`${styles.navButton} ${styles.nextButton}`}>
              Próximo <ArrowRight02Icon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LifestylePage;
