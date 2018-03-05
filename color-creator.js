let colorCreatorBox = document.querySelector('.color-creator-box');

// New color function
function createNewColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    colorCreatorBox.style.background = color;
    colorCreatorBox.innerHTML = color;
}

createNewColor();

// Link color changer function to the click action of button
let colorCreatorButton = document.querySelector('.color-changer-button');
colorCreatorButton.addEventListener('click', createNewColor);