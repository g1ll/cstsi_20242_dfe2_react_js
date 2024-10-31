import { useEffect, useLayoutEffect, useState } from 'react';
import './cards.css';
import colorTrace from '../../functions/colorTrace';

export default function CardImc({ pessoa }) {
  const [peso, setPeso] = useState(pessoa.peso);
  const alt = pessoa.altura;
  const [imc, setImc] = useState(() => {
    colorTrace('CardImc: Lazy initialize', 'red');
    return (peso / alt ** 2).toFixed(2);
  });

  useEffect(() => {
    colorTrace('CardImc: Effect', 'orange');
    setTimeout(() => {
      let _peso = peso + 1;
      setPeso(_peso);
      setImc((_peso / alt ** 2).toFixed(2));
    }, 10000);
    return () => {
      colorTrace('CardImc: Cleanup Effect', 'darkgoldenrod');
    };
  }, [peso]);

  useLayoutEffect(() => {
    colorTrace('CardImc: Layout Effect', 'darkmagenta');
    return () => {
      colorTrace('CardImc: Cleanup Layout Effect', 'violet');
    };
  }, []);

  useEffect(() => {
    colorTrace('CardImc: Effect', 'orange');
    return () => {
      colorTrace('CardImc: Cleanup Effect', 'darkgoldenrod');
    };
  }, []);

  // console.log({ peso, alt, imc, imc2: (peso / alt ** 2).toFixed(2) });

  return (
    <div className={`imcCard ${imc > 24.5 && 'imcRed'}`}>
      <h1>{pessoa.name}:</h1>
      <p>Altura: {alt} m</p>
      <p>Peso: {peso}</p>
      <p>Imc: {imc}</p>
    </div>
  );
}
