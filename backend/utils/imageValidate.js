const imageValidate = (images) => {
  let imagesTable = [];
  if (Array.isArray(images)) {
    imagesTable = images;
  } else {
    imagesTable.push(images);
  }
  if (imagesTable.length > 3) {
    return { error: "send only 3 images at once" };
  }
  for (let image of imagesTable) {
    if (image.size > 1048576) return { error: "image size too large" };

    const filetype = /png|jpg|jpeg/;
    const mimetype = filetype.test(image.mimetype);
    if (!mimetype) return { error: "incorrect file type" };
  }
  return { error: false };
};
module.exports = imageValidate;
