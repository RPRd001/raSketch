const sketchContainer = document.querySelector('.sketch-container')
const pixels = document.querySelectorAll('.pixel')

sketchContainer.innerHTML = ""

function createPixels (size) {
    for (let i = 1; i <= (2 * size); i++) {
        sketchContainer.innerHTML += `<div class="pixel"></div>`
    }
    
    // paint() <-- Tried with this
}

function paint() {
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseout', () => {
            pixel.style.backgroundColor = "white";
        })
    });
}

// MAX = 50 - Otherwise is too much resources consumption (I guess...?)
createPixels(50)

// paint() <-- Tried with other approach