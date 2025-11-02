public class Gacha {
    int gems;
    int gemCost;
    private final double GEM_MULTIPLIER = 1.2;
    private final int PULL_COST = 10;

    public Gacha() {
        gems = 5;
        gemCost = 10;
    }

    public String pullSkin() {
        return "";
    }
    public String pullTheme() {
        return "";
    }

    public int getGems() {
        return gems;
    }
    public void buyGems() {
        gems++;
        removeQuacks(gemCost);
        gemCost *= GEM_MULTIPLIER;
    }
}
