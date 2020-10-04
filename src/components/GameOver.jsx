import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import '../styles/gameOver.scss';

const GameOver = (props) => {
  return (
    <section className="game-over">
      <Image />
      <div className="game-over__container">
        <p className="game-over__container-paragraph">
          Total score:
        </p>
        <div className="game-over__container-total">
          {props.totalScore} earned
        </div>
        <Link to="/game" 
          className="game-over__container-button"
        >
          Try again
        </Link>
      </div>
    </section>
  )
};

export default GameOver;