// Controlador da página Home
class HomeController {
  async index(req, res) {
    await res.send('Servidor rodando...');
  }
}

export default new HomeController();
