import '../injectSliceObject';

const params = {
  firstName: 'Von',
  lastName: 'Eldritch',
  email: 'von@thegirls.co.uk',
  birthday: '1959'
};

Object.freeze(params);

const justNames = params.slice('firstName', 'lastName');


test('Can Deconstruct with ProtoType', () => {
  expect(justNames).toEqual({
    firstName: 'Von',
    lastName: 'Eldritch'
  });
});

test('Is a different object with ProtoType', () => {
  expect(justNames).not.toEqual(params);
});