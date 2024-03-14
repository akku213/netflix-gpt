import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useEffect } from 'react';
import usePopularMoviess from '../hooks/usePopularMoviess';
const Browse = () => {

  useNowPlayingMovies();
  usePopularMoviess();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        MainContainer
         - VideoBackground
         - VideoTitle
        SecondaryContainer
         - MovieList * n
         - cards * n
      */}
    </div>
  )
}

export default Browse;