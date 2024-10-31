import { useEffect, useState } from 'react';
import './cards.css';

export default function CardImc({ pessoa }) {
  const [peso, setPeso] = useState(pessoa.peso);
  const alt = pessoa.altura;
  const [imc, setImc] = useState((peso / alt ** 2).toFixed(2));

  useEffect(() => {
    setTimeout(() => {
      let _peso = peso + 1;
      setPeso(_peso);
      setImc((_peso / alt ** 2).toFixed(2));
    }, 2000);
  }, [peso]);

  console.log({ peso, alt, imc, imc2: (peso / alt ** 2).toFixed(2) });

  return (
    <div className={`imcCard ${imc > 24.5 && 'imcRed'}`}>
      <h1>{pessoa.name}:</h1>
      <p>Altura: {alt} m</p>
      <p>Peso: {peso}</p>
      <p>Imc: {imc}</p>
    </div>
  );
}
