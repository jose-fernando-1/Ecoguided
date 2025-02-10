import NavbarSimple from '../components/NavbarSimple';
import styles from '../styles/Cadastro.module.css'; 

const Cadastro = () => {
  return (
    <div>
      <NavbarSimple />
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h2 className={styles.title}>Cadastro</h2>
          <form className={styles.form}>
            {/* Container que organiza as duas colunas */}
            <div className={styles.row}>
              {/* Coluna da esquerda: Nome e Email */}
              <div className={styles.leftColumn}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>Nome</label>
                  <input type="text" id="name" className={styles.input} required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input type="email" id="email" className={styles.input} required />
                </div>
              </div>

              {/* Coluna da direita: Senha e Confirme senha */}
              <div className={styles.rightColumn}>
                <div className={styles.inputGroup}>
                  <label htmlFor="password" className={styles.label}>Senha</label>
                  <input type="password" id="password" className={styles.input} required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="confirmPassword" className={styles.label}>Confirme senha</label>
                  <input type="password" id="confirmPassword" className={styles.input} required />
                </div>
              </div>
            </div>

            {/* Botão centralizado abaixo das colunas */}
            <div className={styles.divCastrarAndButton}>
              <button type="submit" className={styles.button}>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
