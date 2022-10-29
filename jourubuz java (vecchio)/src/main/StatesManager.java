
package main;

public enum StatesManager {
    
    HOME, SEARCH, SETTING, PROFILE;
    
    //oggetto gi questa classe inizializzato con la home
    public static StatesManager state = HOME;
    
    
    public static void setState(StatesManager newstate){
        state=newstate;
    }
}
