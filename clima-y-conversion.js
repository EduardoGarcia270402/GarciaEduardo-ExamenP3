function toCelsius(f) {
  if (typeof f !== 'number' || !Number.isFinite(f)) {
    throw new TypeError("f debe ser un número finito");
  }
  const c = (f - 32) * 5 / 9;
  return Number(c.toFixed(1));
}

function toFahrenheit(c) {
  if (typeof c !== 'number' || !Number.isFinite(c)) {
    throw new TypeError("c debe ser un número finito");
  }
  const f = (c * 9 / 5) + 32;
  return Number(f.toFixed(1));
}

function movingAverage(series, window) {
  if (!Array.isArray(series) || !series.every(n => typeof n === 'number' && Number.isFinite(n))) {
    throw new TypeError('series debe ser un arreglo de números');
  }

  if (!Number.isInteger(window) || window < 2 || window > series.length) {
    throw new RangeError("window fuera de rango")
  }

  const result = [];
  for (let i = 0; i <= series.length - window; i++) {
    const slice = series.slice(i, i + window);
    const avg = slice.reduce((a, b) => a + b, 0) / window;
    result.push(Number(avg.toFixed(2)));
  }
  return result;
}

module.exports = { toCelsius, toFahrenheit, movingAverage };
