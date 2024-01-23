import React from 'react';

import MovieListItem from './MovieListItem';
import MovieListFooter from './MovieListFooter';
import { useSelector } from 'react-redux';

const MovieList = (props) => {

  //useSelector'le combineReducer'da "movie" olarak tanımladığım movieReducer'dan movies datasını alalım. path'i store.movie.movies:
  const movies = useSelector((store) => store.movie.movies);

  return (
    <div className="flex-1">
      <div className="overflow-hidden bg-white rounded-md shadow mb-4 sm:min-h-[400px]">
        <table className="table-auto border-collapse text-left w-full">
          <thead>
            <tr className='border-zinc-200 border-b'>
              <th className='pl-4'>İsim</th>
              <th>Yönetmen</th>
              <th>Tür</th>
              <th>Metascore</th>
              <th></th>
            </tr>
          </thead>

          <tbody className='text-sm'>
            { //buradaki movies datası store'dan çekilecek. yukarıda useSelector'le çekelim:
              movies.map(movie => 
              <MovieListItem key={movie.id} movie={movie} />)
            } 
          </tbody>
        </table>
      </div>

      <MovieListFooter totalMovies={movies.length} />
    </div>
  );
}

export default MovieList;