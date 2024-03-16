import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang )
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [searchResults, setSearchResults] = useState([]);

  



  const searchMovieTMDB =  async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json);
    // console.log("Results:", JSON.stringify(json.results));
    return json.results;
    
  }
  const handleGptSearchClick = async () => {
    const movie = searchText.current.value.trim();
    if (movie !== "") {
      const results = await searchMovieTMDB(movie);
      dispatch(addGPTMovieResult(results));
      // console.log(results);
    }

  };

 

  return (
    <div className="pt-[8%] flex justify-center">
        <form className=" w-1/3 bg-gray-600 opacity-90 grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
            <input 
            ref={searchText}
            type="text" className="p-2 m-4 col-span-9" 
            placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="py-1 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}> {lang[langKey].search} 
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;