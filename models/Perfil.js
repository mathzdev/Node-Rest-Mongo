var mongoose = require('mongoose');

var PerfilSchema = new mongoose.Schema({
    nome: String
});

module.exports = mongoose.model('Perfil', PerfilSchema);