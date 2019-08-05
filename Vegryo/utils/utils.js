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

module.exports = { gardenDesign, daysGrown };
