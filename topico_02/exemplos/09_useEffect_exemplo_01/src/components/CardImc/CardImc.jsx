/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './cards.css';

export default function CardImc({ pessoa }) {
  const [peso, setPeso] = useState(pessoa.peso);
  const alt = pessoa.altura;
  const [imc, setImc] = useState((peso / alt ** 2).toFixed(2));

  useEffect(() => {
    setTimeout(() => setPeso(peso + 1), 2000);
  }, [peso]);

  return (
    <div className={imc > 24.5 ? 'imcCard imcRed' : 'imcCard'}>
      <h1>{pessoa.name}:</h1>
      <p>Altura: {alt} m</p>
      <p>Peso: {peso}</p>
      <p>Imc: {imc}</p>
    </div>
  );
}
