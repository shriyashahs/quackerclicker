import javax.swing.*;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Game {
    private JFrame frame;
    public Quacks quacks;
    
    public void mainFrame() {
        frame = new JFrame("Quacker Clicker");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setExtendedState(JFrame.MAXIMIZED_BOTH);
        frame.setVisible(true);
    }

    private JButton createButton(ImageIcon image) {
        JButton button = new JButton();
        button.setIcon(image);
        button.addActionListener( new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                
            }
        });
        
        return button;
    }
    /**
     * the panel containing the upgrade buttons
     */
    public void upgradesPanel() {
        JPanel upgradePanel = new JPanel();
        upgradePanel.setLayout(new BoxLayout(upgradePanel, BoxLayout.PAGE_AXIS));



        frame.add(new JScrollPane(upgradePanel));
    }
    /**
     * panel containing Gustavo, whom you click to get quacks
     */
    public void quacksPanel() {
        JPanel gustavoPanel = new JPanel();
        
    }
    /**
     * The panel containing the building visuals 
     */
    public void buildingsPanel() {
        JPanel buildingPanel = new JPanel();

    }

    /**
     * All initizations of each different building
     */
    public static void createBuildings() {
        Building hand = new Building(15, 0.1); // 15, 0.1
        Building comsMember = new Building(100, 1); // 100, 1
        Building pond = new Building(1100, 8); // 1.1k, 8
        Building feed = new Building(12000, 47); // 12k, 47
        Building shack = new Building(130000, 260); // 130k, 260
        Building apartment = new Building(1400000, 1400); // 1.4m, 1.4k
        Building condo = new Building(20000000, 7800); // 20m, 7.8k
        Building boat = new Building(330000000, 44000); // 330m, 44k
        Building mansion = new Building(5100000000l, 260000); // 5.1b, 260k
        Building privateJet = new Building(75000000000l, 1600000); // 75b, 1.6m
        Building megaYacht = new Building(1000000000000l, 10000000); // 1t, 10m
        Building cruise = new Building(14000000000000l, 65000000); // 14t, 65m
        Building spaceship = new Building(170000000000000l, 4300000000l); // 170t, 430m
        Building ufo = new Building(2100000000000000l, 2900000000l); // 2.1q, 2.9b
    }

    public static void main(String[] args) {
        createBuildings();
        
    }
}
