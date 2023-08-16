function createBlock(x, y, block_class, texture){
    const block = document.createElement("div");
    block.classList.add(block_class);

    block.style.top = y + "px";
    block.style.left = x + "px";
    block.style.backgroundImage = `url(img/${texture})`;

    document.body.appendChild(block);
}

function createBiom(heigth, width){
    let counter = random(0, 1);

    for(let i = 0; i < width; i += 100){
        for(let j = 0; j < heigth; j += 100){
            if(counter % 2 != 0) createBlock(i, j, "block", "grass_block.png");
            else createBlock(i, j, "block", "dirt_block.png");

            counter = random(0, 1);
        }
    }
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

createBiom(1000, 2000);