function actOnClick() {
    for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            var letter = this.textContent;
            makeSound(letter);
            pressedButton(this.textContent);
        })
    }
}
function listenKeystroke() {
    document.addEventListener("keypress", function (event) {
        var letter = event.key;
        makeSound(letter);
        pressedButton(letter);

    })
}
function makeSound(letter) {
    switch (letter) {
        case 'w':
            {
                let sound = new Audio("sounds/tom-1.mp3");
                sound.play();
                break;
            }
        case 'a':
            {
                let sound = new Audio("sounds/tom-2.mp3");
                sound.play();
                break;
            }
        case 's':
            {
                let sound = new Audio("sounds/tom-3.mp3");
                sound.play();
                break;
            }
        case 'd':
            {
                let sound = new Audio("sounds/tom-4.mp3");
                sound.play();
                break;
            }
        case 'j':
            {
                let sound = new Audio("sounds/snare.mp3");
                sound.play();
                break;
            }
        case 'k':
            {
                let sound = new Audio("sounds/crash.mp3");
                sound.play();
                break;
            }
        case 'l':
            {
                let sound = new Audio("sounds/kick-bass.mp3");
                sound.play();
                break;
            }
        default:
            let sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
    }
}

function pressedButton(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");

    }, 100);
}
actOnClick();
listenKeystroke();
