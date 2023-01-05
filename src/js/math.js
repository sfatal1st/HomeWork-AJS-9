export default class MathAttack {
  constructor(attack) {
    this.attack = attack;
    this.currentAttack = 0;
  }

  setAttack(range) {
    if (range > 1) {
      this.currentAttack = this.attack - (this.attack * ((range - 1) / 10));
    } else {
      this.currentAttack = this.attack;
    }
  }

  getAttack() {
    return this.currentAttack;
  }

  setStoned(range) {
    this.setAttack(range);
    this.currentAttack -= Math.round(Math.log2(range) * 5);
  }

  getStoned() {
    return this.currentAttack;
  }
}
