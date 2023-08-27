# url-shortener
Projeto encurtador de url feito com Nodejs, express, typescript. 
Não está completo.

### Pré-requisitos globais:
`npm i -g nodemon typescript ts-node concurrently`

### Variaveis de ambiente
#### crie o arquivo `.env`
#### adicione as seguintes variaveis: 
`PORT=[porta que deseja ex: 80]`
`BASE_URL=http://localhost`
`NAME_DB=[nome do banco de dados]`
`USER_DB=[usuario]`
`DIALECT_DB=mysql`
`PASSWORD_DB=[senha do banco de dados]`
`PORT_DB=3306`
`HOST_DB=127.0.0.1`

### Instalação
`npm install` 

### Fazer o migration do banco de dados
#### Criar o banco de dados
`npm run db:create` 
#### Criar as tabelas
`npm run db:migration`
#### Inserir o usuario teste obs: só funciona se tiver esse usuario
`npm run db:seed`

### Para rodar o projeto
`npm run start-dev`

### link do design
[Linkly](https://www.figma.com/community/file/1238543222697425130/URL-Shorter-Website-Design)