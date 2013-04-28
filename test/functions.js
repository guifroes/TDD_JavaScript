var assert = require("assert");

describe('Functions', function(){
  
  describe('length property', function(){
    
    it('should return number of parameters', function(){
      
      assert.equal(2, assert.length);
      assert.equal(1, document.getElementById.length);
      assert.equal(0, console.log.length);

    })
  })
})
