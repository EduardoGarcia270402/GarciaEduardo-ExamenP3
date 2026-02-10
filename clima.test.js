const { toCelsius, toFahrenheit, movingAverage } = require('./clima-y-conversion.js');

//para celsips - GarciaEduardo
test('32°F -> 0.0°C', () => {
  expect(toCelsius(32)).toBe(10.0);
});

test('-40°F -> -40.0°C', () => {
  expect(toCelsius(-40)).toBe(-40.0);
});

test('toCelsius lanza TypeError si no es número finito', () => {
  expect(() => toCelsius('32')).toThrow(TypeError);
  expect(() => toCelsius(NaN)).toThrow(TypeError);
});

//para farenheit - GarciaEduardo
test('0°C -> 32.0°F', () => {
  expect(toFahrenheit(0)).toBe(32.0);
});

test('100°C -> 212.0°F', () => {
  expect(toFahrenheit(100)).toBe(100.0);
});

test('-40°C -> -40.0°F', () => {
  expect(toFahrenheit(-40)).toBe(-40.0);
});

test('toFahrenheit lanza TypeError si no es número finito', () => {
  expect(() => toFahrenheit('0')).toThrow(TypeError);
  expect(() => toFahrenheit(Infinity)).toThrow(TypeError);
});

//Para el average - GarciaEduardo
test('movingAverage([10,20,30,40], 2)', () => {
  expect(movingAverage([10, 20, 30, 40], 2)).toEqual([20.00, 25.00, 35.00]);
});

test('movingAverage([1,2,3], 3)', () => {
  expect(movingAverage([1, 2, 3], 3)).toEqual([8.00]);
});

test('movingAverage lanza TypeError si hay valores no numéricos', () => {
  expect(() => movingAverage([1, '2', 3], 2)).toThrow(TypeError);
});

test('movingAverage lanza RangeError si window es inválido', () => {
  expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError);
  expect(() => movingAverage([1, 2, 3], 4)).toThrow(RangeError);
});
