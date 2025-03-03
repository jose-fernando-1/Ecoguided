import React from 'react'
import NavbarSimpleUser from '../components/NavbarSimpleUser'
import TravelCardForDetails from '../components/TravelCardForDetails'
import styles from '../styles/DetalhesPasseio.module.css'
import CommentCard from '../components/CommentCard'
const DetailhesPasseio = () => {
  return (
    <div>
      <NavbarSimpleUser/>

      <TravelCardForDetails imageUrl={'/trilha_dos_cocais.png'}
             title={'Trilha dos cocais'}
             author={'Autor'} 
             rating={5} 
             oldPrice={150} 
             newPrice={99}></TravelCardForDetails>

      <div className={styles.divComentario}>
        <h1 style={{fontFamily:'Roboto, sans-serif'}}> Comentários</h1>
        <CommentCard
        userName="Amanda Silva"
        userImage="Amanda .png" // Substitua por uma URL real ou /img/avatar.png
        comment="Adorei toda a experiência, foi simplesmente incrível! O guia foi super solícito."
        rating={5}
      />

        <CommentCard
        userName="Mario Andrade"
        userImage="Mario.png" // Substitua por uma URL real ou /img/avatar.png
        comment="Adorei toda a experiência, foi simplesmente incrível! O guia foi super solícito."
        rating={5}
      />

        <CommentCard
        userName="Ana Melo"
        userImage="Amanda .png" // Substitua por uma URL real ou /img/avatar.png
        comment="Adorei toda a experiência, foi simplesmente incrível! O guia foi super solícito."
        rating={5}
      />

        <CommentCard
        userName="José Ferreira"
        userImage="Mario.png" // Substitua por uma URL real ou /img/avatar.png
        comment="Adorei toda a experiência, foi simplesmente incrível! O guia foi super solícito."
        rating={5}
      />
      </div>
    </div>
  )
}

export default DetailhesPasseio
