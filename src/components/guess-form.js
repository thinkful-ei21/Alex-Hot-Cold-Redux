import React from 'react';
import {connect} from 'react-redux';

import './guess-form.css';
import { makeGuess} from '../actions';



export function GuessForm (props) {
let input;
    return (
      <form onSubmit={e => {
          e.preventDefault()
          props.dispatch(makeGuess(input.value))
          }}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={node => input = node}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }

  export default connect ()(GuessForm);