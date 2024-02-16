const express = require("express");
const router = express.Router();

const uploadMiddleware = require("../middlewares/multer-middleware");
const { cloudinaryMiddleware } = require("../middlewares/cloudinary");

const uploads = require("../controllers/uploads.controller");

router.route("/getPhotos").get(uploads.getPhotos);
router
  .route("/savePhoto")
  .post(
    [uploadMiddleware.single("image"), cloudinaryMiddleware],
    uploads.savePhoto
  );
router.route("/deletePhoto/:photo_id").delete(uploads.deletePhoto);

module.exports = router;
