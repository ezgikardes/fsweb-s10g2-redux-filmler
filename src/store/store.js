//not: redux'ta "best practice", store'u, reducer'ları ve action'ları aynı klasör içinde tutmak. Store diye bir klasör oluşturup store'la ilgili her şeyi bunun içine attık. Bu dosyada ise global storumuzu yaratacağız.  

//bu store'u bir boyner gibi düşünebilirsin. combineReducer ise, boynerdeki kozmetik reyonuyla giysi reyonu gibi iki farklı slice'ı birleştiren aracımız. örneğin buradaki movieReducer'ı useSelector'la almak istediğim Movie.js dosyasında, store.movie.movies diyeceğiz. bu da şu demek: boyner'e git, movie bölümünden movies datasını al.

import { combineReducers, legacy_createStore as createStore } from "redux";
import movieReducer from "../store/reducers/movieReducer";
import favoritesReducer from "./reducers/favoritesReducer"


const reducers = combineReducers({
    movie: movieReducer,
    favorite: favoritesReducer,
})

export const store = createStore(reducers); //combineReducers'la oluşturduğumuz reducer objesini createStore içerisine koyduk. böylece store'umuz hazır oldu.