import { Facebook02Icon, XVariableIcon, InstagramIcon, Mail01Icon, TelephoneIcon } from 'hugeicons-react';
import estilos from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={estilos.footer}>
      <div className={estilos.footerSection}>
        <h3>Redes Sociais</h3>
        <div className={estilos.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook02Icon/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <XVariableIcon/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon/>
          </a>
        </div>
      </div>
      <div className={estilos.footerSection}>
        <h3>Contato</h3>
        <div className={estilos.contactItem}>
          <Mail01Icon/>
          <h4>contato@ecoturismo.com</h4>
        </div>
        <div className={estilos.contactItem}>
          <TelephoneIcon/>
          <h4>+55 (81) 98765-4321</h4>
        </div>
      </div>

      <div className={estilos.footerSection}>
        <h3>Explorar</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#mais-procurados">Mais Procurados</a></li>
          <li><a href="#quem-somos">Quem Somos</a></li>
          <li><a href="#seja-parceiro">Seja um Parceiro</a></li>
        </ul>
      </div>
      <div className={estilos.footerSection}>
        <h3>Objetivos de Desenvolvimento Sustentável</h3>
        <div className={estilos.sustainableGoals}>
          <div className={estilos.goal}>
            <img src="/icons/education.png" alt="Educação" />
          </div>
          <div className={estilos.goal}>
            <img src="/icons/health.png" alt="Saúde" />
          </div>
          <div className={estilos.goal}>
            <img src="/icons/environment.png" alt="Meio Ambiente" />
          </div>
          <div className={estilos.goal}>
            <img src="/icons/justice.png" alt="Justiça" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
