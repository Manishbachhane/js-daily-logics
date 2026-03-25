//factoorial of a number
//5! = 5*4*3*2*1

function fac(n){
  let fact=1;
  while(n){
    fact*=n;
    n--;
  }
  return fact;
}

console.log(fac(5));