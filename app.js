// Importa o módulo express para criar o servidor
import cors from "cors";
import express from "express";

import { connectBD, sessionOptions } from "./src/config/database";
// Importa as rotas definidas na pasta src/routes
import homeRoutes from "./src/routes/homeRoutes";

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
    this.app.use("/", homeRoutes);
  }

  cors() {
    this.app.use(cors());
  }

  connect() {
    connectBD
      .then(() => {
        this.app.emit("pronto"); // Emite o evento 'pronto' para iniciar o servidor
      })
      .catch((e) => console.log(e));
  }

  sessionOptionsBD() {
    this.app.use(sessionOptions);
  }
}

// Exporta a instância do servidor express
export default new App().app;
