const mongoose = require('mongoose');
const { text } = require('express');

// const heroSchema = mongoose.Schema({
//     name: String,
//     birthday: Date,
//     birthname: String,
//     movies: Array,
//     likes: Number,
//     imageUrl: String,
//     deceased: Boolean
// });

const heroSchema = new mongoose.Schema({

    name: {
        type: String,
        minlength: 4,
        maxlength: 12,
        required: true
    },
    birthName: String,
    movies: {
        type: [String],
        enum: ["End Game", "Iron Man"]
    },
    likeCount: Number,
    imageUrl: {
        type: String,
        default: "img need to add"

    },
    deceased: Boolean

});

const Hero = mongoose.model("Hero", heroSchema);
module.exports = Hero;