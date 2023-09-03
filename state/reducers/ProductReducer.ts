const initialState = {
    cartItems: [],
  };

export const datalist = (state= initialState,action:any) => {
    
    if(action.type === 'data'){
        return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          }
    }

    else if(action.type === 'remove'){
        return {
            ...state,
            cartItems: state.cartItems.filter((item: any) => item.id !== action.payload),
          };
    }

    else if(action.type === 'increase'){
        const updatedCartItems = state.cartItems.map((item: any) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity:Math.max(1, action.payload.quantity + item.quantity),
              };
            }
            return item;
          });
    
          return {
            ...state,
            cartItems: updatedCartItems,
          };
    }

    else {
        return state
    }
}