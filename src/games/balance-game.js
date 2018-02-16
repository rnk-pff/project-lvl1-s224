import { cons } from 'hexlet-pairs';
import getRandomInt from '../random-int';
import player from '../player';

const rules = 'Balance the given number.';

const balance = (digits) => {
  const minIndex = digits.lastIndexOf(digits[0]);
  const maxIndex = digits.indexOf(digits[digits.length - 1]);
  if (digits[maxIndex] - digits[minIndex] > 1) {
    const balanced = [...digits.slice(0, minIndex), digits[minIndex] + 1,
      ...digits.slice(minIndex + 1, maxIndex), digits[maxIndex] - 1,
      ...digits.slice(maxIndex + 1)];
    return balance(balanced);
  }
  return digits;
};

const getQuestionAndAnswer = () => {
  const number = getRandomInt(1, 5000);
  const question = number;
  const balanced = balance(String(number).split('').map(Number).sort());
  const correctAnswer = balanced.join('');
  return cons(question, correctAnswer);
};

export default () => player(rules, getQuestionAndAnswer);
