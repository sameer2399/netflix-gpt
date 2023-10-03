import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useHorrorMovies from '../hooks/useHorrorMovies';


const Browse = () => {

useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();
useHorrorMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        Main Container
         - videobackground
          - video title
        Secondary Container
          - movie list * n
            - movie cards * n
      */}
      
    </div>
  )
}

export default Browse