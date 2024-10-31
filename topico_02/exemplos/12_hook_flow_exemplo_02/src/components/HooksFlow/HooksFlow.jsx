import { useEffect, useLayoutEffect, useState } from 'react';
import CardImc from '../CardImc/CardImc_useEffect';
import colorTrace from '../../functions/colorTrace';

export default function HooksFlow() {
  const [isOpen, setIsOpen] = useState(() => {
    colorTrace('Parent Component: Lazy initialize', 'green');
    return false;
  });

  const [pessoas, setPessoas] = useState(() => {
    let pessoas = localStorage.getItem('PESSOAS');
    if (!pessoas) {
      pessoas = [
        { name: 'Beltrano', peso: 79, altura: 1.7 },
        { name: 'Fulano', altura: 1.7, peso: 90 },
        { name: 'Cicrano', altura: 1.9, peso: 90 },
      ];
      localStorage.setItem('PESSOAS', JSON.stringify(pessoas));
    } else {
      pessoas = JSON.parse(pessoas);
    }
    return pessoas;
  });

  useLayoutEffect(() => {
    colorTrace('Parent Component: Layout Effect', 'lightcoral');
    return () => {
      colorTrace('Parent Component: Cleanup Layout Effect', 'pink');
    };
  }, []);

  useEffect(() => {
    colorTrace('Parent Component: Effect', 'darkorange');
    return () => {
      colorTrace('Parent Component: Cleanup Effect', 'yellow');
    };
  }, []);

  return (
    <>
      {isOpen &&
        pessoas.map((pessoa, i) => (
          <CardImc key={`pessoa_${i}`} pessoa={pessoa} />
        ))}
      <hr />
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {!isOpen && 'Mostra'}
        {isOpen && 'Esconder'}
      </button>
    </>
  );
}
