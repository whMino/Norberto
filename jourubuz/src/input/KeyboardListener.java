
package input;

import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import main.Jourubuz;
import main.StatesManager;

public class KeyboardListener implements KeyListener{
    private Jourubuz jourubuz;

    public KeyboardListener(Jourubuz jourubuz) {
        this.jourubuz = jourubuz;
    }

    @Override
    public void keyTyped(KeyEvent e) {

    }

    @Override
    public void keyPressed(KeyEvent e) {

        if (e.getKeyCode() == KeyEvent.VK_S) {
            GameStates.gamestates = PLAYING;
        } else if (e.getKeyCode() == KeyEvent.VK_W) {
            GameStates.gamestates = MENU;
        }
        else if (e.getKeyCode() == KeyEvent.VK_M) {
            switch (GameStates.gamestates) {
                case MENU:

                    break;
                case PLAYING:

                    break;
                case EDIT:
                    switch(game.getEditing().getState()){
                        case "level1":
                            GameStates.gamestates = LVL1;
                            break;
                        case "level2":
                            GameStates.gamestates = LVL2;
                            break;
                        case "level3":
                            GameStates.gamestates = LVL3;
                            break; 
                        case "level4":
                            GameStates.gamestates = LVL4;
                            break;    
                    }
                    break;
                case LVL1:
                    GameStates.gamestates = EDIT;
                    game.getEditing().setState("level1");
                    break;
                case LVL2:
                    GameStates.gamestates = EDIT;
                    game.getEditing().setState("level2");
                    break;
                case LVL3:
                    GameStates.gamestates = EDIT;
                    game.getEditing().setState("level3");
                    break;
                case LVL4:
                    GameStates.gamestates = EDIT;
                    game.getEditing().setState("level4");
                    break;    
            }
        } else if (e.getKeyCode() == KeyEvent.VK_ESCAPE) {
            switch (StatesManager.actualState) {
                case HOME:
                    jourubuz.getLevel1().keyPressed(e);
                    break;           
            }
        }
    }

    @Override
    public void keyReleased(KeyEvent e) {

    }
}
