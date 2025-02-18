import logo from '../img/img_logo.png';
import userAvatar from '../img/user_avatar.png';
import styles from '../styles/CadastroGuia.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface NewNavbarProps {
  userName: string;
}

export default function NewNavbar({ userName }: NewNavbarProps) {
  return (
    <div
      className={styles['navbar']}
      style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
    >
      <div className={styles['logo']}>
        <Link href="/" passHref>
          <Image src={logo} alt="Eco-Guided Logo" width={190} height={35} />
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
        <div
          style={{
            fontSize: "1.2rem",
            marginRight: "0.5rem",
            color: "black"
          }}
        >
          Seja bem-vindo, <span style={{ color: "#2e747f" }}>{userName}</span>!
        </div>
        <Image
          src={userAvatar}
          alt="User Avatar"
          width={40}
          height={40}
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
}