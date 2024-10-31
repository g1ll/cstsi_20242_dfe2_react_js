/* eslint-disable react/prop-types */
import './style.css';

export default function CardImc(props) {
  const peso = props.pessoa.peso;
  const alt = props.pessoa.altura;

  const calcImc = () => (peso / alt ** 2).toFixed(2);

  return (
    <div className="imcCard">
      <h1>{props.pessoa.name}:</h1>
      <p>Altura: {alt} m</p>
      <p>Peso: {peso}</p>
      <p>Imc: {calcImc}</p>
    </div>
  );
}
