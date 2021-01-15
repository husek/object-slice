import sliceObject from '../index';

const params = {
  firstName: 'Von',
  lastName: 'Eldritch',
  email: 'von@thegirls.co.uk',
  birthday: '1959'
};

Object.freeze(params);

const justNames = sliceObject(params, 'firstName', 'lastName');


test('Can Deconstruct', () => {
  expect(justNames).toEqual({
    firstName: 'Von',
    lastName: 'Eldritch'
  });
});

test('Is a different object', () => {
  expect(justNames).not.toEqual(params);
});