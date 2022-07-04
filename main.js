// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];


// opdracht 1A
const tvTypes = inventory.map((tv) => {
  return tv.type
})

console.log(tvTypes)

// opdracht 1B
const soldOutTvs = inventory.filter((tv) => {
  if (tv.originalStock <= tv.sold) {
    return true
  }
})

console.log(soldOutTvs)

// opdracht 1C
const ambiLight = inventory.filter((tv) => {
  if (tv.options.ambiLight === true) {
    return true
  }
})

// opdracht 1D
const sortPriceAll = inventory.sort((a,b) => {
  return a.price - b.price
})

console.log(sortPriceAll)

const soldTvsContainer = document.getElementById("sold-tvs")
const boughtTvsContainer = document.getElementById("bought-tvs")
const toBeSoldTvsContainer = document.getElementById("to-be-sold-tvs")


// opdracht 2A
function tvsSold (tv) {
  let outcome = 0;
  for (let i = 0; i < tv.length; i++) {
    outcome += tv[i].sold;
  } return outcome
}

const soldTvs = tvsSold(inventory)

// opdracht 2B

// opdracht 2C
function tvsBought (tv) {
  let outcome = 0;
  for (let i = 0; i < tv.length; i++) {
    outcome += tv[i].originalStock;
  } return outcome
}

const boughtTvs = tvsBought(inventory)



// opdracht 2D



// opdracht 2E
const toBeSold = () => {
  return boughtTvs - soldTvs
}

soldTvsContainer.textContent = `Amount of TVs sold = ${soldTvs}`
boughtTvsContainer.textContent = `Amount of TVs bought = ${boughtTvs}`
toBeSoldTvsContainer.textContent = `Amount of TVs yet to be sold = ${toBeSold()}`

// opdracht 3A

const tvBrands = inventory.map((tv) => {
  return tv.brand
})

console.log(tvBrands)


// opdracht 3B


function createList (arr) {
  const tvBrandsContainer = document.getElementById('tv-brands-container');
  arr.map((tv) => {
    tvBrandsContainer.innerHTML += `<li>${tv.brand}</li>`
  })
}

createList(inventory)

// opdracht 4A
const tvTotalContainer = document.getElementById('tv-total-container');

function createTv (arr) {
   return `${arr.brand} ${arr.type} ${arr.name}`
}
tvTotalContainer.innerHTML = `<li> ${createTv(inventory[1])} </li>`



// opdracht 4B
const tvPriceContainer = document.getElementById('tv-price-container');

function createTvPrice (arr) {
  return `€${arr.price}`
}
tvPriceContainer.innerHTML += `<li>${createTvPrice(inventory[1])}</li>`

createTvPrice(inventory)


// opdracht 4C
const screenSizesContainer = document.getElementById('screenSizes-container');

function screenSizes (arr) {
  return `${arr.brand} ${arr.availableSizes}`
}

screenSizesContainer.innerHTML += `<li>${screenSizes(inventory[1])}</li>`

screenSizes(inventory)