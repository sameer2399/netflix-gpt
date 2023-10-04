import GptSearchBar from "./GptSearchBar"
import GptMovieSuggestions from "./GptMovieSuggestions"
import { BG_URL } from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
         <div className='absolute -z-10'>
        <img className='w-screen h-screen object-cover'
          src={BG_URL} 
          alt="logo" 
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch