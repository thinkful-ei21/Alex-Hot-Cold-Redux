import {RESTART_GAME, MAKE_GUESS} from './actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
}

export const guessGame = (state = initialState, action) => {
    if (action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            guesses: action.guesses,
            feedback: action.feedback,
            auralStatus: action.auralStatus,
            correctAnswer: action.correctAnswer
        })
    }

    if (action.type === MAKE_GUESS) {
        //guess = parseInt(guess, 10);
        if (isNaN(parseInt(action.guess))) {
          return Object.assign({}, state, {
            feedback: 'Please enter a valid number'
          } )
        }

        const difference = Math.abs(action.guess - state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
            feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        } else {
            feedback = 'You got it!';
        }

        return Object.assign({}, state, {
            guesses: [...state.guesses, action.guess],
            feedback
        })

    }

    return state;
}

