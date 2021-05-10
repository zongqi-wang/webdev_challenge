import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Nominations from "./components/Nominations";
import { useState, useEffect} from "react";

function App() {

  useEffect(() => {
    document.title = "The Shoppies";
  }, [])

  //state for movie query
  const [query, updateQuery] = useState({searchQuery: ""});

  //state for movies on display
  const [movies, setMovies] = useState([]);
  //update state from search bar
  const handleQuery = (e) =>{
    updateQuery({
      searchQuery: e.target.value
    });
  }

  //get movies from search fields using API
  async function getMoveis(e) {
    e.preventDefault();
    //use URL to get movies
    const title = query.searchQuery;
    let url = `http://www.omdbapi.com/?s=${title}&type=movie&apikey=1d2f8dca`;
    const res = await fetch(url);
    const data = await res.json();
    //reset fields
    e.target.reset();
    updateQuery({searchQuery: ""})

    //getting correct data
    if(data.Response === "True"){
      const results = data.Search;

      //look for unique items for corner case such as 
      //searching 'hello' produces duplicates
      const ids = new Set();
      for(var i=0; i<results.length; i++) {
        if(!ids.has(results[i]['imdbID'])){
          ids.add(results[i]['imdbID']);
        }else{
          results.splice(i, 1);
        }
      }
      setMovies(results);
    }
    else{
      alert("Too many results. Please enter a longer input.");
    }
    
    
  }




  //handle button click
  const addNom = (movie) => {
    console.log("nominated")
    console.log(movie);
  };

  const delNom = (movie) => {
    console.log("deleted")
    console.log(movie)
  };

  

  const [nominations, setNom] = useState([
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    }
  ]);

  return (
    <div className="wrapper">
      <Navbar searchSubmit = {getMoveis} handleQuery = {handleQuery} />
      <div className = "banner" className = "hidden">
        <p>You have added 5 nominations!</p>
      </div>
      <main>
        <div className="container">
          <Movies movies={movies} onAdd = {addNom} />
          <Nominations nominations={nominations} onDel={delNom} />
        </div>
      </main>
      <footer>
        <ul>
          <li><a href="https://github.com/zongqi-wang/webdev_challenge/">Check out the code</a> </li>
          <li>|</li>
          <li><a href="https://wangzongqi.com">My Website</a> </li>
          <li>|</li>
          <li>&#169; Zongqi Wang 2021</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
