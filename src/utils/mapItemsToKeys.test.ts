import mapItemsToKeys from './mapItemsToKeys';

const ITEMS = [
  {
    name: 'testItem1',
    data: 'some important data',
  },
  {
    name: 'testItem2',
    data: 'some important data',
  },
  {
    name: 'testItem3',
    data: 'some important data',
  },
];

it('map items by name using keyPath option', () => {
  const expected = {
    testItem1: {
      name: 'testItem1',
      data: 'some important data',
    },
    testItem2: {
      name: 'testItem2',
      data: 'some important data',
    },
    testItem3: {
      name: 'testItem3',
      data: 'some important data',
    },
  };

  const result = mapItemsToKeys(ITEMS, { keyPath: 'name' });

  expect(result).toStrictEqual(expected);
});

it('map items by name using getKeyPath option', () => {
  const expected = {
    testItem1: {
      name: 'testItem1',
      data: 'some important data',
    },
    testItem2: {
      name: 'testItem2',
      data: 'some important data',
    },
    testItem3: {
      name: 'testItem3',
      data: 'some important data',
    },
  };

  const result = mapItemsToKeys(ITEMS, { getKeyPath: item => item.name });

  expect(result).toStrictEqual(expected);
});
