//We used copilot to debug
let six_seven_access=false
let duck_access=false
let miku_access=false
let minecraft_access=false
let quackbox_access=false
let hungry_access=false
let ta_access=false
let widget_access=false

gustavo_png=document.querySelector("#gustavo_png_image")

let six_seven_skin=document.getElementById("67_skin_img");
let miku_skin=document.getElementById("miku_skin_img");
let ta_skin=document.getElementById("ta_skin_img");
let minecraft_skin=document.getElementById("minecraft_skin_img");
let widget_skin=document.getElementById("widget_skin_img");
let duck_skin=document.getElementById("duck_skin_img");
let hungry_skin=document.getElementById("hungry_skin_img");
let quackbox_skin=document.getElementById("quackbox_skin_img");

let six_seven_skin_button=document.getElementById("67_skin");
let miku_skin_button=document.getElementById("miku_skin");
let ta_skin_button=document.getElementById("ta_skin");
let minecraft_skin_button=document.getElementById("minecraft_skin");
let widget_skin_button=document.getElementById("widget_skin");
let duck_skin_button=document.getElementById("duck_skin");
let hungry_skin_button=document.getElementById("hungry_skin");
let quackbox_skin_button=document.getElementById("quackbox_skin");

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

            this.stars -= Gacha.PULL_COST; // Deduct cost for pulling skin

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

            if (pull >= 0 && pull < 0.1) { // %10
                resultImage = "images/gustavo/67_gustavo.png";
                document.getElementById("67_skin").src = resultImage;
                six_seven_access = true;
            } 
            else if (pull >= 0.1 && pull < 0.2) { // %10
                resultImage = "images/gustavo/duck_gustavo.png";
                document.getElementById("duck_skin").src = resultImage;
                duck_access = true;
            } 
            else if (pull >= 0.2 && pull < 0.3) { // %10
                resultImage = "images/gustavo/hungry_gustavo.png";
                document.getElementById("hungry_skin").src = resultImage;
                hungry_access = true;
            } 
            else if (pull >= 0.3 && pull < 0.5) { // %10
                resultImage = "images/gustavo/miku_gustavo.png";
                document.getElementById("miku_skin").src = resultImage;
                miku_access = true;
            } 
            else if (pull >= 0.5 && pull < 0.78) { // %28
                resultImage = "images/gustavo/minecraft_gustavo.png";
                document.getElementById("minecraft_skin").src = resultImage;
                minecraft_access = true;
            } 
            else if (pull >= 0.78 && pull < 0.88) { // %10
                resultImage = "images/gustavo/quackbox_gustavo.png";
                document.getElementById("quackbox_skin").src = resultImage;
                quackbox_access = true;
            } 
            else if (pull >= 0.88 && pull < 0.93) { // %5
                resultImage = "images/gustavo/ta_gustavo.png";
                document.getElementById("ta_skin").src = resultImage;
                ta_access = true;
            } 
            else if (pull >= 0.93 && pull <= 1) { // 7% 
                resultImage = "images/gustavo/widget_gustavo.png";
                document.getElementById("widget_skin").src = resultImage;
                widget_access = true;
            }

            // Show the result image
            roulette.src = resultImage;
            popup.src = resultImage;
        }, 3000); // <-- 3 seconds delay
    }

    getStars() {
        return this.stars;
    }

    buyStars(quacks) {
        this.stars++;
        quacks.removeQuacks(this.starCost);
        this.starCost *= this.STAR_MULTIPLIER;
    }

    image = [
    {
        img:"qcActual/images/gustavo/base_gustavo.png"
    },
    {
        img:"qcActual/images/gustavo/67_gustavo.png"
    },
    {
        img:"qcActual/images/gustavo/miku_gustavo.png"
    },
    {
        img:"qcActual/images/gustavo/ta_gustavo.png"
    },
    {
        img:"qcActual/images/gustavo/minecraft_gustavo.png"
    },
    {
        img:"qcActual/images/gustavo/widget_gustavo.png"
    },
    {
        img:"qcActual/images/gustavo/duck_gustavo.png"
    },
    {
        img:"qcActual/images/gustavo/hungry_gustavo.png"
    },
    {
        img:"qcActual/images/gustavo/quackbox_gustavo.png"
    },
    ]

    update(image){
        gustavo_png.src=image.img
    }

    if (six_seven_access){
        six_seven_skin.src="qcActual/images/gustavo/67_gustavo.png";
        six_seven_skin_button.onclick=function() {
            update(image[1]);
        };
    }
    if (miku_access){
        miku_skin.src="qcActual/images/gustavo/miku_gustavo.png";
        miku_skin_button.onclick=function() {
            update(image[2]);
        };
    }
    if (ta_access){
        ta_skin.src="qcActual/images/gustavo/ta_gustavo.png";
        ta_skin_button.onclick=function() {
            update(image[3]);
        };
    }

    if (minecraft_access){
        minecraft_skin.src="qcActual/images/gustavo/minecraft_gustavo.png";
        minecraft_skin_button.onclick=function() {
            update(image[4]);
        };
    }
    
    if (widget_access){
        widget_skin.src="qcActual/images/gustavo/widget_gustavo.png";
        widget_skin_button.onclick=function() {
            update(image[5]);
        };
    }

    if (duck_access){
        duck_skin.src="qcActual/images/gustavo/duck_gustavo.png";
        duck_skin_button.onclick=function() {
            update(image[6]);
        };
    }

    if (hungry_access){
        hungry_skin.src="qcActual/images/gustavo/hungry_gustavo.png";
        hungry_skin_button.onclick=function() {
            update(image[7]);
        };
    }
    
    if (quackbox_access){
        quackbox_skin.src="qcActual/images/gustavo/quackbox_gustavo.png";
        quackbox_skin_button.onclick=function() {
            update(image[8]);
        };
    }
}
