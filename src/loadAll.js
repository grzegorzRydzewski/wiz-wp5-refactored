//const imagesJSON = require('./images.json');

export default function loadAll(r) {
  let images = {};
   r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
 }
