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

      // Prevent repeated clicks while animation runs. Re-enable after 3s.
      pullSkinBtn.disabled = true;
      this.updateDisplay();
      setTimeout(() => {
        pullSkinBtn.disabled = false;
        this.updateDisplay();
      }, 3000);
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
      "<p>Quacks Per Second: " + this.quacks.getQPS.toFixed(1) + "</p>";

    document.getElementById("amount_of_quacks_per_click").innerHTML = 
      "<p>Quacks Per Click: " + this.quacks.getQPC.toFixed(1) + "</p>";

    document.getElementById("curr_stars").innerHTML = 
      "<h3>Stars &#x2726;: " + this.gacha.getStars() + "</h3>";



    document.getElementById("curr_hands").innerHTML = 
      "<h3>Hands: " + this.hand.getAmount() + "</h3>";

    document.getElementById("hands_cost").innerHTML = 
      "<h3>" + this.hand.getCost() + " quacks</h3>";

    document.getElementById("hands_one_per_sec").innerHTML = 
      "<h3>Each hand produces " + this.hand.getBaseQPS() + " quacks per second" + "</h3>";

    document.getElementById("hands_total_per_sec").innerHTML = 
      "<h3>" + this.hand.getAmount() + " hands producing " + this.hand.getQPS() + " quacks per second " + "</h3>";


      
    document.getElementById("curr_coms_mems").innerHTML = 
      "<h3>COMS Members: " + this.comsMember.getAmount() + "</h3>";
    
    document.getElementById("comsMember_cost").innerHTML = 
      "<h3>" + this.comsMember.getCost() + " quacks</h3>";

    document.getElementById("comsMember_one_per_sec").innerHTML = 
      "<h3>Each COMS member produces " + this.comsMember.getBaseQPS() + " quacks per second" + "</h3>";

    document.getElementById("comsMember_total_per_sec").innerHTML = 
      "<h3>" + this.comsMember.getAmount() + " COMS members producing " + this.comsMember.getQPS() + " quacks per second " + "</h3>";



    document.getElementById("curr_pond").innerHTML = 
      "<h3>Ponds: " + this.pond.getAmount() + "</h3>";

    document.getElementById("pond_cost").innerHTML = 
      "<h3>" + this.pond.getCost() + " quacks</h3>";

    document.getElementById("pond_one_per_sec").innerHTML = 
      "<h3>Each pond produces " + this.pond.getBaseQPS() + " quacks per second" + "</h3>";

    document.getElementById("pond_total_per_sec").innerHTML = 
      "<h3>" + this.hand.getAmount() + " ponds producing " + this.pond.getQPS() + " quacks per second " + "</h3>";



    document.getElementById("curr_feed").innerHTML = 
      "<h3>Feeds: " + this.feed.getAmount() + "</h3>";

    document.getElementById("feed_cost").innerHTML = 
      "<h3>" + this.feed.getCost() + " quacks</h3>";

    document.getElementById("feed_one_per_sec").innerHTML = 
      "<h3>Each feed produces " + this.feed.getBaseQPS() + " quacks per second" + "</h3>";

    document.getElementById("feed_total_per_sec").innerHTML = 
      "<h3>" + this.feed.getAmount() + " feeds producing " + this.feed.getQPS() + " quacks per second " + "</h3>";



    document.getElementById("curr_shack").innerHTML = 
      "<h3>Shacks: " + this.shack.getAmount() + "</h3>";

    document.getElementById("shack_cost").innerHTML = 
      "<h3>" + this.shack.getCost() + " quacks</h3>";

    document.getElementById("shack_one_per_sec").innerHTML = 
      "<h3>Each shack produces " + this.shack.getBaseQPS() + " quacks per second" + "</h3>";

    document.getElementById("shack_total_per_sec").innerHTML = 
      "<h3>" + this.shack.getAmount() + " shacks producing " + this.shack.getQPS() + " quacks per second " + "</h3>";
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

  /**
   * Calculates total QPC across all buildings
   */
  calculateTotalQPC() {
    let totalQPC = 0;
    for (const key in this.buildings) {
      const building = this.buildings[key];
      if (building instanceof Building) {
        totalQPC += building.getQPC();
      }
    }
    return totalQPC;
  }

  /**
   * Updates the quacks’ QPC value
   */
  updateQPC() {
    const totalQPC = this.calculateTotalQPC();
    this.quacks.setQPC(totalQPC);
  }

}

// Initialize the game after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  window.game = new Game();
});