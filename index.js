let playSongs = []
let currentIndex = 0

const songs = []
const awwDeeOhh = document.createElement("audio")
awwDeeOhh.id = 'song'
const songTitle = document.createElement('div')
songTitle.id = 'name'
let showSongs = []

function getNewRandomSong() {
    currentIndex = Math.floor(Math.random() * playSongs.length)
    song.src = playSongs[currentIndex]   
    songTitle.textContent = showSongs[currentIndex]
    song.autoplay = true;
}

const playPauseBtn = document.getElementById("play_and_pause")
const skipBtn = document.getElementById('skip')

fetch ('http://acnhapi.com/v1/songs/')
.then((response) => response.json())
.then((data) => processData(data))
.catch((error) => console.log(error))


function processData(data) {

    Object.entries(data).map(entry => {
        let songData = entry[1]
        songs.push(songData)
        console.log(songData)
    })

    playSongs = songs.map(function (song) {
        return song.music_uri
    })

    currentIndex = Math.floor(Math.random() * playSongs.length)
    awwDeeOhh.src = playSongs[currentIndex]
    document.body.appendChild(awwDeeOhh)

    showSongs = songs.map(function (song) {
        return song.name['name-USen']
    })

    document.body.appendChild(songTitle)
    songTitle.textContent = showSongs[currentIndex]

    const nextSong = document.getElementById('song')
    nextSong.onended = function() {
        getNewRandomSong()
    }
    skipBtn.addEventListener('click', getNewRandomSong)
}

function playPauseRefact() {
    if (song.paused === true) {
            song.play()
            playPauseBtn.innerHTML = "⌷⌷"
        } else {
            song.pause()
            playPauseBtn.innerHTML = "▷"
        }
}

function keyPlayPause(event) {
     if (event.code === 'Space') {
        playPauseRefact()
     }
         if (event.code === 'Enter') {
             getNewRandomSong()
     }
 }
 addEventListener('keypress', keyPlayPause)

playPauseBtn.addEventListener('click', playPauseRefact)


function cursorIcon(event) {
const cursorImg = document.getElementById("cursor")
    cursorImg.style.left = event.clientX + 'px';
    cursorImg.style.top = event.clientY + 'px';
}

document.addEventListener('mousemove', cursorIcon)
