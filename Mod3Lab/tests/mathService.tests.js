describe('mathService', function () {
  it('add is defined', function () {
    expect(mathService.add).toBeDefined();
  });

  it('should add', function () {
    var first = 3;
    var second = 5;

    var expected = first + second;
    var actual = mathService.add(first, second);

    expect(expected).toBe(actual);
  });

  it('subtract is defined', function () {
    expect(mathService.subtract).toBeDefined();
  });

  it('should subtract', function () {
    var first = 3;
    var second = 5;

    var expected = first - second;
    var actual = mathService.subtract(first, second);

    expect(expected).toBe(actual);
  });

  it('multiply is defined', function () {
    expect(mathService.multiply).toBeDefined();
  });

  it('should multiply', function () {
    var first = 3;
    var second = 5;

    var expected = first * second;
    var actual = mathService.multiply(first, second);

    expect(expected).toBe(actual);
  });

  it('divide is defined', function () {
    expect(mathService.divide).toBeDefined();
  });

  it('should divide', function () {
    var first = 3;
    var second = 5;

    var expected = first / second;
    var actual = mathService.divide(first, second);

    expect(expected).toBe(actual);
  });

  it('power is defined', function () {
    expect(mathService.power).toBeDefined();
  });

  it('should power', function () {
    var first = 2;
    var second = 4;

    var expected = Math.pow(first,second);
    var actual = mathService.power(first, second);

    expect(expected).toBe(actual);
  });

  it('squareRoot is defined', function () {
    expect(mathService.squareRoot).toBeDefined();
  });

  it('should squareRoot', function () {
    var first = 9;

    var expected = Math.sqrt(first);
    var actual = mathService.squareRoot(first);

    expect(expected).toBe(actual);
  });
});
