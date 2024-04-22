const ImageModel = require('../models/image_model');

const ImageController = {
    uploadImage: async (req, res) => {
        try {
            const { name, image, description } = req.body; // Destructure request body

            // Basic validation (consider more thorough validation)
            if (!image) {
                return res.status(400).json({ message: 'Missing required fields:  image' });
            }

            const newImage = new ImageModel({ name, image, description }); // Create new image object
            await newImage.save(); // Save image to database

            return res.status(200).json({ status: 'success', message: 'Image uploaded successfully', data: newImage });
        } catch (error) {
            console.error(error); // Log error for debugging
            res.status(500).json({ message: 'Internal server error' }); // Generic error message for security
        }
    },

    getImages: async (req, res) => {
        try {
            const images = await ImageModel.find();
            return res.status(200).json({ status: "success", data: images });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
}

module.exports = ImageController;