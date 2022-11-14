const mongoose = require('mongoose');
const { Schema } = mongoose;

const centresSchema = new Schema({
  nom: String, // String is shorthand for {type: String}
  adresse: String,
  code_postal: String,
  téléphone: String,
  horaires: {},
  lat: Number,
  lon: Number
});

const Centres = mongoose.model('Centres', centresSchema);


const preventionSchema = new Schema({
  titre: String,
  contenu: String
});
const Preventions = mongoose.model('prevention', preventionSchema)


const actualiteSchema = new Schema({
  date: Date,
  titre: String,
  description: String,
  lien: String
});
const Actualites = mongoose.model('actualite', actualiteSchema)


module.exports = { Centres, Preventions, Actualites }









