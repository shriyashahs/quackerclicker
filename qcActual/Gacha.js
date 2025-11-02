class Gacha {
    static GEM_MULTIPLIER = 1.2;
    static PULL_COST = 10;

    constructor() {
        this.gems = 5;
        this.gemCost = 10;
    }

    pullSkin() {
        gems -= PULL_COST;
        const pull = Math.random();
        return ""; 
    }
    pullTheme() {
        gems -= PULL_COST;
        const pull = Math.random();
        return "";
    }

    getGems() {
        return gems;
    }

    buyGems(quacks) {
        gems++;
        quacks.removeQuacks(gemCost);
        gemCost *= GEM_MULTIPLIER;
    }
}
