let playSongs = []
let currentIndex = 0

//REFACTOR - -
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
// - - REFACTOR

const playPauseBtn = document.getElementById("play_and_pause")
const skipBtn = document.getElementById('skip')

fetch ('http://acnhapi.com/v1/songs/')
.then((response) => response.json())
.then((data) => processData(data))
.catch((error) => console.log(error))


function processData(data) {
    // const songs = []

    Object.entries(data).map(entry => {
        let songData = entry[1]
        songs.push(songData)
        console.log(songData)
    })

    playSongs = songs.map(function (song) {
        return song.music_uri
    })

    // const awwDeeOhh = document.createElement("audio")
    // awwDeeOhh.id = 'song'
    currentIndex = Math.floor(Math.random() * playSongs.length)
    awwDeeOhh.src = playSongs[currentIndex]
    document.body.appendChild(awwDeeOhh)

    // const showSongs = songs.map(function (song) {
    //     return song.name['name-USen']
    // })

    //refactor
    showSongs = songs.map(function (song) {
        return song.name['name-USen']
    })

    // const songTitle = document.createElement('div')
    // songTitle.id = 'name'
    document.body.appendChild(songTitle)
    songTitle.textContent = showSongs[currentIndex]

    //refactor
    // function getNewRandomSong() {
    //     currentIndex = Math.floor(Math.random() * playSongs.length)
    //     song.src = playSongs[currentIndex]   
    //     songTitle.textContent = showSongs[currentIndex]
    //     awwDeeOhh.autoplay = true;
// }

    const nextSong = document.getElementById('song')
    nextSong.onended = function() {
        // currentIndex = Math.floor(Math.random() * playSongs.length)
        // awwDeeOhh.src = playSongs[currentIndex]
        // songTitle.textContent = showSongs[currentIndex]
        // awwDeeOhh.autoplay = true
        getNewRandomSong()
    }

    // function skipSong() {
        // currentIndex = Math.floor(Math.random() * playSongs.length)
        // song.src = playSongs[currentIndex]
        // songTitle.textContent = showSongs[currentIndex]
        // awwDeeOhh.autoplay = true;
        //  getNewRandomSong()
    // }

    skipBtn.addEventListener('click', getNewRandomSong)

    // function keyPlayPause(event) {
    //    // event.code references the keycode for which key is pressed
    //     if (event.code === 'Space') {
    //         if (song.paused === true) {
    //             song.play()
    //             playPauseBtn.innerHTML = "⌷⌷"
    //         } else {
    //             song.pause()
    //             playPauseBtn.innerHTML = "▷"
    //         }
    //     }
    //         if (event.code === 'Enter') {
    //             // currentIndex = Math.floor(Math.random() * playSongs.length)
    //             // song.src = playSongs[currentIndex]
    //             // songTitle.textContent = showSongs[currentIndex]
    //             // awwDeeOhh.autoplay = true;
    //             getNewRandomSong()
    //     }
    // }
    // addEventListener('keypress', keyPlayPause)
}

//REFACTOR - -
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
        //  if (song.paused === true) {
        //      song.play()
        //      playPauseBtn.innerHTML = "⌷⌷"
        //  } else {
        //      song.pause()
        //      playPauseBtn.innerHTML = "▷"
        //  }
        playPauseRefact()
     }
         if (event.code === 'Enter') {
             // currentIndex = Math.floor(Math.random() * playSongs.length)
             // song.src = playSongs[currentIndex]
             // songTitle.textContent = showSongs[currentIndex]
             // awwDeeOhh.autoplay = true;
             getNewRandomSong()
     }
 }
 addEventListener('keypress', keyPlayPause)
// - - REFACTOR


// function playOrPauseSong() {
//  if (song.paused === true) {
//         song.play()
//         playPauseBtn.innerHTML = "⌷⌷"
//     } else {
//         song.pause()
//         playPauseBtn.innerHTML = "▷"
//     }
// }

// playPauseBtn.addEventListener('click', playOrPauseSong)

// REFACTOR --
playPauseBtn.addEventListener('click', playPauseRefact)
// - - REFACTOR

function cursorIcon(event) {
const cursorImg = document.getElementById("cursor")
    cursorImg.style.left = event.clientX + 'px';
    cursorImg.style.top = event.clientY + 'px';
}

document.addEventListener('mousemove', cursorIcon)
