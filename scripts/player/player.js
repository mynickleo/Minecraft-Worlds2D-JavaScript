const player = document.createElement('div')
player.classList.add('player')
player.setAttribute('id', 'player')
let xPlayer = window.scrollX + window.innerWidth / 2
let yPlayer = window.scrollY + window.innerHeight / 2
const speed = 20

player.style.top = yPlayer + 'px'
player.style.left = xPlayer + 'px'
document.body.appendChild(player)

document.addEventListener("keydown", function(event){
    if(event.code == 'KeyW'){
        changeSprite("up")
        playerMove(-speed, "y")
    }
    if(event.code == 'KeyS'){
        changeSprite("down")
        playerMove(speed, "y")
    }
    if(event.code == 'KeyA'){
        changeSprite("left")
        playerMove(-speed, "x")
    }
    if(event.code == 'KeyD'){
        changeSprite("right")
        playerMove(speed, "x")
    }
    scrollWindowMove(xPlayer, yPlayer)
})

const playerMove = (speed, direction) => {
    createdBlocks = document.getElementsByClassName('block')
    for(let i = 0; i < createdBlocks.length; i++){
        if(createdBlocks[i].style.zIndex == 1){
            if(checkCollision(createdBlocks[i], player, speed)) return
        }
    }
    if(direction == "x"){
        xPlayer += speed
        player.style.left = xPlayer + 'px'
    }
    else if (direction == "y"){
        yPlayer += speed
        player.style.top = yPlayer + 'px'
    }
    cameraMove(speed, direction)
}

const changeSprite = (sprite) => {
    switch(sprite){
        case "up":
            player.style.backgroundImage = 'url(./textures/player/up.png)'
            break;
        case "down":
            player.style.backgroundImage = 'url(./textures/player/down.png)'
            break;
        case "left":
            player.style.backgroundImage = 'url(./textures/player/left.png)'
            break;
        case "right":
            player.style.backgroundImage = 'url(./textures/player/right.png)'
            break;
    }
}