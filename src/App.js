import './App.css';
import {useState} from "react"

var movieGenresDict = {
  "action" : ["movie1", "movie2"],
  "horror" : ["movie2", "movie3"],
  "adventures" : ["movie4", "movie5"]
}

var movieGenreList = Object.keys(movieGenresDict)

function App() {

  var [showMovie, setShowMovie] = useState("");

  function movieList(genre){
    setShowMovie(movieGenresDict[genre])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Movie Watchlist</h1>
        <ul>
          {
            movieGenreList.map(genre => {
              return <li style={{
                display: "inline",
                margin: "1rem",
                padding: "0.5rem 1rem",
                background: "#EF4444",
                color: "white",
                borderRadius: "0.5rem"
              }} onClick={() => {movieList(genre)}} > {genre} </li>
            })
          }
        </ul>
        <ol>{showMovie}</ol>
      </header>
    </div>
  );
}

export default App;
