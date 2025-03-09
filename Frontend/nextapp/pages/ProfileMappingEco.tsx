import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/ProfileMappingEco.module.css';
import NavbarSimple from '../components/NavbarSimple';
import { ArrowRight02Icon, ArrowLeft02Icon } from 'hugeicons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProfileMappingEco = () => {
  const router = useRouter();
  const [authToken, setAuthToken] = useState('');

  const [selectedGender, setSelectedGender] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedCity, setSelectedCity] = useState(''); // ta faltando colocar esse campo no backend

  const [selectedEcotrips, setSelectedEcotrips] = useState<number[]>([]);
  const [selectedTravelPreferences, setSelectedTravelPreferences] = useState<number[]>([]);
  const [selectedTravelFrequency, setSelectedTravelFrequency] = useState('');

  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedPriority, setSelectedPriority] = useState(''); // ta faltando colocar esse campo no backend

  const [selectedEcoRelevance, setSelectedEcoRelevance] = useState('Muito Importante');
  const [selectedEcoFinance, setSelectedEcoFinance] = useState('Sim, sem problemas!');
  const [selectedEcoPreference, setSelectedEcoPreference] = useState('Sim, frequentemente');

  useEffect(() => {
    const storedEcoRelevance = localStorage.getItem('selectedEcoRelevance');
    if (storedEcoRelevance) {
      setSelectedEcoRelevance(storedEcoRelevance);
    }
    const storedEcoFinance = localStorage.getItem('selectedEcoFinance');
    if (storedEcoFinance) {
      setSelectedEcoFinance(storedEcoFinance);
    }
    const storedEcoPreference = localStorage.getItem('selectedEcoPreference');
    if (storedEcoPreference) {
      setSelectedEcoPreference(storedEcoPreference);
    }
    const storedAuthToken = localStorage.getItem('sessionToken');
    if (storedAuthToken) {
      setAuthToken(storedAuthToken);
    }
    const storedGender = localStorage.getItem('selectedGender');
    if (storedGender) {
      setSelectedGender(storedGender);
    }
    const storedAge = localStorage.getItem('selectedAge');
    if (storedAge) {
      setSelectedAge(storedAge);
    }
    const storedCity = localStorage.getItem('selectedCity');
    if (storedCity) {
      setSelectedCity(storedCity);
    }
    const storedEcotrips = localStorage.getItem('selectedEcotrips');
    if (storedEcotrips) {
      setSelectedEcotrips(JSON.parse(storedEcotrips));
    }
    const storedTravelPreferences = localStorage.getItem('selectedTravelPreferences');
    if (storedTravelPreferences) {
      setSelectedTravelPreferences(JSON.parse(storedTravelPreferences));
    }
    const storedTravelFrequency = localStorage.getItem('selectedTravelFrequency');
    if (storedTravelFrequency) {
      setSelectedTravelFrequency(storedTravelFrequency);
    }
    const storedBudget = localStorage.getItem('selectedBudget');
    if (storedBudget) {
      setSelectedBudget(storedBudget);
    }
    const storedPriority = localStorage.getItem('selectedPriority');
    if (storedPriority) {
      setSelectedPriority(storedPriority);
    }
  }, []);

  const handleEcoRelevanceChange = (relevance: string) => {
    setSelectedEcoRelevance(relevance);
    localStorage.setItem('selectedEcoRelevance', relevance);
  };

  const handleEcoFinanceChange = (finance: string) => {
    setSelectedEcoFinance(finance);
    localStorage.setItem('selectedEcoFinance', finance);
  };

  const handleEcoPreferenceChange = (preference: string) => {
    setSelectedEcoPreference(preference);
    localStorage.setItem('selectedEcoPreference', preference);
  };

  const handleSubmit = async () => {
    const data = {
      genero: selectedGender,
      faixa_etaria: selectedAge,
      pais_regiao: 'Brasil',
      estilo_ecotrip: selectedEcotrips,
      prefere_viajar_com: selectedTravelPreferences,
      viagens_anuais: selectedTravelFrequency,
      orcamento_medio: selectedBudget,
      importancia_sustentabilidade: selectedEcoRelevance,
      pagaria_por_servicos_sustentaveis: selectedEcoFinance,
      participa_ecoturismo: selectedEcoPreference
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/users/preferences', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${authToken}`,
        },
      });

      if (response.status === 201) {
        console.log('Preferences saved successfully:', response.data);
        localStorage.removeItem('selectedGender');
        localStorage.removeItem('selectedAge');
        localStorage.removeItem('selectedCity');
        localStorage.removeItem('selectedEcotrips');
        localStorage.removeItem('selectedTravelPreferences');
        localStorage.removeItem('selectedTravelFrequency');
        localStorage.removeItem('selectedBudget');
        localStorage.removeItem('selectedPriority');
        localStorage.removeItem('selectedEcoRelevance');
        localStorage.removeItem('selectedEcoFinance');
        localStorage.removeItem('selectedEcoPreference');
        router.push('/ProfileMappingWelcome');
      } else {
        
        console.error('Error saving preferences:', response.data);
      }
    } catch (error) {
      console.log(JSON.stringify(data));
      console.error('Error saving preferences:', error);
    }
  };

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
                onClick={() => handleEcoRelevanceChange(relevance)}
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
                onClick={() => handleEcoFinanceChange(finance)}
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
                onClick={() => handleEcoPreferenceChange(preference)}
              >
                {preference}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.navigation}>
          <Link href="/ProfileMappingFinance" passHref legacyBehavior>
            <button className={styles.navButton}>
              <ArrowLeft02Icon /> Anterior
            </button>
          </Link>
          <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleSubmit}>
            Finalizar <ArrowRight02Icon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileMappingEco;
