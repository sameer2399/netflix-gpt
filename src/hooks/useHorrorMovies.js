import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addHorrorMovies } from '../utils/movieSlice';

const useHorrorMovies = () => {
    const dispatch = useDispatch();

const getHorrorMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

  const json = await data.json();
  
  dispatch(addHorrorMovies(json.results));
}


useEffect(() => {
  getHorrorMovies();
},[]);
}

export default useHorrorMovies;

