var Calculator = require('./../js/pingpong.js').calculatorModule;

describe('PingPong', function() {

  var simpleCalculator;

  beforeEach(function(){
    simpleCalculator = new Calculator("hot pink");
  });

  it('should show how beforeEach() works', function() {
    console.log(simpleCalculator);
  });

  it('should return "ping" when a number is divisible by 3', function() {
    var output = simpleCalculator.pingPong(3)
    expect(output).toEqual([1,2,"ping"])
    expect(output).not.toEqual([1,2,3])
  });

  it('should return "pong" when a number is divisible by 5', function() {
    var output = simpleCalculator.pingPong(5)
    expect(output).toEqual([1,2,"ping",4,"pong"])
    expect(output).not.toEqual([1,2,"ping",4,5])
  });

  it('should return "ping-pong" when a number is divisible by 15', function() {
    var output = simpleCalculator.pingPong(15)
    expect(output).toEqual([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"ping-pong"])
    expect(output).not.toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
  });


});
