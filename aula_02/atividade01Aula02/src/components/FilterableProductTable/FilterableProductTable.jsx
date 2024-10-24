/* eslint-disable react/prop-types */
import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar/SearchBar";


export default function FilterableProductTable({ products }) {
    return (
      <div>
        <SearchBar />
        <ProductTable products={products} />
      </div>
    );
  }