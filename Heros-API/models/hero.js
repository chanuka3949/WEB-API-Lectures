const mongoose = require('mongoose');
const { text } = require('express');

const heroSchema = mongoose.Schema({
    name: String,
    birthday: Date,
    birthname: String,
    movies: Array,
    likes: Number,
    imageUrl: URL,
    deceased: Boolean
});

const Hero = mongoose.model("Hero", heroSchema);
module.exports = Hero;