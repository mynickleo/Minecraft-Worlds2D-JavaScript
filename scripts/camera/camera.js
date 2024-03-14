const camera = document.getElementById("camera")
let xCamera = 0
let yCamera = 0
camera.style.top = yCamera + 'px'
camera.style.left = xCamera + 'px'

const cameraMove = (speed, direction) => {
    if(direction == "x"){
        xCamera += speed
        camera.style.left = xCamera + "px"
    }
    else if (direction == "y"){
        yCamera += speed
        camera.style.top = yCamera + "px"
    }
}

const moveToStartPosition = () =>{
    const playerRect = player.getBoundingClientRect()
    xCamera = playerRect.left + (playerRect.width - camera.offsetWidth) / 2
    yCamera = playerRect.top + (playerRect.height - camera.offsetHeight) / 2

    camera.style.left = xCamera + 'px'
    camera.style.top = yCamera + 'px'
}

moveToStartPosition()