import './assets/styles/App.css';
import { useState } from 'react';
import Scientist from './components/Scientist';

const listScientist = [
  {
    name: 'Ada',
    surname: 'Lovelace',
    wiki: 'https://pt.wikipedia.org/wiki/Ada_Lovelace',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/0f/Ada_lovelace.jpg',
    imageSize: 100,
  },
  {
    name: 'Isaac',
    surname: ' Newton',
    wiki: 'https://pt.wikipedia.org/wiki/Isaac_Newton',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg',
    imageSize: 100,
  },
  {
    name: 'Nicola',
    surname: 'Tesla',
    wiki: 'https://pt.wikipedia.org/wiki/Nikola_Tesla',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg',
    imageSize: 100,
  },
  {
    name: 'Albert',
    surname: 'Einstein',
    wiki: 'https://pt.wikipedia.org/wiki/Albert_Einstein',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/75/Einstein1921_by_F_Schmutzer_3.jpg',
    imageSize: 100,
  },
];

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show &&
        listScientist.map((obj, i) => (
          <Scientist key={`scientist_${i}`} data={obj} />
        ))}
      {/* TODO: Refazer para que o SHOW funcione para cada cientista! */}
      <a href="#" onClick={() => setShow(!show)}>
        {show ? 'Remover' : 'Mostrar'}
      </a>
    </>
  );
}

export default App;
