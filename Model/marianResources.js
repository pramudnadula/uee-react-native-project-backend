const mongoose = require("mongoose");
var ObjectId = require("bson").ObjectId;
const Schema = mongoose.Schema;

const marianResourcesSchema = new Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
    },
    name: {
        type: String,
    },
    details: {
        type: String,
    },
    category: {
        type: String,
    },
    lifeSpan: {
        type: String,
    },
    author: {
        type: String,
    },
    habit: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,


    }
});

const MarianResources = mongoose.model("MarianResources", marianResourcesSchema);

module.exports = MarianResources;
