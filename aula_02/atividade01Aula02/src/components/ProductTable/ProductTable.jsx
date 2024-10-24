/* eslint-disable react/prop-types */
import { ProductCategoryRow } from "../ProductCategoryRow/ProductCategoryRow";
import { ProductRow } from "../ProductRow/ProductRow";

export default function ProductTable({ products }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.category !== lastCategory) {//Fruits
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                />
            );
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    });

    // console.log(rows)
    const rows_fruits = products.map((product) => {
        if (product.category === 'Fruits')
            return (<ProductRow product={product} key={product.name} />)
    });

    const rows_vegetables = products.map((product) => {
        if (product.category === 'Vegetables')
            return (<ProductRow product={product} key={product.name} />)
    });

    const vegetables = products.filter((product) => product.category === 'Vegetables');
    console.log('filter:', vegetables)

    const fruits = products.filter((product) => product.category === 'Fruits');
    console.log('filter:', fruits)

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductCategoryRow
                        category={'Fruits'}
                        key={'fruits'}
                    />
                    {rows_fruits}
                    <ProductCategoryRow
                        category={'Vegetables'}
                        key={'vegetables'}
                    />
                    {rows_vegetables}
                </tbody>
            </table>
            <p></p>
            <h3>Tabela Gerada com Filter (array) e depois Map (JSX - Componentes)</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductCategoryRow
                        category={'Fruits'}
                        key={'fruits'}
                    />
                    {fruits.map(product => <ProductRow product={product} key={product.name} />)}
                    <ProductCategoryRow
                        category={'Vegetables'}
                        key={'vegetables'}
                    />
                    {vegetables.map(product => <ProductRow product={product} key={product.name} />)}
                </tbody>
            </table>
        </>
    );
}