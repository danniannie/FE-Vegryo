
const gardenDesign = (vegetables, height, width) => {
  let area = Math.floor(height * width)
  let sectionSpace = area / vegetables.length
  let vegetableArea = []
  vegetables.forEach(vegetable => {
    let vegetableKey = Object.keys(vegetable)
    let indVegetable = vegetableKey[0]
    let vegSpacing = Math.pow(vegetable[indVegetable], 2)
    return vegetableArea.push({ [indVegetable]: vegSpacing })
  });

  let numberVeggies = []
  vegetableArea.forEach((veggie) => {
    let veggieKey = Object.keys(veggie)
    let indVeggie = veggieKey[0]
    let vegetableCount = Math.floor(sectionSpace / veggie[indVeggie])
    return numberVeggies.push({ [indVeggie]: vegetableCount })
  })

  return numberVeggies
}

module.exports = gardenDesign

//take an object with vegetables
 //get the garden spacing information from the user >> do we store this in the app state too?