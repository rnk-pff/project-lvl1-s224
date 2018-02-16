import { cons } from 'hexlet-pairs';
import getRandomInt from '../random-int';
import player from '../player';

const rules = 'What number is missing in this progression?';

const getQuestionAndAnswer = () => {
  const first = getRandomInt(1, 10);
  const delta = getRandomInt(1, 5);
  const hiddenIndex = getRandomInt(0, 9);
  const progression = Array.from({ length: 10 }, (v, i) => (i * delta) + first);
  const beginning = progression.slice(0, hiddenIndex).join(' ');
  const ending = progression.slice(hiddenIndex + 1).join(' ');
  const question = `${beginning} .. ${ending}`;
  const correctAnswer = progression[hiddenIndex];
  return cons(question, correctAnswer);
};

export default () => player(rules, getQuestionAndAnswer);
