import React from 'react'
import NavbarSimpleUser from '../components/NavbarSimpleUser'
import styles from '../styles/FeedCliente.module.css'
import Mantiqueira from '../img/Reserva_da_mantiqueira.png'
import Manguezal from '../img/Floresta_maguezal.png'
import Image from 'next/image'
import reserva_mantiqueira from '../img/Reserva_mantiqueira_nuvem.png'
import praia_carneiros from '../img/praia_carneiros.png'
import cachoeira_diamantina from '../img/cachoeira_diamantina.png'
import porto_de_galinhas from '../img/porto_de_galinha.png'
// import trilha_dos_cocais from '../img/trilha_dos_cocais.png'
// import praia_pescadores from '../img/praia_pescadores.png'
// import alpes_suicos from '../img/alpes_suiços.png'
import TravelCard from '../components/TravelCard'

const FeedCliente = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Navbar */}
      <NavbarSimpleUser/>

      {/* Conteúdo principal */}
      <main className={styles.mainContent}>
        {/* Seção: Os mais procurados */}
        <section className={styles.section}>
          <h2>Os mais procurados ✨</h2>
          <div className={styles.cardsContainer}>
            <div className={styles.cardLarge}>
              <Image alt='Mantiqueira' src={Mantiqueira} />
              <h3>Reserva de Mamirauá</h3>
            </div>
            <div className={styles.cardLarge}>
            <Image alt='Mantiqueira' src={Manguezal} />
              <h3>Floresta Mantequera</h3>
            </div>
          </div>
        </section>

        {/* Seção: Os melhores destinos */}
        <section className={styles.section}>
          <h2>Os melhores destinos ✨</h2>
          <div className={styles.cardsContainer}>
            {/* Card 1 */}
            <div className={styles.cardSmall}>
              <Image alt='reserva_mantiqueira' src={reserva_mantiqueira} />
              <h3>Reservas de Mamirauá</h3>
              <p>Experiência única na floresta</p>
              <button>Ver mais</button>
            </div>
            {/* Card 2 */}
            <div className={styles.cardSmall}>
            <Image alt='praia dos carneiros' src={praia_carneiros} />
              <h3>Praia dos Carneiros</h3>
              <p>Águas cristalinas e tranquilas</p>
              <button>Ver mais</button>
            </div>
            {/* Card 3 */}
            <div className={styles.cardSmall}>
            <Image alt='cachoeira diamantina' src={cachoeira_diamantina} />
              <h3>Cachoeira Diamantina</h3>
              <p>Aventura e beleza natural</p>
              <button>Ver mais</button>
            </div>
            {/* Card 4 */}
            <div className={styles.cardSmall}>
              <Image alt='porto de galinhas' src={porto_de_galinhas} />
              <h3>Praia de Porto de Galinhas</h3>
              <p>Um dos destinos mais famosos</p>
              <button>Ver mais</button>
            </div>
            {/* Card 5 */}
            {/*<div className={styles.cardSmall}>
            <Image alt='trilha dos cocais' src={trilha_dos_cocais} />
              <h3>Chapada das Mesas</h3>
              <p>Cachoeiras e trilhas incríveis</p>
              <button>Ver mais</button>
            </div>*/}
          </div>
        </section>

        {/* Seção: O que pensamos para você */}
        <section className={styles.section}>
          <h2>O que pensamos para você ❤️</h2>
          <div className={styles.recommendations}>
            <TravelCard imageUrl={'/trilha_dos_cocais.png'}
             title={'Trilha dos cocais'}
             author={'Autor'} 
             rating={5} 
             oldPrice={150} 
             newPrice={99}></TravelCard>

            <TravelCard imageUrl={'/praia_pescadores.png'}
             title={'Pria dos pescadores'}
             author={'Autor'} 
             rating={5} 
             oldPrice={199} 
             newPrice={149}></TravelCard>

            <TravelCard imageUrl={'/alpes_suiços.png'}
             title={'Alpes suiços'}
             author={'Autor'} 
             rating={5} 
             oldPrice={1199} 
             newPrice={999}></TravelCard>
             
          </div>
        </section>
      </main>
    </div>
  );
}

export default FeedCliente
