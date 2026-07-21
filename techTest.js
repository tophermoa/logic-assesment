// Soal
// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1

// 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
// Input :
// {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// Output: 6

// Input:
// {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 4}, ee: 'car'}
// };
// Output: 12


// Answer 1
const input = [1, 2, 4, 3, 5, 3, 2, 1];
const sortingManual = (data) => {

  const lengthData = data.length
  for (let i = 0; i < lengthData; i++) {
    const item = data[i];

    for (let t = 0; t < (lengthData - i - 1); t++) {
      if (data[t] < data[t + 1]) [data[t], data[t + 1]] = [data[t + 1], data[t]]
    }
  }

  return data;
}

console.log(sortingManual(input))


// Answer 2
const sumSubArr = (data, int) => {
  let sum = 0;

  for (let i = 0; i <= data.length - int; i++) {
    let currentSum = 0;

    for (let t = i; t < (i + int); t++) currentSum += data[t];
    if (currentSum > sum) sum = currentSum;
  }

  return sum;
}

console.log(sumSubArr([100, 200, 300, 400], 2))
// console.log(sumSubArr([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
// console.log(sumSubArr([-3, 4, 0, -2, 6, -1], 2))


// Answer 3
// const Input3 =
// {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

const Input3 =
{
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: 'car' }
};
const sumNestedObj = (obj) => {
  let result = 0;

  for (let key in obj) {
    let value = obj[key];

    if (typeof value === "number") {
      if (value % 2 === 0) result += value;
    } else if (typeof value === "object") {
      if (value !== null) result += sumNestedObj(value);
    }
  }

  return result;
}

console.log(sumNestedObj(Input3));

module.exports = {
  sortingManual,
  sumSubArr,
  sumNestedObj
};