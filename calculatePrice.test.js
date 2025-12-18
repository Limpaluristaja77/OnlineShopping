const calculatePrice = require('./calculatePrice');

test('Test user buying A product', () => {
  expect(
    calculatePrice.calculateProductPrice(55, 'A', false, false)
  ).toBe(15);
});

test('User under 21 cannot buy any product', () => {
  expect(
    calculatePrice.calculateProductPrice(20, 'A', false, false)
  ).toBe('Customer does not meet the purchase requirements.');
});

test('User age 21–25 cannot buy product C', () => {
  expect(
    calculatePrice.calculateProductPrice(23, 'C', false, false)
  ).toBe('Customer does not meet the purchase requirements.');
});

test('User age 21–25 can buy product B', () => {
  expect(
    calculatePrice.calculateProductPrice(23, 'B', false, false)
  ).toBe(15);
});

test('Product type D is 20% more expensive', () => {
  expect(
    calculatePrice.calculateProductPrice(40, 'D', false, false)
  ).toBe(18);
});

test('User with returns pays extra $150', () => {
  expect(
    calculatePrice.calculateProductPrice(30, 'A', true, false)
  ).toBe(165);
});

test('Loyalty member gets 10% discount', () => {
  expect(
    calculatePrice.calculateProductPrice(50, 'A', false, true)
  ).toBe(15);
});


test('Type D with returns and loyalty discount', () => {
  expect(
    calculatePrice.calculateProductPrice(50, 'D', true, true)
  ).toBeCloseTo(151.2,2);
});

test('Maximum product price is capped at $2000', () => {
  expect(
    calculatePrice.calculateProductPrice(1900, 'D', true, false)
  ).toBe(168);
});

test('Product price cannot be under $15', () => {
  expect(
    calculatePrice.calculateProductPrice(30, 'A', false, true)
  ).toBe(15);
});
