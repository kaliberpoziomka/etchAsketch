
const container = document.getElementById('container');
const whiteButton = document.getElementById('white');
const randomButton = document.getElementById('random');
const resetButton = document.getElementById('reset');
const rainbowButton = document.getElementById('rainbow');
const cells = document.querySelectorAll('.inside');


//CORE
function makeCells(quantity, color) {
    let size = 500 / quantity;

    for(let i = 0; i < quantity; i++) {
        var br = document.createElement("br");
        
        for(let j = 0; j < quantity; j++){
            let cell = document.createElement('div');
            cell.style.width = size -2 + 'px';
            cell.style.height = size -2 + 'px';
            cell.setAttribute('class', 'inside');
            cell.setAttribute('id', `${i}.${j}`);
            container.appendChild(cell);
            cell.addEventListener('mouseover', function (){
            cell.style.background = '#'+ color;
            }, false)
        }
        
        container.appendChild(br);
    }
}



// Button functions

//Palette of colors
palette = ['22d3a1', '1fc11b', 'ffd913', 'ff9c55', 'ff5555'];


//Reset
resetButton.addEventListener('click', gameReset, false);
function gameReset() {
    location.reload();
}


//White
whiteButton.addEventListener('click', startWhite, false)
function startWhite(){
    quantity = prompt('Enter number from 2 to 64:');
    color = 'ffffff';
    makeCells(quantity, color);
 }


//Random
 randomButton.addEventListener('click', startRandom, false);
 function startRandom(){
     quantity = prompt('Enter number from 2 to 64:');
     color = palette[Math.floor(Math.random() * palette.length)];
     makeCells(quantity, color);
  }

//Rainbow
rainbowButton.addEventListener('click', startRainbow, false);

  function startRainbow() {
    let quantity = prompt('Enter number from 2 to 64:');
    let size = 500 / quantity;

    for(let i = 0; i < quantity; i++) {
        var br = document.createElement("br");
        
        for(let j = 0; j < quantity; j++){
            let randomColor = palette[Math.floor(Math.random() * palette.length)];
            let cell = document.createElement('div');
            cell.style.width = size -2 + 'px';
            cell.style.height = size -2 + 'px';
            cell.setAttribute('class', 'inside');
            container.setAttribute('class', 'containerRainbow');
            cell.setAttribute('id', `${i}.${j}`);
            container.appendChild(cell);
            cell.addEventListener('mouseover', function (){
            cell.style.background ='#' + randomColor;
            }, false)
        }
        
        container.appendChild(br);
    }
}
