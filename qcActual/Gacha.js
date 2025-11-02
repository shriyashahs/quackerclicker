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

        document.getElementById("pull_pop").src="visibility: visible";
        document.getElementById("pull_pop").src="qcActual/images/gustavo/roulette.gif";
        setTimeout("", 3000);

        if (0 <= pull < 0.125) {
            document.getElementById("67_skin").src="qcActual/images/gustavo/67_gustavo.png";
            document.getElementById("pull_pop").src="qcActual/images/gustavo/67_gustavo.png";
        }
        if (0.125 <= pull < 0.25) {
            document.getElementById("duck_skin").src="qcActual/images/gustavo/duck_gustavo.png";
            document.getElementById("pull_pop").src="qcActual/images/gustavo/duck_gustavo.png";
        }
        if (0.25 <= pull < 0.375) {
            document.getElementById("hungry_skin").src="qcActual/images/gustavo/hungry_gustavo.png";
            document.getElementById("pull_pop").src="qcActual/images/gustavo/hungry_gustavo.png";
        }
        if (0.375 <= pull < 0.5) {
            document.getElementById("miku_skin").src="qcActual/images/gustavo/miku_gustavo.png";
            document.getElementById("pull_pop").src="qcActual/images/gustavo/miku_gustavo.png";
        }
        if (0.5 <= pull < 0.625) {
            document.getElementById("minecraft_skin").src="qcActual/images/gustavo/minecraft_gustavo.png";
            document.getElementById("pull_pop").src="qcActual/images/gustavo/minecraft_gustavo.png";
        }
        if (0.625 <= pull < 0.75) {
            document.getElementById("quackbox_skin").src="qcActual/images/gustavo/quackbox_gustavo.png";
            document.getElementById("pull_pop").src="qcActual/images/gustavo/quackbox_gustavo.png";
        }
        if (0.75 <= pull < 0.875) {
            document.getElementById("ta_skin").src="qcActual/images/gustavo/ta_gustavo.png";
            document.getElementById("pull_pop").src="qcActual/images/gustavo/ta_gustavo.png";
        }
        if (0.875 <= pull <= 1) {
            document.getElementById("widget_skin").src="qcActual/images/gustavo/widget_gustavo.png";
            document.getElementById("pull_pop").src="qcActual/images/gustavo/widget_gustavo.png";
        }
    }
    pullTheme() {
        gems -= PULL_COST;
        const pull = Math.random();
        if (0 <= pull < 0.35) {
            //set theme
        }
        if (0.35 <= pull < 0.7) {
            //set theme
        }
        if (0.7 <= pull < 1) {
            //set theme
        }
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
