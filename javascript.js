for (let num = 1; num <= 30; num++) {
  if (num % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(num);
  }
}

let numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numberList.length; i++) {
  numberList[i] *= 5;
}

console.log(numberList);


let wordsArray = ["cat", "window", "bottle", "car", "JavaScript"];

for (let i = 0; i < wordsArray.length; i++) {
  if (wordsArray[i].length > 4) {
    console.log("Long word alert!");
  } else {
    console.log(wordsArray[i]);
  }
}

for (let i = 1; i <= 5; i++) {
  let paragraph = document.getElementById('myParagraph');
  paragraph.textContent += i;
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}