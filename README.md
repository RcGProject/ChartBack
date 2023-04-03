# QuickChart
Repositório dedicado para o projeto QuickChart | BackEnd.

## Stacks utilizadas

* Node.js
* Express.js
* Sucrase
* dotenv
* ESLint

## Como rodar o projeto
* Clone este repositório em sua máquina local.
* Certifique-se de que o Node.js está instalado em sua máquina.
* Execute o comando npm install na raiz do projeto para instalar as dependências.
* Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias (consulte o arquivo .env.example para ver os exemplos).
* Execute o comando "npm run dev" na raiz do projeto para iniciar o servidor.
* Acesse http://localhost:8081 em seu navegador.
* Padrão utilizado


## O projeto segue o padrão de arquitetura MVC (Model-View-Controller), com as pastas organizadas da seguinte forma:
* config: contém as configurações da aplicação, como conexão com o banco de dados e variáveis de ambiente.
* controllers: contém os controladores que recebem as requisições dos clientes e processam as respostas.
* database: contém as configurações e scripts do banco de dados.
* middlewares: contém os middlewares que interceptam as requisições antes de chegar aos controladores.
* models: contém as definições dos modelos de dados usados na aplicação.
* routes: contém as definições das rotas da API.

# Configurações do ESLint

* Além disso, o projeto utiliza ESLint para garantir a qualidade do código e seguir as boas práticas de desenvolvimento. Para verificar se o seu código segue as regras definidas pelo ESLint, execute o comando npm run lint.
## Este projeto utiliza o ESLint para garantir a qualidade do código. As seguintes configurações foram aplicadas no arquivo .eslintrc.js:
* As configurações do ESlint definem o ambiente de execução do código (node: true e es2021: true), a extensão do ESLint (airbnb-base), as opções de parser (ecmaVersion: 'latest' e sourceType: 'module') e as regras de qualidade do código que serão verificadas. Algumas regras foram desabilitadas (no-console, class-methods-use-this, import/first, import/no-extraneous-dependencies, import/prefer-default-export) e outras foram habilitadas (import/no-default-export, import/order) com suas respectivas configurações específicas.
