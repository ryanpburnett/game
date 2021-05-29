let main = document.getElementById('main')

for (let i = 0; i < 10; i++) {
    let space = document.createElement('p')
    space.classList.add('space')
    main.append(space)
}
