require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment");

var action = process.argv[2];

switch (action) {
    case "concert-this":
        concert();
        break;
    case "spotify-this-song":
        song();
        break;
    case "movie-this":
        movie();
        break;
    case "do-what-it-says":
        dowhatisay();
        break;
    default:
        console.log("Please enter a valid action: 'concert-this', 'spotify-this-song', 'movie-this' or 'do-what-it-says'");
        break;
}

function concert() {
    
    var artist = process.argv.slice(3).join('');
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(queryURL).then(
        function (response) {
            for (var i = 0; i < response.data.length; i++) {
                console.log("Venue: " + JSON.stringify(response.data[i].venue.name) + "\nLocation: " + response.data[i].venue.city + ", " + response.data[i].venue.country + "\nDate: " + moment(response.data[i].datetime).format('L') + "\n--------");
            };
        }

    )
        .catch(function (error) {
            if (error.response) {
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function song() {
   
    if (process.argv.length === 3) {
        var querysongURL = "https://api.spotify.com/v1/search?query=The+Sign+ace+of+base&type=track&offset=0&limit=1";
    }
    else {
        var track = process.argv.slice(3).join('+');
        var querysongURL = "https://api.spotify.com/v1/search?query=" + track + "&type=track&offset=0&limit=1";
    }

    spotify
            .request(querysongURL)
            .then(function (response) {
                console.log("\nArtist: " + response.tracks.items[0].album.artists[0].name + "\nSong's name: " + response.tracks.items[0].name + "\nSpotify's preview link: " + response.tracks.items[0].external_urls.spotify + "\nAlbum's name:  " + response.tracks.items[0].album.name + "\n------\n");
            })
            .catch(function (err) {
                console.error('Error occurred: ' + err);
            });
}

function movie() {
    
    if (process.argv.length === 3) {
        var querymovieURL = "https://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy";
        //console.log(querymovieURL);
    }
    else {
        var movie = process.argv.slice(3).join('+');
        var querymovieURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        //console.log(querymovieURL);
    }

    axios.get(querymovieURL).then(
        function (res) {
            //console.log(res);

            if (res.data.Ratings.length>1) {
            console.log("\nTitle: "+res.data.Title+"\nYear: "+res.data.Year+"\nIMDB Rating: "+res.data.imdbRating+"/10\nRotten Tomatoes Rating: "+res.data.Ratings[1].Value+"\nCountry: "+res.data.Country+"\nLanguage: "+res.data.Language+"\nPlot: "+res.data.Plot+"\nActors: "+res.data.Actors+"\n------\n");
        }
            else {
                console.log("\nTitle: "+res.data.Title+"\nYear: "+res.data.Year+"\nIMDB Rating: "+res.data.imdbRating+"\nRotten Tomatoes Rating: "+"Not available"+"\nCountry: "+res.data.Country+"\nLanguage: "+res.data.Language+"\nPlot: "+res.data.Plot+"\nActors: "+res.data.Actors+"\n------\n");
            }
        }
    )
};

function dowhatisay() {
    console.log("I will follow the instructions!");
}
