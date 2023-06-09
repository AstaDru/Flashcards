import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { cardsSelector } from './CardsSlice'
import { useSelector } from "react-redux";

export default function Card({ id }) {
  const cards = useSelector(cardsSelector); // replace this with a call to your selector to get all the cards in state
  const card = cards.cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
