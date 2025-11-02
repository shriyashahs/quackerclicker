package quack;

public class Quacks {
    private double QPS; //quacks per second
    private double QPC; //quacks per click
    // private double multiplier;
    private int quacks;

    public Quacks() {
        QPS = 0;
        QPC = 1;
        // multiplier = 1;
        quacks = 0;
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
        // this.multiplier = multiplier;
    }

    //getters and setters
    public double getQPS() {
        return QPS;
    }
    public void incrementQPS() {
        QPS;
    }
    public double getQPC() {
        return QPC;
    }
    public void setQPC(double qpc) {
        QPC = qpc;
    }
<<<<<<< HEAD:quack/Quacks.java
    public double getMultiplier() {
        return multiplier;
    }
    // public void multiplier(double multiplier) {
=======
    // public double getMultiplier() {
    //     return multiplier;
    // }
    // public void setMultiplier(double multiplier) {
>>>>>>> 6a3bfd5d22a157e7dd39ba6d0a41ba7ac40d57ef:qc/Quacks.java
    //     this.multiplier = multiplier;
    // }
    public int getQuacks() {
        return quacks;
    }
    public void addQuacks(int quacks) {
        this.quacks += quacks;
    }
    public void removeQuacks(int quacks) {
        this.quacks -= quacks;
    }
    public void incrementQuacks() {
        quacks += QPC;
    }
}