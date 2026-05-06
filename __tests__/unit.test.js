// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

// isPhoneNumber tests
test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid phone number without parentheses', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid phone number without dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid phone number text', () => {
  expect(isPhoneNumber('phone-number')).toBe(false);
});

// isEmail tests
test('valid simple email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid email with numbers', () => {
  expect(isEmail('hello123@test.co')).toBe(true);
});
test('invalid email missing domain', () => {
  expect(isEmail('test@example')).toBe(false);
});
test('invalid email missing @', () => {
  expect(isEmail('test.com')).toBe(false);
});

// isStrongPassword tests
test('valid strong password with letters and numbers', () => {
  expect(isStrongPassword('a123_456')).toBe(true);
});
test('valid strong password starting with letter', () => {
  expect(isStrongPassword('StrongPass1')).toBe(true);
});
test('invalid password starting with number', () => {
  expect(isStrongPassword('1Password')).toBe(false);
});
test('invalid password too short', () => {
  expect(isStrongPassword('a12')).toBe(false);
});

// isDate tests
test('valid date with 1 digit day/month', () => {
  expect(isDate('1/2/2023')).toBe(true);
});
test('valid date with 2 digit day/month', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('invalid date with dashes', () => {
  expect(isDate('12-25-2023')).toBe(false);
});
test('invalid date year in front', () => {
  expect(isDate('2023/12/25')).toBe(false);
});

// isHexColor tests
test('valid 3 character hex color', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('valid 6 character hex color without hash', () => {
  expect(isHexColor('AABBCC')).toBe(true);
});
test('invalid 4 character hex color', () => {
  expect(isHexColor('#FFFF')).toBe(false);
});
test('invalid color string', () => {
  expect(isHexColor('red')).toBe(false);
});
