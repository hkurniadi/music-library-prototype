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
  // console.log('overall rating', avgRating);
  return avgRating;
}

Playlist.prototype.totalDuration = function() {
  let durations = this.tracks.map((track) => {
    return track.length;
  });
  let totalDuration = durations.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  // console.log('total duration is', totalDuration);
  return totalDuration;
}

let musicLibrary = new Library('firstLib', 'cool guy');
// console.log('Library: ', musicLibrary);

let myPlaylist1 = new Playlist('pl1');
musicLibrary.playlists.push(myPlaylist1);


// console.log('Library after: ', musicLibrary);

let track1 = new Track("t1", 5, 300);
let track2 = new Track("t2", 2, 240);
myPlaylist1.tracks.push(track1);
myPlaylist1.tracks.push(track2);
console.log("my first playlist", myPlaylist1);


myPlaylist1.overallRating();
myPlaylist1.totalDuration();
