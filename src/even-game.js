import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name?: ');

  const play = (tryNumber) => {
    if (tryNumber >= 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const number = getRandomInt(1, 100);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      play(tryNumber + 1);
      return;
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".
Let's try again, ${name}`);
  };

  play(0);
};
