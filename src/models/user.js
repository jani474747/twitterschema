const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: { type: String },
  username: { type: String },
  mail: { type: String },
  password: { type: String },
  bio: String,
  location: String,
  profilePic: String,
  bannerPic: String,
  joinedDate: { type: Date, default: Date.now },
  following: [{ type: Schema.Types.ObjectId, ref: "user" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "user" }],
  likedTweets: [{ type: Schema.Types.ObjectId, ref: "tweet" }],
  tweets: [{ type: Schema.Types.ObjectId, ref: "tweet" }],
});

var user = mongoose.model("user", userSchema);

module.exports = user;
