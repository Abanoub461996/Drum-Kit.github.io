// Mouse events 
function hadnleClick(e){
    let mouseTrigger = e.target.id;
    
    clickAnimation(mouseTrigger)
    playMusic(mouseTrigger)
}



// Keyboard Events 

document.addEventListener('keydown', (e)=>{
    let KeyboardTrigger = e.key;
    clickAnimation(KeyboardTrigger)
    playMusic(KeyboardTrigger)
});

// Animation
function clickAnimation(key){
    let el = document.getElementById(key)
    el.classList.add('pressed');
    setTimeout(()=> el.classList.remove('pressed'), 200)
}

// Sounds
function playMusic(soundTrigger){

    switch (soundTrigger) {
        case "w":

            audioObj = new Audio('./sounds/crash.mp3');
            break;
        case "a":
            audioObj = new Audio('./sounds/kick-bass.mp3')
            break;
        case "s":
            audioObj = new Audio('./sounds/snare.mp3');
            break;
        case "d":
            audioObj = new Audio('./sounds/tom-1.mp3');
            break;
        case "j":
            audioObj = new Audio('./sounds/tom-2.mp3');
            break;
        case "k":
            audioObj = new Audio('./sounds/tom-3.mp3');
            break;
        case "l":
            audioObj = new Audio('./sounds/tom-4.mp3');
            break;
        default:
            console.log("STH WENT WRONG")
            break;
    }
    audioObj.play()

}