import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { IMG_CDN_URL } from '../utils/constants';

const GptMovieSuggestions = () => {
  const { gptMovies } = useSelector(store => store.gpt);
  if(!gptMovies) return null;
  return (
    <div className='p-4 w-1/4 m-4 bg-black ml-[37%] text-white bg-opacity-90'>
      <div>       
          <MovieList 
          title ={gptMovies[0].title} movies = {gptMovies} />
          
      </div>

    </div>
  )
}

export default GptMovieSuggestions


// poster path is null dont show 
// fix css
// search should match the tmdb