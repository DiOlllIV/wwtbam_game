import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import '../styles/start.scss';

const Start = () => {
  return (
    <section className="start">
      <Image />
      <div className="container">
        <p className="container-paragraph">
          Who wants to be a millionaire?
        </p>
        <Link to="/game" 
          className="container-button"
        >
          Start
        </Link>
      </div>
    </section>
  )
};

export default Start;