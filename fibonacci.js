// simple function to iterate the Fibonacci sequence into an array using arguments in the for function

fib = function (max) {
  for (var fibArray = [0, 1], i = 0, j = 1, k = 0; k < max; i = j, j = x, k++) {
    x = i + j;
    fibArray.push(x);
  }
  console.log(fibArray);
};

fib(10);

// output [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]
