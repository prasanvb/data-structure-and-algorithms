  // Bubble Sort	
  // Time Complexity (Best | Average	| Worst): Ω(n) | Θ(n^2) | O(n^2)	
  // space complexity (Worst): O(1)

  // Idea 
  // Compare adjacent items and bubble the largest item to the end. 
  // Exclude already sorted items and repeat the process until all items are sorted.
  
  // steps
  // 1. declare swapped variable 
  // 2. do block initializes the swapped var to false and executes the for loop
  // 3. for loop to compare adjacent items in an array and swap the largest item to the right and set the swapped var to true 
  // 4. while loop repeats the do block as long as swapped var is set to true


  let arr = [12,4,9,3,70,1e+0,4.4,3.000,1.23456e+5];

  console.log(`${arr}`);
  
  const bubbleSort = (arr) => {
    let swapped;
    do{
      // IMPORTANT NOTE: Every time you go through the do block the swapped value should get update to false
      swapped = false;
      for(let i=0; i<arr.length-1; i++ ){
        if(arr[i] > arr[i+1]){
          let temp = arr[i+1];
          arr[i+1] = arr[i];
          arr[i] = temp;
          swapped=true
        }
      }
    } while(swapped)
    
    return arr;
    
  }
  
  console.log("bubbleSort = " + bubbleSort(arr));
  