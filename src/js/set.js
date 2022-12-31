export default class Team {
  constructor() {
    this.members = new Set();
    this.arrayMembers = [];
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Персонаж уже в команде!');
    } else {
      this.members.add(char);
    }
  }

  addAll(chars) {
    chars.forEach((char) => this.members.add(char));
  }

  toArray() {
    this.members.forEach((char) => this.arrayMembers.push(char));
  }
}
