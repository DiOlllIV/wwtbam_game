import React from 'react';
import { useHistory } from 'react-router-dom';
import checkAnswer from '../js/checkAnswer';

const Question = (props) => {
  const history = useHistory();

  return (
    props.question.map(question =>(
    <div key={question.sum} className="game-section">
      <p className="game-section__question">
        {question.question}
      </p>
      <div className="game-section__answers">
        {question.answers.map(answer => (
            <div key={answer.variant} className="answer-container">
              <hr />
              <div className="answer-container__outer">
                <button className="answer-container__inner"
                  onClick={(e) => checkAnswer(e, answer.variant, history, props)}
                >
                  <span>{answer.variant}</span>{answer.answer}
                </button>
              </div>
              <hr />
            </div>
          ))
        }
      </div>
    </div>
    ))
  )
};

export default Question;