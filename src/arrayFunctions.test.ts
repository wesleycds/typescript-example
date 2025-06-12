import {
  quadradoComFor,
  quadradoComForEach,
  juntarStrings,
  ordenarArray,
  doisPrimeiros,
  filtrarPares,
} from './arrayFunctions';

test('quadrado com for', () => {
  expect(quadradoComFor([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
});

test('quadrado com forEach', () => {
  expect(quadradoComForEach([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
});

test('juntar strings com join', () => {
  expect(juntarStrings(['Arrays', 'com', 'TypeScript'])).toBe('Arrays com TypeScript');
});

test('ordenar array', () => {
  expect(ordenarArray(['carro', 'boneco', 'ave', 'lapis'])).toEqual(['ave', 'boneco', 'carro', 'lapis']);
});

test('pegar dois primeiros com slice', () => {
  expect(doisPrimeiros([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
});

test('filtrar pares com filter', () => {
  expect(filtrarPares([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
});
