// Write a Javascript function that checks whether a Number is prime.

function isPrime(number){
  if(number<=1){
    return false;
  }
  for (let i = 2; i < Math.sqrt(number); i++) {
    if(number%i===0){
      return false;
    }
  }
  return true;
}
console.log(isPrime(5)); 
console.log(isPrime(11));
console.log(isPrime(21));