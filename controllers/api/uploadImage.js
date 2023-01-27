require("dotenv").config();
const router = require('express').Router();
const uploadimage = require("../../utils/uploadimage");

router.post('/' , (req, res) => {
    console.log(req.files)
    uploadimage(req.files.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;