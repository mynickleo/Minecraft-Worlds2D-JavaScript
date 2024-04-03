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

const playAudio = async (path) => {
    return new Promise((resolve, reject) => {
        const audio = new Audio();
        audio.preload = "auto";
        audio.autoplay = true;
        audio.onerror = reject;
        audio.onended = resolve;
        audio.src = path;
    })
}

const button = document.getElementById("button")
button.addEventListener("click", (event) => {
    event.preventDefault()
    playAudio("./sounds/minecraft_click.mp3").then(() => window.location.href = "game.html")
})

setTimeout(async () => {await playAudio("./music/C418_Key.mp3")}, 1000)