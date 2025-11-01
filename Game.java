import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class Game {
    public JFrame frame;
    public void mainFrame() {
        frame = new JFrame("");
    }

    public void upgradesPanel() {

    }

    public void quacksPanel() {

    }

    public void buildingsPanel() {

    }

    public static void main(String[] args) {
        Building hand = new Building(15, 0.1);
        Building comsMember = new Building(100, 1);
        Building pond = new Building(1100, 0.8);
        Building feed = new Building(12000, 47);
        Building shack = new Building(130000, 260);
        Building apartment = new Building(1400000, 1400);
        Building condo = new Building(20000000, 7800);
        Building boat = new Building(330000000, 44000);
        Building mansion = new Building(5100000000l, 260000);
        Building privateJet = new Building(75000000000l, 1600000);
        Building megaYacht = new Building(1000000000000l, 10000000);
        Building cruise = new Building(14000000000000l, 65000000);
        Building spaceship = new Building(170000000000000l, 4300000000l);
        Building ufo = new Building(2100000000000000l, 2900000000l);

    }
}
