import { createSlice } from "@reduxjs/toolkit";



const initial = {
    topics: {}
}

const topicSliece = createSlice({
    name: "topics",
    initialState: initial,
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
        },
        addQuizId: (state, action) => {
            console.log('add quizid was called' + JSON.stringify(action.payload));

            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId)
        }
    }
})

export const topicsSelector = (state) => {
    return state.topics
}

export default topicSliece.reducer
export const { addTopic, addQuizId } = topicSliece.actions