const mongoose = require('mongoose');
const {cromosSchema, Cromo} = require('./cromos.model');

cromosSchema.statics = {
  create: function (data, cb) {
    const cromo = new this(data);

      return cromo.save();

  },

  get: function (query, cb) {
    this.find(query, cb);
  },
}


module.exports = Cromo;
