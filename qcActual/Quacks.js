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
  setQPS(qps) {
    this.QPS = qps;
  }
  incrementQPS() {
    this.QPS++;
    const doc = document.getElementById("amount_of_quacks_per_second");
    doc.innerHTML = "<p>Quacks Per Second: " + this.QPS + "</p>";
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
  updateDisplay() {    
    const doc = document.getElementById("amount_of_quacks");
    doc.innerHTML = "<h2>Number Quacks: " + Math.floor(this.quacks) + "</h2>";
  }
}