//render board
let main = document.getElementById('main');
let secretSquare = 13

function levelReset(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function levelOne() {
    for (let i = 0; i < 40; i++) {
        let space = document.createElement('p');
        space.classList.add('space');
        if ((i%3) === 0) {
            space.classList.add('spaceGreen');
        }else if ((i%8) === 0) {
            space.classList.add('spaceRed');
        }else if ((i%7) === 0) {
            space.classList.add('spaceYellow');
        }else{
            space.classList.add('spacePurple')
        }
        
        main.append(space);
    }
}
levelOne()

function levelTwo() {
    levelReset(main);
    for (let i = 0; i < 50; i++) {
        let space = document.createElement('p');
        space.classList.add('space');
        if ((i%6) === 0) {
            space.classList.add('spaceGreen');
        }else if ((i%4) === 0) {
            space.classList.add('spaceRed');
        }else if ((i%9) === 0) {
            space.classList.add('spaceYellow');
        }else{
            space.classList.add('spacePurple')
        }
        
        main.append(space);
        secretSquare === 30
    }
}

let points = 0;
let pointsDiv = document.getElementById('points');
let currentIndex = 0;
let currentSpace = main.children[currentIndex];
currentSpace.innerHTML = 'x';
console.log(main.childNodes.length)
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
            if (currentIndex <= main.childNodes.length-2) {
                console.log('right');
                currentIndex++;
                break;
            }
        case 40:
            if (currentIndex <= main.childNodes.length-12) {
                console.log('down');
                currentIndex+=10;
            }
    }
    currentSpace = main.children[currentIndex];
    currentSpace.innerHTML = 'x';
    console.log(currentIndex);
    if (currentIndex === secretSquare) {
        points+=30
        alert('You found the secret square!')
    }else if (currentSpace.classList.contains('spaceYellow')) {
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
        levelTwo()
    }
}


