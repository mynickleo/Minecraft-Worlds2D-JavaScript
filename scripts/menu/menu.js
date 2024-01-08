const createBlock = (x, y, blockClass, texture) => {
    const newBlock = document.createElement("div")

    newBlock.classList.add(blockClass)
    newBlock.style.top = y + 'px'
    newBlock.style.left = x + 'px'
    newBlock.style.backgroundImage = `url(./textures/blocks/${texture})`

    document.body.appendChild(newBlock)
}

const createMenuBlock = (height, width) => {
    for(let i = 0; i < width; i += 100){
        for(let j = 0; j < height; j += 100){
            createBlock(i, j, "block", 'dirt.png');
        }
    }
}

createMenuBlock(1000, 2000);