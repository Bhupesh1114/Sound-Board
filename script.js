const sounds = ["epic", "thunder", "warfare", "airport", "coin", "horn"];

sounds.forEach(sound => {
    const btn = document.createElement("button")
    btn.classList.add("btn")



    btn.innerText = sound
    btn.addEventListener("click", () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.querySelector(".buttons").appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause()
        song.currentTime = 0;
        
    })
}