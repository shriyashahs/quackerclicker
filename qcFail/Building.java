/**
 * Abstract class which every building extends from
 */
public class Building extends Quacks {
    private final long BASE_COST;
    private final double MULTIPLICITY = 0.15; // value that cost of building increases by (ex. 15% or 0.15)
    private final double BASE_QPS;
    private double qps; // quacks per second
    private double qpc; // quacks per click
    public int amount; 
    
    public Building(long cost, double qps) {
        super();
        BASE_COST = cost;
        BASE_QPS = qps;
        amount = 0;
    }
    
    /**
     * Takes building count and raises 1.15 to the power of building count. Returns the result
     * 
     */
    public double multiplier(long building_count) {
        double multiplier = Math.pow(1.15, building_count);
        return multiplier;
    }
    public int getAmt() {
        return amount;
    }
    public void addAmt() {
        amount++;
    }
    public void addAmt(int amt) {
        amount += amt;
    }
    public double getQPS() {
        return qps;
    }
    public double getQPC() {
        return qpc;
    }
}