require('dotenv').config();
const router = require('express').Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const Recipe = require('../../models/Recipe');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'DEV',
    },
});
const upload = multer({ storage: storage });

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});

router.post('/', upload.single('picture'), async (req, res) => {
    if (!req.file) {
        Recipe.update({ image: null }, { where: { id: req.body.id } });
    } else {
        Recipe.update({ image: req.file.path }, { where: { id: req.body.id } });
        return res.json({ picture: req.file.path });
    }
});
module.exports = router;
