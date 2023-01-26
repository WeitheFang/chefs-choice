const router = require('express').Router();
const uploadimage = require('../../utils/uploadimage');

router.post("/uploadImage" , (req, res) => {
    uploadimage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;