import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useEffect } from 'react';
import usePopularMoviess from '../hooks/usePopularMoviess';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMoviess();
  return (
    <div>
      <Header />
      {
        showGptSearch ? ( <GptSearch /> ) : (
        <>
        <MainContainer />
        <SecondaryContainer /> 
        </>
      )}
     
    </div>
  )
}

export default Browse;