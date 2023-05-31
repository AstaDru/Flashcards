import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { useSelector } from 'react-redux'
import { quizesSelector } from './QuizSlice'


export default function Quiz() {
  const quizzes = useSelector(quizesSelector); // replace this with a call to your selector to get all the quizzes in state
  let { quizId } = useParams();
  const quizIdSTR = `${quizId}`
  const quiz = quizzes.quizzes[quizIdSTR];

  return (
    <section>
      {quiz && <div>
        <h1>{quiz.name}</h1>
        <ul className="cards-list">
          {quiz.cardIds.map((id) => (
            <Card key={id} id={id} />
          ))}
        </ul></div>}

      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
