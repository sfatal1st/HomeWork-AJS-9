import MathAttack from '../js/math';
import ArrayBufferConverter from '../js/arrayBufferConverter';

test.each([
  [1, 100],
  [2, 90],
  [3, 80],
  [4, 70],
  [5, 60],
  [6, 50],
  [7, 40],
  [8, 30],
  [9, 20],
  [10, 10],
  [11, 0],
])('testing MathAttack.setAttack function with range %s', (range, expected) => {
  const character = new MathAttack(100);
  character.setAttack(range);
  const result = character.getAttack();
  expect(result).toBe(expected);
});

test.each([
  [1, 100],
  [2, 85],
  [3, 72],
  [4, 60],
  [5, 48],
  [6, 37],
  [7, 26],
  [8, 15],
  [9, 4],
  [10, -7],
])('testing MathAttack.setStoned function with range %s', (range, expected) => {
  const character = new MathAttack(100);
  character.setStoned(range);
  const result = character.getStoned();
  expect(result).toBe(expected);
});

test('testing ArrayBufferConverter function', () => {
  const buffer = new ArrayBufferConverter();

  buffer.load();
  const result = buffer.toString();

  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
