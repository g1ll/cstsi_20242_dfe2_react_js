/* eslint-disable no-unused-vars */
import { useEffect, useLayoutEffect, useState } from 'react';
import CardImc from '../CardImc/CardImc_useEffect';
import colorTrace from '../../functions/colorTrace';

export default function HooksFlow() {
  const [isOpen, setIsOpen] = useState(() => {
    colorTrace('Parent Component: Lazy initialize', 'green');
    return false;
  });

  const [pessoa, setPessoa] = useState(() => {
    let pessoa = localStorage.getItem('PESSOA');
    if (!pessoa) {
      pessoa = { peso: 79, altura: 1.7, name: 'Fulano', idade: 35 };
      localStorage.setItem('PESSOA', JSON.stringify(pessoa));
    } else {
      pessoa = JSON.parse(pessoa);
    }
    return pessoa;
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
      {isOpen && <CardImc pessoa={pessoa} />}
      <hr />
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {!isOpen && 'Mostra'}
        {isOpen && 'Esconder'}
      </button>
    </>
  );
}
