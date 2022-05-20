// TODO: make sure that there is no need for optimization
function heapSort(arr) {
  for(let a = 0; a < arr.length; a++) {
    let max = arr[0];
    let i = 0;
    for(let b = 0; b < arr.length - a; b++) {
      if(arr[b] > max) {
        max = arr[b];
        i = b;
      }
    }
    let temp = arr[0];
    arr[0] = max;
    arr[i] = temp;
    temp = arr[arr.length - a - 1];
    console.log('before heapify: ', ...arr);
    arr[arr.length - a - 1] = max;
    arr[0] = temp;
    console.log(' after heapify: ', ...arr);
  }
  return arr;
}