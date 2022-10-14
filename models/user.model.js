const mongoose = require('mongoose')

const user = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    funded: { type: Number },
    investment: { type: Number },
    transaction: { type: Number },
    withdraw: { type: Number },
    lapTime: { type: Number },
  }
)
const User = mongoose.models.User || mongoose.model('User', user)
module.exports = User