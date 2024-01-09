const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cromosSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  images: String
});
const Cromo = mongoose.model('Cromo', cromosSchema);

const CargarCromos = async() => {

  await Cromo.deleteMany();
  await Cromo.insertMany([
    {
      id: 1,
      title: 'Dinosauriouno',
      price: 100,
      description: 'esta extinguido',
      images: "https://i.pinimg.com/564x/7d/d9/f7/7dd9f7756eb196c3a095abb2782672f5.jpg"
      },

      {
      id: 2,
      title: 'Dinosaurio2',
      price: 110,
      description: 'esta extinguido x2',
      images: "https://i.pinimg.com/564x/7d/d9/f7/7dd9f7756eb196c3a095abb2782672f5.jpg"
      }

  ]);


};
//inicializamos la funcion de carga de cromos.
CargarCromos();
module.exports = {cromosSchema,Cromo}
