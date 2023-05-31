import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../features/topics/TopicSlice";
import quizReducer from '../features/quizzes/QuizSlice'
import cardsReducer from '../features/cards/CardsSlice'

export default configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizReducer,
    cards: cardsReducer
  },
});
