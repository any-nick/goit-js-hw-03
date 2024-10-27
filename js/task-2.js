function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  return newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
}
