function convertToRoman(num) {
  //soln 1
 /* const myArabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const myRoman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let myAns = "";
  for (let i = 0; i < myArabic.length; i++) {
    while (myArabic[i] <= num) {
      myAns += myRoman[i];
      num -= myArabic[i];
    }
  }*/
  //soln 2
  const myObj = {
    M : 1000,
    CM : 900,
    D : 500,
    CD : 400,
    C : 100,
    XC : 90,
    L : 50,
    XL : 40,
    X : 10,
    IX : 9,
    V : 5,
    IV : 4,
    I : 1
  }
  let myAns = "";
  for (let key of Object.keys(myObj)) {
    let q = Math.floor(num/myObj[key]);
    num -= q * myObj[key];
    myAns += key.repeat(q)
  }
  return myAns;
}

console.log(convertToRoman(1000));
