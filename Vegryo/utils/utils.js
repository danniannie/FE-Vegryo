import * as api from "../utils/api";

const gardenDesign = (vegetables, height, width) => {
  let area = Math.floor(height * width);
  const veggieKeys = Object.keys(vegetables);
  let sectionSpace = area / veggieKeys.length;
  let vegetableArea = [];

  veggieKeys.forEach(vegetable => {
    let vegSpacing = Math.pow(vegetables[vegetable], 2);
    let vegetableCount = Math.floor(sectionSpace / vegSpacing);
    return vegetableArea.push({ [vegetable]: vegetableCount });
  });
  return vegetableArea;
};

const daysGrown = days => {
  return (Date.now() - new Date(days * 1000)) / (1000 * 60 * 60 * 24);
};

const createData = vegetableLayout => {
  return vegetableLayout
    .reduce((acc, veg) => {
      let key = Object.keys(veg);
      return [...acc, key];
    }, [])
    .map((veg, index) => ({
      key: `item-${index}`,
      label: veg
    }));
};

const createSeedLookup = vegetableLayout => {
  return vegetableLayout.reduce((acc, veg) => {
    return { ...acc, [Object.keys(veg)]: Object.values(veg) };
  }, {});
};

const addressLookup = vegetables => {
  let pictureObj = {};
  for (let i = 0; i < vegetables.length; i++) {
    api.getPicturebyId(vegetables[i]).then(pictureURL => {
      pictureObj.vegetables[i] = pictureURL;
    });
  }
  console.log(pictureObj);
  return pictureObj;
};

module.exports = {
  gardenDesign,
  daysGrown,
  createData,
  createSeedLookup,
  addressLookup
};
