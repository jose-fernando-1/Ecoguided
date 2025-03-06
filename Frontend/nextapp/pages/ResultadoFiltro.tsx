import React from 'react'
import TravelCard from '../components/TravelCard'
import styles from '../styles/FeedCliente.module.css'
import NavbarSimpleUser from '../components/NavbarSimpleUser'

const ResultadoFiltro = () => {
  return (
    <div>
        <NavbarSimpleUser/>
        <section className={styles.section}>
          <h2 style={{display:'flex', position:'relative', paddingLeft:'250px'}}>O que encontramos para você </h2>
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
    </div>
  )
}

export default ResultadoFiltro
