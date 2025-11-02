class Quacks {
  // Constructor without parameters
  constructor(QPS = 0, QPC = 1, multiplier = 1) {
    this.QPS = QPS; // quacks per second
    this.QPC = QPC; // quacks per click
    this.multiplier = multiplier; 
    this.quacks = 0;
  }

  // click
  click() {
    this.quacks += this.QPC;
  }

  // Getters and setters
  getQPS() {      
    return this.QPS;
  }
  incrementQPS() {
    this.QPS++;
  }
  getQPC() {
    return this.QPC;
  }
  setQPC(qpc) {
    this.QPC = qpc;
  }
  getMultiplier() {
    return this.multiplier;
  }
  setMultiplier(multiplier) {
    this.multiplier = multiplier;
  }
  getQuacks() {
    return this.quacks;
  }
  addQuacks(quacks) {
    this.quacks += quacks;
  }
  removeQuacks(quacks) {
    this.quacks -= quacks;
  }
  incrementQuacks() {    
    this.quacks += this.QPC;
  }
}