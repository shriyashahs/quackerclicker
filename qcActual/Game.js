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
    // Update top-level quack displays
    const quacksCountEl = document.getElementById("amount_of_quacks");
    if (quacksCountEl) quacksCountEl.innerHTML = "<h2>Number Quacks: " + Math.floor(this.quacks.getQuacks()) + "</h2>";

    const qpsEl = document.getElementById("amount_of_quacks_per_second");
    if (qpsEl) qpsEl.innerHTML = "<p>Quacks Per Second: " + this.quacks.getQPS().toFixed(1) + "</p>";

    const qpcEl = document.getElementById("amount_of_quacks_per_click");
    if (qpcEl) qpcEl.innerHTML = "<p>Quacks Per Click: " + this.quacks.getQPC().toFixed(1) + "</p>";

    const starsEl = document.getElementById("curr_stars");
    if (starsEl) starsEl.innerHTML = "<h3>Stars &#x2726;: " + this.gacha.getStars() + "</h3>";

    // Helper to safely get building instance and update an element
    const b = (name) => this.buildings && this.buildings[name] ? this.buildings[name] : null;

    // Hands
    const hands = b('hand');
    if (hands) {
      const elCurr = document.getElementById('curr_hands');
      if (elCurr) elCurr.innerHTML = '<h3>Hands: ' + hands.getAmt() + '</h3>';

      const elCost = document.getElementById('hands_cost');
      if (elCost) elCost.innerHTML = '<h3>' + hands.getCost() + ' quacks</h3>';

      const elOne = document.getElementById('hands_one_per_sec');
      if (elOne) elOne.innerHTML = '<h3>Each hand produces ' + hands.getBaseQPS() + ' quacks per second</h3>';

      const elTotal = document.getElementById('hands_total_per_sec');
      if (elTotal) elTotal.innerHTML = '<h3>' + hands.getAmt() + ' hands producing ' + hands.getQPS() + ' quacks per second</h3>';
    }

    // COMS Members
    const coms = b('comsMember');
    if (coms) {
      const elCurr = document.getElementById('curr_coms_mems');
      if (elCurr) elCurr.innerHTML = '<h3>COMS Members: ' + coms.getAmt() + '</h3>';

      const elCost = document.getElementById('coms_mem_cost') || document.getElementById('coms_mem_cost');
      // main.html uses id 'coms_mem_cost' and 'coms_mem_per_sec' slots
      if (elCost) elCost.innerHTML = '<h3>' + coms.getCost() + ' quacks</h3>';

      const elOne = document.getElementById('coms_mem_per_sec');
      if (elOne) elOne.innerHTML = '<h3>Each coms member produces ' + coms.getBaseQPS() + ' quacks per second</h3>';

      const elTotal = document.querySelectorAll('#coms_mem_per_sec')[1];
      if (elTotal) elTotal.innerHTML = '<h3>' + coms.getAmt() + ' coms members producing ' + coms.getQPS() + ' quacks per second</h3>';
    }

    // Pond
    const pond = b('pond');
    if (pond) {
      const elCurr = document.getElementById('curr_pond');
      if (elCurr) elCurr.innerHTML = '<h3>Ponds: ' + pond.getAmt() + '</h3>';

      const elCost = document.getElementById('pond_cost');
      if (elCost) elCost.innerHTML = '<h3>' + pond.getCost() + ' quacks</h3>';

      const elOne = document.getElementById('pond_one_per_sec');
      if (elOne) elOne.innerHTML = '<h3>Each pond produces ' + pond.getBaseQPS() + ' quacks per second</h3>';

      const elTotal = document.getElementById('pond_total_per_sec');
      if (elTotal) elTotal.innerHTML = '<h3>' + pond.getAmt() + ' ponds producing ' + pond.getQPS() + ' quacks per second</h3>';
    }

    // Feed
    const feed = b('feed');
    if (feed) {
      const elCurr = document.getElementById('curr_feed');
      if (elCurr) elCurr.innerHTML = '<h3>Feeds: ' + feed.getAmt() + '</h3>';

      const elCost = document.getElementById('feed_cost');
      if (elCost) elCost.innerHTML = '<h3>' + feed.getCost() + ' quacks</h3>';

      const elOne = document.getElementById('feed_one_per_sec');
      if (elOne) elOne.innerHTML = '<h3>Each feed produces ' + feed.getBaseQPS() + ' quacks per second</h3>';

      const elTotal = document.getElementById('feed_total_per_sec');
      if (elTotal) elTotal.innerHTML = '<h3>' + feed.getAmt() + ' feeds producing ' + feed.getQPS() + ' quacks per second</h3>';
    }

    // Shack
    const shack = b('shack');
    if (shack) {
      const elCurr = document.getElementById('curr_shack');
      if (elCurr) elCurr.innerHTML = '<h3>Shacks: ' + shack.getAmt() + '</h3>';

      const elCost = document.getElementById('shack_cost');
      if (elCost) elCost.innerHTML = '<h3>' + shack.getCost() + ' quacks</h3>';

      const elOne = document.getElementById('shack_one_per_sec');
      if (elOne) elOne.innerHTML = '<h3>Each shack produces ' + shack.getBaseQPS() + ' quacks per second</h3>';

      const elTotal = document.getElementById('shack_total_per_sec');
      if (elTotal) elTotal.innerHTML = '<h3>' + shack.getAmt() + ' shacks producing ' + shack.getQPS() + ' quacks per second</h3>';
    }
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