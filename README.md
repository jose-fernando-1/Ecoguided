# Ecoguided

Repositório do projeto da cadeira de desenvolvimento de software

## Instruções para rodar o serviço

### Backend

1. Navegue até o diretório do backend:
    ```sh
    cd /EcoGuided/Ecoguided-1/Backend
    ```

2. Crie e ative um ambiente virtual:
    ```sh
    python -m venv venv
    source venv/Scripts/activate  # No Windows use `venv\Scripts\activate`
    ```

3. Instale as dependências:
    ```sh
    pip install -r requirements.txt
    ```

4. Aplique as migrações do banco de dados:
    ```sh
    python manage.py migrate
    ```

5. Inicie o servidor:
    ```sh
    python manage.py runserver
    ```

6. O servidor estará rodando em `http://localhost:8000`.

### Frontend

1. Navegue até o diretório do frontend:
    ```sh
    cd /e:/EcoGuided/Ecoguided-1/Frontend/nextapp
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```

4. O frontend estará rodando em `http://localhost:3000`.

### Observações

- Certifique-se de que o backend esteja rodando antes de iniciar o frontend.
- Para qualquer dúvida ou problema, consulte a documentação ou entre em contato com o time de desenvolvimento.
