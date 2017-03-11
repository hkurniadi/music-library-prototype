function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists =[];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
};

function Track(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}

Playlist.prototype.overallRating = function() {
  let ratings = this.tracks.map((track) => {
    return track.rating;
  });
  let sumRatings = ratings.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  let avgRating = sumRatings/ratings.length;
  return avgRating;
}

Playlist.prototype.totalDuration = function() {
  let durations = this.tracks.map((track) => {
    return track.length;
  });
  let totalDuration = durations.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return totalDuration;
}

let musicLibrary = new Library('firstLib', 'cool guy');

let myPlaylist1 = new Playlist('pl1');
musicLibrary.playlists.push(myPlaylist1);

let track1 = new Track("t1", 5, 300);
let track2 = new Track("t2", 2, 240);
myPlaylist1.tracks.push(track1);
myPlaylist1.tracks.push(track2);


//Testing codes
// console.log("My Music Library ==> ", musicLibrary);
// console.log("\n");
// console.log("My Playlist 1 ==> ", myPlaylist1 );
// console.log("\n");
// console.log("Overall Rating " + myPlaylist1.overallRating() + ", Total Duration " + myPlaylist1.totalDuration());
