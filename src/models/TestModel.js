const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String,
});

const TestModel = mongoose.model("Teste", TestSchema);

module.exports = TestModel;
