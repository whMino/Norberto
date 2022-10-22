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
            switch (StatesManager.actualState) {
                case MENU:
                    jourubuz.getMenu().mouseClicked(e);
                    break;  
            }
        }
    }

    @Override
    public void mousePressed(MouseEvent e) {
        switch (StatesManager.actualState) {
            case MENU:
                jourubuz.getMenu().mousePressed(e);
                break;   
        }
    }

    @Override
    public void mouseReleased(MouseEvent e) {
        switch (StatesManager.actualState) {
            case HOME:
                jourubuz.getMenu().mouseReleased(e);
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
        switch (StatesManager.actualState) {
            case HOME:
                jourubuz.getPlaying().mouseDragged(e);
                break;
        }
    }

    @Override
    public void mouseMoved(MouseEvent e) {
        switch (StatesManager.actualState) {
            case HOME:
                jourubuz.getMenu().mouseMoved(e);
                break;
        }
    }
}
