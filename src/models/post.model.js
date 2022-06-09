const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  body: String,
  createdDate: { type: Date, default: Date.now },
  tweetImage: String,
  isReply: Boolean,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  likedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "tweet" }],
  retweeters: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
});

var tweet = mongoose.model("tweet", tweetSchema);

module.exports = tweet;
