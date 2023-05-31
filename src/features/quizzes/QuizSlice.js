import { createSlice } from "@reduxjs/toolkit"
import { addQuizId } from "../topics/TopicSlice"



const initial = {
    quizzes: {}
}
const quizSlice = createSlice({
    name: "quizzes",
    initialState: initial,
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                topicId: action.payload.topicId,
                cardIds: action.payload.cardIds
            }
        }
    }
})

export const addQuizIdToTopic = (newQuizPayload) => {
    return (dispatch) => {
        if (newQuizPayload) {
            dispatch(addQuiz(newQuizPayload))
            dispatch(addQuizId({
                topicId: newQuizPayload.topicId,
                quizId: newQuizPayload.id
            }))
        }
    }
}


export const quizesSelector = (state) => {
    return state.quizzes
}


export const { addQuiz } = quizSlice.actions
export default quizSlice.reducer
