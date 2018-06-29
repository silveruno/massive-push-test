console.log('hello');

function fizzbuzz(arr) {
  var inputArr =[];
  inputArr.push(arr);
  inputArr.map(Element =>{
    if(Element % 15 == 0){
      console.log('FizzBuzz');
    }else if(Element % 3 == 0){
      console.log('Fizz');
    }else if(Element % 5 == 0){
      console.log('Buzz');
    }else console.log(Element);
  });
}

fizzbuzz(1);