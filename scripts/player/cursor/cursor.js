const cursor = document.createElement('div')
cursor.classList.add('cursor')
let cursorX = 0
let cursorY = 0
cursorX = player.offsetLeft + 100
cursorY = player.offsetTop
cursor.style.top = cursorY + 'px'
cursor.style.left = cursorX + 'px'
document.body.appendChild(cursor)

const cursorBlock = document.createElement('div')
cursorBlock.classList.add('cursor_block')
cursorBlock.style.left = Math.round(cursorX / 100) * 100 + 'px'
cursorBlock.style.top = Math.round(cursorY / 100) * 100 + 'px'
document.body.appendChild(cursorBlock)


document.addEventListener("keydown", function(event){
    if(event.code == 'KeyW'){
        changePosition(0, -100)
    }
    if(event.code == 'KeyS'){
        changePosition(0, 100)
    }
    if(event.code == 'KeyA'){
        changePosition(-100, 0)
    }
    if(event.code == 'KeyD'){
        changePosition(100, 0)
    }
})

const changePosition = (changeX, changeY) => {
    cursorX = player.offsetLeft
    cursorY = player.offsetTop
    cursor.style.left = cursorX + changeX + 'px'
    cursor.style.top = cursorY + changeY + 'px'

    cursorBlock.style.left = Math.round(cursor.offsetLeft / 100) * 100 + 'px'
    cursorBlock.style.top = Math.round(cursor.offsetTop / 100) * 100 + 'px'
}