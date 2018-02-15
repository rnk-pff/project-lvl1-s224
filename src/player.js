import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (rules, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = readlineSync.question('May I have your name?: ');

  const play = (tryNumber) => {
    if (tryNumber >= 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const pair = getQuestionAndAnswer();
    const question = car(pair);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(pair);
    if (String(correctAnswer) === answer) {
      console.log('Correct!');
      play(tryNumber + 1);
      return;
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${name}!`);
  };

  play(0);
};
