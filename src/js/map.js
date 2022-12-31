export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [
        1, 'Ошибка ввода данных',
      ],
      [
        2, 'Ошибка ответа от сервера',
      ],
      [
        3, 'Ошибка передачи данных',
      ],
      [
        4, 'Ошибка приведения к массиву',
      ],
      [
        5, 'Ошибка деления на ноль',
      ],
      [
        6, 'Ошибка вывода данных',
      ],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
