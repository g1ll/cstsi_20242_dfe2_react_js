/* eslint-disable react/prop-types */
import "./cards.css"
export const Cards = ({ item }) => {
  const awsBucket = "https://v3ll3s3laravelsdisk.s3.sa-east-1.amazonaws.com";
    
  return (
    <div className="card_container">
      <a href="{{ route('single', $produto->id) }}">
        <div className="card_main">
          <h3 className="card_name">{item.nome}</h3>
          <div className="card_thumb">
            <img className="card_thumb_image" src={`${awsBucket}/produtos/${item.image}`} />
          </div>
          <h4 className="card_price">
            R$ {item.preco}
          </h4>
          <p className="card_text">
            {item.descricao}
          </p>
        </div>
      </a>
    </div>
  );
};
