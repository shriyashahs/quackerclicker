class Game {
  constructor() {
    this.quacks = new Quacks();
    this.gacha = new Gacha();
    this.buildings = this.createBuildings(); // store buildings
    this.updateQPS(); // set initial QPS

    this.setupListeners();
    this.startQPSLoop();
  }

  setupListeners() {
    const gustavoBtn = document.getElementById("gustavo_png");
    gustavoBtn.onclick = () => {
      this.quacks.click();
      this.updateDisplay();
    };
    const pullSkinBtn = document.getElementById("pull_skins");
    pullSkinBtn.onclick = () => {
      this.gacha.pullSkin();
      document.getElementById("roulette").style.visibility = "hidden";
      this.updateDisplay();
    };
  }

  startQPSLoop() {
    setInterval(() => {
      this.quacks.addQuacks(this.quacks.getQPS());
      this.updateDisplay();
    }, 1000);
  }

  updateDisplay() {
    document.getElementById("amount_of_quacks").innerHTML = 
      "<h2>Number Quacks: " + Math.floor(this.quacks.getQuacks()) + "</h2>";
    document.getElementById("amount_of_quacks_per_second").innerHTML = 
      "<p>Quacks Per Second: " + this.quacks.getQPS().toFixed(1) + "</p>";
    document.getElementById("curr_stars").innerHTML = 
      "<h3>Stars &#x2726;: " + this.gacha.getStars() + "</h3>";
  }

  /**
   * Creates all building instances
   */
  createBuildings() {
    return {
      hand: new Building(15, 0.1),
      comsMember: new Building(100, 1),
      pond: new Building(1100, 8),
      feed: new Building(12000, 47),
      shack: new Building(130000, 260),
      // apartment: new Building(1400000, 1400),
      // condo: new Building(20000000, 7800),
      // boat: new Building(330000000, 44000),
      // mansion: new Building(5100000000, 260000),
      // privateJet: new Building(75000000000, 1600000),
      // megaYacht: new Building(1000000000000, 10000000),
      // cruise: new Building(14000000000000, 65000000),
      // spaceship: new Building(170000000000000, 4300000000),
      // ufo: new Building(2100000000000000, 2900000000),
    };
  }

  /**
   * Calculates total QPS across all buildings
   */
  calculateTotalQPS() {
    let totalQPS = 0;
    for (const key in this.buildings) {
      const building = this.buildings[key];
      if (building instanceof Building) {
        totalQPS += building.getQPS();
      }
    }
    return totalQPS;
  }

  /**
   * Updates the quacks’ QPS value
   */
  updateQPS() {
    const totalQPS = this.calculateTotalQPS();
    this.quacks.setQPS(totalQPS);
  }
}

// Initialize the game after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  window.game = new Game();
});