// Initializing the sketch container
const sketchContainer = document.querySelector('.sketch-container')

// Displaying a blank sketch
sketchContainer.innerHTML = ""

/*
    To Do:
    1. Add a button + function for the user to input
        the size of the sketch.
    2. Modify paint() and make a click-&-hold eventlistener
        for painting the pixels.
    3. Add the functions to the 'Select Color' and 'Erase'
        buttons
*/

function createPixels (size) {
    for (let i = 1; i <= (2 * size); i++) {
        sketchContainer.innerHTML += `<div class="pixel"></div>`
    }    
    paint()
}

function paint() {
    const pixels = document.querySelectorAll('.pixel')
    
    pixels.forEach(pixel => {
        // On each click will paint the div below the mouse
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = "white";
        })

    });
    
}

// MAX = 100 - Otherwise is too much resources consumption (I guess...?)
createPixels(200)