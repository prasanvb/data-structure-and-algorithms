# Big O Intro

- Time Complexity
  - Time complexity represents the number of times a statement/function is executed (mostly depending inputs provided)

- Space Complexity

## Efficiency Case Representation using Greek Letter

- Omega - Best case
- Theta - Average
- Omicron - Worst Case (The O from the Big O comes this)

## Big O Notation

- O(n): code was executed `n` number for times depending on the input (i.e. function holding a single for-loop). It is called Linear Time Complexity, if it takes the same time regardless of the number of inputs.

- Drop Constants: O(2n) ~ O(n) - code was executed n+n number for times (i.e, two same `n` number for-loops iterations one after another inside a function)

- Simplify O(n^n): O(n^2) called Quadratic Time Complexity or O(n^3) or O(n^4) or O(n^n) ~ O(n^2) - code was executed `n*n` number for times (i.e, two nested for-loops iterations executed `n` of times each inside a function)
  - O(n^2) called Quadratic Time Complexity
  - O(n^3) called Cubic Time Complexity

- Drop Non-Dominants: O(n^2+n) ~ O(n^2) - code was executed `n*n` number for times and then `n` number fo times (i.e, two nested for-loops and a simple for-loop inside a function)

- Constant Times: O(1) - ir respective of the input given code was executed only once (i.e. simple addition inside function)

- O(log n) is called Logarithmic time complexity, where the input size is reduced by half every iteration.
  - Divide and conquer an sorted Array
  - Let say we have an array = [1,2,3,4,5,6,7,8] whose length is 8
  - divide it until you reach single item that is
    - [1,2,3,4] [5,6,7,8]
    - [1,2] [3,4] [5,6] [7,8]
    - [1] [2] [3] [4] [5] [6] [7] [8]
  - notice you where able to divide initial array into 3 level until you reached single item array
  - i.e. 2^3 = 8 or we can say log2 8 = 3
  - O(nlog n) - used on some sorting algorithm

- Different Terms for Input:
  - O(a+b): code was executed `a` number for times and then `b` number of times (i.e, two different for-loops iterations inside a function)
  - O(a^b): code was executed `a*b` number for times (i.e, two nested different number for-loops iterations inside a function)

## Big O Notation efficiency

- O(1): most efficient code (Constant Time Complexity)
- O(log n): very efficient code (Logarithmic Time Complexity)
- O(n): efficient code (Linear Time Complexity)
- O(nlog n): very in-efficient code
- O(n^2): most in-efficient code (Quadratic Time Complexity)
