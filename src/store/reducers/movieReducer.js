import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from '../../data.js'

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database"
}

//yukarıda tanımlanmış olan initialState'i state'e atayalım:
const movieReducer = (state = initialState, action) => {
  
  switch (action.type) {

    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(item => (action.payload !== item.id))
      }

      case ADD_MOVIE:
        return {
          ...state,
          movies: [...state.movies, action.payload] 
        } //  addMovie action'unun belirlediği kanun maddesi, bu reducer fonksiyonunda 'ADD_MOVIE' case'i  ile yakalanır. Önce varolan movies'i bir array içerisine alıyorum, ardından action.payload'dan gelen yeni filmi bu array'in en sonuna ekleyip geri döndürüyorum.
      
      default:
      return state;
  } 
}

export default movieReducer;