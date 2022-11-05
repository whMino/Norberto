package main;

import static java.lang.Thread.sleep;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JFrame;
import static javax.swing.WindowConstants.EXIT_ON_CLOSE;

public class Jourubuz extends JFrame implements Runnable {

    static WindowManager windowmanager;

    private Render render;

    public Jourubuz() {
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        InitClasses();

        setResizable(false);
        add(windowmanager);
        pack();
        setVisible(true);
        setLocationRelativeTo(null);
    }

    public void InitClasses() {
        render = new Render(this);
        windowmanager = new WindowManager(this);
    }

    public static void main(String[] args) {
        Jourubuz jourubuz = new Jourubuz();
        jourubuz.windowmanager.initImputs();

        jourubuz.startApp();

    }

    private void startApp() {
        new Thread(this) {
        }.start();
    }

    @Override
    public void run() {
        while (true) {
            try {
                sleep(33);
            } catch (InterruptedException ex) {
                Logger.getLogger(Jourubuz.class.getName()).log(Level.SEVERE, null, ex);
            }
            repaint();
        }
    }

    public Render getRender() {
        return render;
    }
    
}
