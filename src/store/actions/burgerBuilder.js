import * as actionType from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionType.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionType.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionType.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFail = () => {
    return {
        type: actionType.FETCH_INGREDIENTS_FAIL
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://my-burger-kaifung.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFail());
            });
    }
}