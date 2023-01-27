require('dotenv').config();
const router = require('express').Router();
const cloudinary = require('cloudinary').v2;

const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'DEV',
    },
});

const multer = require('multer');
const upload = multer({ storage: storage });
// var cl = new cloudinary.Cloudinary({cloud_name: "dhniskpvl", secure: true});

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});

console.log(cloudinary.config().cloud_name);

router.post('/', upload.single('picture'), async (req, res) => {
    if (!req.file) return res.send('Please upload a file');
    return res.json({ picture: req.file.path });
});
module.exports = router;
