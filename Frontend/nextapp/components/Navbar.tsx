import img_logo from '../img/img_logo.png'
import Image from 'next/image'
import styles from '../styles/LandingPage.module.css'
import Link from 'next/link'

const Navbar = () => {
  const scrollToSection = (id: any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <nav className={styles['top-bar']}>
      <div className={styles['logo']}>
        <Image src={img_logo} alt="Eco-Guided Logo" width={190} height={35} />
      </div>
      <div className={styles['nav-links']}>
      <span className={styles['link']} onClick={() => scrollToSection('os-mais-procurados')}>
          Os mais Procurados
        </span>
        <span className={styles['link']} onClick={() => scrollToSection('quem-somos')}>
          Quem Somos
        </span>
        <Link href="/CadastroGuia" passHref>
          <span className={styles['link']}>Seja um EcoGuia</span>
        </Link>
      </div>
      <div className={styles['nav-buttons']}>
        <Link href="/Cadastro" passHref>
          <button className={styles['button-outline']}>Cadastrar</button>
        </Link>
        <Link href="/Login" passHref>
          <button className={styles['button-filled']}>Entrar</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


