//bu kısmı, anayasa maddeleri belirliyoruz gibi düşünebilirz. Maddelerimizi ilk başta büyük harflerle emir gibi tanımlıyoruz. Ama tembelim o yüzden stajyer kullanıyoruz. Bunun için actiıon creator'larla (stajjerimiz- aşağıda camelCase ile yazdığımız kısım) action objeleri yaratıyoruz yani NE YAPILACAĞINI belirliyoruz. uygulamamızda ilgili yerlere bu stajerleri import ediyoruz. böylece, uygulamamamızda bir etkileşim sonucunda bu stajerleri reducer'a dispatch'le kargoluyoruz. reducer bu emri alıyor, tipine bakıyor (Action.type) ve NASIL YAPILACAĞINI çözüyor. Ardından ilgili değişiklikle state'i güncelliyor.
export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";


export const deleteMovie = (id) => {
  return ({ type: DELETE_MOVIE, payload: id });
}

//add movie isimli bir action creator yazalım. bu action creator, eklenmek istenen yeni filmi alır ve onun verileriyle bir action objesi oluşturur. action objesi, type(yukarıda belirlediğimiz kanun maddesine de bunu veriyoruz) ve payload key-value'larından oluşur.
export const addMovie = (newMovie) => {
  return ({ 
    type: ADD_MOVIE,
    payload: { 
      ...newMovie, //foksiyona argüman olarak verilen filmin diğer tüm verilerini aldık
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