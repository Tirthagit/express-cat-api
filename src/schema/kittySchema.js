const mongoose = require("mongoose");
const { Schema } = mongoose;

const kittySchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  color: { type: String, required: true },
  weight_kg: { type: Number, required: true },
  owner: {
    name: { type: String, required: true },
    contact: { type: String, required: true },
  },
  vaccinated: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = kittySchema;
