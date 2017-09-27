var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    perfis: {type: mongoose.Schema.Types.ObjectId, ref: 'Perfil', required: true},
    idade: Number
});

module.exports = mongoose.model('Usuario', UsuarioSchema);