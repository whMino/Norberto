package main;

import input.KeyboardListener;
import input.MyMouseListener;
import java.awt.Dimension;
import java.awt.Graphics;
import javax.swing.JPanel;

public class WindowManager extends JPanel {
    //oggeto del game

    private Jourubuz jourubuz;

    //dimensioni da applicare al panel
    private Dimension size;

    //oggetto lettura imput mouse
    private MyMouseListener mymouselistener;

    //oggetto lettura imput tastiera
    private KeyboardListener keyboardlistener;

    /**
     * @brief costruttore setta il game e richiama il metodo per impostare la
     * size.
     *
     * @param game
     */
    public WindowManager(Jourubuz jourubuz) {
        this.jourubuz = jourubuz;

        setPanelSize();
    }

    /**
     * @brief inizializza gli oggetti presenti nel file.
     */
    public void initImputs() {
        mymouselistener = new MyMouseListener(jourubuz);
        keyboardlistener = new KeyboardListener(jourubuz);

        addMouseListener(mymouselistener);
        addMouseMotionListener(mymouselistener);
        addKeyListener(keyboardlistener);

        requestFocus();
    }

    /**
     * @brief imposta le dimensioni del panel.
     */
    private void setPanelSize() {
        size = new Dimension(Jourubuz.currentScreenWidth, Jourubuz.currentScreenHeight);//1792.1010
        setMinimumSize(size);
        setPreferredSize(size);
        setMaximumSize(size);
    }

    /**
     * @brief stampa le componenti e richiama il render
     */
    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);

        jourubuz.getRender().render(g);

    }
}
