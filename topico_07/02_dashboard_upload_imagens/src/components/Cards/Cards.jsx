/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CardContainer, CardImage, CardMain } from "./card.styled";
import defaultImage from '../../assets/cards-thumbnail.jpg';

export const Cards = ({ item }) => {

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const imageUrl = item?.imagem?`${BASE_URL}${item.imagem}`:defaultImage;
  console.log(imageUrl);
  return (
    <CardContainer>
      <Link to={`/produto/${item.id}`}>
        <CardMain>
          <h3>{item.nome}</h3>
          <CardImage>
            <img src={`${imageUrl}`} alt='Imagem do produto' />
          </CardImage>
          <h4>
            R$ {item.preco}
          </h4>
          <p>
            {item.descricao}
          </p>
        </CardMain>
      </Link>
    </CardContainer>
  );
};
