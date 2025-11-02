/**
 * Base Building class that all building types can extend from.
 */
class Building extends Quacks {
  static MULTIPLIER = 1.15; // cost increases by 15% per additional building
  constructor(cost, qps, qpc) {
    super();
    this.cost = cost;
    this.baseQPS = qps;
    this.baseQPC = qpc;
    this.qps = 0;  // quacks per second
    this.qpc = 0;  // quacks per click
    this.amount = 0;
  }

  getAmt() {
    return this.amount;
  }
  getQPS() {
      return this.qps;
  }
  getQPC() {
    return this.qpc;
  }
  getCost() {
    return this.cost;
  }
  getBaseQPS() {
    return this.baseQPS;
  }
  getBaseQPC() {
    return this.baseQPC;
  }
  buyBuilding() {
      this.amount++;
      quacks.removeQuacks(this.cost);
      this.cost *= this.MULTIPLIER;

      if (this.qps = 0) {
        this.qps = this.baseQPS;
      }
      else {
        this.qps = this.baseQPS * this.amount;
      }
      
      if (this.qpc = 0) {
        this.qpc = this.baseQPC;
      }
      else {
        this.qpc = this.baseQPC * this.amount;
      }
  }
}
