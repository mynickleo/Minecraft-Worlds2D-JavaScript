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
        y -= speed
        player.style.top = y + 'px'
    }
    if(event.code == 'KeyS'){
        player.style.backgroundImage = 'url(./textures/player/down.png)'
        y += speed
        player.style.top = y + 'px'
    }
    if(event.code == 'KeyA'){
        player.style.backgroundImage = 'url(./textures/player/left.png)'
        x -= speed
        player.style.left = x + 'px'
    }
    if(event.code == 'KeyD'){
        player.style.backgroundImage = 'url(./textures/player/right.png)'
        x += speed
        player.style.left = x + 'px'
    }
    cameraMove(x, y)
})

const cameraMove = (x, y) => {
    window.scrollTo(x, y)
}