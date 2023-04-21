let playlist = new Playlist();

let hereComesTheSun = new Song("Here comes the Sun", "The Beatles", "2:54");

let walkingOnSunShine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");

// add movie
let manOfSteel = new Movie("Man of Steel", 2013, "2:23:00");

// add the song to the playlist
playlist.add(hereComesTheSun);

playlist.add(walkingOnSunShine);

// add movie to the playlist
playlist.add(manOfSteel);

let playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

let playButton = document.getElementById("play");
playButton.onclick = function() {
    playlist.play();
    playlist.renderInElement(playlistElement);
}

let nextButton = document.getElementById("next");
nextButton.onclick = function() {
    playlist.next();
    playlist.renderInElement(playlistElement);
}

let stopButton = document.getElementById("stop");
stopButton.onclick = function() {
    playlist.stop();
    playlist.renderInElement(playlistElement);
}