function decimalToBinary(num) {
  //Write you code here
  let ans = "";

  if (num === 0) {
    return "0";
  }

  while (num) {
    let val = Math.floor(num % 2);
    num = Math.floor(num / 2);
    ans += val;
  }

  return ans.split('').reverse().join('');
}

window.decimalToBinary = decimalToBinary;
