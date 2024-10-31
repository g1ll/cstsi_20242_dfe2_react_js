import { useEffect, useLayoutEffect, useState } from 'react';
import './cards.css';
import colorTrace from '../../functions/colorTrace';

export default function CardImc({ pessoa }) {
  const [peso, setPeso] = useState(pessoa.peso);
  const alt = pessoa.altura;
  const { name } = pessoa;
  const [imc, setImc] = useState(() => {
    colorTrace(`CardImc ${name}: Lazy initialize`, 'red');
    return (peso / alt ** 2).toFixed(2);
  });

  useEffect(() => {
    colorTrace(`CardImc ${name}: Effect`, 'orange');
    setTimeout(() => {
      let _peso = peso + 1;
      setPeso(_peso);
      setImc((_peso / alt ** 2).toFixed(2));
    }, 10000);
    return () => {
      colorTrace(`CardImc ${name}: Cleanup Effect`, 'darkgoldenrod');
    };
  }, [peso]);

  useLayoutEffect(() => {
    colorTrace(`CardImc ${name}: Layout Effect`, 'darkmagenta');
    return () => {
      colorTrace(`CardImc ${name}: Cleanup Layout Effect`, 'violet');
    };
  }, []);

  useEffect(() => {
    colorTrace(`CardImc ${name}: Effect`, 'orange');
    return () => {
      colorTrace(`CardImc ${name}: Cleanup Effect`, 'darkgoldenrod');
    };
  }, []);

  return (
    <div className={`imcCard ${imc > 24.5 && 'imcRed'}`}>
      <h1>{name}:</h1>
      <p>Altura: {alt} m</p>
      <p>Peso: {peso}</p>
      <p>Imc: {imc}</p>
    </div>
  );
}
