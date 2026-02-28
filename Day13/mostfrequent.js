var arr = [1, 1, 3, 5, 1];

function findMostFrequent(arr) {
  let freq = {};
  let maxCount = 0;
  let maxNumber;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > maxCount) {
      maxCount = freq[num];
      maxNumber = num;
    }
  }

  console.log("Most Frequent:", maxNumber,maxCount,freq);
}




findMostFrequent(arr);