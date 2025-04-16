<h1>API Node com Express e PostgreSQL</h1>
<p>Esta é uma API desenvolvida em Node.js com Express que utiliza PostgreSQL como banco de dados, configurado em um container Docker.

<h1>Índice</h1>

1. [Descrição](#descrição)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Instalação e configuração](#instalação)
4. [Uso](#uso)

<h1>Descrição</h1>

A API implementa um CRUD completo para gerenciar contatos e categorias, que possuem um relacionamento entre si.
Ela é parte de uma aplicação que foi desenvolvida com React.js, recomendo que visite o <a href="https://github.com/daniel-barbosaa/mycontactsfe" alt="link do repositório">repositório do front-end</a>. Para testar as rotas, foi utilizado o Insomnia.</p>

<h2>Instalação e Configuração</h2>
<h3>Pré-requisitos</h3>
<p>Certifique-se de ter instalado na sua máquina:</p>

- [Node.js](https://nodejs.org/pt)
- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/)

<hr style="border: 0.5px solid #ccc;" />

<h3>Passo a passo</h3>
<h4>1. Clone o repositório</p>

````bash
git clone https://github.com/daniel-barbosaa/mycontactsapi-postgresql.git
cd mycontactsapi-postgresql```

<h4>2. Instale as dependências</h4>

```bash
npm install

ou

yarn
````

<h4>3. Configurando o Banco de Dados</h4>
<p>Este projeto usa um banco de dados PostgreSQL rodando em um container Docker. Siga os passos abaixo para configurá-lo:</p>

1. <strong>Certifique-se de ter o Docker instalado</strong>
<p>Se ainda não tiver o Docker instalado, acesse a <a href="https://www.docker.com"> página oficial do  Docker</a para instalá-lo.> </p>

2. <strong>Crie o container do PostgreSQL</strong>
<p>Execute o seguinte comando no terminal para criar um container PostgreSQL com os valores padrão:</p>

```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -e POSTGRES_DB=api_database -p 5432:5432 -d postgres
```

<strong>O que o comando faz:</strong>

```bash
  -e POSTGRES_USER=root \           # Define o usuário do banco como "root"
  -e POSTGRES_PASSWORD=root \       # Define a senha como "root"
  -e POSTGRES_DB=api_database \     # Cria o banco de dados chamado "api_database"
  -p 5432:5432 \                    # Mapeia a porta local 5432 para a porta 5432 do container
  -d postgres                       # Usa a imagem oficial do PostgreSQL e roda o container em modo "detached"
```

3. <strong>Inicie o container</strong>
<p>Se o container não estiver rodando, você pode iniciá-lo com:</p>

```bash
 docker start api-postgres
```

4. <strong>Rode o script para iniciar o banco de dados</strong>

```bash
docker exec -i pg psql -U root -d api_database < src/database/schema.sql

```

<h4>4. Inicie a aplicação</h4>

```bash
yarn dev
```

<h2>Como usar</h2>

<strong>Endpoints disponíveis</strong>

<p>A API oferece os seguintes endpoints:</p>

```bash
## **Contatos**

- `GET /contacts` - Lista todos os contatos
- `GET /contacts/:id` - Busca um contato por ID
- `POST /contacts` - Cria um novo contato
- `PUT /contacts/:id` - Atualiza um contato
- `DELETE /contacts/:id` - Remove um contato

---

## **Categorias**

- `GET /categories` - Lista todas as categorias
- `GET /categories/:id` - Busca uma categoria por ID
- `POST /categories` - Cria uma nova categoria
- `PUT /categories/:id` - Atualiza uma categoria
- `DELETE /categories/:id` - Remove uma categoria
```

<h3>Scripts Disponíveis</h3>

```bash
yarn dev: Inicia o servidor em modo de desenvolvimento com nodemon.
```

<h2>Tecnologias utilizadas</h2>

- <strong>Node.js</strong> - Plataforma para execução do JavaScript no backend.
- <strong>Express</strong> - Framework para construção de APIs.
- <strong>PostgreSQL</strong> - Banco de dados relacional.
- <strong>Docker</strong> - Para containerização do banco de dados.
- <strong>Insomnia</strong> - Ferramenta para teste de APIs.

<h2>Observação</h2>

Após criar o banco de dados no container Docker, não se esqueça de configurar o client no arquivo responsável pela inicialização da conexão com o banco, preenchendo os dados de acesso conforme o seu ambiente.

<h2>Contribuição</h2>

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
