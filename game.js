class Game {
    // globale attributen
    spinners;
    
    constructor () {
      this.spinners = [];
    }
  
    /**
     * setup
     * de code in deze functie wordt één keer uitgevoerd door
     * de p5 library, zodra het spel geladen is in de browser
     */
    setup () {
      // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
      createCanvas(1280, 720);
  
      
    }
  
  
    /**
     * draw
     * de code in deze functie wordt meerdere keren per seconde
     * uitgevoerd door de p5 library, nadat de setup functie klaar is
     */
    draw() {
      background('white');
  

    }
  }