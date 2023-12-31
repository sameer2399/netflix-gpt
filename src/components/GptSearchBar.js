import { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  //search movie in tmdb
  const searchMovieTmdb = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', 
    API_OPTIONS);

    const json = await data.json();

    return json.results;
  };
  
  
    const handleGptSearchClick = async () => {
      setIsLoading(true);
      const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example result: Gadar, Sholey, Don, 3 idiots, DDLJ";
      
    //make an api call to gpt ai and get movie results

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      console.log("No results found");
      return;
    }

    const gptMovies = gptResults.choices?.[0].message?.content.split(",");

    console.log(gptMovies);

    // for each movie search the tmdb api and get the movie details

    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));   
    

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    setIsLoading(false);
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        action=""
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 px-0 md:m-4 m-2 md:col-span-9 col-span-8 text-center"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        <button
          className="m-4 md:col-span-3 col-span-4 py-2 md:px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        > 
          {isLoading? <p>Loading ..</p> : <>{lang[langKey].search}</> }
        </button>

        
      </form>
    </div>
  );
};

export default GptSearchBar;
