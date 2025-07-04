import styles from '../styles/CadastroGuia.module.css';
import { UserMultiple02Icon } from 'hugeicons-react';
import NavbarCadastro from '../components/NavbarCadastro';
import { useRouter } from 'next/router';
import Image from 'next/image';

import cadpar1 from '../img/cadpar1.png';
import cadpar2 from '../img/cadpar2.png';
import cadpar3 from '../img/cadpar3.png';

const CadastroGuia = () => {
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submission prevented');

        const username = (document.getElementById('nome') as HTMLInputElement).value;
        const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('senha') as HTMLInputElement).value;
        const confirmarSenha = (document.getElementById('confirmarSenha') as HTMLInputElement).value;
        const licenca = (document.getElementById('licenca') as HTMLInputElement).value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (password !== confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        }

        if (!username || !cpf || !email || !password || !licenca) {
            alert('Preencha todos os campos');
            return;
        }

        if (cpf.length !== 11) {
            alert('CPF inválido');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Email inválido');
            return;
        }

        const data = { username, password, email, cpf, licenca, is_guide: 'True' };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const responseData = await response.json();
                const token = responseData.token;
                localStorage.setItem('sessionToken', token);
                localStorage.setItem('username', username);
                localStorage.setItem('email', email);
                localStorage.setItem('cpf', cpf);
                localStorage.setItem('licenca', licenca);
                alert('Cadastro efetuado e login realizado!');
                router.push('/FeedGuia');
            } else {
                const error = await response.json();
                console.log('Error Response:', error); 
                alert(`Erro: ${error.message}`);
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Houve um erro ao enviar os dados. Tente novamente.");
        }
    };

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
                    <Image src={cadpar1} alt="Icon" width={50} height={50} className={styles['icon']} />
                    <p>
                        Crie pacotes personalizados e conecte-se com turistas que valorizam experiências autênticas e sustentáveis.
                    </p>
                </div>
                <div className={styles['iconTextContainer']}>
                    <Image src={cadpar2} alt="Icon" width={50} height={50} className={styles['icon']} />
                    <p>
                        Gerencie suas reservas, interaja com clientes e receba avaliações para impulsionar sua credibilidade
                    </p>
                </div>
                <div className={styles['iconTextContainer']}>
                    <Image src={cadpar3} alt="Icon" width={50} height={50} className={styles['icon']} />
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
                    <div className={styles['formRow']}>
                        <div className={styles['formGroup']}>
                            <label htmlFor="licenca" className={styles['label']}>Licença</label>
                            <input type="text" id="licenca" placeholder="Licença" className={styles['input']} />
                        </div>
                    </div>
                    <button type="submit" className={styles['button']}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default CadastroGuia;
