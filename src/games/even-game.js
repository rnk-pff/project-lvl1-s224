import { cons } from 'hexlet-pairs';
import getRandomInt from '../random-int';
import player from '../player';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return cons(number, correctAnswer);
};

export default () => player(rules, getQuestionAndAnswer);
