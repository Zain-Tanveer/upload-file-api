const Upload = require("../models/Upload_Model");

const { deleteImageFromCloudinary } = require("../middlewares/cloudinary");

exports.getPhotos = async (req, res) => {
  const allPhotos = await Upload.find().sort("-createdAt");
  res.status(200).json(allPhotos);
};

exports.savePhoto = async (req, res) => {
  const photo = req.body;
  const newPhoto = await Upload.create({ ...photo });
  res.status(201).json(newPhoto);
};

exports.deletePhoto = async (req, res) => {
  const { photo_id } = req.params;
  const photo = await Upload.findById(photo_id);
  const response = await deleteImageFromCloudinary(photo);
  if (!response.result) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Something went wrong",
        error: response,
      });
  }

  const deletedPhoto = await Upload.findByIdAndDelete(photo_id);

  res.status(200).json({ response, deletedPhoto });
};
