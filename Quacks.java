public class Quacks {
    private double QPS; //quacks per second
    private double QPC; //quacks per click
    private double multiplier;

    public Quacks() {
        QPS = 0;
        QPC = 1;
        multiplier = 1;
    }

    /**
     * constrcutor for quack
     * @param QPS quacks per second
     * @param QPC quacks per click
     * @param multiplier the QPS = multiplier * QPS // update later once we actually figure it out
     */
    public Quacks(double QPS, double QPC, double multiplier) {
        this.QPS = QPS;
        this.QPC = QPC;
        this.multiplier = multiplier;
    }

    //getters and setters
    public double getQPS() {
        return QPS;
    }

    public void setQPS(double qPS) {
        QPS = qPS;
    }

    public double getQPC() {
        return QPC;
    }

    public void setQPC(double qPC) {
        QPC = qPC;
    }

    public double getMultiplier() {
        return multiplier;
    }

    public void setMultiplier(double multiplier) {
        this.multiplier = multiplier;
    }
    
}