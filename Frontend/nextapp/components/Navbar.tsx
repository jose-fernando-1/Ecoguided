// import img_logo from '../img/img_logo.png';
// import Image from 'next/image';
// import styles from '../styles/LandingPage.module.css';
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className={styles['top-bar']}>
//       <div className={styles['logo']}>
//         <Image src={img_logo} alt="Eco-Guided Logo" width={190} height={35} />
//       </div>
//       <div className={styles['nav-links']}>
//         <a className={styles['link']} href="">Os mais Procurados</a>
//         <a className={styles['link']} href="">Quem Somos</a>
//         <a className={styles['link']} href="">Seja um EcoGuia</a>
//       </div>
//       <div className={styles['nav-buttons']}>
//         <Link href="/Cadastro" passHref>
//           <button className={styles['button-outline']}>Cadastrar</button>
//         </Link>
//         <Link href="/Login" passHref>
//         <button className={styles['button-filled']}>Entrar</button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

import img_logo from '../img/img_logo.png'
import Image from 'next/image'
import styles from '../styles/LandingPage.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles['top-bar']}>
      <div className={styles['logo']}>
        <Image src={img_logo} alt="Eco-Guided Logo" width={190} height={35} />
      </div>
      <div className={styles['nav-links']}>
        <Link href="#os-mais-procurados" passHref>
          <span className={styles['link']}>Os mais Procurados</span>
        </Link>
        <Link href="#quem-somos" passHref>
          <span className={styles['link']}>Quem Somos</span>
        </Link>
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


