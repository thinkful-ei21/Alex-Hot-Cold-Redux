import {createStore} from 'redux';

import {guessGame} from './reducer';

export default createStore(guessGame);