let player=document.querySelector('#audio-player')
let artistTitle=document.querySelector('#song-title-artist')
let bitrateSelect=document.querySelector('#bitrate-select').value
let listeners=document.querySelector('#active-listeners')
let streamURL=''

const api_url="https://coderadio-admin.freecodecamp.org/api/nowplaying"

function getBitrate() {
    bitrateSelect = document.querySelector('#bitrate-select').value
}

function getData() {
    fetch(api_url)
    .then(function(response) { return response.json()})
    .then(function(data) {putData(data)})
    .catch(function(error){artistTitle.innerHTML=error.message})
}

function putData(data) {
    artistTitle.innerHTML=data[0].now_playing.song.text
    listeners.innerHTML=data[0].listeners.current + " Listening Right Now!"
    switchStream(data)
    if (player.getAttribute('src')!=streamURL){
        changeAudio(streamURL)
    }
}

function switchStream(data) {
    switch (bitrateSelect) {
        case "normal-64":
            streamURL=data[0].station.mounts[1].url
        case "normal-128":
            streamURL=data[0].station.mounts[0].url
        case "remote-64":
            streamURL=data[0].station.remotes[1].url
        case "remote-128":
            streamURL=data[0].station.remotes[0].url
    }
}

function changeAudio(url){
    player.pause()
    player.setAttribute('src', url)
    player.load()
    player.play()
}

getData()
let iDontKnowWhyIMadeThis = window.setInterval(getData(), 8000)