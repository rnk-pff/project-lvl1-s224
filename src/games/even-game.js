import { cons } from 'hexlet-pairs';
import getRandomInt from '../random-int';

export const rules = 'Answer "yes" if number even otherwise answer "no".';

export const getQuestionAndAnswer = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return cons(number, correctAnswer);
};
