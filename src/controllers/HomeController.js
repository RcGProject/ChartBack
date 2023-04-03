
class HomeController {
  async index(req, res) {
    return await res.json('Olá');
  }
}

export default new HomeController();
