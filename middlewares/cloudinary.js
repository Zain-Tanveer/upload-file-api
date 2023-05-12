const cloudinary = require('cloudinary').v2
const { v4: uuidv4 } = require('uuid')
const path = require('path')

// Configuration
const cloudinaryMiddleware = async (req, res, next) => {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  })

  const fileData = req.file
  const base64File = fileData.buffer.toString('base64')
  const uploadStr = `data:${fileData.mimetype};base64,` + base64File

  const public_id = `${uuidv4()}_${path.extname(fileData.originalname)}`.split(
    '.'
  )[0]

  // Upload
  const result = await cloudinary.uploader.upload(uploadStr, {
    public_id: public_id,
  })

  // console.log(result)

  const url = cloudinary.url(public_id)

  req.body.image = public_id
  req.body.secure_url = result.secure_url
  req.body.url = url
  // https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag

  next()
}

module.exports = cloudinaryMiddleware
