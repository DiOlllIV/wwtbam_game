import React, { useState } from 'react';
import loadData from '../js/dataGateway';
import Menu from './Menu';
import Question from './Question';
import '../styles/game.scss';

const Game = (props) => {
  const [ questions, setDataQuestions ] = useState([]);
  const [ actualLevel, setActualLevel ] = useState([0, 1]);

  loadData
    .then(data => setDataQuestions(data.patterns.questions))
    .catch(error => console.log(new Error(error)));

  const levels = questions.map(question => question.sum);
  const question = [...questions.slice(...actualLevel)];

  return (
    <section className="game">
      <Question question={question} 
        actualLevel={actualLevel} 
        setActualLevel={setActualLevel} 
        setActualSum={props.setActualSum}
        passed={props.passed} 
        setPassed={props.setPassed}  
      />
      <Menu passed={props.passed} 
        question={question} 
        levels={levels} 
      />
    </section>
  );
};

export default Game;
