import Team from '../js/set';
import ErrorRepository from '../js/map';

test('testing Team.add function', () => {
  const team = new Team();
  const char = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
  ];

  team.add(char);
  const result = [];
  team.members.forEach((item) => result.push(item));

  expect(result).toEqual(expected);
});

test('testing Team.add error', () => {
  const team = new Team();
  const char = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  function testingError() {
    return team.add(char);
  }

  team.add(char);

  expect(testingError).toThrow('Персонаж');
});

test('testing Team.addAll function', () => {
  const team = new Team();
  const char1 = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const char2 = {
    name: 'лучник',
    health: 8,
    level: 2,
    attack: 180,
    defence: 20,
  };
  const char3 = {
    name: 'маг',
    health: 9,
    level: 2,
    attack: 160,
    defence: 10,
  };
  const chars = [
    char1,
    char2,
    char3,
  ];
  const expected = [
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    {
      name: 'лучник',
      health: 8,
      level: 2,
      attack: 180,
      defence: 20,
    },
    {
      name: 'маг',
      health: 9,
      level: 2,
      attack: 160,
      defence: 10,
    },
  ];

  team.addAll(chars);
  const result = [];
  team.members.forEach((item) => result.push(item));

  expect(result).toEqual(expected);
});

test('testing Team.toArray function', () => {
  const team = new Team();
  const char1 = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const char2 = {
    name: 'лучник',
    health: 8,
    level: 2,
    attack: 180,
    defence: 20,
  };
  const char3 = {
    name: 'маг',
    health: 9,
    level: 2,
    attack: 160,
    defence: 10,
  };
  const chars = [
    char1,
    char2,
    char3,
  ];
  const expected = [
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    {
      name: 'лучник',
      health: 8,
      level: 2,
      attack: 180,
      defence: 20,
    },
    {
      name: 'маг',
      health: 9,
      level: 2,
      attack: 160,
      defence: 10,
    },
  ];

  team.addAll(chars);
  team.toArray();

  expect(team.arrayMembers).toEqual(expected);
});

test('testing ErrorRepository.translate function', () => {
  const error = new ErrorRepository();
  const result = error.translate(1);
  expect(result).toBe('Ошибка ввода данных');
});

test('testing ErrorRepository.translate error', () => {
  const error = new ErrorRepository();
  const result = error.translate(777);
  expect(result).toBe('Unknown error');
});
