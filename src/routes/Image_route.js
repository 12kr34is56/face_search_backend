const ImageRouter = require('express').Router();
const ImageController = require('../controllers/image_controller');
const errorHandler = require('../errors/image_error');

// Wrap routes with error handler middleware
ImageRouter.use(errorHandler);

ImageRouter.post('/upload-image', ImageController.uploadImage);
ImageRouter.get('/get-image', ImageController.getImages);

module.exports = ImageRouter;