import { mockedProducts } from "./data/mockedProducts";
import { card } from './modules/cards';

const content = mockedProducts.reverse().map(product=>card(product))

const container = document.querySelector(".products_grid_container");

setTimeout(()=>
  container.innerHTML = content.join('')
,1000);
