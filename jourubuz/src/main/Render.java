package main;

import java.awt.Graphics;

public class Render {
    private Jourubuz jourubuz;
   
    public Render(Jourubuz jourubuz){
        this.jourubuz = jourubuz;      
    }
    
    /**
     @brief in base allo stato attuale richiama la render della classe interessata.

     @param g Graphics
     */
    public void render(Graphics g){
        switch(StatesManager.state){    
            case HOME:
               jourubuz.getHome().render(g);
                break;
        }
    }
}
