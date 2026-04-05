import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // this will automatically add createdAt and updatedAt fields to the user document in the database which can be useful for tracking when a user was created or last updated
  },
);

const User = mongoose.model("User", userSchema);
export default User;
