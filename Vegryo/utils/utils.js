
const gardenDesign = (vegetables, height, width) => {
  let area = Math.floor(height * width)
  let sectionSpace = area / vegetables.length
  let vegetableArea = []
  vegetables.forEach(vegetable => {
    let vegetableKey = Object.keys(vegetable)
    let indVegetable = vegetableKey[0]
    let vegSpacing = Math.pow(vegetable[indVegetable], 2)
    let vegetableCount = Math.floor(sectionSpace / vegSpacing)
    return vegetableArea.push({ [indVegetable]: vegetableCount })
  });

  return vegetableArea
}

module.exports = gardenDesign

//take an object with vegetables
 //get the garden spacing information from the user >> do we store this in the app state too?