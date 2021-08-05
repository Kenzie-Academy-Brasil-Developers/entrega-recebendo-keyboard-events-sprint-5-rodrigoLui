let boxLeft = 200
let boxTop = 200

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const box = document.getElementById('box')

    switch (keyName) {
        case 'ArrowLeft':
            boxLeft-=10
            box.style.left = `${boxLeft}px`
            document.getElementById('ratoM').style.transform = 'rotate(90deg)'
        break;

        case 'ArrowRight':
            boxLeft+=10
            box.style.left = `${boxLeft}px`
            document.getElementById('ratoM').style.transform = 'rotate(-90deg)'

        break;

        case 'ArrowUp':
            boxTop-=10
            box.style.top = `${boxTop}px`
            document.getElementById('ratoM').style.transform = 'rotate(180deg)'

        break;

        case 'ArrowDown':
            boxTop+=10
            box.style.top = `${boxTop}px`
            document.getElementById('ratoM').style.transform = 'rotate(0deg)'

        break;

        default:
            break;
    }
});