import React, { useState, useEffect } from 'react';
import styles from '../styles/ProfileMappingLifestyle.module.css';
import NavbarSimple from '../components/NavbarSimple';
import { ArrowRight02Icon, ArrowLeft02Icon } from 'hugeicons-react';
import Link from 'next/link';

const LifestylePage = () => {
  const [selectedEcotrips, setSelectedEcotrips] = useState<number[]>([1]);
  const [selectedTravelPreferences, setSelectedTravelPreferences] = useState<number[]>([1]);
  const [selectedTravelFrequency, setSelectedTravelFrequency] = useState('1-2 vezes');

  useEffect(() => {
    const storedEcotrips = localStorage.getItem('selectedEcotrips');
    if (storedEcotrips) {
      setSelectedEcotrips(JSON.parse(storedEcotrips));
    }
    const storedTravelPreferences = localStorage.getItem('selectedTravelPreferences');
    if (storedTravelPreferences) {
      setSelectedTravelPreferences(JSON.parse(storedTravelPreferences).map((num: number) => num - 8));
    }
    const storedTravelFrequency = localStorage.getItem('selectedTravelFrequency');
    if (storedTravelFrequency) {
      setSelectedTravelFrequency(storedTravelFrequency);
    }
  }, []);

  const handleEcotripChange = (index: number) => {
    setSelectedEcotrips((prev) => {
      const updatedEcotrips = prev.includes(index) ? prev.filter((trip) => trip !== index) : [...prev, index];
      localStorage.setItem('selectedEcotrips', JSON.stringify(updatedEcotrips));
      return updatedEcotrips;
    });
  };

  const handleTravelPreferenceChange = (index: number) => {
    setSelectedTravelPreferences((prev) => {
      const updatedPreferences = prev.includes(index) ? prev.filter((pref) => pref !== index) : [...prev, index];
      localStorage.setItem('selectedTravelPreferences', JSON.stringify(updatedPreferences.map((num) => num + 8)));
      return updatedPreferences;
    });
  };

  const handleTravelFrequencyChange = (frequency: string) => {
    setSelectedTravelFrequency(frequency);
    localStorage.setItem('selectedTravelFrequency', frequency);
  };

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
            {['Observação de Pássaros', 'Aqua Trekking', 'Trilhas e Caminhadas', 'Eco-Diving', 'Arborismo', 'Passeios a Cavalo', 'Canoagem e Caiaque', 'Ciclismo de Montanha'].map((ecotrip, index) => (
              <button
                key={ecotrip}
                className={`${styles.option} ${selectedEcotrips.includes(index + 1) ? styles.selected : ''}`}
                onClick={() => handleEcotripChange(index + 1)}
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
            {['Sozinho(a)', 'Em casal', 'Com amigos', 'Em família'].map((preference, index) => (
              <button
                key={preference}
                className={`${styles.option} ${selectedTravelPreferences.includes(index + 1) ? styles.selected : ''}`}
                onClick={() => handleTravelPreferenceChange(index + 1)}
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
                onClick={() => handleTravelFrequencyChange(frequency)}
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
