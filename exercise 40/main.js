function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating 3 variable with different values
var album1 = make_album("Areeba", "Album title 1");
var album2 = make_album("Aqsa", "Album title 2");
var album3 = make_album("Fatima", "Album title 3", 10);
// Print values of our object created my functions
console.log(album1);
console.log(album2);
console.log(album3);
