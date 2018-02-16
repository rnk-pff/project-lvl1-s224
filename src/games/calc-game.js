import { cons } from 'hexlet-pairs';
import getRandomInt from '../random-int';
import player from '../player';

const rules = 'What is the result of the expression?';

const operations = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];
const signs = ['+', '-', '*'];

const getQuestionAndAnswer = () => {
  const first = getRandomInt(1, 20);
  const second = getRandomInt(1, 20);
  const index = getRandomInt(0, operations.length);
  const operation = operations[index];
  const sign = signs[index];
  const question = `${first} ${sign} ${second}`;
  const correctAnswer = operation(first, second);
  return cons(question, correctAnswer);
};

export default () => player(rules, getQuestionAndAnswer);
