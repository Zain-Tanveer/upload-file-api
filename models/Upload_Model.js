const mongoose = require('mongoose')

const UploadSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      required: [true, 'pleasse provide photo'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Upload', UploadSchema)
