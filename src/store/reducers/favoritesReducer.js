import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/movieActions";

const initialState = {
    favorites:[],
    displayFavorites: false
};

const favoritesReducer = (state = initialState, action) => {
    let newState = {};
    
    switch(action.type){ //favoritesActions'da daha önce oluşturulmuş olan kanun maddelerinin (yani action'ların) tipini dinleyen bir switch yapısı oluşturduk.

        //önce favorilere ekleme reducer'ını yazdık. ardından, bir filmi ikinci kez listeye eklememek için koşulumuzu yazdık.
        case ADD_FAVORITE:
            if (state.favorites.find((item) => item.id === action.payload.id)) {
                newState = {...state}; //eğer favoriler listesindeki herhangi bir filmin (item) id'si, eklemek istediğimiz filmin (yani action.payload'la gelen filmin) id'sine eşitse o zaman herhangi bir şey eklemeden mevcut state'i döndür. 
            } else { 
                newState = {
                    ...state, 
                    favorites: [...state.favorites, action.payload]
                }; //değilse, diziyi al, action.payload'la gelen filmi ekle.
            };
            return newState; //en sonunda da yeni state'imzi dön.
            
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(fav => fav.id !== action.payload) //favorites array'ini iterate et. fav.id eğer action.payload'la gelen id'ye eşitse onu filtrele ve favorites array'inden çıkar.
            } 
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites,
            }
        
        
        default:
            return state; //default olduğunda state'i döndürücek. Bunu yapmazsak, herhangi bir değişimde state null'a döner
    }
}

export default favoritesReducer;


