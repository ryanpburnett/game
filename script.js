//render board
let main = document.getElementById('main');
for (let i = 0; i < 40; i++) {
    let space = document.createElement('p');
    space.classList.add('space')
    if ((i%3) === 0) {
        space.classList.add('spaceGreen');
    }else if ((i%8) === 0) {
        space.classList.add('spaceRed')
    }else if ((i%7) === 0) {
        space.classList.add('spaceYellow');
    }else{
        space.classList.add('spacePurple')
    }
    
    main.append(space);
}

let points = 0
let pointsDiv = document.getElementById('points')
let currentIndex = 0;
let currentSpace = main.children[currentIndex];
currentSpace.innerHTML = 'x';

// keyCode depricated, find alternative
document.onkeydown = function move(e) {
    currentSpace.innerHTML = '';
    switch (e.keyCode ) {
        case 37:
            if (currentIndex > 0) {
                console.log('left');
                currentIndex-- ;
                break;
            }
        case 38:
            if (currentIndex > 10) {
                console.log('up');
                currentIndex-=10;
                break;
            }
        case 39:
            if (currentIndex < 39) {
                console.log('right');
                currentIndex++;
                break;
            }
        case 40:
            if (currentIndex < 29) {
                console.log('down');
                currentIndex+=10;
            }
    }
    currentSpace = main.children[currentIndex];
    currentSpace.innerHTML = 'x';
    console.log(currentIndex);

    if (currentSpace.classList.contains('spaceYellow')) {
        points+=3;
    }else if (currentSpace.classList.contains('spaceGreen')) {
        points++;
    }else if (currentSpace.classList.contains('spaceRed')) {
        points-=10;
    }
    console.log(points)
    pointsDiv.innerHTML = "SCORE = " + points
    if (points >= 30) {
        alert('You win!!!11!!!one!!1!!')
        points = 0;
    }
}


