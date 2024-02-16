const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema(
  {
    image: String,
    secure_url: String,
    url: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Upload", UploadSchema);
