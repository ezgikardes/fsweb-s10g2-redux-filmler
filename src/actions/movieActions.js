export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";


export const deleteMovie = (id) => {
  return ({ type: DELETE_MOVIE, payload: id });
}

export const addMovie = (movie) => { //addMovie fonksiyonuna, eklenmek istenen filmi argüman olarak verdik
  return ({ 
    type: ADD_MOVIE, //action tipini belirledik.
    payload: { //veri yükünü oluşturduk.
      ...movie, //foksiyona argüman olarak verilen filmin diğer tüm verilerini aldık
      id: Date.now() //bu verilere, Date.now() ile oluşturduğumuz benzersiz id bilgsini de ekleyip döndürdük.
    } 
  });
}

export const toggleFavorites = () => ({
  type: TOGGLE_FAVORITES
})

export const addFavorite = (movie) => {
  return ({ type: ADD_FAVORITE, payload: movie });
}

export const removeFavorite = (movie) => {
  return ({ type: REMOVE_FAVORITE, payload: movie });
}