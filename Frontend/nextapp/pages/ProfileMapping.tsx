import styles from '../styles/ProfileMapping.module.css';
import { ArrowRight02Icon } from 'hugeicons-react';
import NavbarSimple from '../components/NavbarSimple';

const ProfileMapping = () => {
  return (
    <div>
      <NavbarSimple />
      <div className={styles['container']}>
        <h1 className={styles['greeting']}>
          Olá, <span className={styles['highlight']}>Marina!</span>
        </h1>
        <p className={styles['description']}>
          Iniciaremos um <span className={styles['highlight']}>mapeamento de perfil</span> para podermos trazer as opções que mais combinam com você.
        </p>
        <button className={styles['start-button']} onClick={() => window.location.href = '/ProfileMappingDemographic'}>
          Iniciar <ArrowRight02Icon />
        </button>
      </div>
    </div>
  );
};

export default ProfileMapping;
