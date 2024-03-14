const musicIdFrom = 0;
const musicIdTo = 2;

const MUSICS = {
    C418_MINECRAFT: "./music/C418_Minecraft.mp3",
    C418_SWEDEN: "./music/C418_Sweden.mp3",
    C418_LIVING_MICE: "./music/C418_Living_Mice.mp3",
}

const timeWaitFrom = 30 * 1000;
const timeWaitTo = 60 * 5 * 1000;

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

const playMusic = () => {
    const musicId = random(musicIdFrom, musicIdTo)
    switch(musicId){
        case 0:
            playAudio(MUSICS.C418_MINECRAFT).then(() => {setTimeout(playMusic, random(timeWaitFrom, timeWaitTo))})
            break;
        
        case 1:
            playAudio(MUSICS.C418_SWEDEN).then(() => {setTimeout(playMusic, random(timeWaitFrom, timeWaitTo))})
            break;
        
        case 2:
            playAudio(MUSICS.C418_LIVING_MICE).then(() => {setTimeout(playMusic, random(timeWaitFrom, timeWaitTo))})
            break;
    }
}

const timeWaitFirst = random(timeWaitFrom, 60 * 2 * 1000)
setTimeout(playMusic, timeWaitFirst)