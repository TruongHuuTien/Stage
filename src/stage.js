export default class Stage {
  constructor(element) {
    this.ctx = element.getContext('webgl');
  }
}