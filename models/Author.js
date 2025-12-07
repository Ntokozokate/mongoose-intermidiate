import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: String,
  bio: String,
});
export default mongoose.model("Author", AuthorSchema);
