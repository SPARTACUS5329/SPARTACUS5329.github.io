module.exports = (arr, length) => {
  let temp;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[i].power > arr[j].power) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
