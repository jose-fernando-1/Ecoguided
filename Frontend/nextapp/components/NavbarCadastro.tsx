import logo from '../img/img_logo.png';
import styles from '../styles/CadastroGuia.module.css';
import Image from 'next/image';

const NavbarCadastro = () => {
  return (
    <div className={styles['navbar']}>
      <div className={styles['logo']}>
        <Image src={logo} alt="Eco-Guided Logo" width={150} height={35} />
      </div>
      <div className={styles['login']}>
        <p>
          Já possui uma conta? <button>Faça Login</button>
        </p>
      </div>
    </div>
  );
};

export default NavbarCadastro;
