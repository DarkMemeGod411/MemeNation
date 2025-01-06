import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SimpleGame extends JPanel implements ActionListener {
    private Timer timer;
    private int x, y, xVelocity, yVelocity;

    public SimpleGame() {
        this.x = 0;
        this.y = 0;
        this.xVelocity = 2;
        this.yVelocity = 2;
        this.timer = new Timer(10, this);
        this.timer.start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.RED);
        g.fillOval(x, y, 30, 30);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        x += xVelocity;
        y += yVelocity;
        if (x < 0 || x > getWidth() - 30) {
            xVelocity = -xVelocity;
        }
        if (y < 0 || y > getHeight() - 30) {
            yVelocity = -yVelocity;
        }
        repaint();
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Simple Game");
        SimpleGame game = new SimpleGame();
        frame.add(game);
        frame.setSize(800, 600);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
