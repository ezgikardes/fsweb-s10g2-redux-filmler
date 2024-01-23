import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AppHeader = (props) => {

  //14. satırdaki appTitle datasını store'dan çekmek için useSelector kullanalım:
  const appTitle = useSelector((store) => store.movie.appTitle);
  //favorilere eklenen filmleri gizlemek için store'dan veri çekelim:
  const displayFavorites = useSelector((store) => store.favorite.displayFavorites);

  return (
    <div className="flex justify-between items-center shadow rounded-md bg-white p-2 pl-3 my-3">
      <h2 className='text-zinc-600'>{appTitle}</h2>
      <div className="flex items-center gap-2">
        <div className="myButton bg-blue-600 hover:bg-blue-500">
          <span>Favorileri {displayFavorites ? "gizle" : "göster"}</span>
        </div>
        <Link to="/movies" className="myButton bg-blue-600 hover:bg-blue-500">Tüm filmler</Link>
        <Link to="/movies/add" className="myButton bg-green-700 hover:bg-green-600">
          <i className="material-icons text-sm">&#xE147;</i>
          <span>Yeni film ekle</span>
        </Link>
      </div>
    </div>
  );
}

export default AppHeader;