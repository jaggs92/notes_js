(function(exports) {

function isTrue(assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("Assertion failed: " + assertionToCheck + "is not truthy");
  }
  else { console.log ("Nice Job!!!");
  }
};
  exports.isTrue = isTrue;
})(this);
