const infoDisplay = document.getElementById('info')
let createdBlocks = document.getElementsByClassName('block')
let setBlock = 0
let activeBlockPng = 'bedrock.png'
let activeBlock = 'none'

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
    setTimeout(closeInfoDisplay, 1000)
}

const createNewBlock = () => {
    createdBlocks = document.getElementsByClassName('block')
    let createdBlock = false
    for(let i = 0; i < createdBlocks.length; i++){
        if(createdBlocks.offsetLeft == cursorBlock.offsetLeft &&
            createdBlocks.offsetTop == cursorBlock.offsetTop){
                createdBlock = true
                createdBlocks[i].style.backgroundImage = `
                    url(./textures/blocks/${activeBlockPng})
                `
                break
            }
    }
    if(!createdBlock){
        const newBlock = document.createElement('div')
        newBlock.classList.add('block')
        newBlock.style.top = cursorBlock.offsetTop + 'px'
        newBlock.style.left = cursorBlock.offsetLeft + 'px'
        newBlock.style.backgroundImage = `url(./textures/blocks/${activeBlockPng}`
        document.body.appendChild(newBlock)
    }
}

const closeInfoDisplay = () => {
    infoDisplay.style.display = 'none'
}