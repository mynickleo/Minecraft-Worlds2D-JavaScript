const createBlock = (x, y, blockClass, texture) => {
    const newBlock = document.createElement("div")

    newBlock.classList.add(blockClass)
    newBlock.style.top = y + 'px'
    newBlock.style.left = x + 'px'
    newBlock.style.backgroundImage = `url(./textures/blocks/${texture})`

    document.body.appendChild(newBlock)
}

const createBiom = (height, width) => {
    let counter = random(0, 1)
    for(let i = 0; i < width; i += 100){
        for(let j = 0; j < height; j += 100){
            if(counter % 2 != 0) createBlock(i, j, "block", blocks.grass);
            else createBlock(i, j, "block", blocks.dirt);

            counter = random(0, 1);
        }
    }
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

createBiom(1000, 2000);