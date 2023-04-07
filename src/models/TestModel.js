const mongoose = require('mongoose');

// Testando Schema no bando de dados
const TestSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String,
});

const TestModel = mongoose.model('Teste', TestSchema);

module.exports = TestModel;
