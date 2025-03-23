function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = key;
    }
  
    return arr;
  }
  
  // Example usage:
  const arrayToSort = [12, 11, 13, 5, 6];
  const sortedArray = insertionSort(arrayToSort);
  
  console.log("Sorted array:", sortedArray);
  
