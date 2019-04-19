import { getDate, getMonth, formatDate, sortItemsByDate } from './date';

const ITEMS = [
  { date: '12-10-20' },
  { date: '12-7-20' },
  { date: '12-9-20' },
  { date: '12-8-20' },
];

it('should get the correct date', () => {
  const result1 = getDate(new Date('12-10-20'));
  const result2 = getDate(new Date('12-1-20'));

  const expected1 = '10';
  const expected2 = '01';

  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
});

it('should get the correct month', () => {
  const result1 = getMonth(new Date('12-10-20'));
  const result2 = getMonth(new Date('9-10-20'));

  const expected1 = '12';
  const expected2 = '09';

  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
});

it('should format the date correctly', () => {
  const date1 = new Date('12-10-20');
  const date2 = new Date('9-1-20');
  const result1 = formatDate(date1);
  const result2 = formatDate(date2);

  const expected1 = '2020-12-10';
  const expected2 = '2020-09-01';

  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
});

it('should sort items by date', () => {
  const sorted = sortItemsByDate(ITEMS, 'date');

  const expected1 = [
    { date: '12-7-20' },
    { date: '12-8-20' },
    { date: '12-9-20' },
    { date: '12-10-20' },
  ];

  expect(sorted).toEqual(expected1);
});

