import { useState } from 'react';
import './style.css';

export default function CardImc({ pessoa }) {
  const [peso, setPeso] = useState(pessoa.peso);
  const alt = pessoa.altura;
  const [imc, setImc] = useState(peso / alt ** 2);

  const incrementaPeso = () => {
    setPeso(peso + 1);
    setImc(peso / alt ** 2);
  };

  const decrementaPeso = () => {
    setPeso(peso - 1);
    setImc(peso / alt ** 2);
  };

  return (
    <div className="imcCard">
      <h1>{pessoa.name}:</h1>
      <p>Altura: {alt} m</p>
      <p>
        Peso: {peso}
        <span onClick={incrementaPeso}>&nbsp;+&nbsp;</span>
        <span onClick={decrementaPeso}>&nbsp;-&nbsp;</span>
      </p>
      <p>Imc: {imc.toFixed(2)}</p>
    </div>
  );
}
