let main = document.getElementById('main')

for (let i = 0; i < 40; i++) {
    let space = document.createElement('p')

    if ((i%3) === 0) {
        space.classList.add('blank')
    }else{
        space.classList.add('space')
    }
    
    main.append(space)
}
