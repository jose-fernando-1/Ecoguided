# Django REST API - Guia de Instalação e Configuração

Este documento fornece instruções para instalar, configurar e iniciar o backend feito com Django REST API.

## Instalação

**Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

**Crie e ative um ambiente virtual (opcional, mas recomendado):**
   ```bash
   python -m venv venv
   source venv/bin/activate  # No Windows: venv\Scripts\activate
   ```

**Instale as dependências do projeto:**
   ```bash
   pip install -r requirements.txt
   ```

## Migrations e Banco de Dados

1. **Crie as migrações iniciais:**
   ```bash
   python manage.py makemigrations
   ```

2. **Aplique as migrações no banco de dados:**
   ```bash
   python manage.py migrate
   ```

## Criar Superusuário

Para acessar o painel administrativo do Django, crie um superusuário:
```bash
python manage.py createsuperuser
```
- Insira um nome de usuário, email e senha quando solicitado.

## Executando o Servidor

Inicie o servidor de desenvolvimento com o comando:
```bash
python manage.py runserver
```
O servidor estará rodando em `http://127.0.0.1:8000/`

Para acessar o endpoint do admin: `http://127.0.0.1:8000/admin/`


