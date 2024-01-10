const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const foroSchema = new Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },

  mensaje:{
    type: String,
    required: true,
    trim: true
  },
},
{timestamps: true}
);

module.exports = foroSchema;
