//TEXT DIV -->
var textBlock = document.createElement("div");
textBlock.classList.add("text_block");
textBlock.style.top = 10 + "px";
textBlock.style.left = 10 + "px";
textBlock.textContent = "Cursor: None   ***Change the character - SPACE    ***Move - WASD    ***Change cursor for buildings: arrow left / arrow right";
document.body.appendChild(textBlock);
//<--

//PLAYER -->
var Player = document.createElement("div");
Player.classList.add("player");
var player_posX = 500;
var player_posY = 500;

Player.style.top = player_posY + "px";
Player.style.left = player_posX + "px";
document.body.appendChild(Player);
//<--

//Additionally -->
var pipeBottom = new Image();
pipeBottom.src = "img/grass_block.png";


document.addEventListener("keydown", function(event){
    pipeBottom.onload(event);
});

var blocks = document.getElementsByClassName("block");
var blokc_x, block_y;

var playerSpeed = 20;
var changeHero = 0;
var setBlock = 0;
//<---

//------> ENGINE <--------//
pipeBottom.onload = function(event){
    //--> Player MOVE
    if(event.code == "KeyW"){
        player_posY -= playerSpeed;
        Player.style.top = player_posY + "px";
    }
    if(event.code == "KeyS"){
        player_posY += playerSpeed;
        Player.style.top = player_posY + "px";
    }
    if(event.code == "KeyA"){
        player_posX -= playerSpeed;
        Player.style.left = player_posX + "px";
    }
    if(event.code == "KeyD"){
        player_posX += playerSpeed;
        Player.style.left = player_posX + "px";
    }
    //<--end

    if(event.code == "Enter"){
        if(changeHero == 0){
            playerSpeed = 100;
            Player.style.background = "rgba(100, 148, 237, 0.5)";
            Player.style.height = "100px";
            Player.style.width = "100px";

            player_posX = Math.round(player_posX / 100) * 100;
            player_posY = Math.round(player_posY / 100) * 100;
            Player.style.left = player_posX;
            Player.style.top = player_posY;
        }
        else{
            playerSpeed = 20;
            Player.style.background = "url(img/Steve.png)";
            Player.style.height = "115px";
            Player.style.width = "93px";

            player_posX = Math.round(player_posX / 100) * 100;
            player_posY = Math.round(player_posY / 100) * 100;
            Player.style.left = player_posX;
            Player.style.top = player_posY;
        }

        changeHero = 1 - changeHero;
    }

    if(event.code == "Space" && changeHero == 1){
        for(let i = 0; i < blocks.length; i++){
            block_x = parseInt(blocks[i].style.left, 10);
            block_y = parseInt(blocks[i].style.top, 10);
            if (block_x == player_posX && block_y == player_posY) {

                switch (setBlock){
                    case 0:
                        blocks[i].style.backgroundImage = "url(img/bedrock.png)";
                    break;

                    case 1:
                        blocks[i].style.backgroundImage = "url(img/grass_block.png)";
                    break;

                    case 2:
                        blocks[i].style.backgroundImage = "url(img/dirt_block.png)";
                    break;

                    case 3:
                        blocks[i].style.backgroundImage = "url(img/stone.png)";
                    break;

                    case 4:
                        blocks[i].style.backgroundImage = "url(img/wood.png)";
                    break;

                    case 5:
                        blocks[i].style.backgroundImage = "url(img/brick.png)";
                    break;
                }

            }
        }
    }

    if(event.code == "ArrowRight" && changeHero == 1){
        setBlock++;
        if(setBlock > 5)
            setBlock = 0;
        switch (setBlock){
                    case 0:
                        textBlock.textContent = "Cursor: None";
                    break;

                    case 1:
                        textBlock.textContent = "Cursor: Grass";
                    break;

                    case 2:
                        textBlock.textContent = "Cursor: Dirt";
                    break;

                    case 3:
                        textBlock.textContent = "Cursor: Stone";
                    break;

                    case 4:
                        textBlock.textContent = "Cursor: Wood";
                    break;

                    case 5:
                        textBlock.textContent = "Cursor: Brick";
                    break;
            }
    }

    if(event.code == "ArrowLeft" && changeHero == 1){
        setBlock--;
        if(setBlock < 0)
            setBlock = 5;
        switch (setBlock){
                    case 0:
                        textBlock.textContent = "Cursor: None";
                    break;

                    case 1:
                        textBlock.textContent = "Cursor: Grass";
                    break;

                    case 2:
                        textBlock.textContent = "Cursor: Dirt";
                    break;

                    case 3:
                        textBlock.textContent = "Cursor: Stone";
                    break;

                    case 4:
                        textBlock.textContent = "Cursor: Wood";
                    break;

                    case 5:
                        textBlock.textContent = "Cursor: Brick";
                    break;
            }
    }

    //Redriwe-->
    requestAnimationFrame(pipeBottom.onload);
};
//<---