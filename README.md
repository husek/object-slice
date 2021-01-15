# Object Slice
**object-slice** creates subsets of objects in a similar fashion Ruby does with .splice();

## Installation
```
npm install --save object-slice
```
or
```
yarn add object-slice
```

## Usage

#### Method Version
```js
import sliceObject from 'object-slice';

const params = {
  firstName: 'Von',
  lastName: 'Eldritch',
  email: 'von@thegirls.co.uk',
  birthday: '1959'
};

const justNames = sliceObject(params, 'firstName', 'lastName');

// justNames = { firstName: 'Von', lastName: 'Eldritch '}
```


#### ProtoType Version
```js
import 'object-slice/injectSliceObject';

const params = {
  firstName: 'Von',
  lastName: 'Eldritch',
  email: 'von@thegirls.co.uk',
  birthday: '1959'
};

const justNames = params.slice('firstName', 'lastName');

// justNames = { firstName: 'Von', lastName: 'Eldritch '}
```

## Contributing
Your contributions are welcome!

## Author
- [husek](https://github.com/husek)

## License
MIT
