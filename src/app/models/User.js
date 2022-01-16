const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = require('mongodb').ObjectID;

const User = new Schema({
    _id: ObjectId,
    name: String,
    username: {type: String, minlength : 6},
    password: {type: String, minlength : 8, select: false},
    RSA: String,
    pictures: String,
    joined_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model('User', User)