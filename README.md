# Liri

## About

LIRI is a Language Interpretation and Recognition Interface (think Siri, but with text). It is a command line node app that takes in parameters and gives you back data.

LIRI can take in four commands: 'concert-this', 'spotify-this-song', 'movie-this' and 'do-what-it-says'.

## Concert this
To use this search, write in the command line: node liri.js concert-this Artist name

Using the Bands in Town Artist Events API, the user can search for the concerts of any artist and get the venue name, the location (city and country) and the date.

And with the moment package, the date is formatted as "MM/DD/YYYY".

Example: Sting
![concert-this Sting](/images/concert-this.png)

## Spotify this song
To use this search, write in the command line: node liri.js spotify-this-song Song name

Using the Spotify API, the user will get:
 * Artist(s)
 * The song's name
 * A preview link of the song from Spotify
 * The album that the song is from

Example: We are the champions
![spotify-this-song We are the champions](/images/spotify-this-song.png)

If the user doesn't provide a song name, the default option is Ace of Base's The Sign
![spotify-this-song Default](/images/spotify-this-song-default.png)

## Movie this
To use the search, write in the command line: node liri.js movie-this Movie title

Using the OMDB API, the user will get: 
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie. (if it doesn't exist, it will appear as 'Not available')
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.

Example: The Terminator
![movie-this The terminator](/images/movie-this.png)

If the user doesn't provide a movie title, the default option is Mr. Nobody
![movie-this Default](/images/movie-this-default.png)

## Do what it says
To use the search, write in the command line: node liri.js do-what-it-says

Using the fs Node package, LIRI takes the text inside of the file called random.txt and then uses it to call one of LIRI's commands.

The random.txt file needs to contain one of the actions, a comma and the search term (no blank spaces).

Example: spotify-this-song,I Want it That Way
![do-what-it-says spotify-this-song](/images/do-what-it-says-spotify-this-song.png)

Example: concert-this,Jonas Brothers
![do-what-it-says concert-this](/images/do-what-it-says-concert-this.png)

Example: movie-this,A Cinderella Story
![do-what-it-says movie-this](/images/do-what-it-says-movie-this.png)


## Technologies used
Javascript
Node
Packages
    * Axios
    * Moment
    * Node Spotify API
    * DotEnv
    * fs

