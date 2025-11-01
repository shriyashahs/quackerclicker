/**
 * Abstract class which every building extends from
 */
public abstract class Building extends Quacks {
    private final int BASE_COST;
    private final double MULTIPLICITY = 0.15; // value that cost of building increases by (ex. 15% or 0.15)
    private final double BASE_QPS;
    private double qps; // quacks per second
    private double qpc; // quacks per click
    
    public Building(int cost, double qps) {
        super();
        BASE_COST = cost;
        BASE_QPS = qps;
    }
    
    /**
     * Takes building count and raises 1.15 to the power of building count. Returns the result
     * 
     */
    public double multiplier(int building_count) {
        double multiplier = Math.pow(1.15, building_count);
        return multiplier;
    }
}