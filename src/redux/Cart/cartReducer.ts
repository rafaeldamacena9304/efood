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
            }
        },
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        }
    }
})

export const { add, open, close } = cartSlice.actions