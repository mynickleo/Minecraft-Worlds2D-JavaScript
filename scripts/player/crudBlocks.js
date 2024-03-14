const infoDisplay = document.getElementById('info')
const infoDisplay2 = document.getElementById('info2')
let createdBlocks = document.getElementsByClassName('block')
let setBlock = 0
let activeBlockPng = 'bedrock.png'
let activeBlock = 'none'
let solidBlock = false

document.addEventListener('keydown', (event) => {
    if (event.code == "ArrowRight"){
        changeActiveBlock('plus')
    }
    if (event.code == 'ArrowLeft'){
        changeActiveBlock('minus')
    }
    if (event.code == 'Space'){
        createNewBlock()
    }
    if (event.code == 'KeyQ'){
        solidBlock = !solidBlock
        displaySolidBlock()
    }
})

const changeActiveBlock = (action) => {
    if(action == 'plus') setBlock++
    if(action == 'minus') setBlock--
    if(setBlock > Object.keys(blocks).length - 1)
        setBlock = 0
    if(setBlock < 0)
        setBlock = Object.keys(blocks).length - 1

    activeBlock = Object.keys(blocks)[setBlock]
    activeBlockPng = Object.values(blocks)[setBlock]

    infoDisplay.style.display = 'flex'
    infoDisplay.textContent = activeBlock
    setTimeout(closeInfoDisplay, 2000)
}

const displaySolidBlock = () => {
    if(solidBlock){
        infoDisplay2.style.display = 'flex'
        infoDisplay2.textContent = "Solid block"
    }
    else infoDisplay2.style.display = 'none'
}

const createNewBlock = () => {
    createdBlocks = document.getElementsByClassName('block')
    let createdBlock = false
    for(let i = 0; i < createdBlocks.length; i++){
        if(createdBlocks[i].offsetLeft == cursorBlock.offsetLeft &&
            createdBlocks[i].offsetTop == cursorBlock.offsetTop){
                createdBlock = true
                createdBlocks[i].style.backgroundImage = `
                    url(./textures/blocks/${activeBlockPng})
                `
                if(solidBlock){ createdBlocks[i].style.zIndex = 1
                    createdBlocks[i].style.boxShadow = "0px 0px 21px 0px rgba(34, 60, 80, 0.3)"
                }
                else createdBlocks[i].style.zIndex = 0
                break
            }
    }
    if(!createdBlock){
        const newBlock = document.createElement('div')
        newBlock.classList.add('block')
        newBlock.style.top = cursorBlock.offsetTop + 'px'
        newBlock.style.left = cursorBlock.offsetLeft + 'px'
        newBlock.style.backgroundImage = `url(./textures/blocks/${activeBlockPng}`
        if(solidBlock){
            newBlock.style.zIndex = 1
            newBlock.style.boxShadow = "0px 0px 21px 0px rgba(34, 60, 80, 0.3)"
        }
        else newBlock.style.zIndex = 0
        document.body.appendChild(newBlock)
    }
}

const closeInfoDisplay = () => {
    infoDisplay.style.display = 'none'
}