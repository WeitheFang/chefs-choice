var cloudinary = require('cloudinary').v2;
// var cl = new cloudinary.Cloudinary({cloud_name: "dhniskpvl", secure: true});

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});

console.log(cloudinary.config().cloud_name);

const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto",
};

module.exports = (image) => { //image will be converted to a base64 format
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload( image, opts, (error, result) => {
            if (result && result.secure_url) {
                console.log(result.secure_url);
                return resolve(result.secure_url);
            }
            console.log(error.message);
            return reject ({ message: error.message });
        });
    });
};