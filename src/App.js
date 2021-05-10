import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Nominations from "./components/Nominations";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "The Shoppies";
  }, []);

  //state for movie query
  const [query, updateQuery] = useState({ searchQuery: "" });

  //state for movies on display
  const [movies, setMovies] = useState([]);
  //update state from search bar
  const handleQuery = (e) => {
    updateQuery({
      searchQuery: e.target.value,
    });
  };

  //get movies from search fields using API
  async function getMoveis(e) {
    e.preventDefault();
    //use URL to get movies
    const title = query.searchQuery;
    let url = `https://www.omdbapi.com/?s=${title}&type=movie&apikey=1d2f8dca`;
    const res = await fetch(url);
    const data = await res.json();
    //reset fields
    e.target.reset();
    updateQuery({ searchQuery: "" });

    //getting correct data
    if (data.Response === "True") {
      const results = data.Search;

      //look for unique items for corner case such as
      //searching 'hello' produces duplicates
      const ids = new Set();
      for (var i = 0; i < results.length; i++) {
        if (!ids.has(results[i]["imdbID"])) {
          ids.add(results[i]["imdbID"]);
        } else {
          results.splice(i, 1);
        }
      }
      setMovies(results);
    } else {
      alert("Too many results. Please enter a longer input.");
    }
  }

  // Nominations
  const [nominations, setNom] = useState([]);
  // nominating movies
  const addNom = (movie) => {
    let exist = false;
    for (let i = 0; i < nominations.length; i++) {
      if (nominations[i]["imdbID"] === movie["imdbID"]) {
        exist = true;
        break;
      }
    }
    if (!exist) setNom([...nominations, movie]);
  };

  const delNom = (movie) => {
    setNom(nominations.filter((nom) => nom["imdbID"] !== movie["imdbID"]));
  };

  //nomination banner
  useEffect(() => {
    const banner = document.getElementById("banner");
    if (nominations.length >= 5) {
      banner.classList.remove("hidden");
    } else {
      banner.classList.add("hidden");
    }
  }, [nominations]);

  return (
    <div className="wrapper">
      <Navbar searchSubmit={getMoveis} handleQuery={handleQuery} />
      <div id="banner" className="hidden">
        <p>You have added {nominations.length} nominations!</p>
      </div>
      <main>
        <div className="container">
          <Movies movies={movies} onAdd={addNom} />
          <Nominations nominations={nominations} onDel={delNom} />
        </div>
      </main>
      <footer>
        <ul>
          <li>
            <a href="https://github.com/zongqi-wang/webdev_challenge/">
              Check out the code
            </a>{" "}
          </li>
          <li>|</li>
          <li>
            <a href="https://wangzongqi.com">My Website</a>{" "}
          </li>
          <li>|</li>
          <li>&#169; Zongqi Wang 2021</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
