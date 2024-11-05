import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemCardapioType } from "../../models/RestauranteClass";

interface CartItemType {
    items:ItemCardapioType[],
    isOpen: boolean
}

const initialState: CartItemType = {
    items: [],
    isOpen: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ItemCardapioType>) => {
            const item = state.items.find(item => item.id === action.payload.id)

            if (!item){
                state.items.push(action.payload)
            } else{
                alert("Item já foi adicionado ao carrinho")
            }

            
        },
        remove: (state, action: PayloadAction<Number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        },
        clear: (state) => {
            state.items = [];
        }
    }
})

export const { add, open, close, remove, clear } = cartSlice.actions