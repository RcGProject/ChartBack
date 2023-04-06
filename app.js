// Importa o módulos para criar o servidor
import express from "express";
import cors from "cors";
import { connectBD, sessionOptions } from "./src/config/database";
import homeRoutes from "./src/routes/homeRoutes";
import chartRoutes from "./src/routes/chartRoutes";

// Cria a classe App, que será responsável por configurar o servidor
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.cors();
    this.routes();
    this.connect();
    this.sessionOptionsBD();
  }

  // Método responsável por configurar os middlewares do servidor
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  // Método responsável por definir as rotas do servidor
  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/chart', chartRoutes);
  }

  // Método que atualiza as politicas de segurança cors
  cors() {
    this.app.use(cors());
  }

  // Método que conencta com o Banco de dados
  connect() {
    connectBD
      .then(() => {
        this.app.emit("pronto"); // Emite o evento 'pronto' para iniciar o servidor
      })
      .catch((e) => console.log(e));
  }

  // Configura a sessão do usuário
  sessionOptionsBD() {
    this.app.use(sessionOptions);
  }
}

// Exporta a instância do servidor express
export default new App().app;
