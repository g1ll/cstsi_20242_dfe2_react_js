/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './style.css';

export default function CardImc({ pessoa }) {
  const peso = pessoa.peso;
  const alt = pessoa.altura;
  const calcImc = () => peso / alt ** 2;
  const [imc, setImc] = useState(calcImc);

  return (
    <div className="imcCard">
      <h1>{pessoa.peso}:</h1>
      <p>Peso: {alt} m</p>
      <p>Altura: {alt} m</p>
      <p>Imc: {imc.toFixed(2)}</p>
    </div>
  );
}
