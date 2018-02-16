import { cons } from 'hexlet-pairs';
import getRandomInt from '../random-int';
import player from '../player';

const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (a === 0 || b === 0) {
    return a + b;
  }
  if (a > b) {
    return gcd(a % b, b);
  }
  return gcd(a, b % a);
};

const getQuestionAndAnswer = () => {
  const first = getRandomInt(1, 20);
  const second = getRandomInt(1, 20);
  const question = `${first} ${second}`;
  const correctAnswer = gcd(first, second);
  return cons(question, correctAnswer);
};

export default () => player(rules, getQuestionAndAnswer);
