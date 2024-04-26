//Question-40 (Album)
//Write a function called make_album() that builds a Object describing a music album
//The function should take in an artist name and an album title
function make_album(artist_name, album_title, track) {
    // and it should return a Object containing these two pieces of information
    return { artist_name, album_title, track };
}
let make_album1 = make_album(`Ed Sheeran`, `Divide`, 10);
let make_album2 = make_album(`Taylor Swift`, `1989`, 20);
let make_album3 = make_album(`Justin Bieber`, `Purpose`);
console.log(make_album1);
console.log(make_album2);
console.log(make_album3);
export {};
