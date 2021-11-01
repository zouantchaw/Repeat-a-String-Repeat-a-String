//Repeat a given string str (first argument) for num times (second argument). 
//Return an empty string if num is not a positive number. 

function repeatStringNumTimes(str, num) {
  let newStr = ""

  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr
}

// using if statement and recusrion
function repeatStringNumTimes2(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

// using recusrion
function repeatStringNumTimes3(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}


repeatStringNumTimes("abc", 3);