import img_logo from '../img/img_logo.png';
import Image from 'next/image';
import styles from '../styles/LandingPage.module.css';
import Link from 'next/link';


// const Navbar = () => {
//   return (
//     <div>
//       <div className={styles['top-bar']}>
//         <Image
//         src={img_logo}
//         alt=''
//         width={150}
//         height={35}
//         />

//         <a className={styles['link-a']} href='' >Os mais Procurados</a>
//         <a className={styles['link-b']} href='' >Quem Somos</a>
//         <a className={styles['link-c']} >Seja um EcoGuia</a>

        
//           <button 
//             className="" 
//             style={{height:'48px', width:'100px',backgroundColor:'#ffff', color:'#2E747F', borderRadius:'10px',
//               border: '1px solid #ccc',
//               boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Sombra 3D inicial
//               transition: 'all 0.2s ease-in-out' // Suavidade na transição
//             }}
//             >Cadastrar</button>

//             <button 
//             className="" 
//             style={{height:'48px', width:'100px',backgroundColor:'#2E747F', color:'#ffff', borderRadius:'10px',
//               border: '1px solid #ccc',
//               boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Sombra 3D inicial
//               transition: 'all 0.2s ease-in-out' // Suavidade na transição
//             }}
//             >Entrar</button>
//       </div>
//     </div>
//   )
// }

const Navbar = () => {
  return (
    <nav className={styles['top-bar']}>
      <div className={styles['logo']}>
        <Image src={img_logo} alt="Eco-Guided Logo" width={150} height={35} />
      </div>
      <div className={styles['nav-links']}>
        <a className={styles['link']} href="">Os mais Procurados</a>
        <a className={styles['link']} href="">Quem Somos</a>
        <a className={styles['link']} href="">Seja um EcoGuia</a>
      </div>
      <div className={styles['nav-buttons']}>
        <Link href="/CadastroGuia" passHref>
          <button className={styles['button-outline']}>Cadastrar</button>
        </Link>
        <button className={styles['button-filled']}>Entrar</button>
      </div>
    </nav>
  );
};

export default Navbar;
