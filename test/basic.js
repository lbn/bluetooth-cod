var assert = require("assert");
var cod = require("../src/bluetooth-cod");

describe("bluetooth-cod",function(){
   describe("#decode()",function(){
      var r = { dclass: 'Computer',
              dservices: [ 'Information', 'Object Transfer', 'Networking' ] };
      it("should return "+r+" for input 9568512",function(){
         assert.deepEqual(r,cod.decode(9568512));
      });
   });
});
