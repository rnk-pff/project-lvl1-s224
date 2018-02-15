import { cons } from 'hexlet-pairs';
import getRandomInt from '../random-int';

export const rules = 'What is the result of the expression?';

const operations = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b];
const signs = ['+', '-', '*'];

export const getQuestionAndAnswer = () => {
  const first = getRandomInt(1, 20);
  const second = getRandomInt(1, 20);
  const index = getRandomInt(0, operations.length);
  const operation = operations[index];
  const sign = signs[index];
  const question = `${first} ${sign} ${second}`;
  const correctAnswer = operation(first, second);
  return cons(question, correctAnswer);
};
