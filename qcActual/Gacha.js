class Gacha {
    static STAR_MULTIPLIER = 1.2;
    static PULL_COST = 10;

    constructor() {
        this.stars = 3000;
        this.starCost = 30;
    }

    pullSkin() {
        document.getElementById("roulette").style.visibility = "visible";
        this.stars -= Gacha.PULL_COST;
        const pull = Math.random();

    // show the popup image and set the roulette animation
    document.getElementById("pull_pop").style.visibility = "visible";
    document.getElementById("pull_pop").src="images/gustavo/roulette.gif";
        // show the popup image and set the roulette animation
        document.getElementById("roulette").src="images/gustavo/roulette.gif";

        if (pull >= 0 && pull < 0.125) {
            document.getElementById("67_skin").src="images/gustavo/67_gustavo.png";
            document.getElementById("roulette").src="images/gustavo/67_gustavo.png";
        }
        if (pull >= 0.125 && pull < 0.25) {
            document.getElementById("duck_skin").src="images/gustavo/duck_gustavo.png";
            document.getElementById("roulette").src="images/gustavo/duck_gustavo.png";
        }
        if (pull >= 0.25 && pull < 0.375) {
            document.getElementById("hungry_skin").src="images/gustavo/hungry_gustavo.png";
            document.getElementById("roulette").src="images/gustavo/hungry_gustavo.png";
        }
        if (pull >= 0.375 && pull < 0.5) {
            document.getElementById("miku_skin").src="images/gustavo/miku_gustavo.png";
            document.getElementById("roulette").src="images/gustavo/miku_gustavo.png";
        }
        if (pull >= 0.5 && pull < 0.625) {
            document.getElementById("minecraft_skin").src="images/gustavo/minecraft_gustavo.png";
            document.getElementById("roulette").src="images/gustavo/minecraft_gustavo.png";
        }
        if (pull >= 0.625 && pull < 0.75) {
            document.getElementById("quackbox_skin").src="images/gustavo/quackbox_gustavo.png";
            document.getElementById("roulette").src="images/gustavo/quackbox_gustavo.png";
        }
        if (pull >= 0.75 && pull < 0.875) {
            document.getElementById("ta_skin").src="images/gustavo/ta_gustavo.png";
            document.getElementById("roulette").src="images/gustavo/ta_gustavo.png";
        }
        if (pull >= 0.875 && pull <= 1) {
            document.getElementById("widget_skin").src="images/gustavo/widget_gustavo.png";
            document.getElementById("roulette").src="images/gustavo/widget_gustavo.png";
        }
    }
    pullTheme() {
        stars -= PULL_COST;
        const pull = Math.random();
        if (pull >= 0 && pull < 0.35) {
            //set theme
        }
        if (pull >= 0.35 && pull < 0.7) {
            //set theme
        }
        if (pull >= 0.7 && pull <= 1) {
            //set theme
        }
    }

    getStars() {
        return this.stars;
    }

    buyStars(quacks) {
        this.stars++;
        quacks.removeQuacks(this.starCost);
        this.starCost *= this.STAR_MULTIPLIER;
    }
}
