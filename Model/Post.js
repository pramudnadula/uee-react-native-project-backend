const mongoose = require("mongoose");
var ObjectId = require("bson").ObjectId;
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
  },
  Description: {
    type: String,
  },
  uid: {
    type: ObjectId,
    ref: "User"
  },
  img1: {
    type: String
  },
  img2: {
    type: String
  },
  img3: {
    type: String
  },
  type: {
    type: Number
  },
  categoty: { type: String },
  comment: { type: Boolean },
  like: { type: Boolean },
  comments: [{ type: ObjectId, ref: "comment" }],
  likes: [{ type: ObjectId, ref: "User" }]
});

const Post = mongoose.model("post", PostSchema);

module.exports = Post;
