
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix) || matrix.length == 0) {
    return [];
  }

  let result = [];
  let index = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        result[index] = matrix[i][j];
        index++;
      }
    }
    else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        result[index] = matrix[i][j];
        index++;
      }
    }
  }
  return result;
}
