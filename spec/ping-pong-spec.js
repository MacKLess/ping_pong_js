var Calculator = require('./../js/pingpong.js').calculatorModule;

describe('PingPong', function() {

  it('should test whether a number returns "ping" when a number is divisible by 3', function() {
    var simpleCalculator = new Calculator("hot pink")
    var output = simpleCalculator.pingPong(3)
    expect(output).toEqual([1,2,"ping"])
    expect(output).not.toEqual([1,2,3])
  });
});
