const player = document.createElement('div')
player.classList.add('player')
player.setAttribute('id', 'player')
let x = 1000
let y = 500
const speed = 20

player.style.top = y + 'px'
player.style.left = x + 'px'
document.body.appendChild(player)

document.addEventListener("keydown", function(event){
    if(event.code == 'KeyW'){
        player.style.backgroundImage = 'url(./textures/player/up.png)'
        playerMove(-speed, "y")
    }
    if(event.code == 'KeyS'){
        player.style.backgroundImage = 'url(./textures/player/down.png)'
        playerMove(speed, "y")
    }
    if(event.code == 'KeyA'){
        player.style.backgroundImage = 'url(./textures/player/left.png)'
        playerMove(-speed, "x")
    }
    if(event.code == 'KeyD'){
        player.style.backgroundImage = 'url(./textures/player/right.png)'
        playerMove(speed, "x")
    }
    cameraMove(x, y)
})

const cameraMove = (x, y) => {
    window.scrollTo(x, y)
}

const playerMove = (speed, direction) => {
    createdBlocks = document.getElementsByClassName('block')
    for(let i = 0; i < createdBlocks.length; i++){
        if(createdBlocks[i].style.zIndex == 1){
            if(checkCollision(createdBlocks[i], speed)) return
        }
    }
    if(direction == "x"){
        x += speed
        player.style.left = x + 'px'
    }
    else if (direction == "y"){
        y += speed
        player.style.top = y + 'px'
    }
}

const checkCollision = (element, speed) => {
    const rect1 = element.getBoundingClientRect()
    const rect2 = player.getBoundingClientRect()
    if (rect1.left < rect2.right + speed &&
        rect1.right > rect2.left + speed &&
        rect1.top < rect2.bottom + speed &&
        rect1.bottom > rect2.top + speed) {
      return true
    } else {
      return false
    }
}