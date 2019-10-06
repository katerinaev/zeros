module.exports = function zeros(expression) {
  // your solution
  let arr = expression.split('*');
  let twoCount = 0;
  let fiveCount = 0;
  let numb = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('!!') == true) {
      numb = +arr[i].slice(0, arr[i].length - 2);
      if (numb % 2 == 0) {
        for (let j = 2; numb / j >= 1; j*=2) {
          twoCount += Math.floor(numb / j);
        }
      }
      for (let k = numb; k >= 1; k-=2) {
        if (k % 5 == 0) {
        fiveCount += 1;
        }
        if (k % 25 == 0) {
          fiveCount += 1;
          }
      }
    } else {
      numb = +arr[i].slice(0, arr[i].length - 1);
      for (let j = 2; numb / j >= 1; j*=2) {
        twoCount += Math.floor(numb / j);
      }
      for (let k = 5; numb / k >= 1; k*=5) {
        fiveCount += Math.floor(numb / k);
      }
    } 
  }
  if (twoCount < fiveCount) {
    return(twoCount);
  } else {
    return(fiveCount);
  }
}
