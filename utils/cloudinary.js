import cloudinary from 'cloudinary';

// Configuration 
cloudinary.config({
    cloud_name: "dlxanaql1",
    api_key: "686428563455885",
    api_secret: "NpMa7cUPsgZyHaIh8d2hb2QzCbc",
});

const cloudinaryUploadImg = async (fileToUploads) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(fileToUploads, (result) => {
            resolve({
                url: result.secure_url,
            }, {
                resorce_type: "auto",
            })
        })
    })
};

export default cloudinaryUploadImg;