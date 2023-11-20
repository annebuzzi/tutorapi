# Tutor-API - Deploy API REST no Render

Este projeto tem por objetivo fornecer um exemplo de como realizar o deploy de uma api REST na plataforma [Render](https://render.com/).

- [Nodejs](https://nodejs.org/en);
- [Express](https://expressjs.com/);
- [Ajv](https://ajv.js.org/);
- [jsownwebtoken](https://github.com/auth0/node-jsonwebtoken);
- [ORM Sequelize](https://sequelize.org/) com PostgreSQL.

Este projeto faz parte de uma série de aprendizado em APIs com Nodejs e PHP. 

## Compatibilidade

- node >= 18.x;
- npm 9.5.x;
- Express 4.18.2
- MySQL 8.0;
- Ajv 8.12.0;
- cors 2.8.5;
- jsonwebtoken 9.0.1;
- mysql2 3.6.0;
- sequelize 3.6.0.

## Instalação e Inicialização

Faça o download do projeto e:

```bash
$ cd api-players-render
$ cp .env.example .env
# preencher os dados de variaveis no .env
$ npm install
$ node app.js
```

Lembre-se: este é todo um projeto pronto para ser executado, é um projeto educacional. Para o uso em seus projeto existente, verifique somente pelos seguintes arquivos:

- .env-example: todos os dados que vai precisar para o Render. Ao adicionar a URL externa que for criar no serviço de banco de dados do Render, não esqueça de adicionar ao final da URL: ?ssl=true.
- /app/models/index.js: o projeto usa Sequelize, atente para as configurações que são funcionais ao PostgreSQL;
- package.json: atente para os pacotes que foram utilizados, o Render fornece o SGBD somente para PosgreSQL.

## Deploy no Render

1. Crie o banco de dados em PostgreSQL;
2. Crie um serviço web no Render;
3. Conecte via Render o repositório da aplicação;
4. Configure as variáveis de ambiente;
5. Faça o deploy.

Para mais informações veja as documentações em [Render docs](https://render.com/docs).
