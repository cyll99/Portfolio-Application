import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.insertUser = async function ({ userName, password }) {
  const user = new this({ userName, password });
  console.log(user);
  
  return user.save();
};

userSchema.statics.fetchUserByUsername = async function (userName) {
  return this.findOne({ userName });
};

const User = mongoose.model("User", userSchema, "users");

export default User;
