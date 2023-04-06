// Importa o objeto 'app' criado em './app.js'
import app from "./app";

const port = 8081;

// Inicia o servidor na porta definida
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
