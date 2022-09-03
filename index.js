let playSongs = []
let currentIndex = 0

function processData(data) {
    const songs = []
    Object.entries(data).map(entry => {
        let value = entry[1];
        songs.push(value)
        console.log(value);
    });
    playSongs = songs.map(function (song) {
        return song.music_uri
    })

    const awwDeeOhh = document.createElement("audio")
    awwDeeOhh.id = 'song'
    currentIndex = Math.floor(Math.random() * playSongs.length)
    awwDeeOhh.src = playSongs[currentIndex]
    awwDeeOhh.controls = "controls"
    //awwDeeOhh.loop = true
    document.body.appendChild(awwDeeOhh)

    const nextSong = document.getElementById('song')
    nextSong.onended = function() {
    currentIndex = Math.floor(Math.random() * playSongs.length)
    awwDeeOhh.src = playSongs[currentIndex]
    songTitle.textContent = showSongs[currentIndex]
    awwDeeOhh.autoplay = true;
    }

    const showSongs = songs.map(function (song) {
        return song.name['name-USen']
    })
    const songTitle = document.createElement('div')
    songTitle.id = 'name'
    document.body.appendChild(songTitle)
    songTitle.textContent = showSongs[currentIndex]
}

fetch ('http://acnhapi.com/v1/songs/')
.then((response) => response.json())
.then((data) => processData(data));