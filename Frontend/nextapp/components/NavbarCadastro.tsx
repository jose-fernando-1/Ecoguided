import logo from '../img/img_logo.png';
import styles from '../styles/CadastroGuia.module.css';
import Image from 'next/image';
import Link from 'next/link';

const NavbarCadastro = () => {
  return (
    <div className={styles['navbar']}>
      <div className={styles['logo']}>
        <Link href="/" passHref>
            <Image src={logo} alt="Eco-Guided Logo" width={150} height={35} />
        </Link>
      </div>
      <div className={styles['login']}>
        <p>
          Já possui uma conta? 
          <Link href="/Login" passHref >
            <button>Faça Login</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NavbarCadastro;
