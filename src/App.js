import { useState, useEffect } from "react"
import { Link, Route, Routes } from "react-router-dom"
import MovieAdd from "./components/MovieAdd"
import MovieUpdate from "./components/MovieUpdate"
import MovieView from "./components/MovieView"
import MovieHome from "./components/MovieHome"

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/movie')
    .then(res => res.json())
    .then(json => setMovies(json.data))
  }, [])

  return (
    <>
    <header>
    <h1>CINEMA MARIAN-ISO</h1>
    <h2>What's On</h2>
      <div>{movies.map(movie => {
        return <div>
          {movie.title} <span>Runtime: {movie.runtimeMins}mins</span>
          <br />
          <Link to={`/movie/${movie.id}`}><button>View</button></Link>
          <Link to={`/movie/${movie.id}/update`}><button>Update</button></Link>
        <br /><br />
        </div>
      })}</div>
      <div><Link to="/movie/add">Click here to add new movie</Link></div>
      </header>
      <main>
      <Routes>
          <Route path='/' element={<MovieHome />}/>
          <Route path='/movie/add' element={<MovieAdd />}/>
          <Route path='/movie/:id' element={<MovieView />}/>
          <Route path='/movie/:id/update' element={<MovieUpdate />}/>
        </Routes>
        </main>
      
    </>
  );
}

export default App;

