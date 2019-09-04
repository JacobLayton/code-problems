function getTotalX(a, b) {
  // let products = [a[a.length-1]];
  // let minFactor = a[0] * a[a.length - 1];
  // while (minFactor <= b[0]) {
  //     products.push(minFactor);
  //     minFactor += minFactor;
  // }
  // console.log(products);
  // for (let i = 0; i < products.length; i++) {
  //     for (let j = 0; j < a.length; i++) {
  //         if (products[i] % a[j] != 0) {
  //             products.splice(i, 1)
  //         }
  //     }
  // }
  let lastA = a[a.length - 1];
  let products = [];
  let newProducts = [];

  // if (a.length === 0) {
  //     return 0;
  // } else if (a.length === 1) {
  //     for (let i = 0; i < b.length; i++) {
  //         if (b[i] % a[0] !== 0) {
  //             return 0
  //         }
  //     }
  //     return 1;
  // }

  while (lastA <= b[0]) {
    products.push(lastA);
    lastA += a[a.length - 1];
  }

  for (let i = 0; i <= products.length; i++) {
    if (products[i] % a[0] === 0) {
      newProducts.push(products[i]);
    }
  }

  // let factors = newProducts;
  // for (let j = 0; j < newProducts.length; j++) {
  //     for (let k = 0; k < b.length; k++) {
  //         if (b[k] % newProducts[j] != 0) {
  //             newProducts.splice(j, 1);
  //         }
  //     }
  // }
  const arrResult = [];
  for (let i = 0; i < newProducts.length; i++) {
    let flagB = true;
    for (const elementB of b) {
      if (elementB % newProducts[i] !== 0) {
        flagB = false;
      }
    }
    if (flagB) {
      arrResult.push(newProducts[i]);
    }
  }

  // return resultant array length
  return arrResult.length;
}

const a = [2, 4];
const b = [16, 32, 96];

console.log(getTotalX(a, b));
