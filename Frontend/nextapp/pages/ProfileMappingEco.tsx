import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ProfileMappingEco.module.css';
import NavbarSimple from '../components/NavbarSimple';
import { ArrowRight02Icon, ArrowLeft02Icon } from 'hugeicons-react';
import Link from 'next/link';

const ProfileMappingEco = () => {
  const router = useRouter();
  const { username } = router.query;
  const [selectedEcoRelevance, setSelectedEcoRelevance] = useState('Muito Importante');
  const [selectedEcoFinance, setSelectedEcoFinance] = useState('Sim, sem problemas!');
  const [selectedEcoPreference, setSelectedEcoPreference] = useState('Sim, frequentemente');

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavbarSimple />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <strong>Sustentabilidade e Comportamento</strong> <span className={styles.progress}>4/4</span>
        </h2>

        <div className={styles.section}>
          <h3>O quão importante é a sustentabilidade nas suas escolhas de viagem?</h3>
          <div className={styles.options}>
            {['Muito Importante', 'Importante', 'Pouco Importante', 'Nada Importante'].map((relevance) => (
              <button
                key={relevance}
                className={`${styles.option} ${selectedEcoRelevance === relevance ? styles.selected : ''}`}
                onClick={() => setSelectedEcoRelevance(relevance)}
              >
                {relevance}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>Você estaria disposto a pagar mais por serviços de viagem sustentáveis?</h3>
          <div className={styles.options}>
            {['Sim, sem problemas!', 'Sim, mas até um limite', 'Não'].map((finance) => (
              <button
                key={finance}
                className={`${styles.option} ${selectedEcoFinance === finance ? styles.selected : ''}`}
                onClick={() => setSelectedEcoFinance(finance)}
              >
                {finance}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>Você participa de atividades relacionadas ao ecoturismo ou voluntariado durante suas viagens?</h3>
          <div className={styles.options}>
            {['Sim, frequentemente', 'Sim, às vezes', 'Não, mas tenho interesse', 'Não tenho interesse'].map((preference) => (
              <button
                key={preference}
                className={`${styles.option} ${selectedEcoPreference === preference ? styles.selected : ''}`}
                onClick={() => setSelectedEcoPreference(preference)}
              >
                {preference}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.navigation}>
          <Link href={`/ProfileMappingFinance?username=${username}`} passHref legacyBehavior>
            <button className={styles.navButton}>
              <ArrowLeft02Icon /> Anterior
            </button>
          </Link>
          <Link href={`/ProfileMappingWelcome?username=${username}`} passHref legacyBehavior>
            <button className={`${styles.navButton} ${styles.nextButton}`}>
              Finalizar <ArrowRight02Icon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileMappingEco;
