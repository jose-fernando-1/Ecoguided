// import styles from '../styles/CadastroGuia.module.css';
// import { UserMultiple02Icon, KayakIcon, StarIcon, Route03Icon } from 'hugeicons-react';
// import NavbarCadastro from '../components/NavbarCadastro';
// import router from 'next/router';

// const CadastroGuia = () => {
//     return (
//         <div>
//             <NavbarCadastro />
//             <div className={styles['headerIcon']}>
//                 <div className={styles['h1']}>
//                     <h1>Seja nosso parceiro</h1>
//                 </div>
//                 <UserMultiple02Icon className={styles['icon']} />
//             </div>
//             <div className={styles['iconesTextos']}>
//                 <div className={styles['iconTextContainer']}>
//                     <KayakIcon className={styles['icon']} />
//                     <p>
//                         Crie pacotes personalizados e conecte-se com turistas que valorizam experiências autênticas e sustentáveis.
//                     </p>
//                 </div>
//                 <div className={styles['iconTextContainer']}>
//                     <StarIcon className={styles['icon']} />
//                     <p>
//                         Gerencie suas reservas, interaja com clientes e receba avaliações para impulsionar sua credibilidade
//                     </p>
//                 </div>
//                 <div className={styles['iconTextContainer']}>
//                     <Route03Icon className={styles['icon']} />
//                     <p>
//                         Adicione fotos, descrições e preços às suas rotas para criar pacotes atraentes e ofereça passeios sustentáveis.
//                     </p>
//                 </div>
//             </div>

//             <div className={styles['formContainer']}>
//                 <form className={styles['form']}>
//                     <div className={styles['formRow']}>
//                         <div className={styles['formGroup']}>
//                             <label htmlFor="nome" className={styles['label']}>Nome Completo</label>
//                             <input type="text" id="nome" placeholder="Nome Completo" className={styles['input']} />
//                         </div>
//                         <div className={styles['formGroup']}>
//                             <label htmlFor="cpf" className={styles['label']}>CPF</label>
//                             <input type="text" id="cpf" placeholder="CPF" className={styles['input']} />
//                         </div>
//                     </div>
//                     <div className={styles['formRow']}>
//                         <div className={styles['formGroup']}>
//                             <label htmlFor="email" className={styles['label']}>Email</label>
//                             <input type="email" id="email" placeholder="Email" className={styles['input']} />
//                         </div>
//                         <div className={styles['formGroup']}>
//                             <label htmlFor="senha" className={styles['label']}>Senha</label>
//                             <input type="password" id="senha" placeholder="Senha" className={styles['input']} />
//                         </div>
//                     </div>
//                     <div className={styles['formRow']}>
//                         <div className={styles['formGroup']}>
//                             <label htmlFor="confirmarSenha" className={styles['label']}>Confirme sua senha</label>
//                             <input type="password" id="confirmarSenha" placeholder="Confirme sua senha" className={styles['input']} />
//                         </div>
//                     </div>
//                     <button type="submit" className={styles['button']}>Cadastrar</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default CadastroGuia;

import styles from '../styles/CadastroGuia.module.css';
import { UserMultiple02Icon, KayakIcon, StarIcon, Route03Icon } from 'hugeicons-react';
import NavbarCadastro from '../components/NavbarCadastro';
import { useRouter } from 'next/router';

const CadastroGuia = () => {
    const router = useRouter()

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        router.push('/CadastroPasseioGuia'); 
    }

    return (
        <div>
            <NavbarCadastro />
            <div className={styles['headerIcon']}>
                <div className={styles['h1']}>
                    <h1>Seja nosso parceiro</h1>
                </div>
                <UserMultiple02Icon className={styles['icon']} />
            </div>
            <div className={styles['iconesTextos']}>
                <div className={styles['iconTextContainer']}>
                    <KayakIcon className={styles['icon']} />
                    <p>
                        Crie pacotes personalizados e conecte-se com turistas que valorizam experiências autênticas e sustentáveis.
                    </p>
                </div>
                <div className={styles['iconTextContainer']}>
                    <StarIcon className={styles['icon']} />
                    <p>
                        Gerencie suas reservas, interaja com clientes e receba avaliações para impulsionar sua credibilidade
                    </p>
                </div>
                <div className={styles['iconTextContainer']}>
                    <Route03Icon className={styles['icon']} />
                    <p>
                        Adicione fotos, descrições e preços às suas rotas para criar pacotes atraentes e ofereça passeios sustentáveis.
                    </p>
                </div>
            </div>

            <div className={styles['formContainer']}>
                <form className={styles['form']} onSubmit={handleSubmit}>
                    <div className={styles['formRow']}>
                        <div className={styles['formGroup']}>
                            <label htmlFor="nome" className={styles['label']}>Nome Completo</label>
                            <input type="text" id="nome" placeholder="Nome Completo" className={styles['input']} />
                        </div>
                        <div className={styles['formGroup']}>
                            <label htmlFor="cpf" className={styles['label']}>CPF</label>
                            <input type="text" id="cpf" placeholder="CPF" className={styles['input']} />
                        </div>
                    </div>
                    <div className={styles['formRow']}>
                        <div className={styles['formGroup']}>
                            <label htmlFor="email" className={styles['label']}>Email</label>
                            <input type="email" id="email" placeholder="Email" className={styles['input']} />
                        </div>
                        <div className={styles['formGroup']}>
                            <label htmlFor="senha" className={styles['label']}>Senha</label>
                            <input type="password" id="senha" placeholder="Senha" className={styles['input']} />
                        </div>
                    </div>
                    <div className={styles['formRow']}>
                        <div className={styles['formGroup']}>
                            <label htmlFor="confirmarSenha" className={styles['label']}>Confirme sua senha</label>
                            <input type="password" id="confirmarSenha" placeholder="Confirme sua senha" className={styles['input']} />
                        </div>
                    </div>
                    <button type="submit" className={styles['button']}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default CadastroGuia;
