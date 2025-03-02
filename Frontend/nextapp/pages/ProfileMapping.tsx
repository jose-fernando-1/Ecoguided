import { useRouter } from 'next/router';
import styles from '../styles/ProfileMapping.module.css';
import { ArrowRight02Icon } from 'hugeicons-react';
import NavbarSimple from '../components/NavbarSimple';
import Link from 'next/link';

const ProfileMapping = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <NavbarSimple />
      <div className={styles['container']}>
        <h1 className={styles['greeting']}>
          Olá, <span className={styles['highlight']}>{username}!</span>
        </h1>
        <p className={styles['description']}>
          Iniciaremos um <span className={styles['highlight']}>mapeamento de perfil</span> para podermos trazer as opções que mais combinam com você.
        </p>
        <Link href={`/ProfileMappingDemographic?username=${username}`} className={styles['button-link']}>
          <button className={styles['button']}>
            Iniciar <ArrowRight02Icon />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileMapping;
