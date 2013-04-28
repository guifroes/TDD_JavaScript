var assert = require("assert");

// function declaration
function myFunctionDeclaration(param1, param2) {
	// bla bla
}

// function expression
var myFunctionExpression = function(param1, param2, param3) {
	// bla bla
};

// named function expression
var myNamedFunctionExpression = function namedFunctionExpression(param1, param2, param3, param4) {
	// bla bla
};

describe('Functions', function(){
  
  describe('length property', function(){
    
    it('should return number of parameters', function() {
      
      assert.equal(2, myFunctionDeclaration.length);
      assert.equal(3, myFunctionExpression.length);
      assert.equal(4, myNamedFunctionExpression.length);
      assert.equal(2, assert.length);
      assert.equal(0, console.log.length); // this is confusing

    })
  })
})
