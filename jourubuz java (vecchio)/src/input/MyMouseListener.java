package input;

import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import main.Jourubuz;
import main.StatesManager;


public class MyMouseListener implements MouseListener, MouseMotionListener{
    private Jourubuz jourubuz;

    public MyMouseListener(Jourubuz jourubuz) {
        this.jourubuz = jourubuz;
    }

    @Override
    public void mouseClicked(MouseEvent e) {
        if (e.getButton() == MouseEvent.BUTTON1) {
            switch (StatesManager.state) {
                case HOME:
                    jourubuz.getHome().mouseClicked(e);
                    break;  
            }
        }
    }

    @Override
    public void mousePressed(MouseEvent e) {
        switch (StatesManager.state) {
            case HOME:
                jourubuz.getHome().mousePressed(e);
                break;   
        }
    }

    @Override
    public void mouseReleased(MouseEvent e) {
        switch (StatesManager.state) {
            case HOME:
                jourubuz.getHome().mouseReleased(e);
                break;   
        }
    }

    @Override
    public void mouseEntered(MouseEvent e) {

    }

    @Override
    public void mouseExited(MouseEvent e) {

    }

    @Override
    public void mouseDragged(MouseEvent e) {
        switch (StatesManager.state) {
            case HOME:
                jourubuz.getHome().mouseDragged(e);
                break;
        }
    }

    @Override
    public void mouseMoved(MouseEvent e) {
        switch (StatesManager.state) {
            case HOME:
                jourubuz.getHome().mouseMoved(e);
                break;
        }
    }
}
