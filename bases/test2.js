var myArray = [1,2,1,3,3,1,2,1,5,1];

function setAsterisks() {

  let resultArr = ['','','','',''];

  myArray.map((num) => {

    num === 1 ? resultArr[num - 1] += '*' : '';
    num === 2 ? resultArr[num - 1] += '*' : '';
    num === 3 ? resultArr[num - 1] += '*' : '';
    num === 4 ? resultArr[num - 1] += '*' : '';
    num === 5 ? resultArr[num - 1] += '*' : '';
  });

  return resultArr;
}

function getResult() {
  arrResult = setAsterisks();

  let result = `
  1: ${arrResult[0].trim()}
  2: ${arrResult[1].trim()}
  3: ${arrResult[2].trim()}
  4: ${arrResult[3].trim()}
  5: ${arrResult[4].trim()}
  `

  return result;
}

function printResult(){
  console.log(getResult())
}

function main(){
  printResult();
}

main();