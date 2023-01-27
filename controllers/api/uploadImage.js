require("dotenv").config();
const router = require('express').Router();
const image = require('../../utils/uploadimage')

router.post('/uploadImage' , (req, res) => {
    image(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;