class Player {
    constructor() {
        this.positionX = 50;
        this.positionY = 0;
        this.height = 10;
        this.width = 20;

        const playerElm = document.getElementById("player");
        playerElm.style.width = this.width + "vw";
        playerElm.style.height = this.height + "vh";

        playerElm.style.left = this.positionX + "vw";
        playerElm.style.bottom = this.positionY + "vh";
        
    }
    moveLeft(){
        this.positionX--;
        const elm = document.getElementById("player");
        elm.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX++;
        const elm = document.getElementById("player");
        elm.style.left = this.positionX + "vw"

    }

}

const player = new Player();

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowLeft":
            player.moveLeft();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
    }
});
