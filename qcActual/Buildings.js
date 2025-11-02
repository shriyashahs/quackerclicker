/**
 * Base Building class that all building types can extend from.
 */
class Building extends Quacks {
  constructor(cost, qps) {
    super();
    this.BASE_COST = cost;
    this.MULTIPLICITY = 1.15; // cost increases by 15% per additional building
    this.BASE_QPS = qps;
    this.qps = 0;  // quacks per second
    this.qpc = 0;  // quacks per click
    this.amount = 0;
  }

  /**
   * Raises 1.15 to the power of the building count.
   * Used to calculate cost scaling.
   */
  multiplier() {
    return Math.pow(MULTIPLICITY, amount);
  }

  getAmt() {
    return this.amount;
  }

  addAmt(amt = 1) {
    this.amount += amt;
  }

  getQPS() {
    return this.qps;
  }

  getQPC() {
    return this.qpc;
  }
}
