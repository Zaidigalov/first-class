export default function chunkArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

/* const originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunkArray(originalArray, 3); */
