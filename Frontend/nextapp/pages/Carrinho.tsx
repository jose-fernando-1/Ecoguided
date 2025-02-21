import React from 'react'
import NavbarSimpleUser from '../components/NavbarSimpleUser'
import style from "../styles/Carrinho.module.css"
import Image from 'next/image'
import img_trilha_cocais from '../img/img_trilha_cocais.png'
import trash from '../img/trash.png'
import QuantitySelector from '../components/QuantitySelector'
import PriceDisplay from '../components/PriceDisplay'
import PriceDisplay2 from '../components/PriceDisplay2'
import alpes from "../img/Alpes_suicos.png"
const Carrinho = () => {
  return (
    <div >
      <NavbarSimpleUser/>

      <div className={style.div}>
        <h1 className={style.title}>Meu carrinho</h1>
        <div className={style['div-img-passeio']}>
            <Image src={img_trilha_cocais} alt='trilha dos cocais'/>
            <div className={style['div-text']} >
                <h3>Trilha dos cocais</h3>
                <h4>Pedro Soares</h4>
                <p>2 dias de trilha <br/>
                Acampamento: Barraca inclusa <br />
                    Você e +10 pessoas acamparão juntos <br />
                    Data: 20/01/2025</p>
                <Image className={style.trash} src={trash} alt='trash can' height={23}/>
                <div style={{display:'flex',position:'relative',
                     bottom:'65px',
                     left:'90px'}}>
                    <QuantitySelector/>
                    <PriceDisplay originalPrice={149} discountedPrice={99} />
                </div>
            </div>
        </div>

      </div>
{/*essa div não está dentro da anterior por que ficou melhor assim */}
      <div className={style['second-div']}>
        <div className={style['div-img-passeio']}>
                <Image src={alpes} alt='alpes suiços'/>
                <div className={style['div-text']} >
                    <h3>Alpes suiços</h3>
                    <h4>Pedro Soares</h4>
                    <p>2 dias de trilha <br/>
                    Acomodações inclusas <br /> 
                        Você e +10 pessoas acamparão juntos <br />
                        Data: 20/01/2025</p>
                    <Image className={style.trash} src={trash} alt='trash can' height={23}/>
                    <div style={{display:'flex',position:'relative',
                        bottom:'65px',
                        left:'90px'}}>
                        <QuantitySelector/>
                        <PriceDisplay2 originalPrice={1209} discountedPrice={999} />
                    </div>
                </div>
            </div>
        </div>

        <div className={style["container-input"]}>
            <h3>Subtotal</h3>

            <div className={style["form-group"]}>
                <label htmlFor="cardNumber">Número do Cartão</label>
                <input type="text" id="cardNumber" placeholder="Ex: 1111 2222 3333 4444" />
            </div>

            <div className={style["form-group"]}>
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" placeholder="Ex: 000.000.000-00" />
            </div>

            <div className={style.row}>
                <div className={style["form-group"]}>
                <label htmlFor="validity">Validade</label>
                <input type="text" id="validity" placeholder="MM/AA" />
                </div>
                <div className={style["form-group"]}>
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="Ex: 123" />
                </div>
            </div>

            <div className={style["checkbox-group"]}>
                <input type="checkbox" id="saveCard" />
                <label htmlFor="saveCard">Salvar Cartão para próxima compra.</label>
            </div>

            <div className={style["price-details"]}>
                <p>
                Pacote Trilha dos Cocais <span>R$ 149</span>
                </p>
                <p>
                Cupom de desconto <span>bemvindo</span> <span>- R$ 50</span>
                </p>
            </div>

            <div className={style.total}>
                <span>R$ 99</span>
            </div>

            <button className={style["finish-button"]}>Finalizar!</button>
        </div>

    </div>
  )
}

export default Carrinho
