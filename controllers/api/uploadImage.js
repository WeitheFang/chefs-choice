require('dotenv').config();
const router = require('express').Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

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
console.log(cloudinary.config().cloud_name);

router.post('/', upload.single('picture'), async (req, res) => {
    if (!req.file)
        return res.send(
            'Please upload a file, if using Insomnia select MultiPart form and with field name of "picture"'
        );
    return res.json({ picture: req.file.path });
});
module.exports = router;
