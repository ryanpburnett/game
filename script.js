let main = document.getElementById('main');

// keyCode depricated, find alternative
document.onkeydown = function move(e) {
    currentSpace.innerHTML = '';
    switch (e.keyCode ) {
        case 37:
            console.log('left');
            currentIndex-- ;
        case 38:
            console.log('up');
            currentIndex -10;
        case 39:
            console.log('right');
            currentIndex++;
        case 40:
            console.log('down');
            currentIndex +10;
    }
    currentSpace = main.children[currentIndex];
    currentSpace.innerHTML = 'x';
    console.log(currentIndex)
}

for (let i = 0; i < 40; i++) {
    let space = document.createElement('p');

    if ((i%3) === 0) {
        space.classList.add('blank');
    }else{
        space.classList.add('space');
    }
    
    main.append(space);
}

let currentIndex = 0;
let currentSpace = main.children[currentIndex];
currentSpace.innerHTML = 'x';
