import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    minLength: 5,
    maxLength: 100,
    required: true,
  },

  password: {
    type: String,
    minLength: 7,
    required: true,
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
