/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CardContainer, CardImage, CardMain } from "./card.styled";

export const Cards = ({ item }) => {

  return (
    <CardContainer>
      <Link to={`/produto/${item.id}`}>
        <CardMain>
          <h3>{item.nome}</h3>
          <CardImage>
            {item?.image && <img src={`/produtos/${item.image}`} />}
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
