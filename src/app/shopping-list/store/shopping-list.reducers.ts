import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from "../../shared/ingredient.model";


// Defining innitial state
const initialState = {
    ingredients: [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10),
        new Ingredient('Banana', 12)
    ]
};

// Function of shopping list reducer
export function shoppingListReducer(state, action: ShoppingListActions.ShopppingListAction) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        default:
            return state;
    }
    return state;
}