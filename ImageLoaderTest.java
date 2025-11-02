import java.io.File;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import javax.swing.ImageIcon;

public class ImageLoaderTest {
    public static void main(String[] args) {
        File imagesDir = new File("Images");
        if (!imagesDir.exists() || !imagesDir.isDirectory()) {
            System.err.println("Images directory not found at: " + imagesDir.getAbsolutePath());
            return;
        }

        File[] files = imagesDir.listFiles((d, name) -> {
            String n = name.toLowerCase();
            return n.endsWith(".png") || n.endsWith(".jpg") || n.endsWith(".jpeg") || n.endsWith(".gif");
        });

        if (files == null || files.length == 0) {
            System.err.println("No image files found in Images/ or error listing the directory.");
            return;
        }

        for (File f : files) {
            System.out.println("Testing: " + f.getName());
            try {
                BufferedImage img = ImageIO.read(f);
                System.out.println(" ImageIO.read: " + (img != null ? (img.getWidth() + "x" + img.getHeight()) : "null"));
            } catch (Exception e) {
                System.err.println(" ImageIO.read FAILED: " + e);
            }

            try {
                ImageIcon icon = new ImageIcon(f.getPath());
                System.out.println(" ImageIcon(path): " + icon.getIconWidth() + "x" + icon.getIconHeight());
            } catch (Exception e) {
                System.err.println(" ImageIcon(path) FAILED: " + e);
            }

            try {
                java.net.URL res = ImageLoaderTest.class.getResource("/Images/" + f.getName());
                System.out.println(" getResource URL: " + res);
                if (res != null) {
                    ImageIcon icon2 = new ImageIcon(res);
                    System.out.println(" ImageIcon(resource): " + icon2.getIconWidth() + "x" + icon2.getIconHeight());
                } else {
                    System.out.println(" Resource not found on classpath (getResource returned null).");
                }
            } catch (Exception e) {
                System.err.println(" ImageIcon(resource) FAILED: " + e);
            }

            System.out.println();
        }
    }
}
