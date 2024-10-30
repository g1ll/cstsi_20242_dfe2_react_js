import '../styles/cards.css'

export function card(product) {
  const awsBucket = "https://v3ll3s3laravelsdisk.s3.sa-east-1.amazonaws.com";

  return `<div class="card_container">
            <a href="#">
                <div class="card_main">
                    <h3 class="card_name">${product.nome}</h3>
                    <div class="card_thumb">
                        <img class="card_thumb_image"
                            src="${awsBucket}/produtos/${product.image}">
                    </div>
                    <h4 class="card_price">${product.preco}</h4>
                    <p class="card_text">${product.descricao}</p>
                </div>
            </a>
        </div>`;
}