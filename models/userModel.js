const { model, Schema } = require("mongoose");
const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  avatarImg: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAd: Date,
  currency_type: String,
});

const UserModel = model("User", UserSchema);
module.exports = UserModel;
