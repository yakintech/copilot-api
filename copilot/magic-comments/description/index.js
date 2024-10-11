

/**
@description This function sorts an array of objects by the createdDate property in ascending order.
@param {Array<Object>} arr - The array of objects to sort.
@returns {Array<Object>} The sorted array of objects.
 */

function sortObjectsByDate(arr) {
  return arr.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
}
