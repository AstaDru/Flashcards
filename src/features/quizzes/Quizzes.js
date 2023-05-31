import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { quizesSelector } from './QuizSlice'
import { useSelector } from 'react-redux'

export default function Quizzes() {
  const quizzes = useSelector(quizesSelector); // replace this with a call to your selector to get all the quizzes in state
  
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {quizzes && Object.values(quizzes).map((oneQuiz) => (
          Object.values(oneQuiz).map((quiz) => (
            <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
              <li key={quiz.id} className="quiz">{quiz.name}</li>
            </Link>
          ))))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
