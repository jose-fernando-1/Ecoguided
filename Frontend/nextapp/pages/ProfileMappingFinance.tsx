import React, { useState } from 'react';
import styles from '../styles/ProfileMappingFinance.module.css';
import { ArrowRight02Icon, ArrowLeft02Icon } from 'hugeicons-react';
import NavbarSimple from '../components/NavbarSimple';
import Link from 'next/link';

const ProfileMappingFinance = () => {
  const [selectedBudget, setSelectedBudget] = useState('$');
  const [selectedPriority, setSelectedPriority] = useState('Economia');

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavbarSimple />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <strong>Financeiro</strong> <span className={styles.progress}>3/4</span>
        </h2>

        <div className={styles.section}>
          <h3>Qual seu orçamento médio para viagens?</h3>
          <div className={styles.options}>
            {['$', '$$', '$$$', '$$$$', '$$$$$'].map((budget) => (
              <button
                key={budget}
                className={`${styles.option} ${selectedBudget === budget ? styles.selected : ''}`}
                onClick={() => setSelectedBudget(budget)}
              >
                {budget}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>Ao planejar uma viagem, você prioriza:</h3>
          <div className={styles.options}>
            {['Economia', 'Conforto', 'Experiências únicas', 'Sustentabilidade'].map((priority) => (
              <button
                key={priority}
                className={`${styles.option} ${selectedPriority === priority ? styles.selected : ''}`}
                onClick={() => setSelectedPriority(priority)}
              >
                {priority}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.navigation}>
          <Link href="/ProfileMappingLifestyle" passHref legacyBehavior>
            <button className={styles.navButton}>
              <ArrowLeft02Icon /> Anterior
            </button>
          </Link>
          <Link href="/ProfileMappingEco" passHref legacyBehavior>
            <button className={`${styles.navButton} ${styles.nextButton}`}>
              Próximo <ArrowRight02Icon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileMappingFinance;