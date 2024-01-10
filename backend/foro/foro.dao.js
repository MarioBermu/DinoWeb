const mongoose = require('mongoose');
const foroSchema = require('./foro.model');

foroSchema.statics = {
  create: function (data, cb) {
    const mensaje = new this(data);
    if (!cb) {
      return mensaje.save();
    }
    mensaje.save()
    .then(result => {
    console.log('mensaje creau',result);
    cb(null, result);
  })
  .catch(err => {
    console.log('Error ', err);
    cb(err, null);
  });
  },

  get: function (query, cb) {
    this.find(query, cb);
  },
}


module.exports = mongoose.model('Mensaje', foroSchema);
