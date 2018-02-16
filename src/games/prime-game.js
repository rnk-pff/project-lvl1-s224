import { cons } from 'hexlet-pairs';
import getRandomInt from '../random-int';
import player from '../player';

const rules = 'Is this number prime?';

const isPrime = (number) => {
  const sqrt = Math.floor(Math.sqrt(number));
  const check = (i) => {
    if (i > sqrt) {
      return true;
    }
    if (number % i === 0) {
      return false;
    }
    return check(i + 1);
  };
  return check(2);
};

const getQuestionAndAnswer = () => {
  const number = getRandomInt(1, 20);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return cons(number, correctAnswer);
};

export default () => player(rules, getQuestionAndAnswer);
