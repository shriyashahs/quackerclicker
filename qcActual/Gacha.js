class Gacha {
    static STAR_MULTIPLIER = 1.2;
    static PULL_COST = 10;

    constructor() {
        this.stars = 3000;
        this.starCost = 30;
    }

    pullSkin() {
        // Show spinning animation
        const roulette = document.getElementById("roulette");
        let popup = document.getElementById("pull_pop");

        // If the main roulette element is missing there's nothing to show
        if (!roulette) {
            console.warn("Gacha.pullSkin: 'roulette' element not found");
            return;
        }

        // Fallback: if popup doesn't exist, reuse the roulette element so
        // subsequent property access doesn't throw and setTimeout runs.
        if (!popup) popup = roulette;

        this.stars -= Gacha.PULL_COST;

        const pull = Math.random();

        // Show roulette animation for 3 seconds
        if (roulette.style) roulette.style.visibility = "visible";
        if (popup.style) popup.style.visibility = "visible";
        roulette.src = "images/gustavo/roulette.gif";
        // If popup is a different element, set its src too
        if (popup !== roulette) popup.src = "images/gustavo/roulette.gif";

        // After 3 seconds, reveal the result
        setTimeout(() => {
            let resultImage = "";

            if (pull >= 0 && pull < 0.125) {
                resultImage = "images/gustavo/67_gustavo.png";
                document.getElementById("67_skin").src = resultImage;
            } else if (pull >= 0.125 && pull < 0.25) {
                resultImage = "images/gustavo/duck_gustavo.png";
                document.getElementById("duck_skin").src = resultImage;
            } else if (pull >= 0.25 && pull < 0.375) {
                resultImage = "images/gustavo/hungry_gustavo.png";
                document.getElementById("hungry_skin").src = resultImage;
            } else if (pull >= 0.375 && pull < 0.5) {
                resultImage = "images/gustavo/miku_gustavo.png";
                document.getElementById("miku_skin").src = resultImage;
            } else if (pull >= 0.5 && pull < 0.625) {
                resultImage = "images/gustavo/minecraft_gustavo.png";
                document.getElementById("minecraft_skin").src = resultImage;
            } else if (pull >= 0.625 && pull < 0.75) {
                resultImage = "images/gustavo/quackbox_gustavo.png";
                document.getElementById("quackbox_skin").src = resultImage;
            } else if (pull >= 0.75 && pull < 0.875) {
                resultImage = "images/gustavo/ta_gustavo.png";
                document.getElementById("ta_skin").src = resultImage;
            } else if (pull >= 0.875 && pull <= 1) {
                resultImage = "images/gustavo/widget_gustavo.png";
                document.getElementById("widget_skin").src = resultImage;
            }

            // Fade in the result
            roulette.style.transition = "opacity 0.5s";
            roulette.style.opacity = "0";
            if (popup !== roulette) {
                popup.style.transition = "opacity 0.5s";
                popup.style.opacity = "0";
            }

            // After fade out, change image and fade back in
            setTimeout(() => {
                roulette.src = resultImage;
                if (popup !== roulette) popup.src = resultImage;
                
                roulette.style.opacity = "1";
                if (popup !== roulette) popup.style.opacity = "1";
                
                // Show success message
                const skinName = resultImage.split('/').pop().replace('_gustavo.png', '').replace('.png', '');
                alert("Congratulations! You got the " + skinName + " skin!");
                
                // Hide roulette after 2 seconds
                setTimeout(() => {
                    roulette.style.visibility = "hidden";
                    if (popup !== roulette) popup.style.visibility = "hidden";
                }, 2000);
            }, 500);
        }, 3000);
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
