import { useEffect } from "react";
import { useRouter } from "next/router";
import imgLogo from '../img/img_logo_2.png';
import Image from 'next/image';
import styles from '../styles/Filtering.module.css';

const Filtering = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/FeedCliente');
        }, 2500);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className={styles.container}>
            <Image src={imgLogo} alt="Logo" className={styles.logo} />
            <p className={styles.text}>Encontrando os melhores destinos para você...</p>
        </div>
    );
}
export default Filtering;