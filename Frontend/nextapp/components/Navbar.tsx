import img_logo from '../img/img_logo.png';
import Image from 'next/image';
import styles from '../styles/LandingPage.module.css';

const Navbar = () => {
  return (
    <div>
      <div className={styles['top-bar']}>
        <Image
        src={img_logo}
        alt=''
        width={150}
        height={35}
        />

        <a className={styles['link-a']} href='' >Os mais Procurados</a>
        <a className={styles['link-b']} href='' >Quem Somos</a>
        <a className={styles['link-c']} >Seja um EcoGuia</a>

        
          <button 
            className="" 
            style={{height:'48px', width:'100px',backgroundColor:'#ffff', color:'#2E747F', borderRadius:'10px',
              border: '1px solid #ccc',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Sombra 3D inicial
              transition: 'all 0.2s ease-in-out' // Suavidade na transição
            }}
            >Cadastrar</button>

            <button 
            className="" 
            style={{height:'48px', width:'100px',backgroundColor:'#2E747F', color:'#ffff', borderRadius:'10px',
              border: '1px solid #ccc',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Sombra 3D inicial
              transition: 'all 0.2s ease-in-out' // Suavidade na transição
            }}
            >Entrar</button>
      </div>
    </div>
  )
}

export default Navbar;