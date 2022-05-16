import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import salad from '../assets/produtores/salad.png';
import potager from '../assets/produtores/potager.png';
import jennyJack from '../assets/produtores/jenny-jack.png';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const producers = {
  title: 'Produtores',
  list: [
    {
      name: 'Green',
      image: green,
      distance: `${getRandomNumber(1, 500)}m`,
      starts: getRandomNumber(1, 5),
    },
    {
      name: 'Grow',
      image: grow,
      distance: `${getRandomNumber(1, 500)}m`,
      starts: getRandomNumber(1, 5),
    },
    {
      name: 'Salad',
      image: salad,
      distance: `${getRandomNumber(1, 500)}m`,
      starts: getRandomNumber(1, 5),
    },
    {
      name: 'Potager',
      image: potager,
      distance: `${getRandomNumber(1, 500)}m`,
      starts: getRandomNumber(1, 5),
    },
    {
      name: 'Jenny Jack',
      image: jennyJack,
      distance: `${getRandomNumber(1, 500)}m`,
      starts: getRandomNumber(1, 5),
    },
  ],
};

export default producers;
