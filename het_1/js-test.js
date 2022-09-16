//to start the tests run 'npm test' in the shell 


//Write a function to check if a given positive number is a multiple of 4 or a multiple of 5 
//the function should return '4', '5', or '4 and 5', 'none' depending  on the divisibility of the number 
//samples
//input: 13, output: 'none'
//input: 20, output: '4 and 5'
//input: 10, output: '5'
function divisible(value) {
    return (value % 4 === 0 && value % 5 === 0) ? '4 and 5' : (value % 4 === 0) ? '4' : (value % 5 === 0) ? '5' : 'none'
  }
  
  //write a function that returns a copy of an array with each element of the original multiplied by 5
  //sample input: [3, 11, 5], output: [15, 55, 25]
  function multipliedBy5(array) {
    return array.map((elem) => (elem * 5));
  }
  
  //Write a function to convert a specified positive number to an array of digits
  //sapmple input: 123, output [1, 2, 3]
  function digitize(val) {
    const valString = val.toString();
    const arr = [];
    for (let i = 0; i < valString.length; i++) {
      arr.push(Number(valString.charAt(i)));
    }
    return arr;
  }
  
  //Write a function to convert a csv string to an array of objects
  //Property names are the first line of the csv string
  //sapmple input:
  //`a;b;c
  //1;2;4
  //4;5;6`
  //output: [{a:'1', b:'2', c:'4'}, {a:'4', b:'5', c:'6'}]
  function csvToObjArray(csv) {
    const result = [];
  
    const content = csv.split('\n')
    const headers = content[0].split(';');
    content.shift();
  
    content.forEach((row) => {
      const rowData = row.split(';');
      const obj = {};
      for (let i = 0; i < rowData.length; i++) {
        obj[headers[i]] = rowData[i];
      }
      result.push(obj);
    })
  
    return result;
  }
  
  const peopleEndPoint = 'https://swapi.dev/api/people/?page1';
  
  //write a function that sends a request to the above peopleEndPoint
  //and returns a promise that resolves with the names of poeple objects returned by the service - the format of the response is json
  //the promise resolves with an array like this:
  //["Luke Skywalker", "C-3PO", "R2-D2", "Darth Vader"...]
  
  //you can use the globally accessible fetch mehod to send the request
  //more info:  https://www.npmjs.com/package/node-fetch#json
  
  async function getPeople() {
    const response = await fetch(peopleEndPoint);
    const { results } = await response.json();
  
    return results.map((result) => result.name)
  }
  
  //write a function that takes a numeric parameter (n) and returns a promise that resolves the nth fibonacci number
  //if n < 0 the promise rejects with an error message 
  
  //samples 
  //input: 0, output: Promise that resolves with 0
  //input: 3, output: Promise that resolves with 2
  //input: -11, output: Promise thet reject with an error message 'n has to be larger then -1'
  function fibonacciFunc(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacciFunc(n - 1) + fibonacciFunc(n - 2);
  };
  
  function fibonacci(n) {
  
    return new Promise((res, rej) => {
      if (n < 0) {
        rej('n has to be larger than -1')
      } else {
        const fib = fibonacciFunc(n);
        res(fib)
      }
    })
  }
  
  module.exports = {
    divisible, multipliedBy5, digitize, csvToObjArray, getPeople, fibonacci
  }