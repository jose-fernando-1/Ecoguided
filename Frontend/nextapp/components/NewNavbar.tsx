import { useRouter } from 'next/router';
import logo from '../img/img_logo.png';
import userAvatar from '../img/user_avatar.png';
import styles from '../styles/CadastroGuia.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface NewNavbarProps {
  userName: string;
}

export default function NewNavbar({ userName }: NewNavbarProps) {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <button className={styles.backButton} onClick={() => router.back()}>
        ←
      </button>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <Image src={logo} alt="Eco-Guided Logo" width={190} height={35} />
        </Link>
      </div>
      <div className={styles.userSection}>
        <span className={styles.userName}>
          Seja bem-vindo, <span>{userName}</span>!
        </span>
        <Image
          src={userAvatar}
          alt="User Avatar"
          width={40}
          height={40}
          className={styles.userAvatar}
        />
      </div>
    </nav>
  );
}
