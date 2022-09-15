// Initialize global variables
let playSongs = []
let currentIndex = 0

const playPauseBtn = document.getElementById("play_and_pause")
const skipBtn = document.getElementById('skip')

fetch ('http://acnhapi.com/v1/songs/')
.then((response) => response.json())
.then((data) => processData(data))

function processData(data) {
    const songs = []

    // Object.entries turn objects into array , ex:
    // {key: value, key2: value2} --> [['key', 'value'], ['key2', 'value2']]
    Object.entries(data).map(entry => {
        // entry[0] is unnecessary info
        let songData = entry[1]
        songs.push(songData)
        console.log(songData)
    })

    playSongs = songs.map(function (song) {
        return song.music_uri
    })

    const awwDeeOhh = document.createElement("audio")
    awwDeeOhh.id = 'song'
    currentIndex = Math.floor(Math.random() * playSongs.length)
    awwDeeOhh.src = playSongs[currentIndex]
    document.body.appendChild(awwDeeOhh)

    const showSongs = songs.map(function (song) {
        return song.name['name-USen']
    })
    const songTitle = document.createElement('div')
    songTitle.id = 'name'
    document.body.appendChild(songTitle)
    songTitle.textContent = showSongs[currentIndex]

    const nextSong = document.getElementById('song')
    nextSong.onended = function() {
        currentIndex = Math.floor(Math.random() * playSongs.length)
        awwDeeOhh.src = playSongs[currentIndex]
        songTitle.textContent = showSongs[currentIndex]
        awwDeeOhh.autoplay = true
    }

    function skipSong() {
        currentIndex = Math.floor(Math.random() * playSongs.length)
        song.src = playSongs[currentIndex]
        songTitle.textContent = showSongs[currentIndex]
        awwDeeOhh.autoplay = true;
    }

    skipBtn.addEventListener('click', skipSong)

    function keyPlayPause(event) {
        // event.code references the keycode for which key is pressed
        if (event.code === 'Space') {
            if (song.paused === true) {
                song.play()
                playPauseBtn.innerHTML = "⌷⌷"
            } else {
                song.pause()
                playPauseBtn.innerHTML = "▷"
            }
        }
            if (event.code === 'Enter') {
                currentIndex = Math.floor(Math.random() * playSongs.length)
                song.src = playSongs[currentIndex]
                songTitle.textContent = showSongs[currentIndex]
                awwDeeOhh.autoplay = true;
        }
    }
    addEventListener('keypress', keyPlayPause)
}

function playOrPauseSong() {
    if (song.paused === true) {
        song.play()
        playPauseBtn.innerHTML = "⌷⌷"
    } else {
        song.pause()
        playPauseBtn.innerHTML = "▷"
    }
}

playPauseBtn.addEventListener('click', playOrPauseSong)

function cursorIcon(event) {
const cursorImg = document.getElementById("cursor")
    cursorImg.style.left = event.clientX + 'px';
    cursorImg.style.top = event.clientY + 'px';
}

document.addEventListener('mousemove', cursorIcon)
