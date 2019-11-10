require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

var action = process.argv[2];
console.log(action);

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
            // console.log(artist.toUpperCase()
            for (var i = 0; i < response.data.length; i++) {
                console.log("Venue: "+JSON.stringify(response.data[i].venue.name)+"\nLocation: "+response.data[i].venue.city+", "+response.data[i].venue.country+"\nDate: "+response.data[i].datetime+"\n--------");
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
    console.log("Great song");
};

function movie() {
    console.log("Great movie!");
};

function dowhatisay() {
    console.log("I will follow the instructions!");
}
