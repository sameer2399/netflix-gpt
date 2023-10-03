import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movie)
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-60 pl-6 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        <MovieList title={"Horror"} movies={movies.horrorMovies}/>
      </div>

    </div>
    )
  );
}

export default SecondaryContainer