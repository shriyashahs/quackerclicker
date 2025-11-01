/**
 * Abstract class which every building extends from
 */
public abstract class Buildings extends Quacks {
    private final int BASE_COST;
    private final double MULTIPLICITY; // value that cost of building increases by (ex. 15% or 0.15)
    private double qps; // quacks per second
    private double qpc; // quacks per click
    private int counter; //counts # of buildings
    
    public Buildings(double multiplier, int base) {
        super();
        BASE_COST = base;
        MULTIPLICITY = multiplier;
        counter++;
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