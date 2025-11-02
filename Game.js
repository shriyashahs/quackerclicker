class Game {
    constructor() {
        this.quacks = new Quacks();
        this.setupListeners();
        this.startQPSLoop();
    }

    setupListeners() {
        const gustavoBtn = document.getElementById("gustavo-btn");
        gustavoBtn.addEventListener("click", () => {` `
            this.quacks.incrementQuacks();
            this.updateDisplay();
        });
    }

    startQPSLoop() {
        setInterval(() => {
            this.quacks.addQuacks(this.quacks.getQPS());
            this.updateDisplay();
        }, 1000);
    }

    updateDisplay() {
        document.getElementById("quacks-display").textContent = `Quacks: ${Math.floor(this.quacks.quacks)}`;
        document.getElementById("qps-display").textContent = `QPS: ${this.quacks.getQPS().toFixed(1)}`;
    }
}

// Initialize the game after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    new Game();
});