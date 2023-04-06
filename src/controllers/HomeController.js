import TestModel from "../models/TestModel";

class HomeController {
  async index(req, res) {
    await res.send(
      TestModel.create({
        titulo: "Titulo teste",
        descricao: "Testes",
      }),
    );
  }
}

export default new HomeController();
