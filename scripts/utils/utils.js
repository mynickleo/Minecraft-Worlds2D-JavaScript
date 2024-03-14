function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const checkCollision = (element1, element2, speed) => {
    const rect1 = element1.getBoundingClientRect()
    const rect2 = element2.getBoundingClientRect()
    if (rect1.left < rect2.right + speed &&
        rect1.right > rect2.left + speed &&
        rect1.top < rect2.bottom + speed &&
        rect1.bottom > rect2.top + speed) 
    {
      return true
    } 
    else {
      return false
    }
}

const scrollWindowMove = (x, y) => {
  window.scrollTo(x - window.innerWidth / 2, y - window.innerHeight / 2)
}