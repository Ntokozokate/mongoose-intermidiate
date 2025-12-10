import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  country: String,
});
export default mongoose.model("Author", AuthorSchema);
