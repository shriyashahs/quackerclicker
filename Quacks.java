public class Quacks {
    private double QPS; //quacks per second
    private double QPC; //quacks per click
    private double multiplier;

    public Quacks(double QPS, double QPC, double multiplier) {
        this.QPS = QPS;
        this.QPC = QPC;
        this.multiplier = multiplier;
    }
}