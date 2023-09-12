import sorting from '../app';

const heroes = [
  [
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  ],
  [
    [
      { name: 'мечник', health: 90 },
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 10 },
    ],
    [
      { name: 'мечник', health: 90 },
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 10 },
    ],
  ],
  [
    [
      { name: 'мечник', health: 20 },
      { name: 'маг', health: 10 },
      { name: 'лучник', health: 20 },
    ],
    [
      { name: 'мечник', health: 20 },
      { name: 'лучник', health: 20 },
      { name: 'маг', health: 10 },
    ],
  ],
  [
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 30 },
      { name: 'лучник', health: 60 },
    ],
    [
      { name: 'лучник', health: 60 },
      { name: 'маг', health: 30 },
      { name: 'мечник', health: 10 },
    ],
  ],
  [
    [
      { name: 'мечник', health: 40 },
      { name: 'маг', health: 40 },
      { name: 'лучник', health: 'fourty' },
    ],
    [
      { name: 'мечник', health: 40 },
      { name: 'маг', health: 40 },
      { name: 'лучник', health: 'fourty' },
    ],
  ],
];

// test('testing healthBar sorting function', () => {
//   const sortedHeroes = sorting(heroes);
//   expect(sortedHeroes).toEqual(target);
// });

const handler = test.each(heroes);

handler('testing healthBar sorting function at %s', (input, target) => {
  const sortedHeroes = sorting(input);
  expect(sortedHeroes).toEqual(target);
});
