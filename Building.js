/**
 * Abstract class which every building extends from
 */
class Building extends Quacks {
  constructor(cost, qps) {
    super(); // calls Quacks constructor
    if (new.target === Building) {
      throw new Error("abstract class!! can't instantiate directly");
    }

    this.BASE_COST = cost; // base cost of the building
    this.MULTIPLICITY = 0.15; // cost increase rate (15%)
    this.BASE_QPS = qps; // base quacks per second
    this.qps = qps; // current quacks per second
    this.qpc = 0; // quacks per click (default 0)
    this.amount = 0; // number of buildings owned
  }

  /**
   * Takes building count and raises 1.15 to the power of building count. Returns the result.
   */
  multiplier(buildingCount) {
    return Math.pow(1.15, buildingCount);
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
