// Insertion Sort - every time sets the next available element of the array and goes ahead

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for(let k = 0; k < i; k++) {
      if(arr[k] > arr[i]) {
        let [item] = arr.splice(i, 1);
        arr.splice(k, 0, item);
        break;
      }
    }
  }
  return arr;
}