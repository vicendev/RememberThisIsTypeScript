var myArray = [1,2,2,4,5,6,7,8,8,8];

function recopileNumbers() {

  let myDict = [{
    number: 0,
    longest: 0
  }]

  myArray.map(item => {

    if (myDict.find((elem) => elem.number === item)){
      var myElem;
      myElem = myDict.find((elem) => elem.number === item)
      myElem.longest ++;
    } else {
      myDict.push({number:item, longest:1})
    }
  })
  myDict.shift()

  return myDict;
}

function getLongestNumber() {
  let numbersDict = recopileNumbers();
  let finalResult = '';
  let lastLongest = null;

  if (numbersDict.length > 0) {
    numbersDict.map(item => {
  
      if (numbersDict.length > 1) {
        numbersDict.map((i) => {

          if (lastLongest === null){
            lastLongest = item;
            finalResult = setResult(lastLongest);
          }

          if (i.longest > item.longest) {
            if(lastLongest.longest < i.longest) {
              lastLongest = i;
              finalResult = setResult(lastLongest);
            }

          }
        })
      } else {
        finalResult = setResult(item);
      }

    })
  } else {
    finalResult = `
    Longest: 0
    Number: 0`;
  }

  return finalResult;
}

function setResult(item) {

  let result = `
  Longest: ${item.longest}
  Number: ${item.number}`;

  return result;
}

function printResult(){
  console.log(getLongestNumber());
}

function main() {
  printResult();
}

main();