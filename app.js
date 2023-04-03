// Importa o módulo dotenv para carregar variáveis de ambiente
import dotenv from 'dotenv';
dotenv.config();

// Importa o módulo express para criar o servidor
import express from 'express';

// Importa as rotas definidas na pasta src/routes
import homeRoutes from './src/routes/homeRoutes';

// Cria a classe App, que será responsável por configurar o servidor
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // Método responsável por configurar os middlewares do servidor
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  // Método responsável por definir as rotas do servidor
  routes() {
    this.app.use('/', homeRoutes);
  }
}

// Exporta a instância do servidor express
export default new App().app;
