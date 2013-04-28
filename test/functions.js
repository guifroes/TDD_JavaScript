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

// using the Function constructor
var myFunctionConstructor1 = Function("param1, param2", "return true;");
// works like this as well, passing the parameters in separated strings
var myFunctionConstructor2 = Function("param1", "param2", "return true;");

describe('Functions', function(){
  
  describe('length property', function(){
    
    it('should return number of parameters', function() {
      
      assert.equal(2, myFunctionDeclaration.length);
      assert.equal(3, myFunctionExpression.length);
      assert.equal(4, myNamedFunctionExpression.length);

      assert.equal(2, myFunctionConstructor1.length);
      assert.equal(2, myFunctionConstructor2.length);

      assert.equal(2, assert.length);
      assert.equal(0, console.log.length); // this is confusing

    })
  })
})
