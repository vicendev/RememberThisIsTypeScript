var myArray = [1,1];

function sortArray(arr) {

  if (arr.length > 1) {
    arr.sort((a,b) => {
      return a - b
    })
    return arr[arr.length - 1];
    
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    return 0;
  }
}

function printResult(result) {
  console.log(result)
}

function main () {
  printResult(sortArray(myArray));
}

main();