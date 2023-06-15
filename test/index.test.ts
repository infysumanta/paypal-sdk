import { Paypal } from '../src/index';

test('init', () => {
  expect(new Paypal('test').init()).toBe('test');
});
