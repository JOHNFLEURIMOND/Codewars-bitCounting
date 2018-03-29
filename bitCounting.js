//create a function for countBits
var countBits = function(n) {
  binaryResilientCoders = new Number(n).toString(2);
  //convert n to binary.
  var count = 0;
  var wakanda = binaryResilientCoders.indexOf('1');
  //i indexOf
  while (wakanda != -1) {
    count++;
    wakanda = binaryResilientCoders.indexOf('1', wakanda + 1);
  }
  return count
};



Created by @fleurimond_john