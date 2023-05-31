import { createSlice } from "@reduxjs/toolkit"


const initial = {
    cards: {}
}

const cardsSlice = createSlice({
    name: "cards",
    initialState: initial,
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = {
                id: action.payload.id,
                front: action.payload.front,
                back: action.payload.back
            }
        }
    }
})

export const cardsSelector = (state) => {
    return state.cards
}

export const { addCard } = cardsSlice.actions
export default cardsSlice.reducer