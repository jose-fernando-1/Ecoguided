import React, { useState, useEffect } from 'react';
import styles from '../styles/ProfileMappingDemographic.module.css';
import { ArrowRight02Icon, ArrowLeft02Icon } from 'hugeicons-react';
import NavbarSimple from '../components/NavbarSimple';
import Link from 'next/link';

const citiesOfBrazil = [
  'São Paulo', 'Rio de Janeiro', 'Salvador', 'Brasília', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba',
  'Recife', 'Goiânia', 'Belém', 'Porto Alegre', 'Guarulhos', 'Campinas', 'São Luís', 'São Gonçalo',
  'Maceió', 'Duque de Caxias', 'Natal', 'Teresina', 'Campo Grande', 'São Bernardo do Campo', 'João Pessoa',
  'Nova Iguaçu', 'São José dos Campos', 'Santo André', 'Ribeirão Preto', 'Jaboatão dos Guararapes', 'Uberlândia'
];

const DemographicPage = () => {
  const [selectedGender, setSelectedGender] = useState<string>('Feminino');
  const [selectedAge, setSelectedAge] = useState<string>('25-34 anos');
  const [selectedCity, setSelectedCity] = useState<string>('Recife');

  useEffect(() => {   
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
  }, []);

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    localStorage.setItem('selectedGender', gender);
  };

  const handleAgeChange = (age: string) => {
    setSelectedAge(age);
    localStorage.setItem('selectedAge', age);
  };

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    localStorage.setItem('selectedCity', city);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavbarSimple />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <strong>Demografia</strong> <span className={styles.progress}>1/4</span>
        </h2>

        {/* Seção de Gênero */}
        <div className={styles.section}>
          <h3>Gênero</h3>
          <div className={styles.options}>
            {['Feminino', 'Masculino', 'Outro'].map((gender) => (
              <button
                key={gender}
                className={`${styles.option} ${selectedGender === gender ? styles.selected : ''}`}
                onClick={() => handleGenderChange(gender)}
              >
                {gender}
              </button>
            ))}
          </div>
        </div>

        {/* Seção de Faixa Etária */}
        <div className={styles.section}>
          <h3>Faixa etária</h3>
          <div className={styles.options}>
            {['18-24 anos', '25-34 anos', '35-44 anos', '45-54 anos', '55+ anos'].map((age) => (
              <button
                key={age}
                className={`${styles.option} ${selectedAge === age ? styles.selected : ''}`}
                onClick={() => handleAgeChange(age)}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* Seção de País/Região */}
        <div className={styles.section}>
          <h3>País/Cidade</h3>
          <div className={styles.selectGroup}>
            <select className={styles.select} value="Brasil" disabled>
              <option>Brasil</option>
            </select>
            <select className={styles.select} value={selectedCity} onChange={(e) => handleCityChange(e.target.value)}>
              {citiesOfBrazil.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Botões de Navegação */}
        <div className={styles.navigation}>
          <Link href="/ProfileMapping" passHref legacyBehavior>
            <button className={styles.navButton}>
              <ArrowLeft02Icon /> Anterior
            </button>
          </Link>
          <Link href="/ProfileMappingLifestyle" passHref legacyBehavior>
            <button className={`${styles.navButton} ${styles.nextButton}`}>
              Próximo <ArrowRight02Icon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DemographicPage;
