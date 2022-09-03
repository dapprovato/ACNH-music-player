function processData(data) {
    const songs = []
    Object.entries(data).map(entry => {
        let value = entry[1];
        songs.push(value)
        console.log(value);
    });
    const playSongs = songs.map(function (song) {
        return song.music_uri
    })

    let currentIndex = Math.floor(Math.random() * playSongs.length)

    const awwDeeOhh = document.createElement("audio")
    awwDeeOhh.id = 'song'
    awwDeeOhh.src = playSongs[currentIndex]
    awwDeeOhh.controls = "controls"
    //awwDeeOhh.loop = true
    document.body.appendChild(awwDeeOhh)

    const nextSong = document.getElementById('song')
    nextSong.onended = function() {
    awwDeeOhh.src = playSongs[Math.floor(Math.random() * playSongs.length)]
    awwDeeOhh.autoplay = true;
    }

    let showSongs = songs.map(function (song) {
        return song.name
        //returns array of objects , key/value of name-USen: 'Agent K.K.' etc...
    })
    console.log(showSongs)
}

fetch ('http://acnhapi.com/v1/songs/')
.then((response) => response.json())
.then((data) => processData(data));