const express = require('express')
const router = express.Router()

// const multer = require('multer')
// const upload = multer()
const axios = require('axios')
const path = require('path')

const upload = require('../middlewares/multer-middleware')
const cloudinaryMiddleware = require('../middlewares/cloudinary')
const Upload = require('../models/Upload_Model')

router.get('api/v1/newtest', async (req, res) => {
  res.send('new test route')
})

router.get('/api/v1/adhan', async (req, res) => {
  const latitude = 31.488648
  const longitude = 74.447426
  const todayDate = '06-05-2023'

  const timingsUrl = `http://api.aladhan.com/v1/timings/${todayDate}?latitude=${latitude}&longitude=${longitude}&method=3&school=1`
  const calandarUrl = `https://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longitude}&method=3&school=1`
  try {
    const response = await axios.get(timingsUrl)
    const prayerTimes = response.data
    res.json({ prayerTimes })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: 'something went wrong..' })
  }
})

router.get('/api/v1/get', async (req, res) => {
  const allPhotos = await Upload.find().sort('-createdAt')
  res.status(200).send(allPhotos)
})

router.post(
  '/api/v1/save',
  upload.single('image'),
  cloudinaryMiddleware,
  async (req, res) => {
    // const image = path.extname(req.file.originalname)
    // const imageData = req.file.buffer
    // const base64Image = imageData.toString('base64')
    // console.log(photo)
    // const newPhoto = await Upload.create({ photo })

    // console.log(newPhoto)
    res.status(200).json({ data: req.body })
  }
)

router.delete('/api/v1/delete/:photo_id', async (req, res) => {
  const { photo_id } = req.params
  const photo = await Upload.findOneAndRemove({ _id: photo_id })

  res.status(200).json({ photo })
})

module.exports = router
