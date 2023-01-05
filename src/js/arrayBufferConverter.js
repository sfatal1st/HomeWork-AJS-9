import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  constructor() {
    this.getBuff = getBuffer();
  }

  load() {
    this.bufferView = new Uint16Array(this.getBuff);
  }

  toString() {
    let string = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      string += String.fromCharCode(this.bufferView[i]);
    }
    return string;
  }
}
