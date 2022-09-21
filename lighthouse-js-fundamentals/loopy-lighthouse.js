/* Prints numbers from 100 to 200 with three exceptions: multiple of 3 print Loopy
multiple of 4 print Lighthouse, multiple of 3 and 4 print LoopyLighthouse */
let x = 100;
for (x = 100; x <= 200; x++ ) { //start, end, next
  if (x % 3 === 0 && x % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (x % 4 === 0) {
    console.log ('Lighthouse');
  } else if (x % 3 === 0){
    console.log('Loopy');
  } else {
    console.log(x);
  }
}